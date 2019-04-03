(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0afa3c"],{"0ed5":function(e,n,a){"use strict";a.r(n);var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("section",{staticClass:"content element-doc"},[a("h1",[e._v("样式配置")]),a("h2",[e._v("斑马线")]),a("kv-code-snippet",[a("div",[a("p",[e._v("设置"),a("code",[e._v("stripe")]),e._v("的值为"),a("code",[e._v("true")]),e._v("创建带有斑马纹的表格")])]),a("element-demo0",{attrs:{slot:"source"},slot:"source"}),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-table :columns="columns" :data="data" stripe></kv-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { key: "name", title: "姓名" },\n          { key: "age", title: "年龄" },\n          { key: "address", title: "地址" }\n        ],\n        data: [\n          {\n            key: "1",\n            name: "John Brown",\n            age: 32,\n            address: "New York No. 1 Lake Park"\n          },\n          {\n            key: "2",\n            name: "Jim Green",\n            age: 42,\n            address: "London No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Joe Black",\n            age: 32,\n            address: "Sidney No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Tom Aini",\n            age: 18,\n            address: "Tokeyo No. 1 Lake Park"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),a("h2",[e._v("无边框")]),a("kv-code-snippet",[a("div",[a("p",[e._v("默认自带边框，设置"),a("code",[e._v("border")]),e._v("的值为"),a("code",[e._v("false")]),e._v("不显示表格的边框")])]),a("element-demo1",{attrs:{slot:"source"},slot:"source"}),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-table :columns="columns" :data="data" :border="false"></kv-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { key: "name", title: "姓名" },\n          { key: "age", title: "年龄" },\n          { key: "address", title: "地址" }\n        ],\n        data: [\n          {\n            key: "1",\n            name: "John Brown",\n            age: 32,\n            address: "New York No. 1 Lake Park"\n          },\n          {\n            key: "2",\n            name: "Jim Green",\n            age: 42,\n            address: "London No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Joe Black",\n            age: 32,\n            address: "Sidney No. 1 Lake Park"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),a("h2",[e._v("隐藏表头")]),a("kv-code-snippet",[a("div",[a("p",[e._v("设置"),a("code",[e._v("show-header")]),e._v("的值"),a("code",[e._v("false")]),e._v("则隐藏表头")])]),a("element-demo2",{attrs:{slot:"source"},slot:"source"}),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-table\n    :columns="columns"\n    :data="data"\n    :show-header="false"\n  ></kv-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { key: "name", title: "姓名" },\n          { key: "age", title: "年龄" },\n          { key: "address", title: "地址" }\n        ],\n        data: [\n          {\n            key: "1",\n            name: "John Brown",\n            age: 32,\n            address: "New York No. 1 Lake Park"\n          },\n          {\n            key: "2",\n            name: "Jim Green",\n            age: 42,\n            address: "London No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Joe Black",\n            age: 32,\n            address: "Sidney No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Tom Aini",\n            age: 18,\n            address: "Tokeyo No. 1 Lake Park"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),a("h2",[e._v("行类样式")]),a("kv-code-snippet",[a("div",[a("p",[e._v("设置"),a("code",[e._v("row-class")]),e._v("属性，该属性为一个函数返回类样式名称，方法参数"),a("code",[e._v("{index,row,data}")])])]),a("element-demo3",{attrs:{slot:"source"},slot:"source"}),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-table\n    :columns="columns"\n    :data="data"\n    :row-class="rowClass"\n  ></kv-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { key: "name", title: "姓名" },\n          { key: "age", title: "年龄" },\n          { key: "address", title: "地址" }\n        ],\n        data: [\n          {\n            key: "1",\n            name: "John Brown",\n            age: 32,\n            address: "New York No. 1 Lake Park"\n          },\n          {\n            key: "2",\n            name: "Jim Green",\n            age: 42,\n            address: "London No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Joe Black",\n            age: 32,\n            address: "Sidney No. 1 Lake Park"\n          },\n          {\n            key: "4",\n            name: "Tom Mack",\n            age: 32,\n            address: "Beijing No. 1 Lake Park"\n          },\n          {\n            key: "5",\n            name: "Chery Nithce",\n            age: 32,\n            address: "Maliya No. 1 Lake Park"\n          },\n          {\n            key: "6",\n            name: "Merry Tcke",\n            age: 32,\n            address: "Yelnue No. 1 Lake Park"\n          }\n        ],\n        rowClass({ index }) {\n          if (index == 1) return "kv-table-demo--row-success";\n          if (index == 3) return "kv-table-demo--row-error";\n        }\n      };\n    }\n  };\n<\/script>\n<style>\n  tr.kv-table-demo--row-success {\n    > td {\n      background-color: #ebf9eb;\n      color: #46c93a;\n    }\n  }\n\n  tr.kv-table-demo--row-error {\n    > td {\n      background-color: #fcecee;\n      color: #ff4757;\n    }\n  }\n</style>\n')])])])],2),a("h2",[e._v("行样式")]),a("kv-code-snippet",[a("div",[a("p",[e._v("设置"),a("code",[e._v("row-style")]),e._v("属性，该属性为一个函数返回样式对象键值对，方法参数"),a("code",[e._v("{index,row,data}")])])]),a("element-demo4",{attrs:{slot:"source"},slot:"source"}),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-table\n    :columns="columns"\n    :data="data"\n    :row-style="rowStyle"\n  ></kv-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { key: "name", title: "姓名" },\n          { key: "age", title: "年龄" },\n          { key: "address", title: "地址" }\n        ],\n        data: [\n          {\n            key: "1",\n            name: "John Brown",\n            age: 32,\n            address: "New York No. 1 Lake Park"\n          },\n          {\n            key: "2",\n            name: "Jim Green",\n            age: 42,\n            address: "London No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Joe Black",\n            age: 32,\n            address: "Sidney No. 1 Lake Park"\n          },\n          {\n            key: "4",\n            name: "Tom Mack",\n            age: 32,\n            address: "Beijing No. 1 Lake Park"\n          },\n          {\n            key: "5",\n            name: "Chery Nithce",\n            age: 32,\n            address: "Maliya No. 1 Lake Park"\n          },\n          {\n            key: "6",\n            name: "Merry Tcke",\n            age: 32,\n            address: "Yelnue No. 1 Lake Park"\n          }\n        ],\n        rowStyle({ index }) {\n          if (index != 3) return;\n          return {\n            backgroundColor: "#e8f1ff",\n            color: "#1f74ff"\n          };\n        }\n      };\n    }\n  };\n<\/script>\n')])])])],2),a("h2",[e._v("单元格类样式")]),a("kv-code-snippet",[a("div",[a("p",[e._v("设置"),a("code",[e._v("cell-class")]),e._v("属性，该属性为一个函数返回类样式名称，方法参数"),a("code",[e._v("{index,row,data,column}")])])]),a("element-demo5",{attrs:{slot:"source"},slot:"source"}),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-table\n    :columns="columns"\n    :data="data"\n    :cell-class="cellClass"\n  ></kv-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { key: "name", title: "姓名" },\n          { key: "age", title: "年龄" },\n          { key: "address", title: "地址" }\n        ],\n        data: [\n          {\n            key: "1",\n            name: "John Brown",\n            age: 32,\n            address: "New York No. 1 Lake Park"\n          },\n          {\n            key: "2",\n            name: "Jim Green",\n            age: 42,\n            address: "London No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Joe Black",\n            age: 32,\n            address: "Sidney No. 1 Lake Park"\n          },\n          {\n            key: "4",\n            name: "Tom Mack",\n            age: 32,\n            address: "Beijing No. 1 Lake Park"\n          },\n          {\n            key: "5",\n            name: "Chery Nithce",\n            age: 32,\n            address: "Maliya No. 1 Lake Park"\n          },\n          {\n            key: "6",\n            name: "Merry Tcke",\n            age: 32,\n            address: "Yelnue No. 1 Lake Park"\n          }\n        ],\n        cellClass({ index, column }) {\n          if (index == 1 && column.key == "name") {\n            return "kv-table-demo--cell-success";\n          }\n          if (index == 3 && column.key == "age") {\n            return "kv-table-demo--cell-error";\n          }\n        }\n      };\n    }\n  };\n<\/script>\n<style>\n  td.kv-table-demo--cell-success {\n    background-color: #ebf9eb !important;\n    color: #46c93a;\n  }\n  td.kv-table-demo--cell-error {\n    background-color: #fcecee !important;\n    color: #ff4757;\n  }\n</style>\n')])])])],2),a("h2",[e._v("单元格样式")]),a("kv-code-snippet",[a("div",[a("p",[e._v("设置"),a("code",[e._v("cell-style")]),e._v("属性，该属性为一个函数返回样式对象键值对，方法参数"),a("code",[e._v("{index,row,data,column}")])])]),a("element-demo6",{attrs:{slot:"source"},slot:"source"}),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-table\n    :columns="columns"\n    :data="data"\n    :cell-style="cellStyle"\n  ></kv-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { key: "name", title: "姓名" },\n          { key: "age", title: "年龄" },\n          { key: "address", title: "地址" }\n        ],\n        data: [\n          {\n            key: "1",\n            name: "John Brown",\n            age: 32,\n            address: "New York No. 1 Lake Park"\n          },\n          {\n            key: "2",\n            name: "Jim Green",\n            age: 42,\n            address: "London No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Joe Black",\n            age: 32,\n            address: "Sidney No. 1 Lake Park"\n          },\n          {\n            key: "4",\n            name: "Tom Mack",\n            age: 32,\n            address: "Beijing No. 1 Lake Park"\n          },\n          {\n            key: "5",\n            name: "Chery Nithce",\n            age: 32,\n            address: "Maliya No. 1 Lake Park"\n          },\n          {\n            key: "6",\n            name: "Merry Tcke",\n            age: 32,\n            address: "Yelnue No. 1 Lake Park"\n          }\n        ],\n        cellStyle({ index, column }) {\n          if (index % 2 != 0 || column.key != "name") return;\n          return {\n            backgroundColor: "#e8f1ff",\n            color: "#1f74ff"\n          };\n        }\n      };\n    }\n  };\n<\/script>\n')])])])],2),a("h2",[e._v("对齐格式")]),a("kv-code-snippet",[a("div",[a("p",[e._v("设置"),a("code",[e._v("headerAlign")]),e._v("表头对其格式，设置"),a("code",[e._v("align")]),e._v("单元格对其格式，设置对其的类型参数有"),a("code",[e._v("leftt")]),e._v(","),a("code",[e._v("center")]),e._v(","),a("code",[e._v("right")])])]),a("element-demo7",{attrs:{slot:"source"},slot:"source"}),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-table :columns="columns" :data="data"></kv-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          {\n            key: "name",\n            title: "姓名",\n            headerAlign: "left",\n            align: "left"\n          },\n          { key: "age", title: "年龄", headerAlign: "center", align: "center" },\n          {\n            key: "address",\n            title: "地址",\n            headerAlign: "right",\n            align: "right"\n          }\n        ],\n        data: [\n          {\n            key: "1",\n            name: "John Brown",\n            age: 32,\n            address: "New York No. 1 Lake Park"\n          },\n          {\n            key: "2",\n            name: "Jim Green",\n            age: 42,\n            address: "London No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Joe Black",\n            age: 32,\n            address: "Sidney No. 1 Lake Park"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2)],1)},r=[],o=a("cebc"),s={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[[a("kv-table",{attrs:{columns:e.columns,data:e.data,stripe:""}})]],2)},n=[],a={data:function(){return{columns:[{key:"name",title:"姓名"},{key:"age",title:"年龄"},{key:"address",title:"地址"}],data:[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"},{key:"3",name:"Tom Aini",age:18,address:"Tokeyo No. 1 Lake Park"}]}}};return Object(o["a"])({},a,{render:e,staticRenderFns:n})}(),"element-demo1":function(){var e=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[[a("kv-table",{attrs:{columns:e.columns,data:e.data,border:!1}})]],2)},n=[],a={data:function(){return{columns:[{key:"name",title:"姓名"},{key:"age",title:"年龄"},{key:"address",title:"地址"}],data:[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}]}}};return Object(o["a"])({},a,{render:e,staticRenderFns:n})}(),"element-demo2":function(){var e=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[[a("kv-table",{attrs:{columns:e.columns,data:e.data,"show-header":!1}})]],2)},n=[],a={data:function(){return{columns:[{key:"name",title:"姓名"},{key:"age",title:"年龄"},{key:"address",title:"地址"}],data:[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"},{key:"3",name:"Tom Aini",age:18,address:"Tokeyo No. 1 Lake Park"}]}}};return Object(o["a"])({},a,{render:e,staticRenderFns:n})}(),"element-demo3":function(){var e=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[[a("kv-table",{attrs:{columns:e.columns,data:e.data,"row-class":e.rowClass}})]],2)},n=[],a={data:function(){return{columns:[{key:"name",title:"姓名"},{key:"age",title:"年龄"},{key:"address",title:"地址"}],data:[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"},{key:"4",name:"Tom Mack",age:32,address:"Beijing No. 1 Lake Park"},{key:"5",name:"Chery Nithce",age:32,address:"Maliya No. 1 Lake Park"},{key:"6",name:"Merry Tcke",age:32,address:"Yelnue No. 1 Lake Park"}],rowClass:function(e){var n=e.index;return 1==n?"kv-table-demo--row-success":3==n?"kv-table-demo--row-error":void 0}}}};return Object(o["a"])({},a,{render:e,staticRenderFns:n})}(),"element-demo4":function(){var e=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[[a("kv-table",{attrs:{columns:e.columns,data:e.data,"row-style":e.rowStyle}})]],2)},n=[],a={data:function(){return{columns:[{key:"name",title:"姓名"},{key:"age",title:"年龄"},{key:"address",title:"地址"}],data:[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"},{key:"4",name:"Tom Mack",age:32,address:"Beijing No. 1 Lake Park"},{key:"5",name:"Chery Nithce",age:32,address:"Maliya No. 1 Lake Park"},{key:"6",name:"Merry Tcke",age:32,address:"Yelnue No. 1 Lake Park"}],rowStyle:function(e){var n=e.index;if(3==n)return{backgroundColor:"#e8f1ff",color:"#1f74ff"}}}}};return Object(o["a"])({},a,{render:e,staticRenderFns:n})}(),"element-demo5":function(){var e=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[[a("kv-table",{attrs:{columns:e.columns,data:e.data,"cell-class":e.cellClass}})]],2)},n=[],a={data:function(){return{columns:[{key:"name",title:"姓名"},{key:"age",title:"年龄"},{key:"address",title:"地址"}],data:[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"},{key:"4",name:"Tom Mack",age:32,address:"Beijing No. 1 Lake Park"},{key:"5",name:"Chery Nithce",age:32,address:"Maliya No. 1 Lake Park"},{key:"6",name:"Merry Tcke",age:32,address:"Yelnue No. 1 Lake Park"}],cellClass:function(e){var n=e.index,a=e.column;return 1==n&&"name"==a.key?"kv-table-demo--cell-success":3==n&&"age"==a.key?"kv-table-demo--cell-error":void 0}}}};return Object(o["a"])({},a,{render:e,staticRenderFns:n})}(),"element-demo6":function(){var e=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[[a("kv-table",{attrs:{columns:e.columns,data:e.data,"cell-style":e.cellStyle}})]],2)},n=[],a={data:function(){return{columns:[{key:"name",title:"姓名"},{key:"age",title:"年龄"},{key:"address",title:"地址"}],data:[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"},{key:"4",name:"Tom Mack",age:32,address:"Beijing No. 1 Lake Park"},{key:"5",name:"Chery Nithce",age:32,address:"Maliya No. 1 Lake Park"},{key:"6",name:"Merry Tcke",age:32,address:"Yelnue No. 1 Lake Park"}],cellStyle:function(e){var n=e.index,a=e.column;if(n%2==0&&"name"==a.key)return{backgroundColor:"#e8f1ff",color:"#1f74ff"}}}}};return Object(o["a"])({},a,{render:e,staticRenderFns:n})}(),"element-demo7":function(){var e=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[[a("kv-table",{attrs:{columns:e.columns,data:e.data}})]],2)},n=[],a={data:function(){return{columns:[{key:"name",title:"姓名",headerAlign:"left",align:"left"},{key:"age",title:"年龄",headerAlign:"center",align:"center"},{key:"address",title:"地址",headerAlign:"right",align:"right"}],data:[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}]}}};return Object(o["a"])({},a,{render:e,staticRenderFns:n})}()}},d=s,l=a("2877"),k=Object(l["a"])(d,t,r,!1,null,null,null);n["default"]=k.exports}}]);
//# sourceMappingURL=chunk-2d0afa3c.08b68a3e.js.map