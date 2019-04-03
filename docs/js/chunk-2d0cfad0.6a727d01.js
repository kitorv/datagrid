(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cfad0"],{6572:function(e,n,a){"use strict";a.r(n);var t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("section",{staticClass:"content element-doc"},[a("h1",[e._v("列配置")]),a("h2",[e._v("树形表格")]),a("kv-code-snippet",[a("div",[a("p",[e._v("列的"),a("code",[e._v("type")]),e._v("的类型为"),a("code",[e._v("tree")]),e._v("该列会生成树结构，树结构数据包含"),a("code",[e._v("children")]),e._v("的格式")])]),a("element-demo0",{attrs:{slot:"source"},slot:"source"}),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-table :columns="columns" :data="data"></kv-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { key: "name", title: "姓名", type: "tree" },\n          { key: "age", title: "年龄" },\n          { key: "address", title: "地址" }\n        ],\n        data: [\n          {\n            key: 1,\n            name: "John Brown sr.",\n            age: 60,\n            address: "New York No. 1 Lake Park",\n            children: [\n              {\n                key: 11,\n                name: "John Brown",\n                age: 42,\n                address: "New York No. 2 Lake Park"\n              },\n              {\n                key: 12,\n                name: "John Brown jr.",\n                age: 30,\n                address: "New York No. 3 Lake Park",\n                children: [\n                  {\n                    key: 121,\n                    name: "Jimmy Brown",\n                    age: 16,\n                    address: "New York No. 3 Lake Park"\n                  }\n                ]\n              },\n              {\n                key: 13,\n                name: "Jim Green sr.",\n                age: 72,\n                address: "London No. 1 Lake Park",\n                children: [\n                  {\n                    key: 131,\n                    name: "Jim Green",\n                    age: 42,\n                    address: "London No. 2 Lake Park",\n                    children: [\n                      {\n                        key: 1311,\n                        name: "Jim Green jr.",\n                        age: 25,\n                        address: "London No. 3 Lake Park"\n                      },\n                      {\n                        key: 1312,\n                        name: "Jimmy Green sr.",\n                        age: 18,\n                        address: "London No. 4 Lake Park"\n                      }\n                    ]\n                  }\n                ]\n              }\n            ]\n          },\n          {\n            key: 2,\n            name: "Joe Black",\n            age: 32,\n            address: "Sidney No. 1 Lake Park"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),a("h2",[e._v("复选框")]),a("kv-code-snippet",[a("div",[a("p",[e._v("列的"),a("code",[e._v("type")]),e._v("的类型为"),a("code",[e._v("checkbox")]),e._v("会自动生成复选框")])]),a("element-demo1",{attrs:{slot:"source"},slot:"source"}),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-table :columns="columns" :data="data"></kv-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { type: "checkbox" },\n          { key: "name", title: "姓名" },\n          { key: "age", title: "年龄" },\n          { key: "address", title: "地址" }\n        ],\n        data: [\n          {\n            key: "1",\n            name: "John Brown",\n            age: 16,\n            address: "New York No. 1 Lake Park"\n          },\n          {\n            key: "2",\n            name: "Jim Green",\n            age: 18,\n            address: "London No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Joe Black",\n            age: 30,\n            address: "Sidney No. 1 Lake Park"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),a("h2",[e._v("行号")]),a("kv-code-snippet",[a("div",[a("p",[e._v("列的"),a("code",[e._v("type")]),e._v("的类型为"),a("code",[e._v("index")]),e._v("会自动生成序号")])]),a("element-demo2",{attrs:{slot:"source"},slot:"source"}),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <kv-table :columns="columns" :data="data"></kv-table>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { type: "index" },\n          { key: "name", title: "姓名" },\n          { key: "age", title: "年龄" },\n          { key: "address", title: "地址" }\n        ],\n        data: [\n          {\n            key: "1",\n            name: "John Brown",\n            age: 16,\n            address: "New York No. 1 Lake Park"\n          },\n          {\n            key: "2",\n            name: "Jim Green",\n            age: 18,\n            address: "London No. 1 Lake Park"\n          },\n          {\n            key: "3",\n            name: "Joe Black",\n            age: 30,\n            address: "Sidney No. 1 Lake Park"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2),a("h2",[e._v("固定列")]),a("kv-code-snippet",[a("div",[a("p",[e._v("设置"),a("code",[e._v("fixed")]),e._v("的值，"),a("code",[e._v("left")]),e._v("左侧固定，"),a("code",[e._v("right")]),e._v("右侧固定，默认不固定设置其他值也不固定")])]),a("element-demo3",{attrs:{slot:"source"},slot:"source"}),a("template",{slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n  <div style="max-width:1980px;">\n    <kv-table :columns="columns" :data="data"></kv-table>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        columns: [\n          { key: "name", title: "姓名", width: 120, fixed: "left" },\n          { key: "age", title: "年龄", width: 80, fixed: "left" },\n          { key: "weight", title: "体重", width: 80, fixed: "left" },\n          { key: "height", title: "身高", width: 200 },\n          { key: "value1", title: "指标1", width: 200 },\n          { key: "value2", title: "指标2", width: 200 },\n          { key: "value3", title: "指标3", width: 200 },\n          { key: "value4", title: "指标4", width: 200 },\n          { key: "value5", title: "指标5", width: 200 },\n          { key: "status", title: "健康状况", width: 200, fixed: "right" }\n        ],\n        data: [\n          {\n            name: "tom",\n            age: 18,\n            weight: 60,\n            height: 180,\n            value1: 1,\n            value2: 2,\n            value3: 3,\n            value4: 4,\n            value5: 5,\n            status: "良好"\n          },\n          {\n            name: "tom",\n            age: 18,\n            weight: 60,\n            height: 180,\n            value1: 1,\n            value2: 2,\n            value3: 3,\n            value4: 4,\n            value5: 5,\n            status: "良好"\n          },\n          {\n            name: "tom",\n            age: 18,\n            weight: 60,\n            height: 180,\n            value1: 1,\n            value2: 2,\n            value3: 3,\n            value4: 4,\n            value5: 5,\n            status: "良好"\n          },\n          {\n            name: "tom",\n            age: 18,\n            weight: 60,\n            height: 180,\n            value1: 1,\n            value2: 2,\n            value3: 3,\n            value4: 4,\n            value5: 5,\n            status: "良好"\n          },\n          {\n            name: "tom",\n            age: 18,\n            weight: 60,\n            height: 180,\n            value1: 1,\n            value2: 2,\n            value3: 3,\n            value4: 4,\n            value5: 5,\n            status: "良好"\n          },\n          {\n            name: "tom",\n            age: 18,\n            weight: 60,\n            height: 180,\n            value1: 1,\n            value2: 2,\n            value3: 3,\n            value4: 4,\n            value5: 5,\n            status: "良好"\n          }\n        ]\n      };\n    }\n  };\n<\/script>\n')])])])],2)],1)},l=[],r=a("cebc"),d={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[[a("kv-table",{attrs:{columns:e.columns,data:e.data}})]],2)},n=[],a={data:function(){return{columns:[{key:"name",title:"姓名",type:"tree"},{key:"age",title:"年龄"},{key:"address",title:"地址"}],data:[{key:1,name:"John Brown sr.",age:60,address:"New York No. 1 Lake Park",children:[{key:11,name:"John Brown",age:42,address:"New York No. 2 Lake Park"},{key:12,name:"John Brown jr.",age:30,address:"New York No. 3 Lake Park",children:[{key:121,name:"Jimmy Brown",age:16,address:"New York No. 3 Lake Park"}]},{key:13,name:"Jim Green sr.",age:72,address:"London No. 1 Lake Park",children:[{key:131,name:"Jim Green",age:42,address:"London No. 2 Lake Park",children:[{key:1311,name:"Jim Green jr.",age:25,address:"London No. 3 Lake Park"},{key:1312,name:"Jimmy Green sr.",age:18,address:"London No. 4 Lake Park"}]}]}]},{key:2,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}]}}};return Object(r["a"])({},a,{render:e,staticRenderFns:n})}(),"element-demo1":function(){var e=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[[a("kv-table",{attrs:{columns:e.columns,data:e.data}})]],2)},n=[],a={data:function(){return{columns:[{type:"checkbox"},{key:"name",title:"姓名"},{key:"age",title:"年龄"},{key:"address",title:"地址"}],data:[{key:"1",name:"John Brown",age:16,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:18,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:30,address:"Sidney No. 1 Lake Park"}]}}};return Object(r["a"])({},a,{render:e,staticRenderFns:n})}(),"element-demo2":function(){var e=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[[a("kv-table",{attrs:{columns:e.columns,data:e.data}})]],2)},n=[],a={data:function(){return{columns:[{type:"index"},{key:"name",title:"姓名"},{key:"age",title:"年龄"},{key:"address",title:"地址"}],data:[{key:"1",name:"John Brown",age:16,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:18,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:30,address:"Sidney No. 1 Lake Park"}]}}};return Object(r["a"])({},a,{render:e,staticRenderFns:n})}(),"element-demo3":function(){var e=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[[a("div",{staticStyle:{"max-width":"1980px"}},[a("kv-table",{attrs:{columns:e.columns,data:e.data}})],1)]],2)},n=[],a={data:function(){return{columns:[{key:"name",title:"姓名",width:120,fixed:"left"},{key:"age",title:"年龄",width:80,fixed:"left"},{key:"weight",title:"体重",width:80,fixed:"left"},{key:"height",title:"身高",width:200},{key:"value1",title:"指标1",width:200},{key:"value2",title:"指标2",width:200},{key:"value3",title:"指标3",width:200},{key:"value4",title:"指标4",width:200},{key:"value5",title:"指标5",width:200},{key:"status",title:"健康状况",width:200,fixed:"right"}],data:[{name:"tom",age:18,weight:60,height:180,value1:1,value2:2,value3:3,value4:4,value5:5,status:"良好"},{name:"tom",age:18,weight:60,height:180,value1:1,value2:2,value3:3,value4:4,value5:5,status:"良好"},{name:"tom",age:18,weight:60,height:180,value1:1,value2:2,value3:3,value4:4,value5:5,status:"良好"},{name:"tom",age:18,weight:60,height:180,value1:1,value2:2,value3:3,value4:4,value5:5,status:"良好"},{name:"tom",age:18,weight:60,height:180,value1:1,value2:2,value3:3,value4:4,value5:5,status:"良好"},{name:"tom",age:18,weight:60,height:180,value1:1,value2:2,value3:3,value4:4,value5:5,status:"良好"}]}}};return Object(r["a"])({},a,{render:e,staticRenderFns:n})}()}},s=d,o=a("2877"),i=Object(o["a"])(s,t,l,!1,null,null,null);n["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0cfad0.6a727d01.js.map