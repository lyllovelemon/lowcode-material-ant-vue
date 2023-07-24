// @ts-ignore
import Image from "./__screenshots__/image-1.png?inline"
export default {
  group: "ant-vue组件",
  componentName:"AImage",
  title: "图片",
  category: "数据展示",
  npm: {
    destructuring: true,
    componentName: "AImage"
  },
  props:[
    {
      name: "src",
      title: { label: "图片地址", tip: "src|图片地址" },
      propType: { type: "string", isRequired: true },
    },
    {
      name: "alt",
      title: { label: "替换文本", tip: "alt|替换文本" },
      propType: "string",
    },
    {
      name: "preview",
      title: { label: "支持预览", tip: "preview|支持预览" },
      defaultValue: true,
      propType: "bool",
    },
    {
      name: "fallback",
      title: { label: "失败地址", tip: "fallback|加载失败容错地址" },
      propType: "string",
    },
    {
      name: "width",
      title: { label: "宽度", tip: "宽度" },
      propType: {type:"oneOfType",value:["number","string"]},
    },
    {
      name: "height",
      title: { label: "高度", tip: "height|高度" },
      propType: {type:"oneOfType",value:["number","string"]},
    },
    {
      name:"previewMask",
      title:{label:"自定义mask",tip:"previewMask|自定义 mask"},
      propType:{type:"oneOfType",value:["bool","func","node"]},
      setter:[
        "BoolSetter",
        {
        componentName: "SlotSetter",
        initialValue: {
          type: "JSSlot",
          value: []
        }
      },
        {
          componentName: "FunctionSetter",
          props: {
            template:
              "showPreviewMask(${extParams}){\n// ;\n}",
          },
        },],
      defaultValue:false
    }
  ],
  configure: {
    supports: {
      style:true,
      events: [
        {
          name: "onError",
          template: "onError(event,${extParams}){\n// 图片加载错误回调\nconsole.log(\"onError\",e);}",
        },
      ],
    }
  },
  snippets:[
    {
      title:"图片",
      screenshot:Image,
      schema:{
        componentName:"AImage",
        props:{
          src: Image,
          width:120,
          height:120
        }
      }
    }
  ]
}
