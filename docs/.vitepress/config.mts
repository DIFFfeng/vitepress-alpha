import { defineConfig } from "vitepress";
import { devDependencies } from "../../package.json"; // 读取package.json中的版本号，导入到导航处
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePress title",
  description: "A Vitepress Site description",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 参考文档：https://vitepress.yiov.top/page 这按照顺序编写配置
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      {
        text: "下拉式菜单导航",
        items: [
          { text: "下拉式菜单子菜单", link: "/markdown-examples" },
          {
            text: "配置中多加items数组",
            link: "https://vitepress.yiov.top/page#%E5%AF%BC%E8%88%AA%E8%8F%9C%E5%8D%95",
          },
          {
            text: "再赋予分组标题",
            items: [
              {
                text: "快速上手分组标题链接",
                link: "https://vitepress.yiov.top/page#%E5%AF%BC%E8%88%AA%E8%8F%9C%E5%8D%95",
                noIcon: true,
              }, //noIcon:true 取消图标
              { text: "配置", link: "/configuration" },
              { text: "页面", link: "/page" },
            ],
          },
          { text: "在vitepress 配置.mts中", link: "/markdown-examples" },
        ],
      },
      // 其中的 `replace` 是将版本前的 `^` ，替换成了空白字符
      // { text: `VitePress ${ devDependencies.vitepress.replace('^','') }`, link: 'https://vitepress.dev/zh/', noIcon: true },
      {
        text: `VitePress ${devDependencies.vitepress.replace("^", "")}`,
        link: "https://vitepress.yiov.top/page#%E7%89%88%E6%9C%AC%E5%8F%B7",
        noIcon: true,
      },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          // { text: "Markdown Examples2", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      // 新增分组侧边栏
      {
        //分组标题1
        text: "介绍",
        items: [{ text: "前言", link: "/preface" }],
      },
      {
        //分组标题2
        text: "基础配置",
        collapsed: true, // 开启分组折叠
        items: [
          { text: "快速上手", link: "/getting-started" },
          { text: "配置", link: "/configuration" },
          { text: "页面", link: "/page" },
          { text: "Frontmatter", link: "/try/frontmatter" },
        ],
      },
      {
        //分组标题3
        text: "进阶玩法",
        items: [
          { text: "Markdown", link: "/markdown" },
          { text: "静态部署", link: "/assets" },
        ],
      },
    ],

    //社交链接
    /* 可以看到vitepress自带的社交图标 ： node_modules\vitepress\types\default-theme.d.ts */
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
      { icon: "twitter", link: "https://twitter.com/" },
      { icon: "discord", link: "https://chat.vitejs.dev/" },
      // 自定义社交链接，这用阿里 iconfont 图标库 svg 举例
      {
        icon: {
          svg: '<svg t="1703483542872" class="icon" viewBox="0 0 1309 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6274" width="200" height="200"><path d="M1147.26896 912.681417l34.90165 111.318583-127.165111-66.823891a604.787313 604.787313 0 0 1-139.082747 22.263717c-220.607239 0-394.296969-144.615936-394.296969-322.758409s173.526026-322.889372 394.296969-322.889372C1124.219465 333.661082 1309.630388 478.669907 1309.630388 656.550454c0 100.284947-69.344929 189.143369-162.361428 256.130963zM788.070086 511.869037a49.11114 49.11114 0 0 0-46.360916 44.494692 48.783732 48.783732 0 0 0 46.360916 44.494693 52.090549 52.090549 0 0 0 57.983885-44.494693 52.385216 52.385216 0 0 0-57.983885-44.494692z m254.985036 0a48.881954 48.881954 0 0 0-46.09899 44.494692 48.620028 48.620028 0 0 0 46.09899 44.494693 52.385216 52.385216 0 0 0 57.983886-44.494693 52.58166 52.58166 0 0 0-57.951145-44.494692z m-550.568615 150.018161a318.567592 318.567592 0 0 0 14.307712 93.212943c-14.307712 1.080445-28.746387 1.768001-43.283284 1.768001a827.293516 827.293516 0 0 1-162.394168-22.296458l-162.001279 77.955749 46.328175-133.811485C69.410411 600.858422 0 500.507993 0 378.38496 0 166.683208 208.689602 0 463.510935 0c227.908428 0 427.594322 133.18941 467.701752 312.379588a427.463358 427.463358 0 0 0-44.625655-2.619261c-220.24709 0-394.100524 157.74498-394.100525 352.126871zM312.90344 189.143369a64.270111 64.270111 0 0 0-69.803299 55.659291 64.532037 64.532037 0 0 0 69.803299 55.659292 53.694846 53.694846 0 0 0 57.852923-55.659292 53.465661 53.465661 0 0 0-57.852923-55.659291z m324.428188 0a64.040926 64.040926 0 0 0-69.574114 55.659291 64.302852 64.302852 0 0 0 69.574114 55.659292 53.694846 53.694846 0 0 0 57.951145-55.659292 53.465661 53.465661 0 0 0-57.951145-55.659291z" p-id="6275"></path></svg>',
        },
        link: "https://weixin.qq.com/",
        // You can include a custom label for accessibility too (optional but recommended):
        ariaLabel: "wechat",
      },
    ],

    // siteTitle: false, //标题隐藏。填写字符串文字就覆盖站点标题
    logo: "/烽驭科创.ico", // 左上角logo

    //手机端深浅模式的文字修改
    darkModeSwitchLabel: "深浅模式",
    //侧边栏文字更改(移动端)
    sidebarMenuLabel: "目录",
    //返回顶部文字修改
    returnToTopLabel: "返回顶部",

    //本地搜索 => 得益于 minisearch，VitePress 支持使用浏览器内索引进行模糊全文搜索
    // todo Algolia 配置文档：https://vitepress.yiov.top/docsearch
    search: {
      provider: "local",
    },

    //页脚
    footer: {
      message: "Released under the MIT License.",
      // copyright: 'Copyright © 2019-2025 present Alpha Wan',
      copyright:
        'Copyright © 2023-2025 备案号：<a href="https://beian.miit.gov.cn/" target="_blank">京****号</a>',
      // 自动更新时间
      //copyright: `Copyright © 2019-${new Date().getFullYear()} present Evan You`,
    },

    //编辑本页
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path", // 改成自己的仓库
      text: "在GitHub编辑本页",
    },

    //上次更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },

    //自定义上下页名
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 
    
    // VitePress 内置了对 Carbon 广告 的原生支持 => https://www.carbonads.net/
    carbonAds: { 
      code: 'your-carbon-code', 
      placement: 'your-carbon-placement', 
    }
  },
  /* themeconfig结尾 */

  //fav图标
  head: [["link", { rel: "icon", href: "/烽驭科创.ico" }]],

  // 默认启用深色模式，开启转换   false 关闭， force-dark 强制黑色模式
  appearance: "dark",

  // 站点地图
  /* sitemap: {
    hostname: 'http://127.0.0.1:5173',
  } */

  lastUpdated: true, //首次配置不会立即生效，需git提交后爬取时间戳
});
