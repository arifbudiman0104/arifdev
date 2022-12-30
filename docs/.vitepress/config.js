import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
    base: '/arifdev/',
    lang: 'en-US',
    title: 'ArifDev',
    description: 'Personal Blog and Portofolio',
    themeConfig: {
        nav: [
            { text: 'Blog', link: '/blog/' },
            { text: 'Portofolio', link: '/portofolio' },
            // { text: 'Sertificate', link: '/blog/blog' },

            // {
            //   text: 'Dropdown Menu',
            //   items: [
            //     { text: 'Item A', link: '/item-1' },
            //     { text: 'Item B', link: '/item-2' },
            //     { text: 'Item C', link: '/item-3' },
            //   ],
            // },
            // ...
        ],
        sidebar:

        {
            '/blog/': [
                {
                    text: 'Laravel',
                    collapsible: true,
                    items: [
                        // { text: 'one', link: '/blog/laravel/one' },
                    ]
                },{
                    text: 'Tailwind CSS',
                    collapsible: true,
                    items: [
                        // { text: 'tailwind', link: '/blog/tailwindcss/tailwind' },
                    ]
                },{
                    text: 'Other',
                    collapsible: true,
                    items: [
                        { text: 'Markdown Cheat Sheet', link: '/blog/other/markdown-cheatsheet' },
                        { text: 'Git Commit Message', link: '/blog/other/git-commit-message' },
                        { text: 'Vitepress deploy.yml workflows', link: '/blog/other/vitepress-deploy-yml-workflows' },
                    ]
                },
            ],
        },
        // footer: {
        //     message: 'Built with VitePress',
        //     // copyright: 'Copyright © 2019-present Evan You'
        // },
        editLink: {
            pattern: 'https://github.com/arifbudimanarrosyid/arifdev/tree/master/docs/:path'
          }
    }
}
);
