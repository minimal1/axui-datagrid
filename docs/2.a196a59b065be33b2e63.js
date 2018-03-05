webpackJsonp([2],{913:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.Introduction=void 0;var r=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(r),l=n(137),o=n(956),i=function(e){return e&&e.__esModule?e:{default:e}}(o),u=n(957);!function(){var t=n(11).enterModule;t&&t(e)}();var d=t.Introduction=function(e){return a.createElement(l.Container,null,a.createElement(l.Segment,{textAlign:"center",basic:!0,padded:!0},a.createElement(l.Image,{src:i.default,size:"small",centered:!0}),a.createElement("h1",null,"axui datagrid")),a.createElement(l.Segment,{basic:!0,padded:!0},a.createElement("h1",null,"Introduction"),a.createElement("p",null,"AXUI datagrid는 모던 웹 애플리케이션 개발을 위해 'React + ES6 + TS' 코드로 제작된 'datagrid UI component' 입니다.",a.createElement("br",null),"'datagrid UI component'는 데이터를 스프레드시트 처럼 보여주는 UI를 말합니다. datagrid에 필요한 기능을 사용자가 원하는 데로 모두 만든다면 끝이 없겠지만 대용량의 데이터를 빠른속도로 출력하고 컨트롤 하는 것과 완벽한 'React + ES6 + TS' 개발환경을 지원하는 것을 가장 중요한 가치로 생각하고 디자인 되었습니다.")),u.features.map(function(e,t){return a.createElement(e.Component,{key:t})}))},s=d;t.default=s,function(){var t=n(11).default,r=n(11).leaveModule;t&&(t.register(d,"Introduction","/Users/tom/Works-OSS/axui/datagrid/dev/pages/Introduction.tsx"),t.register(s,"default","/Users/tom/Works-OSS/axui/datagrid/dev/pages/Introduction.tsx"),r(e))}()}).call(t,n(24)(e))},956:function(e,t,n){e.exports=n.p+"6011360050edc75ff1bab262dd600947.png"},957:function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.features=void 0;var a=n(958),l=r(a),o=n(959),i=r(o),u=n(960),d=r(u),s=n(961),c=r(s),f=n(962),m=r(f),p=n(963),v=r(p),g=n(964),E=r(g);!function(){var t=n(11).enterModule;t&&t(e)}();var S=[{title:"Support React + ES6 + TS",Component:l.default},{title:"Expressing large amounts of data",Component:i.default},{title:"Formatting of data",Component:d.default},{title:"Frozen column and row",Component:c.default},{title:"Multi column header",Component:m.default},{title:"Inline edit",Component:v.default},{title:"Browser event compatibility",Component:E.default}];t.features=S,function(){var t=n(11).default,r=n(11).leaveModule;t&&(t.register(S,"features","/Users/tom/Works-OSS/axui/datagrid/dev/pages/features/index.ts"),r(e))}()}).call(t,n(24)(e))},958:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(r),l=n(137),o=n(449);!function(){var t=n(11).enterModule;t&&t(e)}();var i=function(e){return a.createElement(l.Segment,{basic:!0,padded:!0},a.createElement(l.Header,{as:"h2",dividing:!0},"Support React + ES6 + TS"),a.createElement("p",null,"AXUI datagrid는 React.js 프레임워크를 이용하여 개발되었습니다, 빠르게 변화하는 웹 개발환경 변화에 맞추어 내부 코드는 ES6와 TS로 제작되었고 'babelJS' 를 이용하여 컴파일 합니다. 만약에 여러분이 여러분의 프로젝트에서 완벽한게 ES6 + TS 혹은 ES6 코드를 사용하고 싶다면 AXUI datagrid는 최고의 선택이 되실 겁니다."),a.createElement("h4",null,"Example"),a.createElement(o.SourceCodeEditor,null,"\n// grid.d.ts\ninterface iAXDatagridProps {\n  height: string;\n  style: any;\n  columns: any;\n  data: any;\n  options: any;\n}\n\ninterface iSelection {\n  x?: number;\n  y?: number;\n}\n\ninterface iColumns {\n  key?: string;\n  width?: number;\n  label?: string;\n  align?: string;\n  formatter?: Function | string;\n  columns?: iColumns[];\n}\n\n// GridRoot.tsx\nimport * as React from 'react';\n\nexport class GridRoot extends React.Component<iGridRootProps, iGridRootState> {\n    // .....\n}\n"))},u=i;t.default=u,function(){var t=n(11).default,r=n(11).leaveModule;t&&(t.register(i,"supportReactEs6Ts","/Users/tom/Works-OSS/axui/datagrid/dev/pages/features/support-react-es6-ts.tsx"),t.register(u,"default","/Users/tom/Works-OSS/axui/datagrid/dev/pages/features/support-react-es6-ts.tsx"),r(e))}()}).call(t,n(24)(e))},959:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(r),l=n(137),o=n(139);!function(){var t=n(11).enterModule;t&&t(e)}();var i=function(e){return a.createElement(l.Segment,{basic:!0,padded:!0},a.createElement(l.Header,{as:"h2",dividing:!0},"Expressing large amounts of data"),a.createElement("p",null,"AXUI datagrid는 대용량의 데이터를 처리 할수 있도록 datagrid에 보여지는 영역만 출력하는 가상스크롤 기능을 지원합니다. 또한 행뿐만아니라 열에 대해서도 보여지는 영역만 출력되므로 최소한의 DOM엘리먼트만 브라우저에 출력됩니다."),a.createElement("p",null,a.createElement(o.Link,{to:"/sample/LargeData"},"대용량 데이터 예제보기")))},u=i;t.default=u,function(){var t=n(11).default,r=n(11).leaveModule;t&&(t.register(i,"expressingLargeAmountData","/Users/tom/Works-OSS/axui/datagrid/dev/pages/features/expressing-large-amount-data.tsx"),t.register(u,"default","/Users/tom/Works-OSS/axui/datagrid/dev/pages/features/expressing-large-amount-data.tsx"),r(e))}()}).call(t,n(24)(e))},960:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(r),l=n(137),o=n(434),i=n(139);!function(){var t=n(11).enterModule;t&&t(e)}();var u=function(e){return a.createElement(l.Segment,{basic:!0,padded:!0},a.createElement(l.Header,{as:"h2",dividing:!0},"Formatting of data"),a.createElement("p",null,"내장된 'date', 'money' formatter 외에도 datagrid의 static 함수인 setFormatter 함수를 이용하여 사용자 formatter를 만들 수 있습니다."),a.createElement(o.SourceCodeEditor,null,"\nAXDatagrid.setFormatter({\n  MY_FORMATTER: function (data) {\n    return 'MY_FORMATTER';\n  }\n});\n\ncolumns: [\n  { key: 'id', width: 60, label: 'ID', align: 'center' },\n  { key: 'title', width: 200, label: 'Title', formatter: 'MY_FORMATTER'},\n  { key: 'writer', label: 'Writer', align: 'center'},\n  { key: 'date', label: 'Date', align: 'center', formatter: 'date'},\n  { key: 'money', label: 'Money', align: 'right', formatter: 'money'}\n]\n"),a.createElement("p",null,a.createElement(i.Link,{to:"/sample/Formatter"},"Formatter 예제보기")))},d=u;t.default=d,function(){var t=n(11).default,r=n(11).leaveModule;t&&(t.register(u,"formattingData","/Users/tom/Works-OSS/axui/datagrid/dev/pages/features/formatting-data.tsx"),t.register(d,"default","/Users/tom/Works-OSS/axui/datagrid/dev/pages/features/formatting-data.tsx"),r(e))}()}).call(t,n(24)(e))},961:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(r),l=n(137),o=n(139);!function(){var t=n(11).enterModule;t&&t(e)}();var i=function(e){return a.createElement(l.Segment,{basic:!0,padded:!0},a.createElement(l.Header,{as:"h2",dividing:!0},"Frozen column and row"),a.createElement("p",null,"options.frozenColumnIndex, options.frozenRowIndex를 정하면 그리드에 틀고정영역을 설정 할 수 있습니다."),a.createElement("p",null,a.createElement(o.Link,{to:"/sample/FrozenColumnRow"},"FrozenColumnRow 예제보기")))},u=i;t.default=u,function(){var t=n(11).default,r=n(11).leaveModule;t&&(t.register(i,"frozenColumnRow","/Users/tom/Works-OSS/axui/datagrid/dev/pages/features/frozen-column-row.tsx"),t.register(u,"default","/Users/tom/Works-OSS/axui/datagrid/dev/pages/features/frozen-column-row.tsx"),r(e))}()}).call(t,n(24)(e))},962:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(r),l=n(137),o=n(434),i=n(139);!function(){var t=n(11).enterModule;t&&t(e)}();var u=function(e){return a.createElement(l.Segment,{basic:!0,padded:!0},a.createElement(l.Header,{as:"h2",dividing:!0},"Multi column header"),a.createElement("p",null,"column아래에 columns가 있으면 datagrid가 알아서 처리해 줍니다."),a.createElement(o.SourceCodeEditor,null,"\ncolumns: [\n  { key: 'id', width: 60, label: 'ID' },\n  { key: 'title', width: 200, label: 'Title' },\n  {\n    label: 'Group', columns: [\n    { key: 'writer', label: 'Writer' },\n    { key: 'date', label: 'Date', formatter: 'date' }\n  ]\n  },\n  { key: 'money', label: 'Money', formatter: 'money' }\n]\n"),a.createElement("p",null,a.createElement(i.Link,{to:"/sample/MultiColumnHeader"},"MultiColumnHeader 예제보기")))},d=u;t.default=d,function(){var t=n(11).default,r=n(11).leaveModule;t&&(t.register(u,"multiColumnHeader","/Users/tom/Works-OSS/axui/datagrid/dev/pages/features/multi-column-header.tsx"),t.register(d,"default","/Users/tom/Works-OSS/axui/datagrid/dev/pages/features/multi-column-header.tsx"),r(e))}()}).call(t,n(24)(e))},963:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(r),l=n(137),o=n(434),i=n(139);!function(){var t=n(11).enterModule;t&&t(e)}();var u=function(e){return a.createElement(l.Segment,{basic:!0,padded:!0},a.createElement(l.Header,{as:"h2",dividing:!0},"Inline edit"),a.createElement("p",null,"column에 editor를 선언해주면 inline edit기능을 사용할 수 있습니다."),a.createElement(o.SourceCodeEditor,null,"\n{ key: 'title', width: 200, label: 'Title', editor: { type: 'text' } }\n      "),a.createElement("p",null,a.createElement(i.Link,{to:"/sample/InlineEdit"},"InlineEdit 예제보기")))},d=u;t.default=d,function(){var t=n(11).default,r=n(11).leaveModule;t&&(t.register(u,"inlineEdit","/Users/tom/Works-OSS/axui/datagrid/dev/pages/features/inline-edit.tsx"),t.register(d,"default","/Users/tom/Works-OSS/axui/datagrid/dev/pages/features/inline-edit.tsx"),r(e))}()}).call(t,n(24)(e))},964:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(r),l=n(137),o=n(434),i=n(139);!function(){var t=n(11).enterModule;t&&t(e)}();var u=function(e){return a.createElement(l.Segment,{basic:!0,padded:!0},a.createElement(l.Header,{as:"h2",dividing:!0},"Browser event compatibility"),a.createElement("p",null,"onBeforeEvent, onAfterEvent props을 이용하면 keydown, click등의 이벤트가 발생될때 callback을 받을 수 있습니다."),a.createElement(o.SourceCodeEditor,null,"\n<AXDatagrid\n  height={this.state.height}\n  style={{ fontSize: '12px' }}\n  columns={this.state.columns}\n  data={this.state.data}\n  options={this.state.options}\n  onBeforeEvent={( e, eventName ) => {\n    this.receiveEvent(eventName);\n  }}\n  onAfterEvent={( e, eventName ) => {\n    this.receiveEvent(eventName);\n  }}\n/>\n      "),a.createElement("p",null,a.createElement(i.Link,{to:"/sample/EventReceive"},"EventReceive 예제보기")))},d=u;t.default=d,function(){var t=n(11).default,r=n(11).leaveModule;t&&(t.register(u,"eventCompatibility","/Users/tom/Works-OSS/axui/datagrid/dev/pages/features/event.tsx"),t.register(d,"default","/Users/tom/Works-OSS/axui/datagrid/dev/pages/features/event.tsx"),r(e))}()}).call(t,n(24)(e))}});