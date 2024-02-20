import { defineConfig } from 'vitepress'
import localeZH from './locales/zh.mts';
import * as Constant from './constant.mts';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Produck Team",
	titleTemplate: ':title - Produck',
	description: "For better JavaScript",
	cleanUrls: true,
	lastUpdated: true,
	sitemap: {
		hostname: 'https://produckjs.com'
	},

	head: [
		['link', { rel: 'icon', type: 'image/svg+xml', href: '/produck-logo-mini.svg' }],
		['link', { rel: 'icon', type: 'image/png', href: '/produck-logo-mini.png' }],
	],

	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Products List', link: '/' },
			{ text: 'About Us', link: '/markdown-examples' }
		],

		sidebar: [
			{
				text: 'Examples',
				items: [
					{ text: 'Markdown Examples', link: '/markdown-examples' },
					{ text: 'Runtime API Examples', link: '/api-examples' }
				]
			}
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/produck' }
		],

		search: {
			provider: 'local'
		},
		footer: {
			message: 'Released under the MIT License.',
			copyright: `Copyright © ${Constant.startYear}-${new Date().getFullYear()} Produck Team`
		},

		editLink: {
			pattern: 'https://github.com/produck/home/edit/main/docs/:path',
			text: 'Edit this page on GitHub'
		},

		externalLinkIcon: true,
	},

	locales: {
		root: {
			label: 'English',
			lang: 'en'
		},
		zh: {
			label: '简体中文',
			lang: 'zh',
			link: '/zh/',
			...localeZH,
		}
	},
})
