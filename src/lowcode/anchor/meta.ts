// @ts-ignore
import avatarImg from "./__screenshots__/anchor-1.png?inline";
export default {
  group: "ant-vue组件",
  componentName:"AAnchor",
  title: "锚点",
  category: "基础组件",
  npm: {
    destructuring: true,
    componentName: "AAnchor"
  },
  snippets:[
    {
      title: "锚点",
      screenshot: avatarImg,
      schema: {
        componentName: "AAnchor",
        props: {},
        children: [
          {
            componentName: "AAnchorLink",
            props: {
              title: "Document",
            },
          },
          {
            componentName: "AAnchorLink",
            props: {
              title: "API",
            },
          },
          {
            componentName: "AAnchorLink",
            props: {
              title: "Demo",
            }
          }
        ]
      }
    }
  ]
}
