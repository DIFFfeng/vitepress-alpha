import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePress title",
  description: "A Vitepress Site description",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      { text: "Examples2", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Markdown Examples2", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    // siteTitle: false, //标题隐藏。填写字符串文字就覆盖站点标题
    logo:'/烽驭科创.ico', // 左上角logo
  },

  //fav图标
  head: [
    ['link',{ rel: 'icon', href: '/烽驭科创.ico'}],
  ],
  
  // 默认启用深色模式，开启转换   false 关闭， force-dark 强制黑色模式
  appearance:'dark', 

  // 站点地图
  /* sitemap: {
    hostname: 'http://127.0.0.1:5173',
  } */

  
});
