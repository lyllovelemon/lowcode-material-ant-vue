/* eslint-disable */
// @ts-ignore
import avatarImg from "./__screenshots__/divider-2.png?inline";
const meta = {
  group: "ant-vue组件",
  componentName: "ADivider",
  title: "分割线",
  category: "布局",
  configure: {
    supports: {
      style: true,
      events: [],
    },
    props: [
      {
        name:"children",
        title:{label:"文案",tip:"children|自定义分割线文本内容"},
        setter:"StringSetter",
        supportVariable:true
      },
      {
        name: "dashed",
        title: { label: "是否虚线", tip: "dashed|是否虚线" },
        setter: "BoolSetter",
      },
      {
        name: "orientation",
        title: {
          label: "分割线标题的位置",
          tip: "orientation|分割线标题的位置",
        },
        setter: {
          componentName:"RadioGroupSetter",
          props:{
            options:[
              { title:"left",value:"left"},
              { title:"right",value:"right"},
              { title:"center",value:"center"}
            ]
          }
        },
        defaultValue:"center"
      },
      {
        name:"orientationMargin",
        title:{label:"边距",tip:"orientationMargin|标题和最近 left/right 边框之间的距离，去除了分割线"},
        propType: { type: "oneOfType", value: ["string", "number"] },
        condition:(target:any)=>{
          return target.getProps().getPropValue("orientation") === "left"||target.getProps().getPropValue("orientation") === "right"
        },
      },
      {
        name: "plain",
        title: { label: "普通正文", tip: "plain|文字是否显示为普通正文样式" },
        propType:"bool",
        setter: "BoolSetter",
        defaultValue:false
      },
      {
        name: "type",
        title: {
          label: "方向",
          tip: "type|水平还是垂直方向",
        },
        setter: {
          componentName:"RadioGroupSetter",
          props:{
            options:[
              { title:"horizontal|水平",value:"horizontal" },
              { title:"vertical|垂直",value:"vertical"}]
          }
        },
        defaultValue: "horizontal",
      }
    ],
  },
  snippets: [
    {
      title: "分割线",
      schema: {
        componentName: "ADivider",
        props: {
          plain:false,
          direction: "horizontal"
        },
      },
    },
    {
      title: "带文字分割线",
      screenshot: avatarImg,
      schema: {
        componentName: "ADivider",
        props: {
          children: [
            {
              componentName: "ATypographyText",
              props: {
                children: "分割文字",
              }
            }
          ]
        }
      }
    }
  ],
};

export default meta;
