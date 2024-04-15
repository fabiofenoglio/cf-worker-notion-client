import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export function getPageTitle(page: PageObjectResponse): string | null {
	for (const prop of Object.values(page.properties)) {
		if (prop.type === 'title') {
			if (!prop.title.length) {
				return null;
			}
			return prop.title[0].plain_text;
		}
	}
	return null;
}
