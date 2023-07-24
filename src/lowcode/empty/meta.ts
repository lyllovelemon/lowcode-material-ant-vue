// @ts-ignore
import avatarImg from "./__screenshots__/empty-1.png?inline"
export default {
  group: "ant-vue组件",
  componentName:"AEmpty",
  title: "空状态",
  category: "数据展示",
  npm: {
    destructuring: true,
    componentName: "AEmpty"
  },
  props:[
    {
      name: "description",
      title: { label: "内容描述", tip: "description|自定义描述内容" },
      propType: { type: "oneOfType", value: ["string", "node"] },
    },
    {
      name: "image",
      title: {
        label: "图片地址",
        tip: "image|设置显示图片，为string时表示自定义图片地址。",
      },
      propType: { type: "oneOfType", value: ["string", "node"] },
    },
  ],
  configure: {
    supports: {
      style:true
    }
  },
  snippets:[
    {
      title:"空状态",
      screenshot:avatarImg,
      schema:{
        componentName:"AEmpty",
        props:{}
      }
    }
  ]
}
