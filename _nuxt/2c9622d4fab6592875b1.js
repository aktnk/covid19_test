(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{231:function(t,e,n){var content=n(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("5d594f7f",content,!1,{sourceMap:!1})},232:function(t,e,n){"use strict";var r=n(231);n.n(r).a},233:function(t,e,n){(e=n(10)(!1)).push([t.i,".header[data-v-174a4490]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-174a4490]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-174a4490]{font-size:20px;font-size:1.25rem}}",""]),t.exports=e},234:function(t,e,n){"use strict";var r=n(1).default.extend({props:{icon:{type:String}}}),o=(n(232),n(4)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"174a4490",null);e.a=component.exports},264:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/04/17","url":"https://www.pref.shizuoka.jp/kinkyu/covid-19-taisetunaoneai.html","text":"静岡県からの大切なお願い"},{"date":"2020/04/17","url":"https://www.pref.shizuoka.jp/kinkyu/covid-19-soudan.html","text":"新型コロナウイルス感染症の相談"}]}')},268:function(t,e,n){var content=n(342);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("7065172c",content,!1,{sourceMap:!1})},269:function(t,e,n){var content=n(344);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("56eebe64",content,!1,{sourceMap:!1})},270:function(t,e,n){var content=n(346);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("72ae36fb",content,!1,{sourceMap:!1})},271:function(t,e,n){var content=n(348);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("be676a3a",content,!1,{sourceMap:!1})},272:function(t,e,n){var content=n(350);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(11).default)("01ea1d6c",content,!1,{sourceMap:!1})},341:function(t,e,n){"use strict";var r=n(268);n.n(r).a},342:function(t,e,n){(e=n(10)(!1)).push([t.i,".SourceLink{text-decoration:none;text-align:left}.SourceLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=e},343:function(t,e,n){"use strict";var r=n(269);n.n(r).a},344:function(t,e,n){(e=n(10)(!1)).push([t.i,"\n.LegendBlock[data-v-395f10db] {\n  width: 16px;\n  height: 16px;\n  display: inline-block;\n  opacity: 0.5;\n}\nli[data-v-395f10db] {\n  list-style: none;\n  float: left;\n  font-size: 14px;\n  padding-right: 4px;\n}\nli[data-v-395f10db]:last-child {\n  padding-right: 0;\n}\nul[data-v-395f10db] {\n  margin: 0;\n  padding: 0;\n}\n.clearfix[data-v-395f10db]::after {\n  content: '';\n  display: block;\n  clear: both;\n}\n",""]),t.exports=e},345:function(t,e,n){"use strict";var r=n(270);n.n(r).a},346:function(t,e,n){(e=n(10)(!1)).push([t.i,".v-slider__tick-label[data-v-8e490ebc]{transform:rorate(90deg)}.MapCard-BodyContainer[data-v-8e490ebc]{position:relative}.MapCard-BodyContainer-LoadingScreen[data-v-8e490ebc]{position:absolute;height:100%;width:100%;background-color:rgba(255,255,255,.75);top:0;left:0}",""]),t.exports=e},347:function(t,e,n){"use strict";var r=n(271);n.n(r).a},348:function(t,e,n){(e=n(10)(!1)).push([t.i,".MapCard-BodyContainer .v-slider__tick-label{font-size:12px}",""]),t.exports=e},349:function(t,e,n){"use strict";var r=n(272);n.n(r).a},350:function(t,e,n){(e=n(10)(!1)).push([t.i,".MainPage .DataBlock[data-v-52592c90]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-52592c90]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-52592c90]{padding:4px 8px}}",""]),t.exports=e},373:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(234),l=n(236),d=n(264),c=(n(239),n(241)),h=(n(39),n(24),n(18),n(15),n(30),n(20));function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m={components:{Mapbox:n(339).a},props:{mapId:{type:String,default:""},initialBounds:{type:Array,default:function(){return[]}},mapOptions:{type:Object,required:!1,default:function(){return{}}},legend:{type:Array,default:function(){return[]}}},data:function(){return{dateSequence:[],mapObject:null,colors:["rgba(80, 91, 0, 0.25)","rgba(27, 117, 188, 0.5)","rgba(0, 100, 0, 0.6)","rgba(0, 68, 27, 0.7)"],borderColors:["#505B00","#1B75BC","#006400","#00441B"],dataDrivenLegend:null}},computed:{actualLegend:function(){return 0===this.legend.length?this.dataDrivenLegend:this.legend},actualMapOptions:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({style:"https://tokyo-metropolitan-gov.github.io/tokyo-vector-tile/style.json",zoom:14,center:[139.69167,35.689444],antialias:!1,interactive:!1},this.mapOptions,{container:this.mapId})}},methods:{dataDrivenInitialization:function(map){if(0===this.dateSequence.length){var t=map.queryRenderedFeatures({layers:["heatmap"]});if(0!==t.length){this.dateSequence=Object.keys(t[0].properties).sort(),this.$emit("dateTicksUpdated",this.dateSequence);var e=this.dateSequence[this.dateSequence.length-1],n=0;t.forEach((function(t){n<t.properties[e]&&(n=t.properties[e])}));var r=.25*(1e4+1e4*Math.floor(1e-4*n));this.dataDrivenLegend=[r,2*r,3*r],map.setPaintProperty("heatmap","fill-color",["step",["get",e],this.colors[0],this.actualLegend[0],this.colors[1],this.actualLegend[1],this.colors[2],this.actualLegend[2],this.colors[3]]),this.$emit("legendUpdated",[{borderColor:this.borderColors[0],color:this.colors[0],valueFrom:0,valueTo:this.actualLegend[0]},{borderColor:this.borderColors[1],color:this.colors[1],valueFrom:this.actualLegend[0],valueTo:this.actualLegend[1]},{borderColor:this.borderColors[2],color:this.colors[2],valueFrom:this.actualLegend[1],valueTo:this.actualLegend[2]},{borderColor:this.borderColors[3],color:this.colors[3],valueFrom:this.actualLegend[2],valueTo:null}]),this.$emit("loadCompleted")}else setTimeout(this.dataDrivenInitialization,1e3,map)}},loaded:function(map){this.initialBounds.length>1&&this.initialBounds[0].length>1&&this.initialBounds[1].length>1&&map.fitBounds(this.initialBounds,{linear:!0}),map.addLayer({id:"heatmap",type:"fill",source:{type:"vector",tiles:["https://tokyo-metropolitan-gov.github.io/data/tiles/{z}/{x}/{y}.pbf"],minzoom:11,maxzoom:11},"source-layer":"dfi-place-heatmap-population",paint:{"fill-color":"#fff","fill-opacity":.5,"fill-outline-color":"rgba(0, 0, 0, 0)"}}),this.dataDrivenInitialization(map)},mapInitialized:function(map){this.mapObject=map},updatePaintProperty:function(t){if(null!==this.mapObject&&null!==this.legend){var p=["step",["get",t],this.colors[0],this.actualLegend[0],this.colors[1],this.actualLegend[1],this.colors[2],this.actualLegend[2],this.colors[3]];this.mapObject.setPaintProperty("heatmap","fill-color",p)}}}},v=n(4),y=Object(v.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)("mapbox",{attrs:{"access-token":"","map-options":this.actualMapOptions,"nav-control":{show:!1},"attribution-control":{show:!0,position:"top-right"}},on:{"map-load":this.loaded,"map-init":this.mapInitialized}})}),[],!1,null,null,null).exports,k=r.default.extend({props:{url:{type:String,default:""},linkString:{type:String,default:""},header:{type:String,default:""}}}),x=(n(341),Object(v.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SourceLink"},[n("div",[t._v(t._s(t.header))]),t._v(" "),n("i18n",{attrs:{path:"出典: {source}",tag:"div",for:t.linkString}},[n("a",{staticClass:"SourceLink",attrs:{place:"source",href:t.url,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n      "+t._s(t.linkString)+"\n      "),n("v-icon",{staticClass:"ExternalLinkIcon",attrs:{size:"15"}},[t._v("\n        mdi-open-in-new\n      ")])],1)])],1)}),[],!1,null,null,null).exports),C={props:{legendData:{type:Array,default:function(){return[]}}}},_=(n(343),Object(v.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"clearfix"},t._l(t.legendData,(function(e){return n("li",{key:e.valueFrom},[n("span",{staticClass:"LegendBlock",style:"background-color: "+e.color+"; border: 1px solid "+e.borderColor}),t._v("\n      "+t._s(e.valueFrom+"〜"+(null!==e.valueTo?e.valueTo:""))+"\n    ")])})),0)])}),[],!1,null,"395f10db",null).exports),S={components:{DataView:c.a,SourceLink:x,Heatmap:y,HeatmapLegend:_},props:{title:{type:String,default:""},titleId:{type:String,default:""},detailPageUrl:{type:String,default:""},detailPageString:{type:String,default:""},url:{type:String,default:""},mapHeight:{type:Number,default:240},linkString:{type:String,default:""},sourceLinkHeader:{type:String,default:""},heatmapLegend:{type:Array,default:function(){return[]}},mapOptions:{type:Object,default:function(){return{}},required:!1},initialBounds:{type:Array,default:function(){return[]}},unit:{type:String,default:""},mapId:{type:String,default:"map"}},data:function(){return{dateTicks:["20200201"],legendData:[],loading:!0,dateSliderValue:0,updateDate:""}},computed:{dataDate:function(){return this.dateTicks[this.dateSliderValue]},dateTickValue:function(){var t=this;return this.dateTicks.map((function(e,i){return(t.dateTicks.length-i)%6==1?"".concat(e.substring(4,6),"/").concat(e.substring(6)):""}))}},created:function(){var t=this;fetch("https://tokyo-metropolitan-gov.github.io/data/stat.json").then((function(t){return t.json()})).then((function(e){return t.updateDate=e.yahootile.lastUpdate})).catch((function(e){return t.updateDate=""}))},methods:{updateLegend:function(t){this.legendData=t},loadCompleted:function(){this.loading=!1},handleFocusChanged:function(t){this.$refs.heatmapComponentRef.updatePaintProperty(this.dataDate)},dateTicksUpdated:function(t){this.dateTicks=t,this.dateSliderValue=this.dateTicks.length-1}}},w=(n(345),n(347),{components:{MapCard:Object(v.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{staticClass:"MapCard",attrs:{title:t.title,"title-id":t.titleId,date:t.updateDate,url:t.url,loading:t.loading},scopedSlots:t._u([{key:"description",fn:function(){return[n("ol",[n("li",[t._v("\n        "+t._s(t.$t("※ ヤフーに蓄積された位置情報データなどを元に算出した参考値"))+"\n      ")]),t._v(" "),n("li",[t._v(t._s(t.$t("※ 土・日・祝日を除く7:30~8:30の平均値")))])])]},proxy:!0},{key:"footer",fn:function(){return[n("source-link",{attrs:{url:t.url,"link-string":t.linkString,header:t.sourceLinkHeader}})]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"MapCard-BodyContainer"},[n("heatmap-legend",{attrs:{"legend-data":t.legendData}}),t._v(" "),n("heatmap",{ref:"heatmapComponentRef",staticClass:"MapCard-Heatmap",style:{height:t.mapHeight+"px"},attrs:{"map-id":t.mapId,"initial-bounds":t.initialBounds,"map-options":t.mapOptions,legend:t.heatmapLegend},on:{legendUpdated:t.updateLegend,loadCompleted:t.loadCompleted,dateTicksUpdated:t.dateTicksUpdated}}),t._v(" "),n("v-slider",{attrs:{"tick-labels":t.dateTickValue,max:t.dateTicks.length-1,step:"1","tick-size":"4"},on:{input:t.handleFocusChanged},model:{value:t.dateSliderValue,callback:function(e){t.dateSliderValue=e},expression:"dateSliderValue"}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:""!==t.detailPageUrl,expression:"detailPageUrl !== ''"}],staticClass:"DetailPageLink"},[n("nuxt-link",{attrs:{to:t.detailPageUrl}},[t._v("\n        "+t._s(t.detailPageString)+"\n      ")])],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"MapCard-BodyContainer-LoadingScreen"})],1)])}),[],!1,null,"8e490ebc",null).exports}}),O=Object(v.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"12"}},[e("map-card",{attrs:{title:"",caption:this.$t("※7:30〜8:30の平均値"),"title-id":"tokyo-city-heatmap","chart-id":"tokyo-city-chart","map-id":"tokyo-city-map","initial-bounds":[[139.695239,35.676437],[139.773774,35.694493]],"map-height":640,"map-options":{interactive:!0},unit:"人",url:"https://ds.yahoo.co.jp/datapolicy/","source-link-header":this.$t("※本データは2020年3月31日までの掲載となります"),"heatmap-legend":[2e4,4e4,6e4],"link-string":this.$t("ヤフー・データソリューション"),date:""}})],1)}),[],!1,null,null,null).exports,L=r.default.extend({components:{PageHeader:o.a,TokyoCityMapCard:O},data:function(){var data={Data:l,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("東京都23区の人口推移（参考値）"),date:l.lastUpdate},newsItems:d.newsItems};return data},head:function(){return{title:this.$t("東京都23区の人口推移（参考値）")}}}),j=(n(349),Object(v.a)(L,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"MainPage"},[e("page-header",{attrs:{icon:this.headerItem.icon}},[this._v("\n    "+this._s(this.headerItem.title)+"\n  ")]),this._v(" "),e("v-row",{staticClass:"DataBlock"},[e("tokyo-city-map-card")],1)],1)}),[],!1,null,"52592c90",null));e.default=j.exports}}]);