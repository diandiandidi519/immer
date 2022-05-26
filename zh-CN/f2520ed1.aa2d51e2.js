(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return m}));var r=n(3),o=n(7),a=(n(0),n(98)),d={id:"example-setstate",title:"React & Immer"},c={unversionedId:"example-setstate",id:"example-setstate",isDocsHomePage:!1,title:"React & Immer",description:"<div",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/example-setstate.mdx",slug:"/example-setstate",permalink:"/immer/zh-CN/example-setstate",editUrl:"https://github.com/immerjs/immer/edit/master/website/i18n/zh-CN/docusaurus-plugin-content-docs/current/example-setstate.mdx",version:"current",sidebar:"Immer",previous:{title:"\u67ef\u91cc\u5316 producers",permalink:"/immer/zh-CN/curried-produce"},next:{title:"\u66f4\u65b0\u6a21\u5f0f",permalink:"/immer/zh-CN/update-patterns"}},i=[{value:"useState + Immer",id:"usestate--immer",children:[]},{value:"useImmer",id:"useimmer",children:[]},{value:"useReducer + Immer",id:"usereducer--immer",children:[]},{value:"useImmerReducer",id:"useimmerreducer",children:[]},{value:"Redux + Immer",id:"redux--immer",children:[]}],s={toc:i};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("center",null,Object(a.b)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",className:"horizontal bordered"})),Object(a.b)("details",null,Object(a.b)("summary",{className:"egghead-summary"},"egghead.io \u7b2c\u516b\u8bfe: \u4f7f\u7528 Immer \u548c useState\uff0c\u6216\u8005 useImmer\u3002"),Object(a.b)("br",null),Object(a.b)("div",null,Object(a.b)("iframe",{width:"760",height:"427",scrolling:"no",src:"https://egghead.io/lessons/react-immutable-update-state-inside-react-components-with-useimmer/embed"})),Object(a.b)("a",{className:"egghead-link",href:"https://egghead.io/lessons/react-immutable-update-state-inside-react-components-with-useimmer"},"Hosted on egghead.io")),Object(a.b)("h2",{id:"usestate--immer"},"useState + Immer"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"useState")," hook \u5047\u5b9a\u5b58\u50a8\u5728\u5176\u4e2d\u7684\u4efb\u4f55 state \u90fd\u88ab\u89c6\u4e3a\u4e0d\u53ef\u53d8\u7684\u3002\u4f7f\u7528 Immer \u53ef\u4ee5\u5927\u5927\u7b80\u5316 React \u7ec4\u4ef6\u72b6\u6001\u7684\u6df1\u5ea6\u66f4\u65b0\u3002\u4e0b\u9762\u7684\u4f8b\u5b50\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"produce")," \u548c ",Object(a.b)("inlineCode",{parentName:"p"},"useState")," \uff0c\u53ef\u4ee5\u5728 ",Object(a.b)("a",{parentName:"p",href:"https://codesandbox.io/s/immer-usestate-ujkgg?file=/src/index.js"},"CodeSandbox")," \u8bd5\u8bd5\u3002"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'import React, { useCallback, useState } from "react";\nimport produce from "immer";\n\nconst TodoList = () => {\n  const [todos, setTodos] = useState([\n    {\n      id: "React",\n      title: "Learn React",\n      done: true\n    },\n    {\n      id: "Immer",\n      title: "Try Immer",\n      done: false\n    }\n  ]);\n\n  const handleToggle = useCallback((id) => {\n    setTodos(\n      produce((draft) => {\n        const todo = draft.find((todo) => todo.id === id);\n        todo.done = !todo.done;\n      })\n    );\n  }, []);\n\n  const handleAdd = useCallback(() => {\n    setTodos(\n      produce((draft) => {\n        draft.push({\n          id: "todo_" + Math.random(),\n          title: "A new todo",\n          done: false\n        });\n      })\n    );\n  }, []);\n\n  return (<div>{*/ See CodeSandbox */}</div>)\n}\n')),Object(a.b)("h2",{id:"useimmer"},"useImmer"),Object(a.b)("p",null,"\u7531\u4e8e\u6240\u6709 state \u7684\u66f4\u65b0\u90fd\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"produce")," \u5305\u88c5\u7684\u66f4\u65b0\u6a21\u5f0f\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5c06\u66f4\u65b0\u6a21\u5f0f\u5305\u88c5\u5728 ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/use-immer"},"use-immer")," \u5305\u4e2d\u6765\u7b80\u5316\u4e0a\u8ff0\u64cd\u4f5c"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'import React, { useCallback } from "react";\nimport { useImmer } from "use-immer";\n\nconst TodoList = () => {\n  const [todos, setTodos] = useImmer([\n    {\n      id: "React",\n      title: "Learn React",\n      done: true\n    },\n    {\n      id: "Immer",\n      title: "Try Immer",\n      done: false\n    }\n  ]);\n\n  const handleToggle = useCallback((id) => {\n    setTodos((draft) => {\n      const todo = draft.find((todo) => todo.id === id);\n      todo.done = !todo.done;\n    });\n  }, []);\n\n  const handleAdd = useCallback(() => {\n    setTodos((draft) => {\n      draft.push({\n        id: "todo_" + Math.random(),\n        title: "A new todo",\n        done: false\n      });\n    });\n  }, []);\n\n  // etc\n')),Object(a.b)("p",null,"\u5b8c\u6574\u7684 demo \u8bf7\u53c2\u9605 ",Object(a.b)("a",{parentName:"p",href:"https://codesandbox.io/s/use-immer-bvd5v?file=/src/index.js"},"CodeSandbox")),Object(a.b)("h2",{id:"usereducer--immer"},"useReducer + Immer"),Object(a.b)("p",null,"\u4e0e ",Object(a.b)("inlineCode",{parentName:"p"},"useState")," \u7c7b\u4f3c\uff0c",Object(a.b)("inlineCode",{parentName:"p"},"useReducer")," \u4e5f\u4e0e Immer \u5de7\u5999\u7ed3\u5408\uff0c\u5982 ",Object(a.b)("a",{parentName:"p",href:"https://codesandbox.io/s/immer-usereducer-bqpzn?file=/src/index.js:0-1018"},"CodeSandbox")," \u6240\u793a\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'import React, {useCallback, useReducer} from "react"\nimport produce from "immer"\n\nconst TodoList = () => {\n    const [todos, dispatch] = useReducer(\n        produce((draft, action) => {\n            switch (action.type) {\n                case "toggle":\n                    const todo = draft.find(todo => todo.id === action.id)\n                    todo.done = !todo.done\n                    break\n                case "add":\n                    draft.push({\n                        id: action.id,\n                        title: "A new todo",\n                        done: false\n                    })\n                    break\n                default:\n                    break\n            }\n        }),\n        [\n            /* initial todos */\n        ]\n    )\n\n    const handleToggle = useCallback(id => {\n        dispatch({\n            type: "toggle",\n            id\n        })\n    }, [])\n\n    const handleAdd = useCallback(() => {\n        dispatch({\n            type: "add",\n            id: "todo_" + Math.random()\n        })\n    }, [])\n\n    // etc\n}\n')),Object(a.b)("h2",{id:"useimmerreducer"},"useImmerReducer"),Object(a.b)("p",null,"\u540c\u4e0a\uff0c\u53ef\u4ee5\u901a\u8fc7  ",Object(a.b)("inlineCode",{parentName:"p"},"use-immer")," \u5305\u4e2d\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"useImmerReducer")," \u7b80\u5316 (",Object(a.b)("a",{parentName:"p",href:"https://codesandbox.io/s/useimmerreducer-sycpb?file=/src/index.js"},"demo"),")"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'import React, { useCallback } from "react";\nimport { useImmerReducer } from "use-immer";\n\nconst TodoList = () => {\n  const [todos, dispatch] = useImmerReducer(\n    (draft, action) => {\n      switch (action.type) {\n        case "toggle":\n          const todo = draft.find((todo) => todo.id === action.id);\n          todo.done = !todo.done;\n          break;\n        case "add":\n          draft.push({\n            id: action.id,\n            title: "A new todo",\n            done: false\n          });\n          break;\n        default:\n          break;\n      }\n    },\n    [ /* initial todos */ ]\n  );\n\n  //etc\n\n')),Object(a.b)("h2",{id:"redux--immer"},"Redux + Immer"),Object(a.b)("p",null,"Redux + Immer \u5728 ",Object(a.b)("a",{parentName:"p",href:"https://redux-toolkit.js.org/usage/immer-reducers"},"Redux Toolkit")," \u7684\u6587\u6863\u4e2d\u88ab\u5e7f\u6cdb\u4ecb\u7ecd\u3002\u5bf9\u4e8e\u6ca1\u6709 Redux Toolkit \u7684 Redux\uff0c\u53ef\u4ee5\u5e94\u7528\u4e0e\u4e0a\u9762\u5e94\u7528\u4e8e ",Object(a.b)("inlineCode",{parentName:"p"},"useReducer")," \u76f8\u540c\u7684\u6280\u5de7\uff1a\u4f7f\u7528 ",Object(a.b)("inlineCode",{parentName:"p"},"produce")," \u5305\u88c5 reducer \u51fd\u6570\uff0c\u60a8\u53ef\u4ee5\u5b89\u5168\u5730\u4fee\u6539 draft\uff01"),Object(a.b)("p",null,"\u4f8b\u5b50:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},'import produce from "immer"\n\n// \u521d\u59cb state\nconst INITIAL_STATE = [\n    /* \u4e00\u7cfb\u5217 todos */\n]\n\nconst todosReducer = produce((draft, action) => {\n    switch (action.type) {\n        case "toggle":\n            const todo = draft.find(todo => todo.id === action.id)\n            todo.done = !todo.done\n            break\n        case "add":\n            draft.push({\n                id: action.id,\n                title: "A new todo",\n                done: false\n            })\n            break\n        default:\n            break\n    }\n})\n')))}m.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),m=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=m(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(n),p=r,b=u["".concat(d,".").concat(p)]||u[p]||l[p]||a;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,d=new Array(a);d[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,d[1]=c;for(var s=2;s<a;s++)d[s]=n[s];return o.a.createElement.apply(null,d)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);