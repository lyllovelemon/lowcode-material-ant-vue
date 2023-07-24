/* eslint-disable */
// @ts-ignore
import avatarImg from "./__screenshots__/input-group.jpg?inline";
export default {
  group: "ant-vue组件",
  componentName: "AInputGroup",
  title: "输入框组合",
  category: "表单",
  npm: {
    destructuring: true,
    componentName: "AInputGroup"
  },
  props:[
    {
      name: "compact",
      title: { label: "紧凑模式", tip: "compact | 是否用紧凑模式" },
      propType: "bool",
      setter: "BoolSetter"
    },
    {
      name: "size",
      title: { label: "尺寸", tip: "size | 尺寸大小" },
      propType: { type: "oneOf", value: ["large", "default", "small"] },
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
      defaultValue: "default",
    },
  ],
  configure:{
    component:{
      isContainer:true
    },
    supports:{
      style:true
    }
  },
  snippets:[
    {
      title:"输入框组合",
      screenshot: avatarImg,
      schema:{
        componentName:"AInputGroup",
        props:{},
        children:[
          {
            componentName:"AInput",
            props:{
              placeholder:"请输入"
            }
          },
          {
            componentName:"AInput",
            props:{
              placeholder:"请输入"
            }
          }
        ]
      }
    }
  ]
}
