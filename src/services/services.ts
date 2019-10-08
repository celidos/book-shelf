//import { COUNT_PER_PAGE } from '../other/constants';
import { REQUEST_BOOKS, RECEIVE_BOOKS, REQUEST_ERROR, INIT_FILTERS, CHOOSE_FILTER } from "../actions/actions";
import { IGenresResponse } from "../types/genres";
import { IOverviewByGenreResponse, IOverview } from "../types/overview-genre";
import { IOverviewResultByDate, IOverviewList, IBook } from "../types/overview";
import { booksReceiver } from "src/reducers/data-loader-reducer";

export interface IBookForCard {
    id: string;
    list_name: string;
    age_group: string;
    amazon_product_url: string;
    article_chapter_link: string;
    author: string;
    book_image: string;
    book_image_height: number;
    book_image_width: number;
    book_review_link: string;
    book_uri: string;
    buy_links: Array<{ name: string, url: string }>;
    contributor: string;
    contributor_note: string;
    created_date: string;
    description: string;
    first_chapter_link: string;
    price: number;
    primary_isbn10: string;
    primary_isbn13: string;
    publisher: string;
    rank: number;
    rank_last_week: number;
    sunday_review_link: string;
    title: string;
    updated_date: string;
    weeks_on_list: number;

}

const ENDPOINT = 'https://api.nytimes.com/svc/books/v3';
const API_KEY = 'SAUihskQUnoe9EwtY9EMCVpGE6rj3v1h';

const toLowerCase = (str: string) => {
    return str.toLowerCase().replace(" ", "-").replace("&", "-");
}


export const getBestsellersList = () => {
    return fetch(ENDPOINT + '/lists.json?list=hardcover-fiction&api-key=' + API_KEY)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export const getGenres = () => (dispatch: Function) => {
    return fetch(ENDPOINT + '/lists/names.json?api-key=' + API_KEY)
        .then(res => res.json())
        .then(res => res.results && res.results.map((item: any) => item["display_name"]))
        .then(res => { dispatch({ type: INIT_FILTERS, data: res }) })
        .catch(err => console.log(err)) /*as Promise<IGenresResponse>*/;
}

export const chooseGenre = (label: string) => (dispatch: Function) => {
    dispatch({ type: CHOOSE_FILTER, value: label });

}
// THUNK - action creator
export const getTops = (filters?: string[]) => (dispatch: Function) => {
    dispatch({ type: REQUEST_BOOKS });
    if (filters && !!filters.length) {
        const promises = filters.map(item => fetch(ENDPOINT + `/lists.json?list=${toLowerCase(item)}&api-key=` + API_KEY).then(res => res.json()));
        return Promise.all(promises).then((res: IOverviewByGenreResponse[]) => {
            const joinedData = res.reduce((total: any, curr: IOverviewByGenreResponse) => {
                const books = curr.results.map((overview: IOverview) =>
                    ({
                        id: "",
                        list_name: overview.display_name,
                        weeks_on_list: overview.weeks_on_list,
                        ...overview.book_details[0]
                    }))
                return total.concat(books);
            }, []);
            dispatch({ type: RECEIVE_BOOKS, data: joinedData });
        })
            .catch(err => { dispatch({ type: REQUEST_ERROR }) });;
    }


    return fetch(ENDPOINT + '/lists/overview.json?api-key=' + API_KEY)
        .then(res => res.json())
        .then(res => {
            const joinedData = res && res.results.lists.reduce((total: IBookForCard[], currList: IOverviewList) => {
                const joinedBooks = currList.books.reduce((totalBooks: any, currBook: any) => totalBooks.concat([{ ...currBook, list_name: currList.display_name }]), []);
                return [...total,...joinedBooks ];
            }, []);
            dispatch({ type: RECEIVE_BOOKS, data: joinedData })
        })
        .catch(err => { console.log(err); dispatch({ type: REQUEST_ERROR }) });
}

