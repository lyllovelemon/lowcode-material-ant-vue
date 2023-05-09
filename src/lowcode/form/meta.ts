/* eslint-disable */
import {uuid} from '../../utils/index';
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
    {
      name: 'ref',
      title: {
        label: 'ref',
        tip: 'ref | 通过 this.$(\'xxx\') 获取到组件实例',
      },
      defaultValue: () => {
        return `form_${uuid()}`
      },
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'values',
      title: { label: '表单数据源', tip: '表单数据源' },
      propType: 'object',
      setter: 'JsonSetter',
      supportVariable: true
    },
    {
      name: 'colon',
      title: { label: '展示冒号', tip: '' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'hideRequiredMark',
      title: { label: '隐藏必填标记', tip: '隐藏必填标记' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      type: 'group',
      title: '布局',
      display: 'accordion',
      items:[
        {
          name: 'labelCol',
          title: '标签栅格布局设置',
          display: 'inline',
          setter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'span',
                    title: '宽度',
                    setter: {
                      componentName: 'NumberSetter',
                      props: {
                        min: 0,
                        max: 24,
                      },
                    },
                  },
                  {
                    name: 'offset',
                    title: '偏移',
                    setter: {
                      componentName: 'NumberSetter',
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
            'label 标签布局，同 `<Col>` 组件，设置 span offset 值，如 {span: 8, offset: 16}，该项仅在垂直表单有效',
        },
        {
          name: 'wrapperCol',
          title: '内容栅格布局设置',
          display: 'inline',
          setter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'span',
                    title: '宽度',
                    setter: {
                      componentName: 'NumberSetter',
                      props: {
                        min: 0,
                        max: 24,
                      },
                    },
                  },
                  {
                    name: 'offset',
                    title: '偏移',
                    setter: {
                      componentName: 'NumberSetter',
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
          description: '需要为输入控件设置布局样式时，使用该属性，用法同 labelCol',
        },
      ]
    },
    {
      name: 'labelAlign',
      title: {
        label: '标签对齐',
        tip: 'label 标签的文本对齐方式',
      },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '左',
              value: 'left',
            },
            {
              title: '右',
              value: 'right',
            },
          ],
        },
      },
      propType: { type: 'oneOf', value: ['left', 'right'] },
      defaultValue: 'right',
    },
    {
      name: 'layout',
      title: { label: '表单布局', tip: '表单布局' },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '水平',
              value: 'horizontal',
            },
            {
              title: '垂直',
              value: 'vertical',
            },
            {
              title: '行内',
              value: 'inline',
            },
          ],
        },
      },
      propType: { type: 'oneOf', value: ['horizontal', 'vertical', 'inline'] },
      defaultValue: 'horizontal',
    },
    {
      name: 'name',
      title: {
        label: '表单名称',
        tip: '表单名称，会作为表单字段 `id` 前缀使用',
      },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'preserve',
      title: {
        label: '删除时保留值',
        tip: '当字段被删除时保留字段值',
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'scrollToFirstError',
      title: {
        label: '滚至错误',
        tip: '提交失败自动滚动到第一个错误字段',
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'size',
      title: {
        label: '字段组件尺寸',
        tip: '设置字段组件的尺寸（仅限 antd 组件）',
      },
      propType: { type: 'oneOf', value: ['small', 'middle', 'large'] },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '大',
              value: 'large',
            },
            {
              title: '中',
              value: 'middle',
            },
            {
              title: '小',
              value: 'small',
            },
          ],
        },
      },
      defaultValue: 'middle',
    },
    {
      type: 'group',
      title: '事件',
      display: 'accordion',
      items:[
        {
          name: 'validateMessages',
          title: { label: '验证提示模板', tip: '验证提示模板' },
          setter: 'JsonSetter',
          defaultValue: { required: "'${name}' 不能为空" },
        },
        {
          name: 'validateTrigger',
          title: { label: '校验时机', tip: '所有字段校验触发时机' },
          propType: {
            type: 'oneOf',
            value: ['onChange', 'onBlur'],
          },
          setter: {
            componentName: 'RadioGroupSetter',
            props: {
              options: [
                {
                  title: '当前值变化时',
                  value: 'onChange',
                },
                {
                  title: '失去焦点时',
                  value: 'onBlur',
                },
              ],
            },
          },
        },
        {
          name: 'onFinish',
          title: {
            label: '提交表单且数据验证成功后回调事件',
            tip: '提交表单且数据验证成功后回调事件',
          },
          propType: 'func',
        },
        {
          name: 'onFinishFailed',
          title: {
            label: '提交表单且数据验证失败后回调事件',
            tip: '提交表单且数据验证失败后回调事件',
          },
          propType: 'func',
        },
        {
          name: 'onFieldsChange',
          title: { label: '字段更新时触发回调事件', tip: '字段更新时触发回调事件' },
          propType: 'func',
        },
        {
          name: 'onValuesChange',
          title: {
            label: '字段值更新时触发回调事件',
            tip: '字段值更新时触发回调事件',
          },
          propType: 'func',
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
          name:'onFinish',
          template:
            "onFinish(values,${extParams}){\n// 提交表单且数据验证成功后回调事件\nconsole.log('onFinish',values);}",
        },
        {
          name: 'onFinishFailed',
          template:
            "onFinishFailed({values,errorFields,outOfDate},${extParams}){\n// 提交表单且数据验证失败后回调事件\nconsole.log('onFinishFailed',values, errorFields, outOfDate);}",
        },
        {
          name: 'onFieldsChange',
          template:
            "onFieldsChange(changedFields,allFields,${extParams}){\n// 字段更新时触发回调事件\nconsole.log('onFieldsChange',changedFields,allFields);}",
        },
        {
          name: 'onValuesChange',
          template:
            "onValuesChange(changedValues,allValues,${extParams}){\n// 字段值更新时触发回调事件\nconsole.log('onValuesChange',changedValues,allValues);}",
        },
      ]
    },
    advanced:{
      callbacks:{
        onNodeAdd: (dragment: { componentMeta: { npm: { package: string | string[]; }; }; componentName: string | string[]; exportSchema: () => any; }, currentNode: { document: { createNode: (arg0: { componentName: string; props: { label: string; }; children: any[]; }) => any; }; replaceChild: (arg0: any, arg1: any, arg2: { reserveSchemaNodeId: boolean; }) => void; }) => {
          const comps = [
            'AInput',
            'ASelect',
            'ARadio',
            'ACheckbox',
            'ASwitch',
            'AUpload',
            'ADatePicker',
            'ARate',
            'ATransfer',
          ];

          if (
            !dragment ||
            !dragment.componentMeta ||
            !dragment.componentMeta.npm ||
            !dragment.componentMeta.npm.package ||
            dragment.componentMeta.npm.package.indexOf('lowcode-material-ant-vue') === -1 ||
            comps.every((comp) => dragment.componentName.indexOf(comp) === -1)
          ) {
            return;
          }

          // 为目标元素包裹一层P
          const layoutPNode = currentNode.document.createNode({
            componentName: 'AFormItem',
            props: {
              label: '表单项: ',
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
              valuePropName:"value",
              name:'a',
              requiredobj:{
                required:true,
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
                componentName:'AInput',
                props:{
                  name:'userName',
                  size:'default',
                  placeholder:'用户名'
                }
              }
            ]
          },
          {
            componentName:'AFormItem',
            props:{
              label:'密码:',
              labelAlign:"right",
              colon:true,
              required:true,
              noStyle:false,
              valuePropName:"password",
              name:'b',
              requiredobj:{
                required:true,
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
                componentName:'AInputPassword',
                props:{
                  name:'password',
                  placeholder:'请输入密码',
                  size:'medium',
                  disabled:false
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
              colon:true,
              required:false,
              valuePropName:"shareUnit",
              requiredobj: {
                required: null,
                message: null
              },
              typeobj: {
                type: null,
                message: null
              },
              lenobj: {
                max: null,
                min: null,
                message: null
              },
              patternobj: {
                pattern: null,
                message: null
              },
              children:[
                {
                  componentName:'ASelect',
                  props:{
                    style:{
                      width:'200px'
                    },
                    options:[
                      { label:'A',value:'A'},
                      { label:'B',value:'B'},
                      { label:'C',value:'C'}
                    ],
                    allowClear:true,
                    autoFocus:false,
                    filterOption:true,
                    optionFilterProp:"value",
                    labelInValue:false,
                    loading:false,
                    tokenSeparators:[]
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
                componentName: "ACheckboxGroup",
                props: {
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
              wrapperCol:{
                offset:7
              }
            },
            children:[
              {
                componentName:'AButton',
                props:{
                  type:'primary',
                  children:"提交",
                  htmlType:"submit"
                }
              },
              {
                componentName:'AButton',
                props:{
                  style:{
                    marginLeft:'10px'
                  },
                  children:'重置',
                  htmlType:"reset"
                }
              }
            ]
          }
        ]
      },
    }
  ],
}
