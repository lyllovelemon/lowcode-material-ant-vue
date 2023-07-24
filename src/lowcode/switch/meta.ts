/* eslint-disable */
// @ts-ignore
import avatarImg from "./__screenshots__/switch-1.png?inline";
export default {
  group: "ant-vue组件",
  componentName: "ASwitch",
  title: "开关",
  category: "基础组件",
  npm: {
    destructuring: true,
    componentName: "ASwitch",
  },
  configure: {
    props: [
      {
        name: "defaultChecked",
        title: { label: "默认选中", tip: "defaultChecked|默认是否选中" },
        propType: "bool",
        defaultValue: false,
        setter: "BoolSetter"
      },
      {
        name: "checked",
        title: { label: "是否选中", tip: "checked|当前是否选中" },
        propType: "bool",
        defaultValue: false,
        setter: "BoolSetter",
        supportVariable: true,
      },
      {
        name: "autoFocus",
        title: { label: "自动聚焦", tip: "autoFocus|组件自动获取焦点" },
        propType: "bool",
        defaultValue: false,
        setter: "BoolSetter"
      },
      {
        name: "checkedChildren",
        title: { label: "选中时内容", tip: "checkedChildren|选中时的内容" },
        propType: "string",
        setter: "StringSetter"
      },
      {
        name: "unCheckedChildren",
        title: { label: "非选中时内容", tip: "unCheckedChildren|非选中时的内容" },
        propType: "string",
        setter: "StringSetter"
      },
      {
        name: "disabled",
        title: { label: "是否禁用", tip: "disabled|是否为禁用状态" },
        propType: "bool",
        defaultValue: false,
        setter: "BoolSetter"
      },
      {
        name: "loading",
        title: { label: "加载中", tip: "loading|加载中" },
        propType: "bool",
        defaultValue: false,
        setter: "BoolSetter"
      },
      {
        name: "size",
        title: { label: "尺寸", tip: "size|开关大小" },
        propType: { type: "oneOf", value: ["default", "small"] },
        setter: {
          componentName: "RadioGroupSetter",
          props: {
            options: [
              {
                title: "默认",
                value: "default",
              },
              {
                title: "小",
                value: "small",
              },
            ],
          },
        },
        defaultValue: "default",
      },
    ],
    supports:{
      style:true,
      events:[
        {
          name: "onChange",
          template: "onChange(checked,event,${extParams}){\n// 变化时回调函数\nconsole.log(\"onChange\",checked,event);}",
        },
        {
          name: "onClick",
          template:
            "onClick(checked,event,${extParams}){\n// 点击时回调函数\nconsole.log(\"onClick\",checked,event);}",
        },
      ]
    }
  },
  snippets: [
    {
      title: "开关",
      screenshot:avatarImg,
      schema: {
        componentName: "ASwitch",
        props: {
         defaultChecked:true
        }
      }
    }
  ]
};
