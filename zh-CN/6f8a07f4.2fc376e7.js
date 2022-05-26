(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(98)),c={id:"map-set",title:"Map \u548c Set"},p={unversionedId:"map-set",id:"map-set",isDocsHomePage:!1,title:"Map \u548c Set",description:"\u26a0 \u4ece\u7248\u672c6\u5f00\u59cb\uff0c\u5bf9 Map \u548c Set \u7684\u652f\u6301\u5fc5\u987b\u5728\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\u65f6\u901a\u8fc7\u663e\u5f0f\u8c03\u7528 enableMapSet()\u6765\u5f00\u542f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/map-set.md",slug:"/map-set",permalink:"/immer/zh-CN/map-set",editUrl:"https://github.com/immerjs/immer/edit/master/website/i18n/zh-CN/docusaurus-plugin-content-docs/current/map-set.md",version:"current",sidebar:"Immer",previous:{title:"API \u6982\u89c8",permalink:"/immer/zh-CN/api"},next:{title:"\u7c7b",permalink:"/immer/zh-CN/complex-objects"}},i=[],s={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("center",null,Object(o.b)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",class:"horizontal bordered"})),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"\u26a0 \u4ece\u7248\u672c6\u5f00\u59cb\uff0c\u5bf9 ",Object(o.b)("inlineCode",{parentName:"em"},"Map")," \u548c ",Object(o.b)("inlineCode",{parentName:"em"},"Set")," \u7684\u652f\u6301\u5fc5\u987b\u5728\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\u65f6\u901a\u8fc7\u663e\u5f0f\u8c03\u7528 ",Object(o.b)("a",{parentName:"em",href:"/immer/zh-CN/installation#pick-your-immer-version"},Object(o.b)("inlineCode",{parentName:"a"},"enableMapSet()")),"\u6765\u5f00\u542f")),Object(o.b)("p",null,"\u666e\u901a\u5bf9\u8c61\u3001\u6570\u7ec4\u3001",Object(o.b)("inlineCode",{parentName:"p"},"Map")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"Set")," \u603b\u662f\u53ef\u4ee5\u7528 Immer \u66f4\u65b0\u3002\u4e00\u4e2a\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"Map")," \u548c Immer \u7684\u793a\u4f8b:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'test("Producers can update Maps", () => {\n    const usersById_v1 = new Map()\n\n    const usersById_v2 = produce(usersById_v1, draft => {\n        // \u4fee\u6539 map \u4f1a\u751f\u6210\u4e00\u4e2a\u65b0\u7684 map\n        draft.set("michel", {name: "Michel Weststrate", country: "NL"})\n    })\n\n    const usersById_v3 = produce(usersById_v2, draft => {\n        // \u5728 map \u6df1\u5904\u8fdb\u884c\u4fee\u6539\uff0c\u540c\u6837\u4f1a\u751f\u6210\u4e00\u4e2a\u65b0\u7684 map!\n        draft.get("michel").country = "UK"\n    })\n\n    // \u6211\u4eec\u6bcf\u6b21\u90fd\u4f1a\u5f97\u5230\u4e00\u4e2a\u65b0\u7684 map\n    expect(usersById_v2).not.toBe(usersById_v1)\n    expect(usersById_v3).not.toBe(usersById_v2)\n    // \u663e\u7136\u5b83\u4eec\u7684\u5185\u5bb9\u4e0d\u540c\n    expect(usersById_v1).toMatchInlineSnapshot(`Map {}`)\n    expect(usersById_v2).toMatchInlineSnapshot(`\n        Map {\n          "michel" => Object {\n            "country": "NL",\n            "name": "Michel Weststrate",\n          },\n        }\n    `)\n    expect(usersById_v3).toMatchInlineSnapshot(`\n        Map {\n          "michel" => Object {\n            "country": "UK",\n            "name": "Michel Weststrate",\n          },\n        }\n    `)\n    // \u65e7\u7684\u4ece\u6765\u4e0d\u4f1a\u88ab\u66f4\u6539\n    expect(usersById_v1.size).toBe(0)\n    // \u8bd5\u56fe\u5728 produce \u4e4b\u5916\u4fee\u6539 map \u5bf9\u8c61\u662f\u4e0d\u884c\u7684\uff01\n    expect(() => usersById_v3.clear()).toThrowErrorMatchingInlineSnapshot(\n        `"This object has been frozen and should not be mutated"`\n    )\n})\n')),Object(o.b)("p",null,"Immer \u751f\u6210\u7684 Map \u548c Set \u5c06\u88ab\u4eba\u4e3a\u5730\u8bbe\u7f6e\u4e3a\u4e0d\u53ef\u53d8\u3002\u8fd9\u610f\u5473\u7740\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"produce")," \u4e4b\u5916\u5c1d\u8bd5 ",Object(o.b)("inlineCode",{parentName:"p"},"set"),"\u3001",Object(o.b)("inlineCode",{parentName:"p"},"clear"),"\u7b49\u53ef\u53d8\u65b9\u6cd5\u65f6\uff0c\u5b83\u4eec\u5c06\u629b\u51fa\u5f02\u5e38\u3002"),Object(o.b)("p",null,"\u6ce8\u610f\uff1amap \u7684",Object(o.b)("strong",{parentName:"p"},"\u952e"),"\u6c38\u8fdc\u4e0d\u4f1a\u88ab\u66f4\u6539\uff01\u8fd9\u6837\u505a\u662f\u4e3a\u4e86\u907f\u514d\u6df7\u6dc6\u8bed\u4e49\u5e76\u4fdd\u6301\u952e\u59cb\u7ec8\u5f15\u7528\u76f8\u7b49"))}u.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),b=r,d=m["".concat(c,".").concat(b)]||m[b]||l[b]||o;return n?a.a.createElement(d,p(p({ref:t},s),{},{components:n})):a.a.createElement(d,p({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);