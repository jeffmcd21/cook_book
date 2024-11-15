import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
// import { LinkButton } from '@astrojs/starlight/components';
// import { LinkCard } from '@astrojs/starlight/components';

export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
};
