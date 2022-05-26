(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{140:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/performance-c7f59d06ec36f4a05b6403daada96542.png"},77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),o=(r(0),r(98)),i={id:"performance",title:"Immer performance"},s={unversionedId:"performance",id:"performance",isDocsHomePage:!1,title:"Immer performance",description:"<div",source:"@site/docs/performance.mdx",slug:"/performance",permalink:"/immer/performance",editUrl:"https://github.com/immerjs/immer/edit/master/website/docs/performance.mdx",version:"current",sidebar:"Immer",previous:{title:"Using TypeScript or Flow",permalink:"/immer/typescript"},next:{title:"External resources",permalink:"/immer/resources"}},c=[{value:"Performance tips",id:"performance-tips",children:[{value:"Pre-freeze data",id:"pre-freeze-data",children:[]},{value:"You can always opt-out",id:"you-can-always-opt-out",children:[]},{value:"For expensive search operations, read from the original state, not the draft",id:"for-expensive-search-operations-read-from-the-original-state-not-the-draft",children:[]},{value:"Pull produce as far up as possible",id:"pull-produce-as-far-up-as-possible",children:[]}]}],l={toc:c};function p(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("center",null,Object(o.b)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",className:"horizontal bordered"}))," ",Object(o.b)("details",null,Object(o.b)("summary",{className:"egghead-summary"},"egghead.io lesson 5: Leveraging Immer's structural sharing in React"),Object(o.b)("br",null),Object(o.b)("div",null,Object(o.b)("iframe",{width:"760",height:"427",scrolling:"no",src:"https://egghead.io/lessons/react-profile-react-rendering-and-optimize-with-memo-to-leverage-structural-sharing/embed"})),Object(o.b)("a",{className:"egghead-link",href:"https://egghead.io/lessons/react-profile-react-rendering-and-optimize-with-memo-to-leverage-structural-sharing"},"Hosted on egghead.io"))," ",Object(o.b)("details",null,Object(o.b)("summary",{className:"egghead-summary"},"egghead.io lesson 7: Immer will try to re-cycle data if there was no semantic change"),Object(o.b)("br",null),Object(o.b)("div",null,Object(o.b)("iframe",{width:"760",height:"427",scrolling:"no",src:"https://egghead.io/lessons/javascript-produces-immutable-data-and-avoid-unnecessary-creation-of-new-data-trees-with-immer/embed"})),Object(o.b)("a",{className:"egghead-link",href:"https://egghead.io/lessons/javascript-produces-immutable-data-and-avoid-unnecessary-creation-of-new-data-trees-with-immer"},"Hosted on egghead.io")),Object(o.b)("p",null,"Here is a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/immerjs/immer/blob/master/__performance_tests__/todo.js"},"simple benchmark")," on the performance of Immer. This test takes 50,000 todo items and updates 5,000 of them. ",Object(o.b)("em",{parentName:"p"},"Freeze")," indicates that the state tree has been frozen after producing it. This is a ",Object(o.b)("em",{parentName:"p"},"development")," best practice, as it prevents developers from accidentally modifying the state tree."),Object(o.b)("p",null,"Something that isn't reflected in the numbers above, but in reality, Immer is sometimes significantly ",Object(o.b)("em",{parentName:"p"},"faster"),' than a hand written reducer. The reason for that is that Immer will detect "no-op" state changes, and return the original state if nothing actually changed, which can avoid a lot of re-renderings for example. Cases are known where simply applying immer solved critical performance issues.'),Object(o.b)("p",null,"These tests were executed on Node 10.16.3. Use ",Object(o.b)("inlineCode",{parentName:"p"},"yarn test:perf")," to reproduce them locally."),Object(o.b)("p",null,Object(o.b)("img",{alt:"performance.png",src:r(140).default})),Object(o.b)("p",null,"Most important observation:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Immer with proxies is roughly speaking twice to three times slower as a handwritten reducer (the above test case is worst case, see ",Object(o.b)("inlineCode",{parentName:"li"},"yarn test:perf")," for more tests). This is in practice negligible."),Object(o.b)("li",{parentName:"ul"},"Immer is roughly as fast as ImmutableJS. However, the ",Object(o.b)("em",{parentName:"li"},"immutableJS + toJS")," makes clear the cost that often needs to be paid later; converting the immutableJS objects back to plain objects, to be able to pass them to components, over the network etc... (And there is also the upfront cost of converting data received from e.g. the server to immutable JS)"),Object(o.b)("li",{parentName:"ul"},"Generating patches doesn't significantly slow down immer"),Object(o.b)("li",{parentName:"ul"},"The ES5 fallback implementation is roughly twice as slow as the proxy implementation, in some cases worse.")),Object(o.b)("h2",{id:"performance-tips"},"Performance tips"),Object(o.b)("h3",{id:"pre-freeze-data"},"Pre-freeze data"),Object(o.b)("p",null,"When adding a large data set to the state tree in an Immer producer (for example data received from a JSON endpoint), it is worth to call ",Object(o.b)("inlineCode",{parentName:"p"},"freeze(json)")," on the root of the data that is being added first. To ",Object(o.b)("em",{parentName:"p"},"shallowly")," freeze it. This will allow Immer to add the new data to the tree faster, as it will avoid the need to ",Object(o.b)("em",{parentName:"p"},"recursively")," scan and freeze the new data."),Object(o.b)("h3",{id:"you-can-always-opt-out"},"You can always opt-out"),Object(o.b)("p",null,"Realize that immer is opt-in everywhere, so it is perfectly fine to manually write super performance critical reducers, and use immer for all the normal ones. Even from within a producer you opt-out from Immer for certain parts of your logic by using utilies ",Object(o.b)("inlineCode",{parentName:"p"},"original")," or ",Object(o.b)("inlineCode",{parentName:"p"},"current")," and perform some of your operations on plain JavaScript objects."),Object(o.b)("h3",{id:"for-expensive-search-operations-read-from-the-original-state-not-the-draft"},"For expensive search operations, read from the original state, not the draft"),Object(o.b)("p",null,"Immer will convert anything you read in a draft recursively into a draft as well. If you have expensive side effect free operations on a draft that involves a lot of reading, for example finding an index using ",Object(o.b)("inlineCode",{parentName:"p"},"find(Index)")," in a very large array, you can speed this up by first doing the search, and only call the ",Object(o.b)("inlineCode",{parentName:"p"},"produce")," function once you know the index. Thereby preventing Immer to turn everything that was searched for in a draft. Or, alternatively, perform the search on the original value of a draft, by using ",Object(o.b)("inlineCode",{parentName:"p"},"original(someDraft)"),", which boils to the same thing."),Object(o.b)("h3",{id:"pull-produce-as-far-up-as-possible"},"Pull produce as far up as possible"),Object(o.b)("p",null,"Always try to pull produce 'up', for example ",Object(o.b)("inlineCode",{parentName:"p"},"for (let x of y) produce(base, d => d.push(x))")," is exponentially slower than ",Object(o.b)("inlineCode",{parentName:"p"},"produce(base, d => { for (let x of y) d.push(x)})")))}p.isMDXComponent=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,b=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return r?n.a.createElement(b,s(s({ref:t},l),{},{components:r})):n.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);