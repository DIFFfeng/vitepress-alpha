<script setup lang="ts">
/**
 * 五彩纸屑 confetti
 * 实现链接： https://vitepress.yiov.top/components.html#%E4%BA%94%E5%BD%A9%E7%BA%B8%E5%B1%91
 * 参考库的官方链接： https://www.kirilv.com/canvas-confetti
 * github地址: https://github.com/catdad/canvas-confetti
 */
import confetti from 'canvas-confetti'
import { inBrowser } from 'vitepress';

if (inBrowser) {

/* 默认纸屑 */
// confetti({
//     particleCount: 100,
//     spread: 170,
//     origin: { y: 0.6 },
// })

// 随机纸屑效果一次
/* function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

confetti({
  angle: randomInRange(55, 125),
  spread: randomInRange(50, 70),
  particleCount: randomInRange(50, 100),
  origin: { y: 0.6 }
}); */

// 烟花效果
var duration = 3.3 * 1000; // 持续秒数
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
}, 250);

}
</script>
