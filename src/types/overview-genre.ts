export interface IOverviewByGenreResponse {
    copyright: string;
    last_modified: string;
    num_results: number;
    results: Array<IOverview>;
    status: "OK" | "ERROR";
}

export interface IOverview {
    amazon_product_url: string;
    asterisk: string;
    bestsellers_date: string;
    book_details: Array<IBookDetails>;
    dagger: number;
    display_name: string;
    isbn: Array<{isbn10: string, isbn13: string}>;
    list_name: string;
    published_date: string;
    rank_last_week:string;
    reviews: Array<any>;
    weeks_on_list: number;
}

export interface IBookDetails {
    age_group: string;
    author: string;
    contributor: string;
    contributor_note: string;
    description: string;
    price: number;
    primary_isbn10: string;
    primary_isbn13: string;
    publisher: string;
    title: string;
}

export interface IReview {
    article_chapter_link: string;
    book_review_link: string;
    first_chapter_link: string;
    sunday_review_link: string;
}