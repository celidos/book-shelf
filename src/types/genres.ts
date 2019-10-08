export interface IGenresResponse {
    copyright: string;
    num_results: number;
    results: Array<IListResult>;
    status: "OK" | "ERROR";
}

export interface IListResult {
    display_name: string;
    list_name: string;
    list_name_encoded: string;
    newest_published_date: string;
    oldest_published_date: string;
    updated: "WEEKLY" | "DAILY";
}