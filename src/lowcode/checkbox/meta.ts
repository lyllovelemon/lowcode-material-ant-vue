/* eslint-disable */
// @ts-ignore
import avatarImg from "./__screenshots__/checkbox-1.png?inline";
export default {
  group: "ant-vue组件",
  componentName: "ACheckbox",
  title: "多选框",
  category: "表单",
  npm: {
    destructuring: true,
    componentName: "ACheckbox"
  },
  props:[
    {
      name: "children",
      title: { label: "内容", tip: "children|内容" },
      propType: "string",
      setter: "StringSetter",
      supportVariable: true
    },
    {
      name: "autoFocus",
      title: { label: "自动聚焦", tip: "autoFocus|自动获取焦点" },
      propType: "bool",
      defaultValue: false,
      setter: "BoolSetter",
      supportVariable: true
    },
    {
      name: "v-model:checked",
      title: { label: "当前值", tip: "v-model:checked|指定当前是否选中" },
      propType: "bool",
      defaultValue: false,
      setter: "BoolSetter",
      supportVariable: true
    },
    {
      name: "defaultChecked",
      title: { label: "默认值", tip: "defaultChecked|初始是否选中" },
      propType: "bool",
      defaultValue: false,
      setter: "BoolSetter",
      supportVariable: true
    },
    {
      name: "disabled",
      title: { label: "是否禁用", tip: "disabled|是否为禁用状态" },
      propType: "bool",
      defaultValue: false,
      setter: "BoolSetter",
      supportVariable: true
    },
    {
      name: "indeterminate",
      title: { label: "不确定状态", tip: "indeterminate|indeterminate状态" },
      propType: "bool",
      defaultValue: false,
      setter: "BoolSetter",
      supportVariable: true
    },
    {
      name: "onChange",
      title: { label: "变化时回调函数", tip: "onChange|变化时回调函数" },
      propType: "func",
    },
  ],
  configure:{
    component:{
      isContainer:true
    },
    supports:{
      style:true,
      events:[
        {
          name: "onChange",
          template:
            "onChange(event,${extParams}){\n// 变化时回调函数\nconsole.log(\"onChange\", event);}",
        },
      ]
    }
  },
  snippets:[
    {
      title:"多选框",
      screenshot: avatarImg,
      schema:{
        componentName:"ACheckbox",
        props:{
          children:"checkbox",
          "v-model:checked":true
        }
      }
    }
  ]
}
