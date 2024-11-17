// This is astro built in pagination metadata
// https://docs.astro.build/en/guides/routing/#pagination
interface Page<T = any> {
    /** array containing the page’s slice of data that you passed to the paginate() function */
    data: T[];
    /** metadata */
    /** the count of the first item on the page, starting from 0 */
    start: number;
    /** the count of the last item on the page, starting from 0 */
    end: number;
    /** total number of results */
    total: number;
    /** the current page number, starting from 1 */
    currentPage: number;
    /** number of items per page (default: 10) */
    size: number;
    /** number of last page */
    lastPage: number;
    url: {
        /** url of the current page */
        current: string;
        /** url of the previous page (if there is one) */
        prev: string | undefined;
        /** url of the next page (if there is one) */
        next: string | undefined;
        /** url of the first page (if the current page is not the first page) */
        first: string | undefined;
        /** url of the last page (if the current page in not the last page) */
        last: string | undefined;
    };
}