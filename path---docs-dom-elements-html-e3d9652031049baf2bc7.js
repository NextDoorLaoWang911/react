webpackJsonp([0x6ba27412d2be],{870:function(e,t){e.exports={data:{markdownRemark:{html:'<p>React实现了一套与浏览器无关的DOM系统，兼顾了性能和跨浏览器的兼容性。借此机会，我们清理了浏览器DOM实现中一些不一致的问题。</p>\n<p>在React中，所有的DOM特性和属性（包括事件处理函数）都是小驼峰命名法命名。比如说，与HTML中的<code class="gatsby-code-text">tabindex</code>属性对应的React实现命名则是<code class="gatsby-code-text">tabIndex</code>。<code class="gatsby-code-text">aria-*</code>和<code class="gatsby-code-text">data-*</code>属性是例外的，一律使用小写字母命名。</p>\n<h2 id="react和html-dom属性的区别"><a href="#react%E5%92%8Chtml-dom%E5%B1%9E%E6%80%A7%E7%9A%84%E5%8C%BA%E5%88%AB" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React和HTML DOM属性的区别</h2>\n<p>有许多的属性在React和Html之间行为是不一样的：</p>\n<h3 id="checked属性"><a href="#checked%E5%B1%9E%E6%80%A7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>checked属性</h3>\n<p><code class="gatsby-code-text">&lt;input&gt;</code>标签type属性值为<code class="gatsby-code-text">checkbox</code>或<code class="gatsby-code-text">radio</code>时，支持<code class="gatsby-code-text">checked</code>属性。这对于构建受控组件很有用。与之相对<code class="gatsby-code-text">defaultChecked</code>这是非受控组件的属性，用来设定对应组件首次加载时是否选中状态。</p>\n<h3 id="类名属性"><a href="#%E7%B1%BB%E5%90%8D%E5%B1%9E%E6%80%A7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>类名属性</h3>\n<p>在React中，使用<code class="gatsby-code-text">className</code>属性指定一个CSS类。这个特性适用于所有的常规DOM节点和SVG元素，比如<code class="gatsby-code-text">&lt;div&gt;</code>，<code class="gatsby-code-text">&lt;a&gt;</code>和其它的元素。</p>\n<p>如果你在React中使用Web组件（这是一种不常见的使用方式），请使用<code class="gatsby-code-text">class</code>属性。</p>\n<h3 id="dangerouslysetinnerhtml函数"><a href="#dangerouslysetinnerhtml%E5%87%BD%E6%95%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>dangerouslySetInnerHTML函数</h3>\n<p><code class="gatsby-code-text">dangerouslySetInnerHTML</code>是React提供的替换浏览器DOM中的<code class="gatsby-code-text">innerHTML</code>接口的一个函数。一般而言，使用JS代码设置HTML文档的内容是危险的，因为这样很容易把你的用户信息暴露给<a href="https://en.wikipedia.org/wiki/Cross-site_scripting">跨站脚本</a>攻击.所以，你虽然可以直接在React中设置html的内容，但你要使用 <code class="gatsby-code-text">dangerouslySetInnerHTML</code> 并向该函数传递一个含有<code class="gatsby-code-text">__html</code>键的对象，用来提醒你自己这样做很危险。例如：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">createMarkup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>__html<span class="token punctuation">:</span> <span class="token string">\'First &amp;middot; Second\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">createMarkup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="htmlfor"><a href="#htmlfor" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>htmlFor</h3>\n<p>因为在javascript中<code class="gatsby-code-text">for</code>是一个保留字，所以React元素使用 <code class="gatsby-code-text">htmlFor</code>代替。</p>\n<h3 id="onchange函数"><a href="#onchange%E5%87%BD%E6%95%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>onChange函数</h3>\n<p><code class="gatsby-code-text">onChange</code>事件处理函数的表现正如你所期望的：无论form表单何时发生变化，这个事件都会被触发。我们特意不使用浏览器已有的默认行为，因为<code class="gatsby-code-text">onChange</code>在浏览器中的表现和这个名字不相称，而且React真实依靠这个事件实现了对用户输入的实时响应处理。</p>\n<h3 id="selected"><a href="#selected" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>selected</h3>\n<p>The <code class="gatsby-code-text">selected</code> attribute is supported by <code class="gatsby-code-text">&lt;option&gt;</code> components. You can use it to set whether the component is selected. This is useful for building controlled components.<code class="gatsby-code-text">&lt;option&gt;</code>组件支持<code class="gatsby-code-text">selected</code>属性。你可以使用该属性设定组件是否选中的状态。这对构建受控组件很有用。</p>\n<h3 id="style属性"><a href="#style%E5%B1%9E%E6%80%A7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>style属性</h3>\n<p> <code class="gatsby-code-text">style</code>属性接受一个键为小驼峰命名法命名的javascript对象作为值，而不是像css字符串。这和DOM中style属性接受javascript对象对象key的命名方式保持一致性，更高效而且能够防止跨站脚本（XSS）的安全漏洞。例如：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> divStyle <span class="token operator">=</span> <span class="token punctuation">{</span>\n  color<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n  backgroundImage<span class="token punctuation">:</span> <span class="token string">\'url(\'</span> <span class="token operator">+</span> imgUrl <span class="token operator">+</span> <span class="token string">\')\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">HelloWorldComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>divStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Hello World<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>要注意，样式属性不会自动补齐前缀的。为了支持旧的浏览器，你需要手动支持相关的样式特性：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> divStyle <span class="token operator">=</span> <span class="token punctuation">{</span>\n  WebkitTransition<span class="token punctuation">:</span> <span class="token string">\'all\'</span><span class="token punctuation">,</span> <span class="token comment">// note the capital \'W\' here</span>\n  msTransition<span class="token punctuation">:</span> <span class="token string">\'all\'</span> <span class="token comment">// \'ms\' is the only lowercase vendor prefix</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">ComponentWithTransition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>divStyle<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>This should work cross<span class="token operator">-</span>browser<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>样式key使用小驼峰命名法是为了和JS访问DOM特性对对象的处理保持一致性（例如 <code class="gatsby-code-text">node.style.backgroundImage</code>）。浏览器后缀<a href="http://www.andismith.com/blog/2012/02/modernizr-prefixed/">除了<code class="gatsby-code-text">ms</code></a>以外，都应该以大写字母开头。这就是为什么<code class="gatsby-code-text">WebkitTransition</code>有一个大写字母<code class="gatsby-code-text">W</code>。</p>\n<h3 id="suppresscontenteditablewarning"><a href="#suppresscontenteditablewarning" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>suppressContentEditableWarning</h3>\n<p>一般来说，当一个拥有子节点的元素被标记为<code class="gatsby-code-text">contentEditable</code>时，React会发出一个警告信息，因为此时<code class="gatsby-code-text">contentEditable</code>是无效的。这个属性会触发这样的警告信息。一般不要使用这个属性，除非你要构建一个类似<a href="https://facebook.github.io/draft-js/">Draft.js</a>这样需要手动处理<code class="gatsby-code-text">contentEditable</code>属性的库。</p>\n<h3 id="value"><a href="#value" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>value</h3>\n<p><code class="gatsby-code-text">&lt;input&gt;</code> 和 <code class="gatsby-code-text">&lt;textarea&gt;</code> 组件都支持<code class="gatsby-code-text">value</code>属性。你可以使用该属性设置组件的值。这对构建受控组件非常有用。<code class="gatsby-code-text">defaultValue</code>属性对应的是非受控组件的属性，用来设置组件第一次加载时的值。</p>\n<h2 id="所有受支持的html属性"><a href="#%E6%89%80%E6%9C%89%E5%8F%97%E6%94%AF%E6%8C%81%E7%9A%84html%E5%B1%9E%E6%80%A7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>所有受支持的HTML属性</h2>\n<p>React支持以下所有的属性，同时也支持所有的<code class="gatsby-code-text">data-*</code> 和 <code class="gatsby-code-text">aria-*</code>属性：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">accept acceptCharset accessKey action allowFullScreen allowTransparency alt\nasync autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\ncharSet checked cite classID className colSpan cols content contentEditable\ncontextMenu controls coords crossOrigin data dateTime default defer dir\ndisabled download draggable encType form formAction formEncType formMethod\nformNoValidate formTarget frameBorder headers height hidden high href hrefLang\nhtmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label\nlang list loop low manifest marginHeight marginWidth max maxLength media\nmediaGroup method min minLength multiple muted name noValidate nonce open\noptimum pattern placeholder poster preload profile radioGroup readOnly rel\nrequired reversed role rowSpan rows sandbox scope scoped scrolling seamless\nselected shape size sizes span spellCheck src srcDoc srcLang srcSet start step\nstyle summary tabIndex target title type useMap value width wmode wrap</code></pre>\n      </div>\n<p>React也支持以下这些RDFa属性（有几个RDFa属性和HTML属性重叠，所以不包含在以下列表中）：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">about datatype inlist prefix property resource typeof vocab</code></pre>\n      </div>\n<p>而且，React也支持下列非标准属性：</p>\n<ul>\n<li><code class="gatsby-code-text">autoCapitalize autoCorrect</code> for Mobile Safari.</li>\n<li><code class="gatsby-code-text">color</code> for <code class="gatsby-code-text">&lt;link rel=&quot;mask-icon&quot; /&gt;</code> in Safari.</li>\n<li><code class="gatsby-code-text">itemProp itemScope itemType itemRef itemID</code> for <a href="http://schema.org/docs/gs.html">HTML5 microdata</a>.</li>\n<li><code class="gatsby-code-text">security</code> for older versions of Internet Explorer.</li>\n<li><code class="gatsby-code-text">unselectable</code> for Internet Explorer.</li>\n<li><code class="gatsby-code-text">results autoSave</code> for WebKit/Blink input fields of type <code class="gatsby-code-text">search</code>.</li>\n</ul>\n<h2 id="所有受支持的svg属性"><a href="#%E6%89%80%E6%9C%89%E5%8F%97%E6%94%AF%E6%8C%81%E7%9A%84svg%E5%B1%9E%E6%80%A7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>所有受支持的SVG属性</h2>\n<p>React支持以下的SVG属性：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">accentHeight accumulate additive alignmentBaseline allowReorder alphabetic\namplitude arabicForm ascent attributeName attributeType autoReverse azimuth\nbaseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight\nclip clipPath clipPathUnits clipRule colorInterpolation\ncolorInterpolationFilters colorProfile colorRendering contentScriptType\ncontentStyleType cursor cx cy d decelerate descent diffuseConstant direction\ndisplay divisor dominantBaseline dur dx dy edgeMode elevation enableBackground\nend exponent externalResourcesRequired fill fillOpacity fillRule filter\nfilterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize\nfontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy\ng1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef\ngradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic\nimageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength\nkerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor\nlimitingConeAngle local markerEnd markerHeight markerMid markerStart\nmarkerUnits markerWidth mask maskContentUnits maskUnits mathematical mode\nnumOctaves offset opacity operator order orient orientation origin overflow\noverlinePosition overlineThickness paintOrder panose1 pathLength\npatternContentUnits patternTransform patternUnits pointerEvents points\npointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits\nr radius refX refY renderingIntent repeatCount repeatDur requiredExtensions\nrequiredFeatures restart result rotate rx ry scale seed shapeRendering slope\nspacing specularConstant specularExponent speed spreadMethod startOffset\nstdDeviation stemh stemv stitchTiles stopColor stopOpacity\nstrikethroughPosition strikethroughThickness string stroke strokeDasharray\nstrokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity\nstrokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor\ntextDecoration textLength textRendering to transform u1 u2 underlinePosition\nunderlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic\nvHanging vIdeographic vMathematical values vectorEffect version vertAdvY\nvertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing\nwritingMode x x1 x2 xChannelSelector xHeight xlinkActuate xlinkArcrole\nxlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlns xmlnsXlink xmlBase\nxmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan</code></pre>\n      </div>',frontmatter:{title:"DOM Elements",next:null,prev:null},fields:{path:"docs/reference-dom-elements.md",slug:"docs/dom-elements.html"}}},pathContext:{slug:"docs/dom-elements.html"}}}});
//# sourceMappingURL=path---docs-dom-elements-html-e3d9652031049baf2bc7.js.map