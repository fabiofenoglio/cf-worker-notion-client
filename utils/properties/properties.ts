import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export function getPropertyRollupDateStart(page: PageObjectResponse, propertyName: string): string | undefined {
	const prop = page.properties[propertyName];
	if (!prop) {
		throw new Error('missing required property "' + propertyName + '"');
	}
	const requiredPropertyType = 'rollup';
	if (prop.type !== requiredPropertyType) {
		throw new Error('invalid property type: expected "' + requiredPropertyType + '", got "' + prop.type + '"');
	}
	const requiredRollupType = 'date';
	if (prop.rollup.type !== requiredRollupType) {
		throw new Error('invalid rollup type: expected "' + requiredRollupType + '", got "' + prop.type + '"');
	}
	return prop.rollup.date?.start;
}

export function getPropertyDateStart(page: PageObjectResponse, propertyName: string): string | undefined {
	const prop = page.properties[propertyName];
	if (!prop) {
		throw new Error('missing required property "' + propertyName + '"');
	}
	const requiredPropertyType = 'date';
	if (prop.type !== requiredPropertyType) {
		throw new Error('invalid property type: expected "' + requiredPropertyType + '", got "' + prop.type + '"');
	}
	return prop.date?.start;
}

export function getPropertySelectName(page: PageObjectResponse, propertyName: string): string | undefined {
	const prop = page.properties[propertyName];
	if (!prop) {
		throw new Error('missing required property "' + propertyName + '"');
	}
	const requiredPropertyType = 'select';
	if (prop.type !== requiredPropertyType) {
		throw new Error('invalid property type: expected "' + requiredPropertyType + '", got "' + prop.type + '"');
	}
	return prop.select?.name;
}

export function getPropertyMultiSelectNames(page: PageObjectResponse, propertyName: string): string[] {
	const prop = page.properties[propertyName];
	if (!prop) {
		throw new Error('missing required property "' + propertyName + '"');
	}
	const requiredPropertyType = 'multi_select';
	if (prop.type !== requiredPropertyType) {
		throw new Error('invalid property type: expected "' + requiredPropertyType + '", got "' + prop.type + '"');
	}
	return prop.multi_select?.map(entry => entry.name);
}

export function getPropertyCheckbox(page: PageObjectResponse, propertyName: string): boolean | null {
	const prop = page.properties[propertyName];
	if (!prop) {
		throw new Error('missing required property "' + propertyName + '"');
	}
	const requiredPropertyType = 'checkbox';
	if (prop.type !== requiredPropertyType) {
		throw new Error('invalid property type: expected "' + requiredPropertyType + '", got "' + prop.type + '"');
	}
	return prop.checkbox;
}

export function getPropertyNumber(page: PageObjectResponse, propertyName: string): number | null {
	const prop = page.properties[propertyName];
	if (!prop) {
		throw new Error('missing required property "' + propertyName + '"');
	}
	const requiredPropertyType = 'number';
	if (prop.type !== requiredPropertyType) {
		throw new Error('invalid property type: expected "' + requiredPropertyType + '", got "' + prop.type + '"');
	}
	return prop.number;
}

export function getPropertyFormulaString(page: PageObjectResponse, propertyName: string): string | null {
	const prop = page.properties[propertyName];
	if (!prop) {
		throw new Error('missing required property "' + propertyName + '"');
	}
	const requiredPropertyType = 'formula';
	if (prop.type !== requiredPropertyType) {
		throw new Error('invalid property type: expected "' + requiredPropertyType + '", got "' + prop.type + '"');
	}
	const requiredPropertyFormulaType = 'string';
	if (prop.formula.type !== requiredPropertyFormulaType) {
		throw new Error('invalid formula type: expected "' + requiredPropertyFormulaType + '", got "' + prop.formula.type + '"');
	}
	return prop.formula.string;
}

export function getPropertyFormulaDateStart(page: PageObjectResponse, propertyName: string): string | null {
	const prop = page.properties[propertyName];
	if (!prop) {
		throw new Error('missing required property "' + propertyName + '"');
	}
	const requiredPropertyType = 'formula';
	if (prop.type !== requiredPropertyType) {
		throw new Error('invalid property type: expected "' + requiredPropertyType + '", got "' + prop.type + '"');
	}
	const requiredPropertyFormulaType = 'date';
	if (prop.formula.type !== requiredPropertyFormulaType) {
		throw new Error('invalid formula type: expected "' + requiredPropertyFormulaType + '", got "' + prop.formula.type + '"');
	}
	return prop.formula.date?.start ?? null;
}

export function getPropertyFormulaNumber(page: PageObjectResponse, propertyName: string): number | null {
	const prop = page.properties[propertyName];
	if (!prop) {
		throw new Error('missing required property "' + propertyName + '"');
	}
	const requiredPropertyType = 'formula';
	if (prop.type !== requiredPropertyType) {
		throw new Error('invalid property type: expected "' + requiredPropertyType + '", got "' + prop.type + '"');
	}
	const requiredPropertyFormulaType = 'number';
	if (prop.formula.type !== requiredPropertyFormulaType) {
		throw new Error('invalid formula type: expected "' + requiredPropertyFormulaType + '", got "' + prop.formula.type + '"');
	}
	return prop.formula.number;
}

export function getPropertyURL(page: PageObjectResponse, propertyName: string): string | null {
	const prop = page.properties[propertyName];
	if (!prop) {
		throw new Error('missing required property "' + propertyName + '"');
	}
	const requiredPropertyType = 'url';
	if (prop.type !== requiredPropertyType) {
		throw new Error('invalid property type: expected "' + requiredPropertyType + '", got "' + prop.type + '"');
	}
	return prop.url ?? null;
}

export function getPropertyText(page: PageObjectResponse, propertyName: string): string | null {
	const prop = page.properties[propertyName];
	if (!prop) {
		throw new Error('missing required property "' + propertyName + '"');
	}
	const requiredPropertyType = 'rich_text';
	if (prop.type !== requiredPropertyType) {
		throw new Error('invalid property type: expected "' + requiredPropertyType + '", got "' + prop.type + '"');
	}
	if (!prop.rich_text.length) {
		return null;
	}
	return prop.rich_text[0].plain_text;
}
