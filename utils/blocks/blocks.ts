import { BlockObjectRequest } from "@notionhq/client/build/src/api-endpoints";
import { chunkString } from "cf-worker-utils/strings";

export function stringToBlocks(raw: string): BlockObjectRequest[] {
	const out: BlockObjectRequest[] = [];

	const maxPerBlock = 2000;
	const chunked = chunkString(raw, maxPerBlock);

	for (let chunk of chunked) {
		out.push({
			object: "block",
			paragraph: {
				rich_text: [
					{
						text: {
							content: chunk,
						}
					}
				],
			}
		});
	}

	return out;
}
