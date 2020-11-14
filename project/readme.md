# 1.colorGenerator 颜色生成器

功能：点击按钮生成一个随机的背景颜色，更改背景颜色

遇到的问题

- 内容区域高度 100%设置无效，父级高度需要有具体值才可以
- `<script></script>`标签需要放到 body 标签里才生效。
  也可以设置 async 同步加载脚本(不保证 js 执行顺序)，加载完成
  后执行脚本，或者设置 defer 属性，同步加载完成脚本后，在 dom 加载完成后执行脚本
- `<li>`标签会将回车空格渲染，所有会有`<li>`之间会有空白
  可以将`<li>`放到同一行，或者设置 li 为浮动元素

# 2.计数器

功能：点击按钮改变计数器

新内容：使用了 document.querySelectorAll()方法

# 3.浏览卡片

功能:切换卡片，浏览信息

问题:

- window 监听 HTML 加载事件,HTML 加载完毕后(`window.addEventListener("DOMContentLoaded")`),初始化数据
- 为什么本地图片加载报错？
- 实现原生 xhr 请求封装,并模拟数据
- 图片首次加载缓慢原因以及浏览器如何缓存的图片？
- css `:root{ --color:red}`声明全局变量，使用 var 函数 var(--color)读取
- css @media 媒体查询 `@media screen and (max-width: 300px) {`
  `body {`
  ` background-color:lightblue;`
  `}`
  `}`
- css rem,em,px,vh,vw 等单位;  
  相对比例：em 相对于元素原来尺寸,浏览器默认字体大小 16px，1em=16px;  
  rem 作用于非根元素时，相对于根元素字体大小,作用于根元素，相对于元素原来尺寸  
  vw:视窗宽度
  vh:视窗高度  
  绝对比例：px，像素大小,按角度度量的单位
