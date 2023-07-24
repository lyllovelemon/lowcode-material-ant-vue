// @ts-ignore
import avatarImage from "./__screenshots__/form-1.png?inline"
/* eslint-disable */
import {uuid} from "../../utils/index";
// @ts-ignore
export default {
  group: "ant-vue组件",
  componentName: "AForm",
  title: "表单",
  category: "表单",
  npm: {
    destructuring: true,
    componentName: "AForm"
  },
  props:[
    {
      name: "ref",
      title: {
        label: "ref",
        tip: "ref | 通过 this.$refs[\"xxx\"] 获取到组件实例",
      },
      defaultValue: () => {
        return `form_${uuid()}`
      },
      setter: "StringSetter",
      supportVariable: true
    },
    {
      name: "model",
      title: { label: "表单数据对象", tip: "model | 表单数据对象" },
      propType: "object",
      setter: "JsonSetter",
      supportVariable: true
    },
    {
      name:"rules",
      title:{label:"表单验证规则",tip:"rules | 表单验证规则"},
      propType:"object",
      setter:"JsonSetter",
      supportVariable:true
    },
    {
      name: "colon",
      title: { label: "展示冒号", tip: "colon | 展示冒号" },
      propType: "bool",
      defaultValue: true,
      setter: "BoolSetter",
      supportVariable: true
    },
    {
      name: "hideRequiredMark",
      title: { label: "隐藏必填标记", tip: "hideRequiredMark | 隐藏必填标记" },
      propType: "bool",
      defaultValue: false,
      setter: "BoolSetter",
      supportVariable: true
    },
    {
      type: "group",
      title: "布局",
      display: "accordion",
      items:[
        {
          name: "labelCol",
          title: {label:"标签栅格布局设置",tip:"labelCol | 标签栅格布局设置"},
          display: "inline",
          setter: {
            componentName: "ObjectSetter",
            props: {
              config: {
                items: [
                  {
                    name: "span",
                    title: "宽度",
                    setter: {
                      componentName: "NumberSetter",
                      props: {
                        min: 0,
                        max: 24,
                      },
                    },
                  },
                  {
                    name: "offset",
                    title: "偏移",
                    setter: {
                      componentName: "NumberSetter",
                      props: {
                        min: 0,
                        max: 24,
                      },
                    },
                  },
                ],
              },
            },
          },
          description:
            "label 标签布局，同 `<Col>` 组件，设置 span offset 值，如 {span: 8, offset: 16}，该项仅在垂直表单有效",
        },
        {
          name: "wrapperCol",
          title: {label:"内容栅格布局设置",tip:"wrapperCol | 内容栅格布局设置"},
          display: "inline",
          setter: {
            componentName: "ObjectSetter",
            props: {
              config: {
                items: [
                  {
                    name: "span",
                    title: "宽度",
                    setter: {
                      componentName: "NumberSetter",
                      props: {
                        min: 0,
                        max: 24,
                      },
                    },
                  },
                  {
                    name: "offset",
                    title: "偏移",
                    setter: {
                      componentName: "NumberSetter",
                      props: {
                        min: 0,
                        max: 24,
                      },
                    },
                  },
                ],
              },
            },
          },
          description: "需要为输入控件设置布局样式时，使用该属性，用法同 labelCol",
        },
      ]
    },
    {
      name: "labelAlign",
      title: {
        label: "标签对齐",
        tip: "labelAlign | label标签的文本对齐方式",
      },
      setter: {
        componentName: "RadioGroupSetter",
        props: {
          options: [
            {
              title: "左",
              value: "left",
            },
            {
              title: "右",
              value: "right",
            },
          ],
        },
      },
      propType: { type: "oneOf", value: ["left", "right"] },
      defaultValue: "right",
    },
    {
      name: "layout",
      title: { label: "表单布局", tip: "layout | 表单布局" },
      setter: {
        componentName: "RadioGroupSetter",
        props: {
          options: [
            {
              title: "水平",
              value: "horizontal",
            },
            {
              title: "垂直",
              value: "vertical",
            },
            {
              title: "行内",
              value: "inline",
            },
          ],
        },
      },
      propType: { type: "oneOf", value: ["horizontal", "vertical", "inline"] },
      defaultValue: "horizontal",
    },
    {
      name: "name",
      title: {
        label: "表单名称",
        tip: "name | 表单名称，会作为表单字段 `id` 前缀使用",
      },
      propType: "string",
      setter: "StringSetter",
      supportVariable: true
    },
    {
      name: "validateOnRuleChange",
      title: {
        label: "rules改变触发验证",
        tip: "validateOnRuleChange | 是否在 rules 属性改变后立即触发一次验证",
      },
      propType: "bool",
      defaultValue: true,
      setter: "BoolSetter",
      supportVariable: true
    },
    {
      name: "scrollToFirstError",
      title: {
        label: "滚至错误",
        tip: "scrollToFirstError | 提交失败自动滚动到第一个错误字段",
      },
      propType: "bool",
      defaultValue: true,
      setter: "BoolSetter",
      supportVariable: true
    },
    {
      name: "size",
      title: {
        label: "字段组件尺寸",
        tip: "size | 设置字段组件的尺寸（仅限 antd 组件）",
      },
      propType: { type: "oneOf", value: ["small", "middle", "large"] },
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
      defaultValue: "middle",
    },
    {
      type: "group",
      title: "事件",
      display: "accordion",
      items:[
        {
          name: "validateMessages",
          title: { label: "验证提示模板", tip: "validateMessages | 验证提示模板" },
          setter: "JsonSetter",
          defaultValue: { required: "\"${name}\" 不能为空" },
        },
        {
          name: "validateTrigger",
          title: { label: "校验时机", tip: "validateTrigger | 所有字段校验触发时机" },
          propType: {
            type: "oneOf",
            value: ["onChange", "onBlur"],
          },
          setter: {
            componentName: "RadioGroupSetter",
            props: {
              options: [
                {
                  title: "当前值变化时",
                  value: "onChange",
                },
                {
                  title: "失去焦点时",
                  value: "onBlur",
                },
              ],
            },
          },
        },
        {
          name: "onClearValidate",
          title: {
            label: "移除表单项的校验结果",
            tip: "onClearValidate | 移除表单项的校验结果。传入待移除的表单项的 name 属性或者 name 组成的数组，如不传则移除整个表单的校验结果",
          },
          propType: "func",
        },
        {
          name: "onResetFields",
          title: {
            label: "重置表单并移除校验结果",
            tip: "onResetFields | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果",
          },
          propType: "func",
        },
        {
          name: "onValidateFields",
          title: { label: "触发表单验证", tip: "onValidateFields | 触发表单验证" },
          propType: "func",
        },
        {
          name: "onValidate",
          title: {
            label: "任一表单项被校验后触发",
            tip: "onValidate | 任一表单项被校验后触发",
          },
          propType: "func",
        }
      ]
    }
  ],
  configure:{
    component:{
      isContainer:true
    },
    supports:{
      style:true,
      events:[
        {
          name:"onFinish",
          template:
            "onFinish(values,${extParams}){\n// 提交表单且数据验证成功后回调事件\nconsole.log(\"onFinish\",values);}",
        },
        {
          name: "onFinishFailed",
          template:
            "onFinishFailed({values,errorFields,outOfDate},${extParams}){\n// 提交表单且数据验证失败后回调事件\nconsole.log(\"onFinishFailed\",values, errorFields, outOfDate);}",
        },
        {
          name: "onSubmit",
          template:
            "onSubmit(e,${extParams}){\n// 数据验证成功后回调事件\nconsole.log(\"onSubmit\",e);}",
        },
        {
          name: "onValidate",
          template:
            "onValidate(name,status,errorMsgs,${extParams}){\n// 任一表单项被校验后触发\nconsole.log(\"onValidate\",name,status,errorMsgs);}",
        },
      ]
    },
    advanced:{
      callbacks:{
        onNodeAdd: (dragment: { componentMeta: { npm: { package: string | string[]; }; }; componentName: string | string[]; exportSchema: () => any; }, currentNode: { document: { createNode: (arg0: { componentName: string; props: { label: string; }; children: any[]; }) => any; }; replaceChild: (arg0: any, arg1: any, arg2: { reserveSchemaNodeId: boolean; }) => void; }) => {
          const comps = [
            "AInput",
            "ASelect",
            "ARadio",
            "ARadioGroup",
            "ACheckbox",
            "ACheckboxGroup",
            "ASwitch",
            "AUpload",
            "ADatePicker",
            "ARate",
            "ATransfer",
          ];

          if (
            !dragment ||
            !dragment.componentMeta ||
            !dragment.componentMeta.npm ||
            !dragment.componentMeta.npm.package ||
            dragment.componentMeta.npm.package.indexOf("lowcode-material-ant-vue") === -1 ||
            comps.every((comp) => dragment.componentName.indexOf(comp) === -1)
          ) {
            return;
          }

          // 为目标元素包裹一层P
          const layoutPNode = currentNode.document.createNode({
            componentName: "AFormItem",
            props: {
              label: "表单项: ",
            },
            children: [dragment.exportSchema()],
          });
          // 当前dragment还未添加入node子节点,需要setTimeout处理
          setTimeout(() => {
            currentNode.replaceChild(
              dragment,
              layoutPNode.exportSchema(),
              // 避免生成新的 nodeId
              { reserveSchemaNodeId: true },
            );
          }, 1);
        },
      },
      }
      },
  snippets: [
    {
      title:"空表单",
      screenshot:avatarImage,
      schema:{
        componentName: "AForm",
        props: {
          labelCol:{
            span:6,
            labelAlign:"right"
          },
          wrapperCol:{
            span:14
          },
          onValidate: {
            type: "JSFunction",
            value: "function onValidate(e) {\n  console.log(\"e\", changedValues, allValues);\n}"
          },
          onFinish: {
            type: "JSFunction",
            value: "function onFinish(values) {\n  console.log(\"onFinish\", values);\n}"
          },
          onFinishFailed: {
            type: "JSFunction",
            value: "function onFinishFailed({ values, errorFields, outOfDate }) {\n  console.log(\"onFinishFailed\", values, errorFields, outOfDate);\n}"
          },
          onSubmit:{
            type:"JSFunction",
            value:"function onSubmit(e){\n console.log(\"onSubmit\",e);\n}"
          },
          name: "basic",
          children:[
            {
              componentName:'Slot'
            }
          ]
        }
      }
    },
    {
      title: "表单",
      screenshot: avatarImage,
      schema: {
        componentName: "AForm",
        props: {
          style:{
            backgroundColor:"#fff",
            padding:"10px",
            display:"flex",
            flexDirection:"column",
            justifyContent:"flex-start",
            alignItems:"center"
          },
          labelCol:{
            span:6,
            labelAlign:"right"
          },
          wrapperCol:{
            span:14
          },
          onValidate: {
            type: "JSFunction",
            value: "function onValidate(e) {\n  console.log(\"e\", changedValues, allValues);\n}"
          },
          onFinish: {
            type: "JSFunction",
            value: "function onFinish(values) {\n  console.log(\"onFinish\", values);\n}"
          },
          onFinishFailed: {
            type: "JSFunction",
            value: "function onFinishFailed({ values, errorFields, outOfDate }) {\n  console.log(\"onFinishFailed\", values, errorFields, outOfDate);\n}"
          },
          onSubmit:{
            type:"JSFunction",
            value:"function onSubmit(e){\n console.log(\"onSubmit\",e);\n}"
          },
          name: "basic",
          children:[
            {
              componentName:"AFormItem",
              props:{
                label:"表单项1",
                labelAlign:"right",
                colon:true,
                required:true,
                noStyle:false,
                valuePropName:"value",
                name:"b",
                requiredobj:{
                  required:false,
                  message:"必填"
                },
                typeobj:{
                  type:null,
                  message:null
                },
                lenobj:{
                  max:null,
                  min:null,
                  message:null
                },
                patternobj:{
                  pattern:null,
                  message:null
                }
              },
              children:[
                {
                  componentName: "AInput",
                  props: {
                    style:{
                      width:"228px",
                      height:"22px",
                      display:"inline-flex",
                      alignItems:"center",
                      marginRight:"10px",
                      backgroundColor:"#ddf4ff",
                      border:"1px solid #ddf4ff"
                    },
                    type: "text",
                    size: "default",
                    placeholder: "请输入",
                    autocomplete: "off",
                    label:"",
                    bordered:true
                  }
                }
              ]
            },
            {
              componentName:"AFormItem",
              props:{
                label:"表单项11",
                labelAlign:"right",
                colon:true,
                required:true,
                noStyle:false,
                valuePropName:"value",
                name:"bc",
                requiredobj:{
                  required:false,
                  message:"必填"
                },
                typeobj:{
                  type:null,
                  message:null
                },
                lenobj:{
                  max:null,
                  min:null,
                  message:null
                },
                patternobj:{
                  pattern:null,
                  message:null
                }
              },
              children:[
                {
                  componentName: "ASelect",
                  props: {
                    style:{
                      width:"228px",
                      height:"22px",
                      display:"inline-flex",
                      justifyContent:"center",
                      alignItems:"center"
                    },
                    options:[
                      {label:"选项一",value:"1"},
                      {label:"选项二",value:"2"},
                      {label:"选项三",value:"3"}
                    ],
                    bordered:true,
                    allowCreate:false,
                    autoFocus:false,
                    labelInValue: false,
                    placeholder:"请选择",
                    filterOption:false,
                    autoClearSearchValue:true,
                    showArrow:true,
                    showSearch:true,
                    size:"default",
                    tokenSeparators: [],
                    getPopupContainer:()=>document.querySelector("#lce-container")
                  }
                }
              ]
            },
            {
              componentName:'AFormItem',
              props:{
                label:"表单项2",
                wrapperCol:{
                  offset:7
                },
                name:"d"
              },
              children:[
                {
                  componentName: "ACheckboxGroup",
                  props: {
                    style:{
                      display:'flex'
                    },
                    options: [
                      {
                        label: "A",
                        value: "A"
                      },
                      {
                        label: "B",
                        value: "B"
                      },
                      {
                        label: "C",
                        value: "C"
                      }
                    ]
                  }
                }
              ]
            },
            {
              componentName:'AFormItem',
              props:{
                label:"表单项23",
                wrapperCol:{
                  offset:7
                },
                name:"e",
              },
              children:[
                {
                  componentName: "ADatePicker",
                  props: {
                    style:{
                      width:'228px',
                      backgroundColor:"#ddf4ff"
                    },
                    allowClear:true,
                    autoFocus:false,
                    bordered:true,
                    disabled:false
                  }
                }
              ]
            },
            {
              componentName:'AFormItem',
              props:{
                label:"表单项4",
                wrapperCol:{
                  offset:7
                },
                name:"f",
              },
              children:[
                {
                  componentName: "ASwitch",
                  props: {
                    allowClear:true,
                    autoFocus:false,
                    bordered:true,
                    disabled:false
                  }
                }
              ]
            },
            {
              componentName:'AFormItem',
              props:{
                name:"g"
              },
              children:[
                {
                  componentName:'AButton',
                  props:{
                    style:{
                      display:'inline-flex',
                      justifyContent:'center',
                      alignItems:'center',
                      width:'64px',
                      textAlign:'center',
                      fontSize:'12px'
                    },
                    type:'primary',
                    children:"确定",
                    htmlType:"submit"
                  }
                },
                {
                  componentName:'AButton',
                  props:{
                    style:{
                      display:'inline-flex',
                      justifyContent:'center',
                      alignItems:'center',
                      width:'64px',
                      height:'24px',
                      fontSize:'12px',
                      marginLeft:'10px'
                    },
                    children:'取消',
                    htmlType:"text"
                  }
                }
              ]

            }
          ]
        }
      }
    }
  ]
}
