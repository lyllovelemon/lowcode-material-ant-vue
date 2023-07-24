// @ts-ignore
import avatarImg from "./__screenshots__/typography-link-1.png?inline";
export default {
  group: "ant-vue组件",
  componentName:"ATypographyLink",
  title: "链接",
  category: "基础",
  npm: {
    destructuring: true,
    componentName: "ATypographyLink"
  },
  props:[
    {
      name: "children",
      title: { label: "内容", tip: "children|内容" },
      propType: "string",
      defaultValue: "",
      supportVariable: true,
    },
    {
      name: "href",
      title: { label: "跳转链接", tip: "href|跳转链接" },
      propType: "string",
      defaultValue: "",
    },
    {
      name: "target",
      title: { label: "跳转位置", tip: "target|在何处显示链接的资源" },
      propType: {
        type: "oneOf",
        value: ["_self", "_blank", "_parent", "_top"],
      },
      defaultValue: "_self",
    },
  ],
  configure: {
    supports: {
      style:true
    }
  },
  snippets:[
    {
      title:"链接",
      screenshot:avatarImg,
      schema:{
        componentName:"ATypographyLink",
        props:{
          href:"https://www.antdv.com/components/typography-cn#API",
          target:"_blank",
          children:"链接"
        }
      }
    }
  ]
}
