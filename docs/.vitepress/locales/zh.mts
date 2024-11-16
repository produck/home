import { defineConfig } from 'vitepress'
import * as Constant from '../constant.mts';

export default defineConfig({
	title: 'Produck工作台',
	titleTemplate: ':title - Produck',
	description: '为了更好的JavaScript',

	themeConfig: {
		nav: [
			{ text: '产品列表', link: '/zh/' },
			{ text: '关于我们', link: '/zh/' },
			{ text: '观点', link: '' },
		],
		docFooter: {
			prev: '上一章',
			next: '下一章'
		},
		outline: {
			label: '页面导航'
		},
		lastUpdated: {
			text: '最后更新于',
		},
		footer: {
			message: '基于 MIT 协议发布',
			copyright: `Copyright © ${Constant.startYear}-${new Date().getFullYear()} Produck团队`
		},
		editLink: {
			pattern: 'https://github.com/produck/home/edit/main/docs/:path',
			text: '在GitHub上编辑'
		},
		search: {
			provider: 'local',
			options: {
				locales: {
					zh: {
						translations: {
							button: {
								buttonText: '搜索文档',
								buttonAriaLabel: '搜索文档'
							},
							modal: {
								noResultsText: '无法找到相关结果',
								resetButtonTitle: '清除查询条件',
								footer: {
									selectText: '选择',
									navigateText: '切换'
								}
							}
						}
					}
				}
			}
		}
	}
});
