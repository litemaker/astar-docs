"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[8675],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},l=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,s(s({ref:e},l),{},{components:n})):r.createElement(f,s({ref:e},l))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8073:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={sidebar_position:1},c="Networks",u={unversionedId:"quickstart/networks",id:"quickstart/networks",title:"Networks",description:"Get started in the Astar ecosystem.",source:"@site/docs/quickstart/networks.md",sourceDirName:"quickstart",slug:"/quickstart/networks",permalink:"/astar-docs/docs/quickstart/networks",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quickstart/networks.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/astar-docs/docs/getting-started"},next:{title:"Network endpoints",permalink:"/astar-docs/docs/quickstart/endpoints"}},l={},p=[{value:"Network Endpoints",id:"network-endpoints",level:2},{value:"Faucet",id:"faucet",level:2},{value:"Astar account scheme",id:"astar-account-scheme",level:2}],d={toc:p};function m(t){var e=t.components,n=(0,o.Z)(t,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"networks"},"Networks"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Get started in the Astar ecosystem."),"\nAstar is the #1 Smart Contract Hub for WASM + EVM in the Polkadot ecosystem. Since winning its Parachain auction in January 2022, Astar Network has become the top Parachain in the Polkadot ecosystem. Astar is the leading smart contract hub that connects the Polkadot ecosystem to Ethereum, Cosmos, and major layer 1 blockchains. Astar supports dApps using multiple virtual machines\u2014namely WASM and EVM\u2014and offers the best technology solutions and financial incentives via its Build2Earn and Astar Incubation Program\xa0**for Web3 developers to build on top of a secure, scalable and interoperable blockchain."),(0,a.kt)("p",null,"Astar ecosystem has two mainnets and one testnet:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Astar Network")," - Connected to Polkadot Relay Chain as parachain"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Shiden Network")," - Connected to Kusama Relay Chain as parachain"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Shibuya")," - Connected to Astar Relay Chain as testnet parachain")),(0,a.kt)("h2",{id:"network-endpoints"},"Network Endpoints"),(0,a.kt)("p",null,"Our mainnets have two types of endpoints available for developers/users to connect to one for HTTPS and one for WSS. You can check out the\xa0",(0,a.kt)("a",{parentName:"p",href:"https://astarnetwork.github.io/astar-docs/docs/quickstart/endpoints"},"Network Endpoints"),"\xa0section of the documentation to get your own endpoint and API key from one of the supported providers."),(0,a.kt)("h2",{id:"faucet"},"Faucet"),(0,a.kt)("p",null,"To help you start building in our ecosystem, you can get tokens from our faucet through the ",(0,a.kt)("a",{parentName:"p",href:"https://portal.astar.network"},"portal"),". We provide a small amount of native tokens to help you with your smart contract deployment. Check out our documentation about how to use our faucet."),(0,a.kt)("h2",{id:"astar-account-scheme"},"Astar account scheme"),(0,a.kt)("p",null,"Astar is the only smart-contract parachain in the Polkadot ecosystem that supports multi-virtual machines (WASM and EVM). It\u2019s a challenge to have two different address schemes in one blockchain for our projects and users. Read more about ",(0,a.kt)("a",{parentName:"p",href:"https://astarnetwork.github.io/astar-docs/docs/quickstart/addresses"},"Astar account structure")," in our documentation."))}m.isMDXComponent=!0}}]);