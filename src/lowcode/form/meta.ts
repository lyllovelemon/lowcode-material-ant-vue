/* eslint-disable */
// @ts-ignore
export default {
  group: 'Antd',
  componentName: 'AForm',
  title: '表单',
  category: '表单',
  npm: {
    destructuring: true,
    componentName: 'AForm'
  },
  props:[
    { name:'value',propType:{type:'oneOfType',value:['Json','JSExpression']},description:'表单数值'},
    { name:'rules',propType:'object',description:'表单验证规则',defaultValue:null},
    { name:'inline',propType:'bool',description:'内联表单',defaultValue:false },
    { name:'size',title:{label:'Size',tip:'表单尺寸'},propType:{type:'oneOf',value:['large','default','small']},description:'"单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。',defaultValue:'default'},
    { name:'labelPosition',title:{label:'标签位置',tip:'左、右、上'},propType:{type:'oneOf',value:['left','right','top']},defaultValue:'right'},
    { name:'labelWidth',title:'标签长度',propType:{type:'oneOfType',value:['string','number']}},
    { name:'className',propType:'string',description:'扩展class'},
    { name:'style',propType:'object',description:'自定义内联样式'},
    { name:'disabled',propType:'bool',description:'是否禁用该表单内所有组件',defaultValue:false},
    { name:'validateOnRuleChange',propType:'bool',description:'是否在 rules 属性改变后立即触发一次验证',defaultValue:true},
    { name:'onSubmit',propType:'func',description:'form内有 `htmlType=\\"submit\\"` 的元素的时候会触发'},
    { name:'onChange',propType:'func',description:'表单变化回调'}
  ],
  configure:{
    component:{
      isContainer:true
    },
    props:[
      { name:'value',title:'表单数值',setter:{componentName:'MixedSetter',props:{setters:['JsonSetter','ExpressionSetter']}},supportVariable: true },
      { name:'rules',title:'表单验证规则',setter:{componentName:'ExpressionSetter'}},
      { name:'inline', title:{ label:'内联表单',tip:'内联表单' }, setter:'BoolSetter' },
      { name:'size',title:'尺寸',setter:{componentName:'RadioGroupSetter',props:{options:['large','default','small']}}},
      { name:'labelPosition',title:'标签位置',setter:{componentName:'RadioGroupSetter',props:{options:['left','right','top']}}},
      { name:'labelWidth',title:'标签长度',setter:{componentName:'MixedSetter',props:{setters:['StringSetter','NumberSetter']}}},
      { name:'className',title:'class',setter:'StringSetter'},
      { name:'style',title:'style',setter:{componentName:'ExpressionSetter'}},
      { name:'field',title:'Field实例',setter:{componentName:'ExpressionSetter'}},
      { name:'disabled',title:'禁用',setter:'BoolSetter'},
      { name:'validateOnRuleChange',title:'rules规则改变立即触发验证',setter:'BoolSetter'},

    ],
    supports:{
      style:true,
      loop:true,
      events:[
        { name:'resetFields',propType:'func',description:'重置该表单项并移除校验结果'},
        { name:'validate',propType:'func',description:'对整个表单进行验证'},
        { name:'validateField',propType:'func',description:'验证具体的某个字段'},
        { name:'clearValidate',propType:'func',description:'清理某个字段的表单验证信息'},
        { name:'onSubmit',propType:'func',description:'表单提交'},
        { name:'onChange',propType:'func',description:'表单某一项改变'}
      ]
    },
    advanced:{
      callbacks:{
        onNodeAdd:{
          type:'JSFunction',
          value:'(dragment, currentNode) => {\\n        \\n        if (!dragment || dragment.componentName === \\"AFormItem\\") {\\n          return;\\n        }\\n        \\n        const layoutPNode = currentNode.document.createNode({\\n          componentName: \\"AFormItem\\",\\n          title: \\"表单项\\",\\n          props: {\\n            label: \\"表单项: \\"\\n          },\\n          children: [dragment.schema]\\n        });\\n        \\n        setTimeout(() => {\\n          if (!currentNode.getChildren().has(dragment)) {\\n            return;\\n          }\\n          const newNode = currentNode.document.createNode(Object.assign(layoutPNode.schema));\\n          currentNode.insertBefore(newNode, dragment, false);\\n          dragment.remove(false);\\n          newNode.getChildren().get(0).select();\\n        }, 1);\\n      }'
        }
      }
    }
  },
  snippets: [
    {
      title: '表单',
      screenshot: "https://alifd.alicdn.com/fusion-cool/icons/icon-antd/form-1.png",
      schema: {
        componentName: 'AForm',
        props: {
          labelCol:{
            span:6,
            labelAlign:'left'
          },
          onValuesChange: {
            type: "JSFunction",
            value: "function onValuesChange(changedValues, allValues) {\n  console.log('onValuesChange', changedValues, allValues);\n}"
          },
          onFinish: {
            type: "JSFunction",
            value: "function onFinish(values) {\n  console.log('onFinish', values);\n}"
          },
          onFinishFailed: {
            type: "JSFunction",
            value: "function onFinishFailed({ values, errorFields, outOfDate }) {\n  console.log('onFinishFailed', values, errorFields, outOfDate);\n}"
          },
          "name": "basic"
        },
        children:[
          {
            componentName:'AFormItem',
            props:{
              label:'表单项:',
              labelAlign:'right',
              colon:true,
              required:true,
              name:'a'
            },
            children:[
              {
                componentName:'AInput',
                props:{
                  name:'userName',
                  size:'medium',
                  placeholder:'用户名'
                }
              }
            ]
          },
          {
            componentName:'AFormItem',
            props:{
              label:'密码:',
              colon:true,
              required:true,
              name:'b',
            },
            children:[
              {
                componentName:'AInputPassword',
                props:{
                  name:'password',
                  placeholder:'请输入密码',
                  size:'medium'
                }
              }
            ]
          },
          {
            componentName:'AFormItem',
            props:{
              label:'表单项',
              name:'c',
              labelAlign:'right',
              children:[
                {
                  componentName:'ASelect',
                  props:{
                    style:{
                      width:200
                    },
                    options:[
                      { label:'A',value:'A'},
                      { label:'B',value:'B'},
                      { label:'C',value:'C'}
                    ],
                    allowClear:true,
                    autoFocus:false,
                    filterOption:true
                  },

                }
              ]
            }
          },
          {
            componentName:'AFormItem',
            props:{
              wrapperCol:{
                offset:7
              }
            },
            children:[
              {
                componentName:'AFormSubmit',
                props:{
                  type:'primary',
                  validate:true,
                  onClick:{
                    type:'JSFunction',
                    value:"(v,e)=>{console.log(v,e)}"
                  }
                }
              },
              {
                componentName:'AFormReset',
                props:{
                  style:{
                    marginLeft:10
                  },
                  children:'Reset'
                }
              }
            ]
          }
        ]
      },
    }
  ],
}