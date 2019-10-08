export interface IOverviewResponse
 {
    copyright: string;
    num_results: number;
    results: Array<IOverviewResultByDate>;
    status: "OK" | "ERROR";
}

export interface IOverviewResultByDate {
    bestsellers_date: string;
    lists: Array<IOverviewList>;
    next_published_date: string;
    previous_published_date: string;
    published_date: string;
    published_date_description: string; // тип из значений
}

export interface IOverviewList {
    books: Array<IBook>;
    display_name: string;
    list_id: number;
    list_image: string;
    list_image_height: number;
    list_image_width: number;
    list_name: string;
    list_name_encoded: string;
    updated: "WEEKLY" | "DAILY";
}

export interface IBook {
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