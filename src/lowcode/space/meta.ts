// @ts-ignore
import avatarImg from "./__screenshots__/space-1.png?inline";
export default {
  group: "ant-vue组件",
  componentName:"ASpace",
  title: "间距",
  category: "布局",
  npm: {
    destructuring: true,
    componentName: "ASpace"
  },
  props:[
    {
      name: "align",
      title: { label: "对齐方式", tip: "align|对齐方式" },
      propType: {
        type: "oneOf",
        value: ["start", "end", "center", "baseline"],
      },
    },
    {
      name: "direction",
      title: { label: "间距方向", tip: "direction|间距方向" },
      propType: { type: "oneOf", value: ["vertical", "horizontal"] },
    },
    {
      name: "size",
      title: { label: "间距大小", tip: "size|间距大小" },
      propType: {
        type: "oneOfType",
        value: [
          {
            type: "oneOf",
            value: ["small", "middle", "large"],
          },
          "number",
        ],
      },
      defaultValue: "middle",
    },
    {
      name: "wrap",
      title: { label: "是否自动换行", tip: "wrap|是否自动换行" },
      propType: "bool",
      condition: {
        type: "JSFunction",
        value: "target => target.getProps().getPropValue(\"direction\")===\"horizontal\"",
      },
    },
    {
      name: "split",
      title: { label: "间隔组件", tip: "split|间隔组件,可拖组件进来， 常用的有竖向分隔线" },
      propType: "node",
    },
  ],
  configure: {
    component:{
      isContainer:true
    },
    supports: {
      style:true
    }
  },
  snippets:[
    {
      title: "间距",
      screenshot: avatarImg,
      schema: {
        componentName: "ASpace",
        props: {},
        children: [
          {
            componentName: "AButton",
            props: {
              children: "Button-lyl",
            },
          },
          {
            componentName: "AButton",
            props: {
              children: "Button-lemon",
            },
          },
        ],
      },
    },
  ]
}
