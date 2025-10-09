/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import './style/index.css'
// 在 theme\index.ts 中注册全局组件
import Mycomponent from './components/Mycomponent.vue'

// 五彩纸屑 confetti
import confetti from './components/confetti.vue'

export default {
  extends: DefaultTheme,

  enhanceApp({app}) {
    // 注册全局vue组件，不使用的一定要关闭
    // app.component('Mycomponent', Mycomponent)
    app.component('confetti', confetti)
  }
}