declare module 'astro:content' {
	// Interface for rendering content results
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	// Interface for rendered content with optional metadata
	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}

	// CollectionKey and related types for any entry map
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;
	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	// Helper type for extracting all values of a given type
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<ContentEntryMap[C]>['slug'];

	// Deprecated functions
	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<C extends keyof ContentEntryMap, E extends ValidContentEntrySlug<C> | (string & {})>(
		collection: C,
		entrySlug: E,
	): E extends ValidContentEntrySlug<C> ? Promise<CollectionEntry<C>> : Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	// Functions to get collections and entries
	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<C extends keyof ContentEntryMap, E extends ValidContentEntrySlug<C> | (string & {})>(
		entry: { collection: C; slug: E }
	): E extends ValidContentEntrySlug<C> ? Promise<CollectionEntry<C>> : Promise<CollectionEntry<C> | undefined>;
	export function getEntry<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C] | (string & {})>(
		entry: { collection: C; id: E }
	): E extends keyof DataEntryMap[C] ? Promise<DataEntryMap[C][E]> : Promise<CollectionEntry<C> | undefined>;

	export function getEntries<C extends keyof ContentEntryMap>(
		entries: { collection: C; slug: ValidContentEntrySlug<C> }[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: { collection: C; id: keyof DataEntryMap[C] }[]
	): Promise<CollectionEntry<C>[]>;

	// Function to render content entries
	export function render<C extends keyof AnyEntryMap>(entry: AnyEntryMap[C][string]): Promise<RenderResult>;

	// Reference function with invalid collection handling
	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? { collection: C; slug: ValidContentEntrySlug<C> }
			: { collection: C; id: keyof DataEntryMap[C] }
	>;

	// Handle invalid collection names generically
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, null | undefined>;

	// Utility types
	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	// Content entry map with fixed entries
	type ContentEntryMap = {
		"blog": {
			"benefits-of-probiotics.md": {
				id: "benefits-of-probiotics.md";
				slug: "benefits-of-probiotics";
				body: string;
				collection: "blog";
				data: InferEntrySchema<"blog">;
			} & { render(): Render[".md"] };
			"l-theanine-caffeine-synergy.md": {
				id: "l-theanine-caffeine-synergy.md";
				slug: "l-theanine-caffeine-synergy";
				body: string;
				collection: "blog";
				data: InferEntrySchema<"blog">;
			} & { render(): Render[".md"] };
			"omega-3-benefits.md": {
				id: "omega-3-benefits.md";
				slug: "omega-3-benefits";
				body: string;
				collection: "blog";
				data: InferEntrySchema<"blog">;
			} & { render(): Render[".md"] };
			"red-yeast-rice-cholesterol.md": {
				id: "red-yeast-rice-cholesterol.md";
				slug: "red-yeast-rice-cholesterol";
				body: string;
				collection: "blog";
				data: InferEntrySchema<"blog">;
			} & { render(): Render[".md"] };
			"understanding-nootropics.md": {
				id: "understanding-nootropics.md";
				slug: "understanding-nootropics";
				body: string;
				collection: "blog";
				data: InferEntrySchema<"blog">;
			} & { render(): Render[".md"] };
			"vitamin-b12-bridging-the-nutritional-gap.md": {
				id: "vitamin-b12-bridging-the-nutritional-gap.md";
				slug: "vitamin-b12-bridging-the-nutritional-gap";
				body: string;
				collection: "blog";
				data: InferEntrySchema<"blog">;
			} & { render(): Render[".md"] };
			"vitamin-d-unlock-the-power-of-the-sun.md": {
				id: "vitamin-d-unlock-the-power-of-the-sun.md";
				slug: "vitamin-d-benefits";
				body: string;
				collection: "blog";
				data: InferEntrySchema<"blog">;
			} & { render(): Render[".md"] };
			"zinc-and-its-importance.md": {
				id: "zinc-and-its-importance.md";
				slug: "zinc-and-its-importance";
				body: string;
				collection: "blog";
				data: InferEntrySchema<"blog">;
			} & { render(): Render[".md"] };
		};
	};

	type DataEntryMap = {};

	// Combine the ContentEntryMap and DataEntryMap
	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	// Content configuration type
	export type ContentConfig = typeof import("../../src/content/config.js");
}
