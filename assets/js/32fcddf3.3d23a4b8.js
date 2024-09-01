"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31100],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>d});var i=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},h="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),u=r,d=h["".concat(l,".").concat(u)]||h[u]||g[u]||n;return a?i.createElement(d,o(o({ref:t},c),{},{components:a})):i.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<n;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},53243:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var i=a(58168),r=(a(96540),a(15680));const n={id:"ios",description:"You can use Lightweight Charts\u2122 inside an iOS application. To use Lightweight Charts\u2122 in that context, you can use our iOS wrapper, which will allow you to interact with Lightweight Charts\u2122 library, which will be rendered in a web view.",keywords:["charts","iOS","canvas","charting library","charting","html5 charts","financial charting library"],sidebar_position:6},o="iOS wrapper",s={unversionedId:"ios",id:"ios",title:"iOS wrapper",description:"You can use Lightweight Charts\u2122 inside an iOS application. To use Lightweight Charts\u2122 in that context, you can use our iOS wrapper, which will allow you to interact with Lightweight Charts\u2122 library, which will be rendered in a web view.",source:"@site/docs/ios.md",sourceDirName:".",slug:"/ios",permalink:"/lightweight-charts/docs/next/ios",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"ios",description:"You can use Lightweight Charts\u2122 inside an iOS application. To use Lightweight Charts\u2122 in that context, you can use our iOS wrapper, which will allow you to interact with Lightweight Charts\u2122 library, which will be rendered in a web view.",keywords:["charts","iOS","canvas","charting library","charting","html5 charts","financial charting library"],sidebar_position:6},sidebar:"docsSidebar",previous:{title:"From v3 to v4",permalink:"/lightweight-charts/docs/next/migrations/from-v3-to-v4"},next:{title:"Android wrapper",permalink:"/lightweight-charts/docs/next/android"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"CocoaPods",id:"cocoapods",level:3},{value:"Swift Package Manager",id:"swift-package-manager",level:3},{value:"Usage",id:"usage",level:2},{value:"How to run the provided example",id:"how-to-run-the-provided-example",level:2}],c={toc:p},h="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(h,(0,i.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"ios-wrapper"},"iOS wrapper"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"You can find the source code of the Lightweight Charts\u2122 iOS wrapper in ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/tradingview/LightweightChartsIOS"},"this repository"),".")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"This wrapper is currently still using ",(0,r.yg)("inlineCode",{parentName:"p"},"v3.8.0"),". This will be updated to ",(0,r.yg)("inlineCode",{parentName:"p"},"v4.0.0")," in the near future.")),(0,r.yg)("p",null,"You can use Lightweight Charts\u2122 inside an iOS application. To use Lightweight Charts\u2122 in that context, you can use our iOS wrapper, which will allow you to interact with Lightweight Charts\u2122 library, which will be rendered in a web view."),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Requires iOS 10.0+")),(0,r.yg)("h3",{id:"cocoapods"},"CocoaPods"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://cocoapods.org"},"CocoaPods")," is a dependency manager for Cocoa projects. For usage and installation instructions, visit their website. To integrate LightweightCharts into your Xcode project using CocoaPods, specify it in your ",(0,r.yg)("inlineCode",{parentName:"p"},"Podfile"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ruby"},"pod 'LightweightCharts', '~> 3.8.0'\n")),(0,r.yg)("h3",{id:"swift-package-manager"},"Swift Package Manager"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://swift.org/package-manager/"},"Swift Package Manager")," is a tool for automating the distribution of Swift code and is integrated into the ",(0,r.yg)("inlineCode",{parentName:"p"},"swift")," compiler."),(0,r.yg)("p",null,"Once you have your Swift package set up, adding LightweightCharts as a dependency is as easy as adding it to the ",(0,r.yg)("inlineCode",{parentName:"p"},"dependencies")," value of your ",(0,r.yg)("inlineCode",{parentName:"p"},"Package.swift"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-swift"},'dependencies: [\n    .package(url: "https://github.com/tradingview/LightweightChartsIOS", .upToNextMajor(from: "4.0.0"))\n]\n')),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("p",null,"Once the library has been installed in your repo, you're ready to create your first chart."),(0,r.yg)("p",null,"First of all, in a file where you would like to create a chart, you need to import the library:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-swift"},"import LightweightCharts\n")),(0,r.yg)("p",null,"Create instance of LightweightCharts, which is a subclass of UIView, and add it to your view."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-swift"},"var chart: LightweightCharts!\n\n// ...\nchart = LightweightCharts()\nview.addSubview(chart)\n// ... setup layout\n")),(0,r.yg)("p",null,"Add any series to the chart and store a reference to it."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-swift"},"var series: BarSeries!\n\n// ...\nseries = chart.addBarSeries(options: nil)\n")),(0,r.yg)("p",null,"Add data to the series."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-swift"},'let data = [\n    BarData(time: .string("2018-10-19"), open: 180.34, high: 180.99, low: 178.57, close: 179.85),\n    BarData(time: .string("2018-10-22"), open: 180.82, high: 181.40, low: 177.56, close: 178.75),\n    BarData(time: .string("2018-10-23"), open: 175.77, high: 179.49, low: 175.44, close: 178.53),\n    BarData(time: .string("2018-10-24"), open: 178.58, high: 182.37, low: 176.31, close: 176.97),\n    BarData(time: .string("2018-10-25"), open: 177.52, high: 180.50, low: 176.83, close: 179.07)\n]\n\n// ...\nseries.setData(data: data)\n')),(0,r.yg)("h2",{id:"how-to-run-the-provided-example"},"How to run the provided example"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/tradingview/LightweightChartsIOS"},"GitHub repository")," for LightweightChartsIOS contains an example of the library in action. To run the example, start by cloning the repository, go to the ",(0,r.yg)("em",{parentName:"p"},"Example")," directory, and then run"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"pod install\n")))}g.isMDXComponent=!0}}]);