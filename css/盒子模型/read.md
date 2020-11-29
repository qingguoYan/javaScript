# 盒子模型

- IE 盒子模型，盒子的宽高为 content+padding+border，box-sizing:border-box
- 标准盒子模型，盒子的宽高为 content，box-sizing:content-box

# 块级盒子和内联盒子

- div h1 p li 都是块级盒子,设置宽高有效果，盒子会换行，内外边距和边会被应用且会推开周围元素
- a span 是内联盒子，设置宽高不起效果，盒子不会换行，垂直方向内外边距和边会被应用但不会会推开周围元素，水平方向内外边距和边会被应用且会推开周围元素
- 通过设置 display 属性可以设置盒子的类型为块级盒子或者内联盒子, <u>也可以设置为 inline-block 块级内联盒子,块级内联盒子不会换行，宽高有效果，内外边距和边垂直水平都会有效果。</u>以上三种方式设置的是盒子的外部显示类型
- 内部显示可以使用 flex、grid 控制，flex、grid 默认是块级盒子,flex 和 gird 的内部元素都是块级元素,并且不可更改。
- inline-flex、inline-grid 让盒子变成内联盒子
