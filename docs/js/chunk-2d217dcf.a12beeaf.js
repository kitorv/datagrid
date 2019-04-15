(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217dcf"],{c914:function(e,n,a){"use strict";a.r(n);var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("section",{staticClass:"content element-doc"},[a("h1",[e._v("数据处理")]),a("h2",[e._v("分页查询")]),a("kv-code-snippet",[a("div"),a("element-demo0",{attrs:{slot:"source"},slot:"source"}),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-table\n    :columns="columns"\n    :data="data"\n    :pagination="pagination"\n    :load-data="loadData"\n  ></kv-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { key: "no", title: "序号" },\n          { key: "name", title: "姓名", sortable: true },\n          { key: "age", title: "年龄", sortable: true },\n          { key: "address", title: "地址" }\n        ],\n        data: [],\n        pagination: {\n          pageIndex: 1\n        }\n      };\n    },\n    methods: {\n      loadData({ pageIndex, pageSize, orderType, orderKey }, success) {\n        setTimeout(() => {\n          let rows = [];\n          for (let i = 0; i < pageSize; i++) {\n            let no = (pageIndex - 1) * pageSize + i + 1;\n            rows.push({\n              no,\n              name: `name-${no}`,\n              age: no,\n              address: `${orderType}-${orderKey}`\n            });\n          }\n          success({ total: 1000, rows });\n        }, 2000);\n      }\n    }\n  };\n<\/script>\n')])])])],2),a("h2",[e._v("行选中")]),a("kv-code-snippet",[a("div",[a("p",[e._v("设置"),a("code",[e._v("select")]),e._v("属性为"),a("code",[e._v("true")]),e._v("单击自动选中该行,")])]),a("element-demo1",{attrs:{slot:"source"},slot:"source"}),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-table :columns="columns" :data="data" :select="true"></kv-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { key: "name", title: "姓名" },\n          { key: "age", title: "年龄" },\n          { key: "address", title: "地址" }\n        ],\n        data: [\n          {\n            key: "1",\n            name: "John Brown",\n            age: 32,\n            address: "New York No. 1 Lake Park"\n          },\n          {\n            key: "2",\n            name: "Jim Green",\n            age: 42,\n            address: "London No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Joe Black",\n            age: 32,\n            address: "Sidney No. 1 Lake Park"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),a("h2",[e._v("排序")]),a("kv-code-snippet",[a("div",[a("p",[e._v("设置列的"),a("code",[e._v("sort")]),e._v("属性为"),a("code",[e._v("true")]),e._v("当前列可进行排序")])]),a("element-demo2",{attrs:{slot:"source"},slot:"source"}),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-table :columns="columns" :data="data"></kv-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { key: "name", title: "姓名", sortable: true },\n          { key: "age", title: "年龄", sortable: true },\n          { key: "address", title: "地址" }\n        ],\n        data: [\n          {\n            key: "1",\n            name: "John Brown",\n            age: 32,\n            address: "New York No. 1 Lake Park"\n          },\n          {\n            key: "2",\n            name: "Jim Green",\n            age: 42,\n            address: "London No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Joe Black",\n            age: 32,\n            address: "Sidney No. 1 Lake Park"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),a("h2",[e._v("表头数据")]),a("kv-code-snippet",[a("div",[a("p",[e._v("设置"),a("code",[e._v("header")]),e._v("进行表头数据渲染，可以设置列的"),a("code",[e._v("headerFormatter")]),e._v("进行自定义渲染")])]),a("element-demo3",{attrs:{slot:"source"},slot:"source"}),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-table :columns="columns" :data="data" :header="header"></kv-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { key: "name", title: "姓名" },\n          { key: "age", title: "年龄" },\n          { key: "address", title: "地址" }\n        ],\n        header: [\n          {\n            key: "0",\n            name: "合计",\n            age: 106,\n            address: "--"\n          }\n        ],\n        data: [\n          {\n            key: "1",\n            name: "John Brown",\n            age: 32,\n            address: "New York No. 1 Lake Park"\n          },\n          {\n            key: "2",\n            name: "Jim Green",\n            age: 42,\n            address: "London No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Joe Black",\n            age: 32,\n            address: "Sidney No. 1 Lake Park"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),a("h2",[e._v("表尾数据")]),a("kv-code-snippet",[a("div",[a("p",[e._v("设置"),a("code",[e._v("footer")]),e._v("进行表尾数据渲染，可以设置列的"),a("code",[e._v("footerFormatter")]),e._v("进行自定义渲染")])]),a("element-demo4",{attrs:{slot:"source"},slot:"source"}),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-table :columns="columns" :data="data" :footer="footer"></kv-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { key: "name", title: "姓名" },\n          { key: "age", title: "年龄" },\n          { key: "address", title: "地址" }\n        ],\n        footer: [\n          {\n            key: "0",\n            name: "合计",\n            age: 106,\n            address: "--"\n          }\n        ],\n        data: [\n          {\n            key: "1",\n            name: "John Brown",\n            age: 32,\n            address: "New York No. 1 Lake Park"\n          },\n          {\n            key: "2",\n            name: "Jim Green",\n            age: 42,\n            address: "London No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Joe Black",\n            age: 32,\n            address: "Sidney No. 1 Lake Park"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2)],1)},r=[],o=a("3f47"),s={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[[a("kv-table",{attrs:{columns:e.columns,data:e.data,pagination:e.pagination,"load-data":e.loadData}})]],2)},n=[],a={data:function(){return{columns:[{key:"no",title:"序号"},{key:"name",title:"姓名",sortable:!0},{key:"age",title:"年龄",sortable:!0},{key:"address",title:"地址"}],data:[],pagination:{pageIndex:1}}},methods:{loadData:function(e,n){var a=e.pageIndex,t=e.pageSize,r=e.orderType,o=e.orderKey;setTimeout(function(){for(var e=[],s=0;s<t;s++){var d=(a-1)*t+s+1;e.push({no:d,name:"name-".concat(d),age:d,address:"".concat(r,"-").concat(o)})}n({total:1e3,rows:e})},2e3)}}};return Object(o["a"])({},a,{render:e,staticRenderFns:n})}(),"element-demo1":function(){var e=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[[a("kv-table",{attrs:{columns:e.columns,data:e.data,select:!0}})]],2)},n=[],a={data:function(){return{columns:[{key:"name",title:"姓名"},{key:"age",title:"年龄"},{key:"address",title:"地址"}],data:[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}]}}};return Object(o["a"])({},a,{render:e,staticRenderFns:n})}(),"element-demo2":function(){var e=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[[a("kv-table",{attrs:{columns:e.columns,data:e.data}})]],2)},n=[],a={data:function(){return{columns:[{key:"name",title:"姓名",sortable:!0},{key:"age",title:"年龄",sortable:!0},{key:"address",title:"地址"}],data:[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}]}}};return Object(o["a"])({},a,{render:e,staticRenderFns:n})}(),"element-demo3":function(){var e=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[[a("kv-table",{attrs:{columns:e.columns,data:e.data,header:e.header}})]],2)},n=[],a={data:function(){return{columns:[{key:"name",title:"姓名"},{key:"age",title:"年龄"},{key:"address",title:"地址"}],header:[{key:"0",name:"合计",age:106,address:"--"}],data:[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}]}}};return Object(o["a"])({},a,{render:e,staticRenderFns:n})}(),"element-demo4":function(){var e=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[[a("kv-table",{attrs:{columns:e.columns,data:e.data,footer:e.footer}})]],2)},n=[],a={data:function(){return{columns:[{key:"name",title:"姓名"},{key:"age",title:"年龄"},{key:"address",title:"地址"}],footer:[{key:"0",name:"合计",age:106,address:"--"}],data:[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}]}}};return Object(o["a"])({},a,{render:e,staticRenderFns:n})}()}},d=s,l=a("17cc"),c=Object(l["a"])(d,t,r,!1,null,null,null);n["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d217dcf.a12beeaf.js.map