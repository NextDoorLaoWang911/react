webpackJsonp([0x8f963e49e7e3],{793:function(n,s){n.exports={data:{markdownRemark:{html:'<p>As we move closer to officially deprecating isMounted, it’s worth understanding why the function is an antipattern, and how to write code without the isMounted function.</p>\n<p>The primary use case for <code class="gatsby-code-text">isMounted()</code> is to avoid calling <code class="gatsby-code-text">setState()</code> after a component has unmounted, because calling <code class="gatsby-code-text">setState()</code> after a component has unmounted will emit a warning. The “setState warning” exists to help you catch bugs, because calling <code class="gatsby-code-text">setState()</code> on an unmounted component is an indication that your app/component has somehow failed to clean up properly. Specifically, calling <code class="gatsby-code-text">setState()</code> in an unmounted component means that your app is still holding a reference to the component after the component has been unmounted - which often indicates a memory leak!</p>\n<p>To avoid the error message, people often add lines like this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isMounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// This is bad.</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Checking <code class="gatsby-code-text">isMounted</code> before calling <code class="gatsby-code-text">setState()</code> does eliminate the warning, but it also defeats the purpose of the warning, since now you will never get the warning (even when you should!)</p>\n<p>Other uses of <code class="gatsby-code-text">isMounted()</code> are similarly erroneous; using <code class="gatsby-code-text">isMounted()</code> is a code smell because the only reason you would check is because you think you might be holding a reference after the component has unmounted.</p>\n<p>An easy migration strategy for anyone upgrading their code to avoid <code class="gatsby-code-text">isMounted()</code> is to track the mounted status yourself.  Just set a <code class="gatsby-code-text">_isMounted</code> property to true in <code class="gatsby-code-text">componentDidMount</code> and set it to false in <code class="gatsby-code-text">componentWillUnmount</code>, and use this variable to check your component’s status.</p>\n<p>An optimal solution would be to find places where <code class="gatsby-code-text">setState()</code> might be called after a component has unmounted, and fix them. Such situations most commonly occur due to callbacks, when a component is waiting for some data and gets unmounted before the data arrives. Ideally, any callbacks should be canceled in <code class="gatsby-code-text">componentWillUnmount</code>, prior to unmounting.</p>\n<p>For instance, if you are using a Flux store in your component, you must unsubscribe in <code class="gatsby-code-text">componentWillUnmount</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    mydatastore<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    mydatastore<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>If you use ES6 promises, you may need to wrap your promise in order to make it cancelable.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> cancelablePromise <span class="token operator">=</span> <span class="token function">makeCancelable</span><span class="token punctuation">(</span>\n  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>r <span class="token operator">=></span> component<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ncancelablePromise\n  <span class="token punctuation">.</span>promise\n  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'resolved\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'isCanceled\'</span><span class="token punctuation">,</span> reason<span class="token punctuation">.</span>isCanceled<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ncancelablePromise<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Cancel the promise</span>\n</code></pre>\n      </div>\n<p>Where <code class="gatsby-code-text">makeCancelable</code> was originally <a href="https://github.com/facebook/react/issues/5465#issuecomment-157888325">defined by @istarkov</a> as:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> <span class="token function-variable function">makeCancelable</span> <span class="token operator">=</span> <span class="token punctuation">(</span>promise<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> hasCanceled_ <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> wrappedPromise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>\n      val <span class="token operator">=></span> hasCanceled_ <span class="token operator">?</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">{</span>isCanceled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      error <span class="token operator">=></span> hasCanceled_ <span class="token operator">?</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">{</span>isCanceled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    promise<span class="token punctuation">:</span> wrappedPromise<span class="token punctuation">,</span>\n    <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      hasCanceled_ <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>As an added bonus for getting your code cleaned up early, getting rid of <code class="gatsby-code-text">isMounted()</code> makes it one step easier for you to upgrade to ES6 classes, where using <code class="gatsby-code-text">isMounted()</code> is already prohibited.  Happy coding!</p>',excerpt:"As we move closer to officially deprecating isMounted, it’s worth understanding why the function is an antipattern, and how to write code without the isMounted function. The primary use case for   is to avoid calling   after a component has unmounted, because calling   after a component has unmounted will emit a warning. The “setState warning” exists to help you catch bugs, because calling   on an unmounted component is an indication that your app/component has somehow failed to clean up…",frontmatter:{title:"isMounted is an Antipattern",next:null,prev:null,author:[{frontmatter:{name:"Jim Sproch",url:"http://www.jimsproch.com"}}]},fields:{date:"December 16, 2015",path:"blog/2015-12-16-ismounted-antipattern.md",slug:"/blog/2015/12/16/ismounted-antipattern.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.7: No, This Is Not the One With Hooks"},fields:{slug:"/blog/2018/12/19/react-v-16-7.html"}}},{node:{frontmatter:{title:"React 16.x Roadmap"},fields:{slug:"/blog/2018/11/27/react-16-roadmap.html"}}},{node:{frontmatter:{title:"React Conf recap: Hooks, Suspense, and Concurrent Rendering"},fields:{slug:"/blog/2018/11/13/react-conf-recap.html"}}},{node:{frontmatter:{title:"React v16.6.0: lazy, memo and contextType"},fields:{slug:"/blog/2018/10/23/react-v-16-6.html"}}},{node:{frontmatter:{title:"Create React App 2.0: Babel 7, Sass, and More"},fields:{slug:"/blog/2018/10/01/create-react-app-v2.html"}}},{node:{frontmatter:{title:"Introducing the React Profiler"},fields:{slug:"/blog/2018/09/10/introducing-the-react-profiler.html"}}},{node:{frontmatter:{title:"React v16.4.2: Server-side vulnerability fix"},fields:{slug:"/blog/2018/08/01/react-v-16-4-2.html"}}},{node:{frontmatter:{title:"You Probably Don't Need Derived State"},fields:{slug:"/blog/2018/06/07/you-probably-dont-need-derived-state.html"}}},{node:{frontmatter:{title:"React v16.4.0: Pointer Events"},fields:{slug:"/blog/2018/05/23/react-v-16-4.html"}}},{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}}]}},pathContext:{slug:"/blog/2015/12/16/ismounted-antipattern.html"}}}});
//# sourceMappingURL=path---blog-2015-12-16-ismounted-antipattern-html-9f5f4523209b2567683d.js.map