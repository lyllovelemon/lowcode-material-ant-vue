// @ts-ignore
import avatarImg from "./__screenshots__/card-1.png?inline";
export default {
  componentName: "ACard",
  title: "卡片",
  category: "数据展示",
  npm:{
    destructuring: true,
    componentName: "ACard"
  },
  props: [
    {
      name:"activeTabKey",
      title:{label:"激活key",tip:"activeTabKey|当前激活页签的 key"},
      propType:"string",
      setter:"StringSetter",
      supportVariable:true
    },
    {
      name:"defaultActiveTabKey",
      title:{label:"初始化激活key",tip:"defaultActiveTabKey|初始化选中页签的 key，如果没有设置 activeTabKey"},
      propType:"string",
      setter:"StringSetter",
      supportVariable:true
    },
    {
      name: "title",
      title: { label: "卡片标题", tip: "title|卡片标题" },
      propType: { type: "oneOfType", value: ["string", "node"] },
    },
    {
      name: "bordered",
      title: { label: "显示边框", tip: "bordered|是否有边框" },
      propType: "bool",
      defaultValue: true,
    },
    {
      name:"customTab",
      title:{label:"自定义tab",tip:"customTab|自定义 tabList tab 标签"},
      propType:"node",
      initialValue: {
        type: "JSSlot",
        params: ["data"],
        value: [],
      },
    },
    {
      name: "bodyStyle",
      title: { label: "内容样式", tip: "bodyStyle|内容区域自定义样式" },
      propType: "object",
      defaultValue:{}
    },
    {
      name:"headStyle",
      title:{label:"标题样式",tip:"headStyle|自定义标题区域样式"},
      propType:"object",
      defaultValue:{}
    },
    {
      name: "extra",
      title: { label: "额外元素", tip: "extra|卡片右上角的操作区域" },
      propType: { type: "oneOfType", value: ["string", "node"] },
    },
    {
      name: "hoverable",
      title: { label: "可浮起", tip: "hoverable|鼠标移过时可浮起" },
      propType: "bool",
      defaultValue: false,
    },
    {
      name: "loading",
      title: {
        label: "loading",
        tip: "loading|当卡片内容还在加载中时，可以用 loading 展示一个占位",
      },
      propType: "bool",
      defaultValue: false,
    },
    {
      name: "size",
      title: { label: "尺寸", tip: "size|card 的尺寸" },
      propType: { type: "oneOf", value: ["default", "small"] },
      defaultValue: "default",
    },
    {
      name: "type",
      title: { label: "卡片类型", tip: "type|卡片类型" },
      propType: { type: "oneOf", value: ["default", "inner"] },
      defaultValue: "default",
    },
  ],
  configure:{
    component: { isContainer: true },
    supports:{
      style:true
    },
    events:[
      {
        name: "onTabChange",
        template:
          "onTabChange(key,${extParams}){\n// 页签切换的回调\nconsole.log(\"onTabChange\", key);}",
      },
    ]
  },
  snippets:[
    {
      title:"卡片",
      screenshot:avatarImg,
      schema:{
        componentName: "ACard",
        props:{
          title:"卡片标题-lyl-test",
          style:{
            width:"300px"
          }
        }
      }
    }
  ]
}
