## 

本部分主要是笔者在复习 HTML 相关知识和一些相关面试题时所做的笔记，如果出现错误，希望大家指出！

### 目录

* [1. DOCTYPE 的作用是什么？](#1-doctype-的作用是什么)
* [2. 标准模式与兼容模式各有什么区别？](#2-标准模式与兼容模式各有什么区别)
* [3. HTML5 为什么只需要写 &lt;!DOCTYPE HTML&gt;，而不需要引入 DTD？](#3-html5-为什么只需要写-doctype-html而不需要引入-dtd)
* [4. SGML 、 HTML 、XML 和 XHTML 的区别？](#4-sgml--html-xml-和-xhtml-的区别)
* [5. DTD 介绍](#-5-dtd-介绍)
* [6. 行内元素定义](#6-行内元素定义)
* [7. 块级元素定义](#7-块级元素定义)
* [8. 行内元素与块级元素的区别？](#8-行内元素与块级元素的区别)
* [9. HTML5 元素的分类](#9-html5-元素的分类)
* [10. 空元素定义](#10-空元素定义)
* [11. link 标签定义](#11-link-标签定义)
* [12. 页面导入样式时，使用 link 和 @import 有什么区别？](#12-页面导入样式时使用-link-和-import-有什么区别)
* [13. 你对浏览器的理解？](#13-你对浏览器的理解)
* [14. 介绍一下你对浏览器内核的理解？](#14-介绍一下你对浏览器内核的理解)
* [15. 常见的浏览器内核比较](#15-常见的浏览器内核比较)
* [16. 常见浏览器所用内核](#16-常见浏览器所用内核)
* [17. 浏览器的渲染原理？](#17-浏览器的渲染原理)
* [18. 渲染过程中遇到 JS 文件怎么处理？（浏览器解析过程）](#18-渲染过程中遇到-js-文件怎么处理浏览器解析过程)
* [19. async 和 defer 的作用是什么？有什么区别？（浏览器解析过程）](#19-async-和-defer-的作用是什么有什么区别浏览器解析过程)
* [20. 什么是文档的预解析？（浏览器解析过程）](#20-什么是文档的预解析浏览器解析过程)
* [21. CSS 如何阻塞文档解析？（浏览器解析过程）](#21-css-如何阻塞文档解析浏览器解析过程)
* [22. 渲染页面时常见哪些不良现象？（浏览器渲染过程）](#22-渲染页面时常见哪些不良现象浏览器渲染过程)
* [23. 如何优化关键渲染路径？（浏览器渲染过程）](#23-如何优化关键渲染路径浏览器渲染过程)
* [24. 什么是重绘和回流？（浏览器绘制过程）](#24-什么是重绘和回流浏览器绘制过程)
* [25. 如何减少回流？（浏览器绘制过程）](#25-如何减少回流浏览器绘制过程)
* [26. 为什么操作 DOM 慢？（浏览器绘制过程）](#26-为什么操作-dom-慢浏览器绘制过程)
* [27. DOMContentLoaded 事件和 Load 事件的区别？](#27-domcontentloaded-事件和-load-事件的区别)
* [28. HTML5 有哪些新特性、移除了那些元素？](#28-html5-有哪些新特性移除了那些元素)
* [29. 如何处理 HTML5 新标签的浏览器兼容问题？](#29-如何处理-html5-新标签的浏览器兼容问题)
* [30. 简述一下你对 HTML 语义化的理解？](#30-简述一下你对-html-语义化的理解)
* [31. b 与 strong 的区别和 i 与 em 的区别？](#31-b-与-strong-的区别和-i-与-em-的区别)
* [32. 前端需要注意哪些 SEO ？](#32-前端需要注意哪些-seo-)
* [33. HTML5 的离线储存怎么使用，工作原理能不能解释一下？](#33-html5-的离线储存怎么使用工作原理能不能解释一下)
* [34. 浏览器是怎么对 HTML5 的离线储存资源进行管理和加载的呢？](#34-浏览器是怎么对-html5-的离线储存资源进行管理和加载的呢)
* [35. 常见的浏览器端的存储技术有哪些？](#35-常见的浏览器端的存储技术有哪些)
* [36. 请描述一下 cookies，sessionStorage 和 localStorage 的区别？](#36-请描述一下-cookiessessionstorage-和-localstorage-的区别)
* [37. iframe 有那些缺点？](#37-iframe-有那些缺点)
* [38. Label 的作用是什么？是怎么用的？](#38-label-的作用是什么是怎么用的)
* [39. HTML5 的 form 的自动完成功能是什么？](#39-html5-的-form-的自动完成功能是什么)
* [40. 如何实现浏览器内多个标签页之间的通信?](#40-如何实现浏览器内多个标签页之间的通信)
* [41. webSocket 如何兼容低版本浏览器？](#41-websocket-如何兼容低版本浏览器)
* [42. 页面可见性（Page Visibility API） 可以有哪些用途？](#42-页面可见性page-visibility-api-可以有哪些用途)
* [43. 如何在页面上实现一个圆形的可点击区域？](#43-如何在页面上实现一个圆形的可点击区域)
* [44. 实现不使用 border 画出 1 px 高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果。](#44-实现不使用-border-画出-1-px-高的线在不同浏览器的标准模式与怪异模式下都能保持一致的效果)
* [45. title 与 h1 的区别？](#45-title-与-h1-的区别)
* [46. &lt;img&gt; 的 title 和 alt 有什么区别？](#46-img-的-title-和-alt-有什么区别)
* [47. Canvas 和 SVG 有什么区别？](#47-canvas-和-svg-有什么区别)
* [48. 网页验证码是干嘛的，是为了解决什么安全问题？](#48-网页验证码是干嘛的是为了解决什么安全问题)
* [49. 渐进增强和优雅降级的定义](#49-渐进增强和优雅降级的定义)
* [50. attribute 和 property 的区别是什么？](#50-attribute-和-property-的区别是什么)
* [51. 对 web 标准、可用性、可访问性的理解](#51-对-web-标准可用性可访问性的理解)
* [52. IE 各版本和 Chrome 可以并行下载多少个资源？](#52-ie-各版本和-chrome-可以并行下载多少个资源)
* [53. Flash、Ajax 各自的优缺点，在使用中如何取舍？](#53-flashajax-各自的优缺点在使用中如何取舍)
* [54. 怎么重构页面？](#54-怎么重构页面)
* [55. 浏览器架构](#55-浏览器架构)
* [56. 常用的 meta 标签](#56-常用的-meta-标签)
* [57. css reset 和 normalize.css 有什么区别？](#57-css-reset-和-normalizecss-有什么区别)
* [58. 用于预格式化文本的标签是？](#58-用于预格式化文本的标签是)
* [59. DHTML 是什么？](#59-dhtml-是什么)
* [60. head 标签中必不少的是？](#60-head-标签中必不少的是)
* [61. HTML5 新增的表单元素有？](#61-html5-新增的表单元素有)
* [62. 在 HTML5 中，哪个方法用于获得用户的当前位置？](#62-在-html5-中哪个方法用于获得用户的当前位置)
* [63. 文档的不同注释方式？](#63-文档的不同注释方式)
* [64. disabled 和 readonly 的区别？](#64-disabled-和-readonly-的区别)
* [65. 主流浏览器内核私有属性 css 前缀？](#65-主流浏览器内核私有属性-css-前缀)
* [66. 前端性能优化？](#66-前端性能优化)
* [67. Chrome 中的 Waterfall ？](#67-chrome-中的-waterfall-)
* [68. 扫描二维码登录网页是什么原理，前后两个事件是如何联系的？](#68-扫描二维码登录网页是什么原理前后两个事件是如何联系的)
* [69. Html 规范中为什么要求引用资源不加协议头http或者https？](#69-html-规范中为什么要求引用资源不加协议头http或者https)


#### 1. DOCTYPE 的作用是什么？

   相关知识点：

```
位于代码顶部
告知浏览器用什么方式渲染
没有或错误会让浏览器以兼容模式执行
```



   回答（参考1-5）：
   ```

   ```

#### 2. 标准模式与兼容模式各有什么区别？
   ``` 
   标准模式会使用现代标准的代码进行页面渲染
   兼容模式会使用老版本浏览所支持的方式进行页面渲染
   
   ---
   
   标准模式: 会使用浏览器支持的最高标准运行
   兼容模式: 页面以宽松的向后兼容的方式运行
   ```

#### 3. HTML5 为什么只需要写 `<!DOCTYPE HTML>`，而不需要引入 DTD？
   ```
   html5是新标准,不适用SGML作为标记语言
   
   ---
   HTML5不基于DTD; 但需要DOCTYPE规范浏览器行为
   HTML4.0基于SGML, 所以需要DTD进行引用]
   ```

#### 4. SGML 、 HTML 、XML 和 XHTML 的区别？
   ```
   SGML 老版本
   HTML 超文本标记语言
   XML  可自行创建标签, 标签无限
   XHTML 将css JavaScript html结合更加动态
   
   ----
   SGML: 标准通用标记语言
   HTML: 超文本标记语言
   XML:  可扩展标记语言,是未来网页语言的发展方向,与HTML最大区别是标签可以自行创建,数量无限多,HTML数量固定
   XHTML:与HTML没有本质区别,比HTML更加严格,比如标签必须小写,标签必须闭合
   
   ```

#### 5. DTD 介绍
   ```
   ...
   
   ---
   机器可读的规则
   定义了元素及他们属性和层次关系,在解析网页时浏览器会运用这些规则来检验页面有效性并且采取相应措施
   DTD是对HTML的声明,还会影响浏览器的渲染模式
   ```

#### 6. 行内元素定义
   ```
   inner
   有宽度高度
   下一个行内元素不会另起一行
   b img stone span em i 
   
   ---
   inline (内联元素) 
   一个行内元素只占据它对应标签的边框所包含的空间
   a b span img strong sub sup button input label select textarea
   ```


#### 7. 块级元素定义
   ```
block
会另起一行显示
可包含块级元素和行内元素
div head body nav

---
占据父元素的整个宽度
div ul ol li dl dt dd  h1 h2 ...
   ```


#### 8. 行内元素与块级元素的区别？
   ```
   inner
   有宽度高度
   下一个行内元素不会另起一行
   
   block
   会另起一行显示
   可包含块级元素和行内元素
   
   ---
   格式上: 默认情况下,行内元素不会新行开始
   内容上: 默认情况下,行内元素只能包含文本和其他行内元素,而快级元素可以包含行内元素和快级元素
   属性不同,主要体现在盒模型上
   	行内元素设置宽高无效(可以设置inner-height),设置margin和padding不会对其他元素造成影响
   	
   ```

#### 9. HTML5 元素的分类
   ```
行内元素
块级元素
行内块元素
	* 想让行内元素有块级元素的属性 display: inner-block;
	
	
---
HTML4: 
	inline（内联元素）与 block（块级元素）。但在实际的开发过程中，因为页面表现的需要，前端工程师经常把 inline 元素的 display 值设定为 block （比如 a 标签），也经常把 block 元素的 display 值设定为inline 之后更是出现了 inline-block 这一对外呈现 inline 对内呈现 block 的属性。因此，简单地把 HTML 元素划分为inline 与 block 已经不再符合实际需求。

HTML5: 
	元素主要分为7类：Metadata Flow Sectioning Heading Phrasing Embedded Interactive
  
   ```

#### 10. 空元素定义
   ```
不会解析元素内容
只会解析属性
br 

---
没有内容的HTML标签,在开始标签内关闭
br hr img input mata link
   ```

#### 11. link 标签定义
   ```
用以引用外部资源: 图像 样式 等
最好放在herd中 便于SEO优化

---
定义文档与外部资源的关系
空元素,只能存在于head,可出现任意次数
rel 属性定义了当前文档与被链接文档之间的关系。常见的 stylesheet 指的是定义一个外部加载的样式表。
   ```

#### 12. 页面导入样式时，使用 link 和 @import 有什么区别？
   ```
link 立即引用且立即执行解析引用的文件
@import 会立即引用但不会立即解析要等到浏览器渲染完毕后再解析


---
   （1）从属关系区别。 @import 是 CSS 提供的语法规则，只有导入样式表的作用；link 是 HTML 提供的标签，不仅可以加
        载 CSS 文件，还可以定义 RSS、rel 连接属性、引入网站图标等。

   （2）加载顺序区别。加载页面时，link 标签引入的 CSS 被同时加载；@import 引入的 CSS 将在页面加载完毕后被加载。

   （3）兼容性区别。@import 是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link 标签作为 HTML 元素，不存在兼容
        性问题。

   （4）DOM 可控性区别。可以通过 JS 操作 DOM ，插入 link 标签来改变样式；由于 DOM 方法是基于文档的，无法使用 @i
       mport 的方式插入样式。
   ```

#### 13. 你对浏览器的理解？
   ```
对代码所描述的结构样式进行展示

---
   浏览器的主要功能是将用户选择的 web 资源呈现出来，它需要从服务器请求资源，并将其显示在浏览器窗口中，资源的格式通常
   是 HTML，也包括 PDF、image 及其他格式。用户用 URI（Uniform Resource Identifier 统一资源标识符）来指定所请
   求资源的位置。

   HTML 和 CSS 规范中规定了浏览器解释 html 文档的方式，由 W3C 组织对这些规范进行维护，W3C 是负责制定 web 标准的
   组织。

   但是浏览器厂商纷纷开发自己的扩展，对规范的遵循并不完善，这为 web 开发者带来了严重的兼容性问题。

   简单来说浏览器可以分为两部分，shell 和 内核。

   其中 shell 的种类相对比较多，内核则比较少。shell 是指浏览器的外壳：例如菜单，工具栏等。主要是提供给用户界面操作，
   参数设置等等。它是调用内核来实现各种功能的。内核才是浏览器的核心。内核是基于标记语言显示内容的程序或模块。也有一些
    浏览器并不区分外壳和内核。从 Mozilla 将 Gecko 独立出来后，才有了外壳和内核的明确划分。
   ```


#### 14. 介绍一下你对浏览器内核的理解？
   ```
... 

----

解析JavaScript代码,
...
渲染引擎: 渲染引擎的职责就是渲染，即在浏览器窗口中显示所请求的内容。默认情况下，渲染引擎可以显示 html、xml 文档及图片，它也可以借助插件（一种浏览器扩展）显示其他类型数据，例如使用 PDF 阅读器插件，可以显示 PDF 格式。
	
JS引擎: 解析和执行 javascript 来实现网页的动态效果。
	
最开始渲染引擎和 JS 引擎并没有区分的很明确，后来 JS 引擎越来越独立，内核就倾向于只指渲染引擎。
   ```

#### 15. 常见的浏览器内核比较
   ```
  ...
  
  ----
     Trident：这种浏览器内核是 IE 浏览器用的内核，因为在早期 IE 占有大量的市场份额，所以这种内核比较流行，以前有很多
   网页也是根据这个内核的标准来编写的，但是实际上这个内核对真正的网页标准支持不是很好。但是由于 IE 的高市场占有率，微
   软也很长时间没有更新 Trident 内核，就导致了 Trident 内核和 W3C 标准脱节。还有就是 Trident 内核的大量 Bug 等
   安全问题没有得到解决，加上一些专家学者公开自己认为 IE 浏览器不安全的观点，使很多用户开始转向其他浏览器。

   Gecko：这是 Firefox 和 Flock 所采用的内核，这个内核的优点就是功能强大、丰富，可以支持很多复杂网页效果和浏览器扩
   展接口，但是代价是也显而易见就是要消耗很多的资源，比如内存。

   Presto：Opera 曾经采用的就是 Presto 内核，Presto 内核被称为公认的浏览网页速度最快的内核，这得益于它在开发时的
   天生优势，在处理 JS 脚本等脚本语言时，会比其他的内核快3倍左右，缺点就是为了达到很快的速度而丢掉了一部分网页兼容性。

   Webkit：Webkit 是 Safari 采用的内核，它的优点就是网页浏览速度较快，虽然不及 Presto 但是也胜于 Gecko 和 Trid
   ent，缺点是对于网页代码的容错性不高，也就是说对网页代码的兼容性较低，会使一些编写不标准的网页无法正确显示。WebKit 
   前身是 KDE 小组的 KHTML 引擎，可以说 WebKit 是 KHTML 的一个开源的分支。

   Blink：谷歌在 Chromium Blog 上发表博客，称将与苹果的开源浏览器核心 Webkit 分道扬镳，在 Chromium 项目中研发 B
   link 渲染引擎（即浏览器核心），内置于 Chrome 浏览器之中。其实 Blink 引擎就是 Webkit 的一个分支，就像 webkit 是
   KHTML 的分支一样。Blink 引擎现在是谷歌公司与 Opera Software 共同研发，上面提到过的，Opera 弃用了自己的 Presto 
   内核，加入 Google 阵营，跟随谷歌一起研发 Blink。


   ```
   详细的资料可以参考：
   [《浏览器内核的解析和对比》](http://www.cnblogs.com/fullhouse/archive/2011/12/19/2293455.html)
   [《五大主流浏览器内核的源起以及国内各大浏览器内核总结》](https://blog.csdn.net/Summer_15/article/details/71249203)


#### 16. 常见浏览器所用内核
   ```
 谷歌 
 
 
 ---
    （1） IE 浏览器内核：Trident 内核，也是俗称的 IE 内核；

    （2） Chrome 浏览器内核：统称为 Chromium 内核或 Chrome 内核，以前是 Webkit 内核，现在是 Blink内核；

    （3） Firefox 浏览器内核：Gecko 内核，俗称 Firefox 内核；

    （4） Safari 浏览器内核：Webkit 内核；

    （5） Opera 浏览器内核：最初是自己的 Presto 内核，后来加入谷歌大军，从 Webkit 又到了 Blink 内核；

    （6） 360浏览器、猎豹浏览器内核：IE + Chrome 双内核；

    （7） 搜狗、遨游、QQ 浏览器内核：Trident（兼容模式）+ Webkit（高速模式）；

    （8） 百度浏览器、世界之窗内核：IE 内核；

    （9） 2345浏览器内核：好像以前是 IE 内核，现在也是 IE + Chrome 双内核了；

    （10）UC 浏览器内核：这个众口不一，UC 说是他们自己研发的 U3 内核，但好像还是基于 Webkit 和 Trident ，还有说
         是基于火狐内核。
   ```

#### 17. 浏览器的渲染原理？
   ```
对html解析渲染生成DOM树
对样式解析渲染生成样式树
...

---
根据文档定义生成DOM树
对CSS进行解析生成CSSOM规则树
根据DOM树与CSSOM规则树构建渲染树
自动重排
绘制阶段

浏览器会解析完一部分就渲染一部分,同时可能还在通过网络下载其他资源
   ```
   详细资料可以参考：
   [《浏览器渲染原理》](https://juejin.im/book/5bdc715fe51d454e755f75ef/section/5bdc7207f265da613c09425d)
   [《浏览器的渲染原理简介》](https://coolshell.cn/articles/9666.html)
   [《前端必读：浏览器内部工作原理》](https://kb.cnblogs.com/page/129756/)
   [《深入浅出浏览器渲染原理》](https://blog.fundebug.com/2019/01/03/understand-browser-rendering/)

#### 18. 渲染过程中遇到 JS 文件怎么处理？（浏览器解析过程）
   ```
停止对结构的渲染投入到解析JS文件过程中
所以JS引用应尽可能放在代码后面

---
暂停对文档的解析将控制权移交给JavaSCript引擎等待运行完毕
浏览器再从中断的地方继续解析文档
现如今也可以添加async 或 defer属性
   ```
#### 19. async 和 defer 的作用是什么？有什么区别？（浏览器解析过程）
   ```
 async 会让浏览器在空闲时间段解析 所以有acync属性的引用先后执行的顺序不一定会按照代码前后执行
 defer 会使得浏览器在渲染完代码后执行
 
 ---
 脚本没有defer或者async时,浏览器会立即加载并执行
 defer: 延迟执行,当成个document的执行完毕后再执行,多个脚本按顺序执行
 async: 异步执行, 加载过程不会阻塞, 加载完毕会立即执行,但是任会阻塞
   ```
   详细资料可以参考：
   [《defer 和 async 的区别》](https://segmentfault.com/q/1010000000640869)

#### 20. 什么是文档的预解析？（浏览器解析过程）
   ```
   浏览器在执行JS代码时分出一个线程继续对文档解析
   (好像就只有Chrome支持)
   
   ---
    Webkit 和 Firefox 都做了这个优化，当执行 JavaScript 脚本时，另一个线程解析剩下的文档，并加载后面需要通过网络加
    载的资源。这种方式可以使资源并行加载从而使整体速度更快。需要注意的是，预解析并不改变 DOM 树，它将这个工作留给主解析
    过程，自己只解析外部资源的引用，比如外部脚本、样式表及图片。
   ```

#### 21. CSS 如何阻塞文档解析？（浏览器解析过程） 
   ```
引用了其他文件


---
    理论上，既然样式表不改变 DOM 树，也就没有必要停下文档的解析等待它们，然而，存在一个问题，JavaScript 脚本执行时可
    能在文档的解析过程中请求样式信息，如果样式还没有加载和解析，脚本将得到错误的值，显然这将会导致很多问题。

    所以如果浏览器尚未完成 CSSOM 的下载和构建，而我们却想在此时运行脚本，那么浏览器将延迟 JavaScript 脚本执行和文档
    的解析，直至其完成 CSSOM 的下载和构建。也就是说，在这种情况下，浏览器会先下载和构建 CSSOM，然后再执行 JavaScript，
    最后再继续文档的解析。
   ```

#### 22. 渲染页面时常见哪些不良现象？（浏览器渲染过程）
   ```
白屏
	浏览器解析时间过长,
闪烁
	一些关键元素被后加载的样式修改
	
所以 JS代码应尽可能放在代码最后
	对主页面进行代码抽离, 尽量减少代码复杂度
	
	
---
    FOUC：主要指的是样式闪烁的问题，由于浏览器渲染机制（比如firefox），在 CSS 加载之前，先呈现了 HTML，就会导致展示
          出无样式内容，然后样式突然呈现的现象。会出现这个问题的原因主要是 css 加载时间过长，或者 css 被放在了文档底
          部。

    白屏：有些浏览器渲染机制（比如chrome）要先构建 DOM 树和 CSSOM 树，构建完成后再进行渲染，如果 CSS 部分放在 HTML 
         尾部，由于 CSS 未加载完成，浏览器迟迟未渲染，从而导致白屏；也可能是把 js 文件放在头部，脚本的加载会阻塞后面
         文档内容的解析，从而页面迟迟未渲染出来，出现白屏问题。
   ```
   详细资料可以参考：
    [《前端魔法堂：解秘 FOUC》](https://juejin.im/entry/58f867045c497d0058e2ff3a)
    [《白屏问题和 FOUC》](https://www.jianshu.com/p/6617efa874b0)

#### 23. 如何优化关键渲染路径？（浏览器渲染过程）
   ```
标签语义化
定义样式 在要改变样式时修改类名
...

----
关键资源数量
关键路径长度
关键字节数量
    （1）对关键路径进行分析和特性描述：资源数、字节数、长度。
    （2）最大限度减少关键资源的数量：删除它们，延迟它们的下载，将它们标记为异步等。
    （3）优化关键字节数以缩短下载时间（往返次数）。
    （4）优化其余关键资源的加载顺序：您需要尽早下载所有关键资产，以缩短关键路径长度。
   ```
   详细资料可以参考：
   [《优化关键渲染路径》](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path?hl=zh-cn)

#### 24. 什么是重绘和回流？（浏览器绘制过程）

   ```
(错误)
重绘
	结构改变,比如图片删除 input输入等
回流
	样式改变,比如背景色改变
重绘一定引起回流, 回流不一定会重绘

-----
    重绘: 当渲染树中的一些元素需要更新属性，而这些属性只是影响元素的外观、风格，而不会影响布局的操作，比如 background
          -color，我们将这样的操作称为重绘。
    
    回流：当渲染树中的一部分（或全部）因为元素的规模尺寸、布局、隐藏等改变而需要重新构建的操作，会影响到布局的操作，这样
         的操作我们称为回流。

    常见引起回流属性和方法：

    任何会改变元素几何信息（元素的位置和尺寸大小）的操作，都会触发回流。

    （1）添加或者删除可见的 DOM 元素；
    （2）元素尺寸改变——边距、填充、边框、宽度和高度
    （3）内容变化，比如用户在 input 框中输入文字
    （4）浏览器窗口尺寸改变——resize事件发生时
    （5）计算 offsetWidth 和 offsetHeight 属性
    （6）设置 style 属性的值
    （7）当你修改网页的默认字体时。

    回流必定会发生重绘，重绘不一定会引发回流。回流所需的成本比重绘高的多，改变父节点里的子节点很可能会导致父节点的一系列
    回流。
   ```
   常见引起重绘属性和方法：

   ![常见引起回流属性和方法](https://cavszhouyou-1254093697.cos.ap-chongqing.myqcloud.com/note-14.png)

   常见引起回流属性和方法：

   ![常见引起重绘属性和方法](https://cavszhouyou-1254093697.cos.ap-chongqing.myqcloud.com/note-13.png)

   详细资料可以参考：
   [《浏览器的回流与重绘》](https://juejin.im/post/5a9923e9518825558251c96a)

#### 25. 如何减少回流？（浏览器绘制过程）
   ```
定义好改变前后样式,在要改变样式时改变类名等

---
    （1）使用 transform 替代 top

    （2）不要把节点的属性值放在一个循环里当成循环里的变量

    （3）不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局

    （4）把 DOM 离线后修改。如：使用 documentFragment 对象在内存里操作 DOM

    （5）不要一条一条地修改 DOM 的样式。与其这样，还不如预先定义好 css 的 class，然后修改 DOM 的 className。
   ```

#### 26. 为什么操作 DOM 慢？（浏览器绘制过程）
   ```
   js代码过多, 尽量做到复用代码
   
   ---
    一些 DOM 的操作或者属性访问可能会引起页面的回流和重绘，从而引起性能上的消耗。
   ```

#### 27. DOMContentLoaded 事件和 Load 事件的区别？
   ```
DOMContentLoaded 
	文档加载完毕
Load
	页面加载完毕
	
---
    当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和
    子框架的加载完成。

    Load 事件是当所有资源加载完成后触发的。
   ```
   详细资料可以参考：
   [《DOMContentLoaded 事件 和 Load 事件的区别？》](https://www.jianshu.com/p/ca8dae435a2c)


#### 28. HTML5 有哪些新特性、移除了那些元素？
   ```
标签语义化
	head nav foot stone em 等元素语义化
新增 audio video标签
移除 b...


----
    HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。

    新增的有：
     
    绘画 canvas;
    用于媒介回放的 video 和 audio 元素;
    本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;
    sessionStorage 的数据在浏览器关闭后自动删除;
    语意化更好的内容元素，比如 article、footer、header、nav、section;
    表单控件，calendar、date、time、email、url、search;
    新的技术 webworker, websocket;
    新的文档属性 document.visibilityState

    移除的元素有：

    纯表现的元素：basefont，big，center，font, s，strike，tt，u;
    对可用性产生负面影响的元素：frame，frameset，noframes；
   ```

#### 29. 如何处理 HTML5 新标签的浏览器兼容问题？
   ```html
docment.creatElement()新建标签
对新建标签添加相对于的属性

----
    （1） IE8/IE7/IE6 支持通过 document.createElement 方法产生的标签，可以利用这一特性让这些浏览器
        支持 HTML5 新标签，浏览器支持新标签后，还需要添加标签默认的样式。

    （2） 当然也可以直接使用成熟的框架，比如 html5shiv ;
         `<!--[if lt IE 9]>
         <script> src="https://cdn.jsdelivr.net/npm/html5shiv/dist/html5shiv.min.js"</script>
         <![endif]-->`

         [if lte IE 9]……[endif] 判断 IE 的版本，限定只有 IE9 以下浏览器版本需要执行的语句。
   ```

#### 30. 简述一下你对 HTML 语义化的理解？

   相关知识点：
   ```
   使得更好的进行SEO优化, 标签语义化对爬虫更加友好
   阅读性更加优秀, 提高阅读更改的过程
   对浏览器更加友好, 标签的语义化让浏览器知道该用什么方式渲染
   
   ----
    （1） 用正确的标签做正确的事情。
    （2） html 语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;
    （3） 即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的;
    （4） 搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于 SEO ;
    （5） 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。
   ```

   回答：
   ```
   
   ```
   详细资料可以参考：
   [《语义化的 HTML 结构到底有什么好处？》](https://www.html.cn/archives/1668)
   [《如何理解 Web 语义化？》](https://www.zhihu.com/question/20455165)
   [《我的 HTML 会说话——从实用出发，谈谈 HTML 的语义化》](https://juejin.im/post/5a9c8866f265da23741072bf#heading-5)

#### 31. b 与 strong 的区别和 i 与 em 的区别？
   ```
b strong 
	b只是告诉浏览器这个地方应该加粗 strong告诉浏览器这里的意义加重 语义更强的强调文本
i em 
	em 表示一般的强调文本
	
更加利于SEO优化
   ```

   详细资料可以参考：
   [《HTML5 中的 b/strong，i/em 有什么区别？》](https://www.zhihu.com/question/19551271)


#### 32. 前端需要注意哪些 SEO ？
   ```
标签语义化
herd标签中对代码进行声明
为搜索引擎提供关键词

----
    （1）合理的 title、description、keywords：搜索对着三项的权重逐个减小，title 值强调重点即可，重要关键词出现不要超
        过2次，而且要靠前，不同页面 title 要有所不同；description 把页面内容高度概括，长度合适，不可过分堆砌关键词，不
        同页面 description 有所不同；keywords 列举出重要关键词即可。

    （2）语义化的 HTML 代码，符合 W3C 规范：语义化代码让搜索引擎容易理解网页。

    （3）重要内容 HTML 代码放在最前：搜索引擎抓取 HTML 顺序是从上到下，有的搜索引擎对抓取长度有限制，保证重要内容肯定被
        抓取。
 
    （4）重要内容不要用 js 输出：爬虫不会执行 js 获取内容

    （5）少用 iframe：搜索引擎不会抓取 iframe 中的内容

    （6）非装饰性图片必须加 alt

    （7）提高网站速度：网站速度是搜索引擎排序的一个重要指标
   ```

#### 33. HTML5 的离线储存怎么使用，工作原理能不能解释一下？
   ```
...

---
    在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。

    原理：HTML5 的离线存储是基于一个新建的 .appcache 文件的缓存机制（不是存储技术），通过这个文件上的解析清单离线存储资
         源，这些资源就会像 cookie 一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面
         展示。

    如何使用：

    （1）创建一个和 html 同名的 manifest 文件，然后在页面头部像下面一样加入一个 manifest 的属性。

        <html lang="en" manifest="index.manifest">

    （2）在如下 cache.manifest 文件的编写离线存储的资源。
      	CACHE MANIFEST
      	#v0.11
      	CACHE:
      	js/app.js
      	css/style.css
      	NETWORK:
      	resourse/logo.png
      	FALLBACK:
      	/ /offline.html

        CACHE: 表示需要离线存储的资源列表，由于包含 manifest 文件的页面将被自动离线存储，所以不需要把页面自身也列出
               来。

        NETWORK: 表示在它下面列出来的资源只有在在线的情况下才能访问，他们不会被离线存储，所以在离线情况下无法使用这些
                 资源。不过，如果在 CACHE 和 NETWORK 中有一个相同的资源，那么这个资源还是会被离线存储，也就是说 C
                 ACHE 的优先级更高。

        FALLBACK: 表示如果访问第一个资源失败，那么就使用第二个资源来替换他，比如上面这个文件表示的就是如果访问根目录下
                  任何一个资源失败了，那么就去访问 offline.html 。

    （3）在离线状态时，操作 window.applicationCache 进行离线缓存的操作。


    如何更新缓存：

    （1）更新 manifest 文件
    （2）通过 javascript 操作
    （3）清除浏览器缓存

    注意事项：

    （1）浏览器对缓存数据的容量限制可能不太一样（某些浏览器设置的限制是每个站点 5MB）。
    （2）如果 manifest 文件，或者内部列举的某一个文件不能正常下载，整个更新过程都将失败，浏览器继续全部使用老的缓存。
    （3）引用 manifest 的 html 必须与 manifest 文件同源，在同一个域下。
    （4）FALLBACK 中的资源必须和 manifest 文件同源。
    （5）当一个资源被缓存后，该浏览器直接请求这个绝对路径也会访问缓存中的资源。
    （6）站点中的其他页面即使没有设置 manifest 属性，请求的资源如果在缓存中也从缓存中访问。
    （7）当 manifest 文件发生改变时，资源请求本身也会触发更新。

   ```

   详细的使用可以参考：
   [《HTML5 离线缓存-manifest 简介》](https://yanhaijing.com/html/2014/12/28/html5-manifest/)
   [《有趣的 HTML5：离线存储》](https://segmentfault.com/a/1190000000732617)


#### 34. 浏览器是怎么对 HTML5 的离线储存资源进行管理和加载的呢？
   ```
...

----
    在线的情况下，浏览器发现 html 头部有 manifest 属性，它会请求 manifest 文件，如果是第一次访问 app ，那么浏览器
    就会根据 manifest 文件的内容下载相应的资源并且进行离线存储。如果已经访问过 app 并且资源已经离线存储了，那么浏览器
    就会使用离线的资源加载页面，然后浏览器会对比新的 manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做
    任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。

    离线的情况下，浏览器就直接使用离线存储的资源。
   ```

#### 35. 常见的浏览器端的存储技术有哪些？
   ```
localStore
	持久化本地存储	 大小5M可能更多
s...Store
	浏览器关闭销毁  大小5M可能更多
cookie
	有时间限制     大小4k
	
	
----
    浏览器常见的存储技术有 cookie、localStorage 和 sessionStorage。

    还有两种存储技术用于大规模数据存储，webSQL（已被废除）和 indexDB。

    IE 支持 userData 存储数据，但是基本很少使用到，除非有很强的浏览器兼容需求。
   ```
   详细的资料可以参考：
   [《很全很全的前端本地存储讲解》](https://segmentfault.com/a/1190000012578794#articleHeader0)

#### 36. 请描述一下 cookies，sessionStorage 和 localStorage 的区别？

   相关资料：
   ```
localStore
	持久化本地存储	 大小5M可能更多
s...Store
	浏览器关闭销毁  大小5M可能更多
cookie
	有时间限制     大小4k
	
	
----
    SessionStorage， LocalStorage， Cookie 这三者都可以被用来在浏览器端存储数据，而且都是字符串类型的键值对。区别
    在于前两者属于 HTML5 WebStorage，创建它们的目的便于客户端存储数据。而 cookie 是网站为了标示用户身份而储存在用户
    本地终端上的数据（通常经过加密）。cookie 数据始终在同源（协议、主机、端口相同）的 http 请求中携带（即使不需要），会
    在浏览器和服务器间来回传递。
    
    
    存储大小：
      	cookie 数据大小不能超过4 k 。
      	sessionStorage 和 localStorage 虽然也有存储大小的限制，但比 cookie 大得多，可以达到 5M 或更大。

    有期时间：
      	localStorage    存储持久数据，浏览器关闭后数据不丢失除非主动删除数据。
      	sessionStorage  数据在页面会话结束时会被清除。页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会
                        保持原来的页面会话。在新标签或窗口打开一个页面时会在顶级浏览上下文中初始化一个新的会话。
      	cookie          设置的 cookie 过期时间之前一直有效，即使窗口或浏览器关闭。
     
    作用域：
        sessionStorage  只在同源的同窗口（或标签页）中共享数据，也就是只在当前会话中共享。
        localStorage    在所有同源窗口中都是共享的。
        cookie          在所有同源窗口中都是共享的。
   ```

   回答：
   ```

   ```

   详细的资料可以参考：
   [《请描述一下 cookies，sessionStorage 和 localStorage 的区别？》](https://segmentfault.com/a/1190000017423117)
   [《浏览器数据库 IndexedDB 入门教程》](http://www.ruanyifeng.com/blog/2018/07/indexeddb.html)

#### 37. iframe 有那些缺点？
   ```
不利于SEO
对爬虫不友好
代码结构复杂


-----
    iframe 元素会创建包含另外一个文档的内联框架（即行内框架）。

    主要缺点有：

    （1） iframe 会阻塞主页面的 onload 事件。window 的 onload 事件需要在所有 iframe 加载完毕后（包含里面的元素）才
         会触发。在 Safari 和 Chrome 里，通过 JavaScript 动态设置 iframe 的 src 可以避免这种阻塞情况。
    （2） 搜索引擎的检索程序无法解读这种页面，不利于网页的 SEO 。
    （3） iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
    （4） 浏览器的后退按钮失效。
    （5） 小型的移动设备无法完全显示框架。
   ```
   详细的资料可以参考：
   [《使用 iframe 的优缺点》](https://blog.csdn.net/yintianqin/article/details/72625785)
   [《iframe 简单探索以及 iframe 跨域处理》](https://segmentfault.com/a/1190000009891683)

#### 38. Label 的作用是什么？是怎么用的？
   ```
...


----
    label 标签来定义表单控制间的关系，当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。

    <label for="Name">Number:</label>
    <input type=“text“ name="Name" id="Name"/>
   ```

#### 39. HTML5 的 form 的自动完成功能是什么？
```
读取用户曾经填写的数据进行填写提示


----
    autocomplete 属性规定输入字段是否应该启用自动完成功能。默认为启用，设置为 autocomplete=off 可以关闭该功能。

    自动完成允许浏览器预测对字段的输入。当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项。

    autocomplete 属性适用于 <form>，以及下面的 <input> 类型：text, search, url, telephone, email, password, 
    datepickers, range 以及 color。
```

#### 40. 如何实现浏览器内多个标签页之间的通信? 

   相关资料：
   ```
WebSocket

SharedWorker 两个标签页使用同一线程
localStore
	读取本地数据
sessionStore
	读取
	
	
-----
    （1）使用 WebSocket，通信的标签页连接同一个服务器，发送消息到服务器后，服务器推送消息给所有连接的客户端。

    （2）使用 SharedWorker （只在 chrome 浏览器实现了），两个页面共享同一个线程，通过向线程发送数据和接收数据来实现标
        签页之间的双向通行。

    （3）可以调用 localStorage、cookies 等本地存储方式，localStorge 另一个浏览上下文里被添加、修改或删除时，它都会触
        发一个 storage 事件，我们通过监听 storage 事件，控制它的值来进行页面信息通信；

    （4）如果我们能够获得对应标签页的引用，通过 postMessage 方法也是可以实现多个标签页通信的。
   ```

   回答：
   ```

   ```
   详细的资料可以参考：

   [《WebSocket 教程》](http://www.ruanyifeng.com/blog/2017/05/websocket.html)
   [《WebSocket 协议：5分钟从入门到精通》](https://www.cnblogs.com/chyingp/p/websocket-deep-in.html)
   [《WebSocket 学习（一）——基于 socket.io 实现简单多人聊天室》](https://segmentfault.com/a/1190000011538416)
   [《使用 Web Storage API》](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
   [《JavaScript 的多线程，Worker 和 SharedWorker》](https://www.zhuwenlong.com/blog/article/590ea64fe55f0f385f9a12e5)
   [《实现多个标签页之间通信的几种方法》](https://juejin.im/post/5acdba01f265da23826e5633#heading-1)


#### 41. webSocket 如何兼容低版本浏览器？
   ```
   ...
   
   
   -----
    Adobe Flash Socket 、
    ActiveX HTMLFile (IE) 、
    基于 multipart 编码发送 XHR 、
    基于长轮询的 XHR
   ```

#### 42. 页面可见性（Page Visibility API） 可以有哪些用途？
   ```
预测用户关闭标签页或浏览器以便于及时存储关键数据
屏蔽用户使用刷课脚本


----
    这个新的 API 的意义在于，通过监听网页的可见性，可以预判网页的卸载，还可以用来节省资源，减缓电能的消耗。比如，一旦用户
    不看网页，下面这些网页行为都是可以暂停的。

    （1）对服务器的轮询
    （2）网页动画
    （3）正在播放的音频或视频
   ```

   详细资料可以参考：
   [《Page Visibility API 教程》](http://www.ruanyifeng.com/blog/2018/10/page_visibility_api.html)

#### 43. 如何在页面上实现一个圆形的可点击区域？
   ```
css样式 border-radius
JavaScript 获取点击坐标
img 设置啥我忘了


------
    （1）纯 html 实现，使用 <area> 来给 <img> 图像标记热点区域的方式，<map> 标签用来定义一个客户端图像映射，<area> 
        标签用来定义图像映射中的区域，area 元素永远嵌套在 map 元素内部，我们可以将 area 区域设置为圆形，从而实现可点击
        的圆形区域。

    （2）纯 css 实现，使用 border-radius ，当 border-radius 的长度等于宽高相等的元素值的一半时，即可实现一个圆形的
        点击区域。

    （3）纯 js 实现，判断一个点在不在圆上的简单算法，通过监听文档的点击事件，获取每次点击时鼠标的位置，判断该位置是否在我
        们规定的圆形区域内。
   ```
   详细资料可以参考：
   [《如何在页面上实现一个圆形的可点击区域？》](https://maizi93.github.io/2017/08/29/%E5%A6%82%E4%BD%95%E5%9C%A8%E9%A1%B5%E9%9D%A2%E4%B8%8A%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E5%9C%86%E5%BD%A2%E7%9A%84%E5%8F%AF%E7%82%B9%E5%87%BB%E5%8C%BA%E5%9F%9F%EF%BC%9F/)
   [《HTML <area><map> 标签及在实际开发中的应用》](https://www.zhangxinxu.com/wordpress/2017/05/html-area-map/)


#### 44. 实现不使用 border 画出 1 px 高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果。

   ```html
   height: 1px; overflow: hidde;backgrond: red;
   ```

#### 45. title 与 h1 的区别？
   ```
   H1 有明显层次分别,对页面信息的抓取也有很大的影响。
   title 没有
   ```

#### 46. `<img>` 的 title 和 alt 有什么区别？
   ```
title  鼠标移入时显示
alt 当图片无法加载时显示
   ```

#### 47. Canvas 和 SVG 有什么区别？
   ```
   Sanvas 缩放有锯齿,逐像素渲染
   SVG    缩放没有锯齿
   
   
   
   ------
    Canvas 是一种通过 JavaScript 来绘制 2D 图形的方法。Canvas 是逐像素来进行渲染的，因此当我们对 Canvas 进行缩放时，
    会出现锯齿或者失真的情况。
    
    SVG 是一种使用 XML 描述 2D 图形的语言。SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。我们可以为某个元素
    附加 JavaScript 事件监听函数。并且 SVG 保存的是图形的绘制方法，因此当 SVG 图形缩放时并不会失真。
   ```
   详细资料可以参考：
   [《SVG 与 HTML5 的 canvas 各有什么优点，哪个更有前途？》](https://www.zhihu.com/question/19690014)

#### 48. 网页验证码是干嘛的，是为了解决什么安全问题？
   ```
   避免黑客穷举密码
   避免DDOS攻击
   防止爬虫
   
   
   ----
    （1）区分用户是计算机还是人的公共全自动程序。可以防止恶意破解密码、刷票、论坛灌水
    （2）有效防止黑客对某一个特定注册用户用特定程序暴力破解方式进行不断的登陆尝试
   ```

#### 49. 渐进增强和优雅降级的定义
   ```
渐进增强
	先采用兼容性强的元素编写代码,后为高等级浏览器逐步配置新属性样式\代码
	二者在浏览器呈现的样式可能会有明显区别
优雅降级
	先对新式浏览器编写, 后逐步适配低级浏览器\
	
	
----
    渐进增强：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的
            用户体验。

    优雅降级：一开始就根据高版本浏览器构建完整的功能，然后再针对低版本浏览器进行兼容。
   ```

#### 50. attribute 和 property 的区别是什么？
   ```
   attribute 
   	元素属性可设置
   property 
   	不可设置
   ```

#### 51. 对 可用性、可访问性、可维护性的理解
   ```
 可用性
 	代码的样式结构是否有问题, 功能实现没有BUG
 可访问性
 	对残障人士是否友好
 可维护性
 	代码是否简洁, 结构是否清晰, 问题定位是否快速等
 	
   ```

#### 52. IE 各版本和 Chrome 可以并行下载多少个资源？
   ```
    IE6 为2 
    其他 为6
   ```

#### 53. Flash、Ajax 各自的优缺点，在使用中如何取舍？
   ```
 Flash
 	优点
 		对图像友好
 	缺点
 		文本支持不足
 Ajax
 	优点
 		对文本友好
 	缺点
 		对图像支持不足
 		
 具体问题具体分析
   ```

#### 54. 怎么重构页面？
   ```
    结构更加友好
    CSS
    更加优秀的页面效果和使用体验
   ```

#### 55. 浏览器架构
   ```
    用户界面
    	JavaScript引擎
    	
    	
    ----
    用户界面
    	* 主进程
    	* 内核
    		* 渲染引擎
    		* JS 引擎
   			* 执行栈
           * 事件触发线程
           	* 消息队列
           		* 微任务
           		* 宏任务
           * 网络异步线程
           * 定时器线程
   ```

#### 56. 常用的 meta 标签
   ```
 ...
 
 ----
     <meta> 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。
    <meta> 标签位于文档的头部，不包含任何内容。<meta> 标签的属性定义了与文档相关联的名称/值对。

    <!DOCTYPE html>  H5标准声明，使用 HTML5 doctype，不区分大小写
    <head lang="en"> 标准的 lang 属性写法
    <meta charset="utf-8">    声明文档使用的字符编码
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>   优先使用 IE 最新版本和 Chrome
    <meta name="description" content="不超过150个字符"/>       页面描述
    <meta name="keywords" content=""/>      页面关键词者
    <meta name="author" content="name, email@gmail.com"/>    网页作
    <meta name="robots" content="index,follow"/>      搜索引擎抓取
    <meta name="viewport" content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no"> 为移动设备添加 viewport
    <meta name="apple-mobile-web-app-title" content="标题"> iOS 设备 begin
    <meta name="apple-mobile-web-app-capable" content="yes"/>  添加到主屏后的标题（iOS 6 新增）
    是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏
    <meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL">
    添加智能 App 广告条 Smart App Banner（iOS 6+ Safari）
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <meta name="format-detection" content="telphone=no, email=no"/>  设置苹果工具栏颜色
    <meta name="renderer" content="webkit">  启用360浏览器的极速模式(webkit)
    <meta http-equiv="X-UA-Compatible" content="IE=edge">     避免IE使用兼容模式
    <meta http-equiv="Cache-Control" content="no-siteapp" />    不让百度转码
    <meta name="HandheldFriendly" content="true">     针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓
    <meta name="MobileOptimized" content="320">   微软的老式浏览器
    <meta name="screen-orientation" content="portrait">   uc强制竖屏
    <meta name="x5-orientation" content="portrait">    QQ强制竖屏
    <meta name="full-screen" content="yes">              UC强制全屏
    <meta name="x5-fullscreen" content="true">       QQ强制全屏
    <meta name="browsermode" content="application">   UC应用模式
    <meta name="x5-page-mode" content="app">    QQ应用模式
    <meta name="msapplication-tap-highlight" content="no">    windows phone 点击无高光
    设置页面不缓存
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
   ```
   详细资料可以参考：
   [《Meta 标签用法大全》](http://www.cnblogs.com/qiumohanyu/p/5431859.html)

#### 57. css reset 和 normalize.css 有什么区别？

   相关知识点：
   ```
  css reset
  	将所有浏览器自带样式重置
  normalize.css
  	在尽可能的保留浏览器默认样式的前提下保持一致并与现代标准相符合
   ```

   回答：
   ```
 
   ```
   详细资料可以参考：
   [《关于CSS Reset 那些事（一）之 历史演变与 Normalize.css》](https://segmentfault.com/a/1190000003021766#articleHeader0)
   [《Normalize.css 和 Reset CSS 有什么本质区别没？》](https://segmentfault.com/q/1010000000117189)

#### 58. 用于预格式化文本的标签是？
   ```
pre
代码内格式就是展示格式
   ```

#### 59. DHTML 是什么？
   ```
 将JavaScript css html 结合的一种语言
 更加动态化
 
 
 ----
     DHTML 将 HTML、JavaScript、DOM 以及 CSS 组合在一起，用于创造动态性更强的网页。通过 JavaScript 和 HTML DOM，能
    够动态地改变 HTML 元素的样式。

    DHTML 实现了网页从 Web 服务器下载后无需再经过服务的处理，而在浏览器中直接动态地更新网页的内容、排版样式和动画的功
    能。例如，当鼠标指针移到文章段落中时，段落能够变成蓝色，或者当鼠标指针移到一个超级链接上时，会自动生成一个下拉式子链
    接目录等。

    包括：
    （1）动态内容（Dynamic Content）：动态地更新网页内容，可“动态”地插入、修改或删除网页的元件，如文字、图像、标记等。

    （2）动态排版样式（Dynamic Style Sheets）：W3C 的 CSS 样式表提供了设定 HTML 标记的字体大小、字形、样式、粗细、
        文字颜色、行高度、加底线或加中间横线、缩排、与边缘距离、靠左右或置中、背景图片或颜色等排版功能，而“动态排版样
        式”即可以“动态”地改变排版样式。
   ```

#### 60. head 标签中必不少的是？
   ```
title 
   ```

#### 61. HTML5 新增的表单元素有？
   ```
    ...
    
    
    -----
    datalist 规定输入域的选项列表，通过 option 创建！ 
    
    keygen 提供一种验证用户的可靠方法，密钥对生成器，私钥存于客户端，公钥发到服务器，用于之后验证客户端证书！
    
    output 元素用于不同类型的输出！
   ```

#### 62. 在 HTML5 中，哪个方法用于获得用户的当前位置？
   ```
    getCurrentposition
   ```

#### 63. 文档的不同注释方式？
   ```
    html
    	<!-- -->
    css
    	/* */
    JavaScript
    	//
    	/* */
   ```

#### 64. disabled 和 readonly 的区别？
   ```
 disabled 
 	禁用
 readonly 
 	只读
   ```

#### 65. 主流浏览器内核私有属性 css 前缀？
   ```
   -o
   ...
   
   -----
    mozilla 内核 （firefox,flock 等）    -moz
    webkit  内核 （safari,chrome 等）   -webkit
    opera   内核 （opera 浏览器）        -o
    trident 内核 （ie 浏览器）           -ms
   ```

#### 66. 前端性能优化？
   ```
 页面代码
 	JS引用放后
 	CSS放前
 	分模块
 	代码复用
 	首页代码精简
 服务器
 	DNS
 	带宽
 	性能
 	服务器选人
   ```
   详细的资料可以参考：
   [《前端性能优化之雅虎35条军规》](https://juejin.im/post/5b73ef38f265da281e048e51#heading-10)
   [《你真的了解 gzip 吗？》](https://juejin.im/entry/58709b9a128fe1006b29cd5d)
   [《前端性能优化之 gzip》](https://segmentfault.com/a/1190000012571492)

#### 67. Chrome 中的 Waterfall ？

```
浏览器根据HTML中外连资源出现的顺序，依次放入队列（队列），然后根据优先级确定向服务器获取资源的顺序。同优先级的资源根据HTML中出现的先后顺序来向服务器获取资源。
```



   详细资料可以参考：
   [《前端性能之 Chrome 的 Waterfall》](https://blog.csdn.net/carian_violet/article/details/84954360)
   [《教你读懂网络请求的瀑布图》](https://blog.csdn.net/csdn_girl/article/details/54911632)    [《前端妹子跟我抱怨她们的页面加载很慢的时候，如何在她面前优雅地装逼？》](https://www.zhihu.com/question/27085552/answer/35194131)


#### 68. 扫描二维码登录网页是什么原理，前后两个事件是如何联系的？
   ```
	核心过程应该是：浏览器获得一个临时 id，通过长连接等待客户端扫描带有此 id 的二维码后，
	从长连接中获得客户端上报给 server的帐号信息进行展示。并在客户端点击确认后，获得服务器授信的令牌，进行随后的信息交互过程。在超时、网络断开、其他设备上登录后，此前获得的令牌或丢失、或失效，对授权过程形成有效的安全防护。

    我的理解

    二维码登录网页的基本原理是，用户进入登录网页后，服务器生成一个 uid 来标识一个用户。对应的二维码对应了一个对应 uid 
    的链接，任何能够识别二维码的应用都可以获得这个链接，但是它们没有办法和对应登录的服务器响应。比如微信的二维码登录，只
    有用微信识这个二维码才有效。当微信客户端打开这个链接时，对应的登录服务器就获得了用户的相关信息。这个时候登录网页根据
    先前的长连接获取到服务器传过来的用户信息进行显示。然后提前预加载一些登录后可能用到的信息。当客户端点击确认授权登陆后，
    服务器生成一个权限令牌给网页，网页之后使用这个令牌进行信息的交互过程。由于整个授权的过程都是在手机端进行的，因此能够
    很好的防止 PC 上泛滥的病毒。并且在超时、网络断开、其他设备上登录后，此前获得的令牌或丢失、或失效，对授权过程能够形成
    有效的安全防护。
   ```
   详细资料可以参考：
   [《微信扫描二维码登录网页》](https://www.zhihu.com/question/20368066)

#### 69. Html 规范中为什么要求引用资源不加协议头`http`或者`https`？
   ```
     如果用户当前访问的页面是通过 HTTPS 协议来浏览的，那么网页中的资源也只能通过 HTTPS 协议来引用，否则浏览器会出现
    警告信息，不同浏览器警告信息展现形式不同。

    为了解决这个问题，我们可以省略 URL 的协议声明，省略后浏览器照样可以正常引用相应的资源，这项解决方案称为
     protocol-relative URL，暂且可译作协议相对 URL。

    如果使用协议相对 URL，无论是使用 HTTPS，还是 HTTP 访问页面，浏览器都会以相同的协议请求页面中的资源，避免弹出类似
    的警告信息，同时还可以节省5字节的数据量。
   ```
   详细资料可以参考：
   [《协议相对 URL》](https://www.ludou.org/the-protocol-relative-url.html)
   [《Why you need protocol-relative URLs *now*》](https://www.tuicool.com/articles/nEjU7b)