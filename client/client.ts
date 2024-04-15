import { Client, LogLevel } from "@notionhq/client"
import { PageObjectResponse, QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";
import { searchWithPagination } from "../utils/operations";

export class NotionClient extends Client {

  constructor(token: string) {
    super({
      auth: token,
      logLevel: LogLevel.INFO,
    });
  }

  public async searchWithPagination(
    query: QueryDatabaseParameters,
    maxPages: number | null = 100,
  ): Promise<PageObjectResponse[]> {

    return searchWithPagination(this, query, maxPages);
  }
}
