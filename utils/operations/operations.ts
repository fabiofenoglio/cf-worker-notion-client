import { Client } from "@notionhq/client";
import { PageObjectResponse, QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";

export async function searchWithPagination(
    client: Client, 
    query: QueryDatabaseParameters, 
    maxPages: number | null = 100,
): Promise<PageObjectResponse[]> {

    let cursor = null;
    const allResults: PageObjectResponse[] = [];

    while (true) {
        const requestBody: QueryDatabaseParameters = {
            page_size: 50,
            ...query,
        };

        if (cursor) {
            requestBody.start_cursor = cursor;
        }

        const pageResponse = await client.databases.query(requestBody);

        allResults.push(...(pageResponse.results as PageObjectResponse[]));

        if (!pageResponse.next_cursor) {
            break;
        }
        if (maxPages !== null && maxPages > 0 && allResults.length >= maxPages) {
            break;
        }

        cursor = pageResponse.next_cursor;
    }

    if (maxPages !== null && maxPages > 0 && allResults.length >= maxPages) {
        return allResults.slice(0, maxPages);
    }

    return allResults;
}