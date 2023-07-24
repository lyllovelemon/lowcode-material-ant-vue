/* eslint-disable */
// @ts-ignore
import Button1 from "./__screenshots__/button-1.png?inline";
// @ts-ignore
import Button2 from "./__screenshots__/button-2.png?inline";
// @ts-ignore
import Button3 from "./__screenshots__/button-3.png?inline";
// @ts-ignore
import Button4 from "./__screenshots__/button-4.png?inline";
// @ts-ignore
import Button5 from "./__screenshots__/button-5.png?inline";
// @ts-ignore
import Button6 from "./__screenshots__/button-6.png?inline";
export default {
  group: "ant-vue组件",
  componentName: "AButton",
  title: "按钮",
  category: "通用",
  npm: {
    destructuring: true,
    componentName: "AButton",
  },
  props:[
    {
      title: "功能",
      display: "block",
      type: "group",
      items: [
        {
          name: "children",
          title: {
            label: "内容",
            tip: "children | 内容",
          },
          propType: {
            type: "oneOfType",
            value: ["node", "string"],
          },
          setter: ["SlotSetter", "StringSetter", "VariableSetter"],
        },
        {
          name: "htmlType",
          title: {
            label: "原生类型",
            tip: "htmlType | 设置 `button` 原生的 `type` 值",
          },
          propType: {
            type: "oneOf",
            value: ["submit", "reset", "button"],
          },
          setter: [
            {
              componentName: "RadioGroupSetter",
              props: {
                options: [
                  {
                    title: "Submit",
                    value: "submit",
                  },
                  {
                    title: "Reset",
                    value: "reset",
                  },
                  {
                    title: "Button",
                    value: "button",
                  },
                ],
              },
            },
            "VariableSetter",
          ],
          defaultValue: "button",
        },
        {
          name: "href",
          title: {
            label: "跳转地址",
            tip: "href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致",
          },
          propType: "string",
          setter: ["StringSetter", "VariableSetter"],
        },
        {
          name: "target",
          title: {
            label: "Target",
            tip: "target | 相当于 a 链接的 target 属性，href 存在时生效",
          },
          propType: {
            type: "oneOf",
            value: ["_self", "_blank", "_parent", "_top"],
          },
          setter: [
            {
              componentName: "SelectSetter",
              props: {
                options: [
                  {
                    title: "本窗口跳转",
                    value: "_self",
                  },
                  {
                    title: "打开新标签页",
                    value: "_blank",
                  },
                  {
                    title: "父窗口跳转",
                    value: "_parent",
                  },
                  {
                    title: "顶层窗口跳转",
                    value: "_top",
                  },
                ],
              },
            },
            "StringSetter",
            "VariableSetter",
          ],
          condition: {
            type: "JSFunction",
            value: "target => !!target.getProps().getPropValue(\"href\")?.trim()",
          },
        },
      ],
    },
    {
      title: "外观",
      display: "block",
      type: "group",
      items: [
        {
          name: "type",
          title: { label: "类型", tip: "type | 设置按钮类型" },
          propType: {
            type: "oneOf",
            value: ["primary", "ghost", "dashed", "danger", "link", "text"],
          },
          setter: [
            {
              componentName: "SelectSetter",
              props: {
                options: [
                  {
                    title: "主按钮",
                    value: "primary",
                  },
                  {
                    title: "虚线框按钮",
                    value: "dashed",
                  },
                  {
                    title: "危险按钮",
                    value: "danger",
                  },
                  {
                    title: "链接按钮",
                    value: "link",
                  },
                  {
                    title: "类文本按钮",
                    value: "text",
                  },
                ],
              },
            },
            "VariableSetter",
          ],
        },
        {
          name: "size",
          title: { label: "尺寸", tip: "size | 设置按钮大小" },
          propType: { type: "oneOf", value: ["large", "middle", "small"] },
          setter: [
            {
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
            "VariableSetter",
          ],
          defaultValue: "middle",
        },
        {
          name: "shape",
          title: {
            label: "形状",
            tip: "shape | 设置按钮形状，可选值为 `circle`、 `round` 或者不设",
          },
          propType: { type: "oneOf", value: ["default", "circle", "round"] },
          defaultValue: "default",
          setter: [
            {
              componentName: "RadioGroupSetter",
              props: {
                options: [
                  {
                    title: "默认",
                    value: "default",
                  },
                  {
                    title: "圆形",
                    value: "circle",
                  },
                  {
                    title: "圆角",
                    value: "round",
                  },
                ],
              },
            },
            "VariableSetter",
          ],
        },
        {
          name: "icon",
          title: { label: "图标", tip: "icon | 设置按钮的图标组件" },
          propType: "node",
          setter: {
            componentName: "SlotSetter",
            initialValue: {
              type: "JSSlot",
              value: [
                // {
                //   componentName: "AIcon",
                //   props: {
                //     type: "SmileOutlined",
                //     size: 20,
                //     rotate: 0,
                //     spin: false,
                //   }
                // }
              ]
            }
          }
        },
        {
          name: "block",
          title: {
            label: "自适应",
            tip: "block | 将按钮宽度调整为其父宽度的选项",
          },
          propType: "bool",
          setter: "BoolSetter",
          defaultValue: false,
        },
        {
          name: "danger",
          title: { label: "危险按钮", tip: "danger | 设置危险按钮" },
          propType: "bool",
          setter: "BoolSetter",
          defaultValue: false,
        },
        {
          name: "ghost",
          title: { label: "幽灵属性", tip: "ghost | 幽灵属性，使按钮背景透明" },
          propType: "bool",
          setter: "BoolSetter",
          defaultValue: false,
        },
      ],
    },
    {
      title: "状态",
      display: "block",
      type: "group",
      items: [
        {
          name: "loading",
          title: { label: "载入状态", tip: "loading | 设置按钮载入状态" },
          propType: "bool",
          setter: ["BoolSetter", "VariableSetter"],
        },
        {
          name: "disabled",
          title: { label: "是否禁用", tip: "disabled | 是否为禁用状态" },
          propType: "bool",
          setter: ["BoolSetter", "VariableSetter"],
          defaultValue: false,
        },
      ],
    },
    {
      name: "onClick",
      title: { label: "点击回调", tip: "点击按钮时的回调" },
      propType: "func",
    },
  ],
  configure: {
    supports: {
      events: [
        {
          name: "onClick",
          template:
            "onClick(event,${extParams}){\n// 点击按钮时的回调\nconsole.log(\"onClick\", event);}",
        },
      ],
      style: true,
    },
  },
  snippets: [
    {
      title: "主按钮",
      screenshot:Button1,
      schema: {
        componentName: "AButton",
        props: {
          style:{
            marginLeft:"10px",
            fontSize:"12px",
            width:"66px",
            height:"24px",
            display:"inline-flex",
            justifyContent:"center",
            alignItems:"center"
          },
          type:"primary",
          children:"主按钮",
          htmlType:"button",
          size:"middle",
          shape:"default",
          block:false
        },
      },
    },
    {
      title:"查询按钮",
      screenshot:Button1,
      schema: {
        componentName: "AButton",
        props: {
          style:{
            fontSize:"12px",
            width:"66px",
            height:"24px",
            display:"inline-flex",
            justifyContent:"center",
            alignItems:"center",
            marginLeft:"10px"
          },
          type:"primary",
          children:"查询",
          htmlType:"button",
          size:"middle",
          shape:"default",
          block:false
        },
      },
    },
    {
      title:"重置按钮",
      screenshot:Button2,
      schema: {
        componentName: "AButton",
        props: {
          style:{
            margin:"0 30px 0 0",
            fontSize:"12px",
            borderColor:"#fff",
            width:"44px",
            height:"22px",
            display:"inline-flex",
            justifyContent:"center",
            alignItems:"center",
            color: "#5597f9"
          },
          type:"default",
          children:"重置",
          htmlType:"button",
          size:"middle",
          shape:"default",
          block:false
        },
      },
    },
    {
      title:"次按钮",
      screenshot:Button2,
      schema:{
        componentName:"AButton",
        props:{
          style:{
            marginLeft:"10px",
            fontSize:"12px",
            width:"66px",
            height:"24px",
            display:"inline-flex",
            justifyContent:"center",
            alignItems:"center"
          },
          type:"default",
          children:"次按钮"
        }
      }
    },
    {
      title:"危险按钮",
      screenshot:Button3,
      schema:{
        componentName:"AButton",
        props:{
          style:{
            marginLeft:"10px",
            fontSize:"12px",
            width:"66px",
            height:"24px",
            display:"inline-flex",
            justifyContent:"center",
            alignItems:"center"
          },
          type:"danger",
          children:"危险按钮"
        }
      }
    },
    {
      title:"文字按钮",
      screenshot:Button4,
      schema:{
        componentName:"AButton",
        props:{
          style:{
            marginLeft:"10px",
            fontSize:"12px",
            width:"66px",
            height:"24px",
            display:"inline-flex",
            justifyContent:"center",
            alignItems:"center"
          },
          type:"text",
          children:"文字按钮"
        }
      }
    },
    {
      title:"虚框按钮",
      screenshot:Button5,
      schema:{
        componentName:"AButton",
        props:{
          style:{
            marginLeft:"10px",
            fontSize:"12px",
            width:"66px",
            height:"24px",
            display:"inline-flex",
            justifyContent:"center",
            alignItems:"center"
          },
          type:"dashed",
          children:"虚框按钮"
        }
      }
    },
    {
      title:"链接按钮",
      screenshot:Button6,
      schema:{
        componentName:"AButton",
        props:{
          style:{
            marginLeft:"10px",
            fontSize:"12px",
            width:"66px",
            height:"24px",
            display:"inline-flex",
            justifyContent:"center",
            alignItems:"center"
          },
          type:"link",
          children:"链接按钮"
        }
      }
    }
  ],
};
