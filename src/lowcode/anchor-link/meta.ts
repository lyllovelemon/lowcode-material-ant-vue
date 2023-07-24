export default {
  group: "ant-vue组件",
  componentName:"AAnchorLink",
  title: "锚点链接",
  category: "其他",
  npm: {
    destructuring: true,
    componentName: "AAnchorLink"
  },
  props:[
    {
      name: "href",
      title: { label: "锚点链接", tip: "href | 锚点链接" },
      propType: "string",
    },
    {
      name: "target",
      title: {
        label: "target",
        tip: "target | 该属性指定在何处显示链接的资源",
      },
      propType: "string",
    },
    {
      name: "title",
      title: { label: "内容", tip: "title | 内容" },
      propType: "string",
    },
  ],
  configure: {
    supports: {
      style:true
    }
  },
  snippets:[]
}
