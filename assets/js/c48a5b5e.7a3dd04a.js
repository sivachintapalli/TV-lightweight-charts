"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2052],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>y});var r=t(96540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),o=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},p=function(e){var a=o(e.components);return r.createElement(s.Provider,{value:a},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=o(t),h=i,y=d["".concat(s,".").concat(h)]||d[h]||g[h]||n;return t?r.createElement(y,c(c({ref:a},p),{},{components:t})):r.createElement(y,c({ref:a},p))}));function y(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,c=new Array(n);c[0]=h;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:i,c[1]=l;for(var o=2;o<n;o++)c[o]=t[o];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},80908:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var r=t(58168),i=(t(96540),t(15680));const n={sidebar_position:2},c="Price scale",l={unversionedId:"price-scale",id:"price-scale",title:"Price scale",description:"Price Scale (or price axis) is a vertical scale that mostly maps prices to coordinates and vice versa.",source:"@site/docs/price-scale.md",sourceDirName:".",slug:"/price-scale",permalink:"/lightweight-charts/docs/next/price-scale",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Series types",permalink:"/lightweight-charts/docs/next/series-types"},next:{title:"Time scale",permalink:"/lightweight-charts/docs/next/time-scale"}},s={},o=[{value:"Creating a price scale",id:"creating-a-price-scale",level:2},{value:"Removing a price scale",id:"removing-a-price-scale",level:2}],p={toc:o},d="wrapper";function g(e){let{components:a,...n}=e;return(0,i.yg)(d,(0,r.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"price-scale"},"Price scale"),(0,i.yg)("p",null,"Price Scale (or price axis) is a vertical scale that mostly maps prices to coordinates and vice versa.\nThe rules of converting depend on a price scale mode, a height of the chart and visible part of the data."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Price scales",src:t(86474).A,title:"Price scales",width:"687",height:"387"})),(0,i.yg)("p",null,"By default, chart has 2 predefined price scales: ",(0,i.yg)("inlineCode",{parentName:"p"},"left")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"right"),", and an unlimited number of overlay scales."),(0,i.yg)("p",null,"Only ",(0,i.yg)("inlineCode",{parentName:"p"},"left")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"right")," price scales could be displayed on the chart, all overlay scales are hidden."),(0,i.yg)("p",null,"If you want to change ",(0,i.yg)("inlineCode",{parentName:"p"},"left")," price scale, you need to use ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase#leftpricescale"},(0,i.yg)("inlineCode",{parentName:"a"},"leftPriceScale"))," option, to change ",(0,i.yg)("inlineCode",{parentName:"p"},"right")," price scale use ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase#rightpricescale"},(0,i.yg)("inlineCode",{parentName:"a"},"rightPriceScale")),", to change default options for an overlay price scale use ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ChartOptionsBase#overlaypricescales"},(0,i.yg)("inlineCode",{parentName:"a"},"overlayPriceScales"))," option."),(0,i.yg)("p",null,"Alternatively, you can use ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/IChartApi#pricescale"},(0,i.yg)("inlineCode",{parentName:"a"},"IChartApi.priceScale"))," method to get an API object of any price scale or ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi#pricescale"},(0,i.yg)("inlineCode",{parentName:"a"},"ISeriesApi.priceScale"))," to get an API object of series' price scale (the price scale that the series is attached to)."),(0,i.yg)("h2",{id:"creating-a-price-scale"},"Creating a price scale"),(0,i.yg)("p",null,"By default a chart has only 2 price scales: ",(0,i.yg)("inlineCode",{parentName:"p"},"left")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"right"),"."),(0,i.yg)("p",null,"If you want to create an overlay price scale, you can simply assign ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/SeriesOptionsCommon#pricescaleid"},(0,i.yg)("inlineCode",{parentName:"a"},"priceScaleId"))," option to a series (note that a value should be differ from ",(0,i.yg)("inlineCode",{parentName:"p"},"left")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"right"),") and a chart will automatically create an overlay price scale with provided ID.\nIf a price scale with such ID already exists then a series will be attached to this existing price scale.\nFurther you can use provided price scale ID to get its corresponding API object via ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/IChartApi#pricescale"},(0,i.yg)("inlineCode",{parentName:"a"},"IChartApi.priceScale"))," method."),(0,i.yg)("h2",{id:"removing-a-price-scale"},"Removing a price scale"),(0,i.yg)("p",null,"The default price scales (",(0,i.yg)("inlineCode",{parentName:"p"},"left")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"right"),") cannot be removed, you can only hide them by setting ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/PriceScaleOptions#visible"},(0,i.yg)("inlineCode",{parentName:"a"},"visible"))," option to ",(0,i.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,i.yg)("p",null,"An overlay price scale exists while there is at least 1 series attached to this price scale.\nThus, to remove an overlay price scale remove all series attached to this price scale."))}g.isMDXComponent=!0},86474:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/price-scales-5ff372fd08578f74710940c724ad5df4.png"}}]);