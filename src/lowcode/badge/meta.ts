export default [
  {
    group: "ant-vue组件",
    componentName:"ABadge",
    title:"徽章(徽标数)",
    category:"数据展示",
    npm:{
      destructuring:true,
      componentName: "ABadge"
    },
    props:[
      {
        name:"color",
        title: { label: "圆点颜色", tip: "color|自定义小圆点的颜色" },
        propType:"string",
        setter:"StringSetter",
      },
      {
        name:"count",
        title: {
          label: "展示数字",
          tip: "count|展示的数字，大于 overflowCount 时显示为 `${overflowCount}+`，为 0 时隐藏",
        },
        propType:{
          type:"oneOfType",
          value:["node","number","string"]
        }
      },
      {
        name: "dot",
        title: {
          label: "展示圆点",
          tip: "dot|不展示数字，只有一个小红点",
        },
        propType: "bool",
        defaultValue: false,
      },
      {
        name: "offset",
        title: {
          label: "圆点偏移",
          tip: "offset|设置状态点的位置偏移 [number, number]",
        },
        propType: { type: "arrayOf", value: "number" },
      },
      {
        name: "overflowCount",
        title: { label: "封顶值", tip: "overflowCount|展示封顶的数字值" },
        propType: "number",
      },
      {
        name: "showZero",
        title: {
          label: "展示零值",
          tip: "showZero|当数值为 0 时，是否展示 Badge",
        },
        propType: "bool",
        defaultValue: false,
      },
      {
        name: "status",
        title: { label: "状态", tip: "status|设置 Badge 为状态点" },
        propType: {
          type: "oneOf",
          value: ["success", "processing", "default", "error", "warning"],
        },
      },
      {
        name: "text",
        title: {
          label: "状态文本",
          tip: "text|在设置了 `status` 的前提下有效，设置状态点的文本",
        },
        condition(target: { getProps: () => { (): any; new(): any; getPropValue: { (arg0: string): any; new(): any; }; }; }) {
          return !!target.getProps().getPropValue("status");
        },
        propType: "string",
      },
      {
        name: "title",
        title: {
          label: "悬浮提示",
          tip: "title|设置鼠标放在状态点上时显示的文字",
        },
        propType: "string",
      }
    ],
    configure:{
      supports:{
        style:true
      }
    },
    snippets:[
      {
        title:"徽章(徽标数)",
        screenshot:"https://alifd.alicdn.com/fusion-cool/icons/icon-antd/badge-1.png",
        schema:{
          componentName:"ABadge",
          props:{
            count:25,
            color:"red"
          }
        }
      }
    ]
  }
]
