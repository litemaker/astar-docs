"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[7162],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:e},p),{},{components:r})):n.createElement(f,i({ref:e},p))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9390:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:1},c="Getting Started",l={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Astar is the largest smart contract platform in the Polkadot ecosystem, supporting both Wasm and EVM. While providing native access to the Polkadot ecosystem through it's parachain slot, Astar also has bridges into other major ecosystems, including Ethereum, BSC, Cosmos, Polygon, and more. Through the #Build2Earn program, Astar offers a basic income to dApps through inflation, and provides direct funding to projects through the Astar Incubation Program.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/astar-docs/docs/getting-started",editUrl:"https://github.com/AstarNetwork/astar-docs/tree/main/docs/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Quick Start",permalink:"/astar-docs/docs/quickstart/"}},p={},u=[{value:"Overview of Docs",id:"overview-of-docs",level:2}],d={toc:u};function m(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Astar is the largest smart contract platform in the Polkadot ecosystem, supporting both Wasm and EVM. While providing native access to the Polkadot ecosystem through it's parachain slot, Astar also has bridges into other major ecosystems, including ",(0,o.kt)("a",{parentName:"p",href:"https://cbridge.celer.network/#/transfer"},"Ethereum"),", ",(0,o.kt)("a",{parentName:"p",href:"https://cbridge.celer.network/#/transfer"},"BSC"),", Cosmos, Polygon, and more. Through the #Build2Earn program, Astar offers a basic income to dApps through inflation, and provides direct funding to projects through the Astar Incubation Program."),(0,o.kt)("h2",{id:"overview-of-docs"},"Overview of Docs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"quickstart"},(0,o.kt)("strong",{parentName:"a"},"Quick Start"))," gives you the resources you need to get started\ntesting, deploying, and interacting with smart contracts on the network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"evm"},(0,o.kt)("strong",{parentName:"a"},"EVM"))," dives deeper into EVM on Astar and explains how EVM contracts can interact with other non-EVM modules through ",(0,o.kt)("a",{parentName:"li",href:"evm/precompiles"},"precompiles"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"wasm"},(0,o.kt)("strong",{parentName:"a"},"Wasm"))," provides an ",(0,o.kt)("a",{parentName:"li",href:"/astar-docs/docs/wasm/ink-ask"},"overview of ink! and ask!"),"  Wasm contract frameworks, examples for each framework,",(0,o.kt)("a",{parentName:"li",href:"wasm/dev-tooling"},"developer tooling"),", and compiling ",(0,o.kt)("a",{parentName:"li",href:"wasm/solidity-to-wasm"},"Solidity to Wasm"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"nodes"},(0,o.kt)("strong",{parentName:"a"},"Nodes"))," explains how to run full nodes, collators, indexers, and everything you need to know related to infrastructure."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"xcm"},(0,o.kt)("strong",{parentName:"a"},"XCM"))," explains how XCM is used in Astar and how developers can use it to interact with the rest of the Polkadot network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"integrations"},(0,o.kt)("strong",{parentName:"a"},"Integrations"))," provide relevant information about the ",(0,o.kt)("a",{parentName:"li",href:"integrations/wallets"},"wallets"),", ",(0,o.kt)("a",{parentName:"li",href:"integrations/bridges"},"bridges"),", ",(0,o.kt)("a",{parentName:"li",href:"integrations/indexers"},"indexers"),", and ",(0,o.kt)("a",{parentName:"li",href:"integrations/oracles"},"oracles")," that are integrated with the network.")))}m.isMDXComponent=!0}}]);