// @ts-ignore
import avatarImg from "./__screenshots__/form-list-1.png?inline";
export default {
  group: "ant-vue组件",
  componentName:"AFormList",
  title: "表单列表",
  category: "表单",
  npm: {
    destructuring: true,
    componentName: "AFormList"
  },
  props:[
    {
      name: "name",
      title: { label: "字段名", tip: "name|字段名" },
      isRequired: true,
      propType: "string",
    },
    {
      name: "initialValue",
      title: {
        label: "默认值",
        tip: "initialValue|设置子元素默认值，如果与 Form 的 initialValues 冲突则以 Form 为准",
      },
      propType: "object",
      setter: "JsonSetter",
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    supports: { className: true, style: true },
  },
  snippets:[
    {
      title: "表单列表",
      screenshot: avatarImg,
      schema: {
        componentName: "AFormList",
        props: {
          style:{
            backgroundColor:"#fff",
            padding:"10px",
            height:"42px",
            display:"flex",
            alignItems:"center"
          }
        },
      }
    }
  ]
}
