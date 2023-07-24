/* eslint-disable */
// @ts-ignore
import avatarImg from "./__screenshots__/input-search-1.png?inline";
export default {
  group: "ant-vue组件",
  componentName: "AInputSearch",
  title: "搜索框",
  category: "表单",
  npm: {
    destructuring: true,
    componentName: "AInputSearch"
  },
  props:[
    {
      name: "defaultValue",
      title: { label: "默认值", tip: "defaultValue | 默认值" },
      propType: "string",
      setter: "StringSetter"
    },
    {
      name: "value",
      title: { label: "当前值", tip: "value | 当前值" },
      propType: "string",
      setter: "StringSetter"
    },
    {
      name: "bordered",
      title: { label: "显示边框", tip: "bordered | 是否有边框" },
      propType: "bool",
      defaultValue: true,
      setter: "BoolSetter"
    },
    {
      name: "loading",
      title: { label: "加载状态", tip: "loading | 加载状态" },
      propType: "bool",
      setter: "BoolSetter"
    },
    {
      name: "disabled",
      title: { label: "是否禁用", tip: "disabled | 是否为禁用状态" },
      propType: "bool",
      defaultValue: false,
      setter: "BoolSetter"
    },
    {
      name: "placeholder",
      title: { label: "占位提示", tip: "placeholder | 占位提示" },
      propType: "string",
      defaultValue: "请输入",
      setter: "StringSetter"
    },{
      name: "size",
      title: { label: "控件大小", tip: "size | 控件大小" },
      propType: { type: "oneOf", value: ["large", "middle", "small"] },
      setter: {
        componentName: "RadioGroupSetter",
        props: {
          options: [
            {
              title: "大",
              value: "large",
            },
            {
              title: "中",
              value: "middle",
            },
            {
              title: "小",
              value: "small",
            },
          ],
        },
      },
      defaultValue: "middle",
    },
    {
      name: "enterButton",
      title: {
        label: "确认按钮",
        tip: "enterButton | 是否有确认按钮，可设为按钮文字。该属性会与 addonAfter 冲突。",
      },
      propType: { type: "oneOfType", value: ["bool", "node"] },
      defaultValue: false,
    },
    {
      name: "addonAfter",
      title: { label: "后置标签", tip: "addonAfter | 后置标签" },
      propType: { type: "oneOfType", value: ["string", "node"] },
    },
    {
      name: "addonBefore",
      title: { label: "前置标签", tip: "addonBefore | 前置标签" },
      propType: { type: "oneOfType", value: ["string", "node"] },
    },
    {
      name: "prefix",
      title: { label: "前缀", tip: "prefix | 前缀" },
      propType: { type: "oneOfType", value: ["string", "node"] },
    },
    {
      name: "suffix",
      title: { label: "后缀", tip: "suffix | 后缀" },
      propType: { type: "oneOfType", value: ["string", "node"] },
    },
    {
      name: "onChange",
      title: { label: "输入框内容变化时的回调", tip: "onChange | 输入框内容变化时的回调" },
      propType: "func",
    },
    {
      name: "onPressEnter",
      title: { label: "按下回车的回调", tip: "onPressEnter | 按下回车的回调" },
      propType: "func",
    },
    {
      name: "onSearch",
      title: {
        label: "点击搜索或按下回车键时的回调",
        tip: "onSearch | 点击搜索或按下回车键时的回调",
      },
      propType: "func",
    }
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
            "onChange(event,${extParams}){\n// 输入框内容变化时的回调\nconsole.log(\"onChange\",event);}",
        },
        {
          name: "onPressEnter",
          template:
            "onPressEnter(event,${extParams}){\n// 按下回车的回调\nconsole.log(\"onPressEnter\",event);}",
        },
        {
          name: "onSearch",
          template:
            "onSearch(value,event,${extParams}){\n// 点击搜索图标、清除图标，或按下回车键时的回调\nconsole.log(\"onSearch\",value,event);}",
        },
      ]
    }
  },
  snippets:[
    {
      title:"搜索框",
      screenshot: avatarImg,
      schema:{
        componentName:"AInputSearch",
        props:{
          placeholder:"搜索..."
        }
      }
    }
  ]
}
