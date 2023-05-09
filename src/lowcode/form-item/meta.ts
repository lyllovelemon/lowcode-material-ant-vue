/* eslint-disable */
// @ts-ignore
export default {
  group: 'Antd',
  componentName: 'AFormItem',
  title: '表单项',
  category: '表单',
  npm: {
    destructuring: true,
    componentName: 'AFormItem'
  },
  props: [
    {
      name: 'name',
      title: '字段名',
      isRequired: true,
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    { name: 'label',
      title: '标签名',
      propType: { type: 'oneOfType', value: ['string', 'node'] }
      },
    {
      name: 'labelAlign',
      title: '标签文本对齐方式',
      propType: { type: 'oneOf', value: ['left', 'right'] },
      setter: {
        componentName: 'RadioGroupSetter',
        props: { options: [{ title: 'left', value: 'left' }, { title: 'right', value: 'right' }] }
      },
      defaultValue: 'right'
    },
    { name: 'autoLink',
      title: '是否自动关联表单域',
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'colon',
      title: '是否显示 label 后面的冒号',
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'extra',
      title: '额外的提示信息',
      propType: { type: 'oneOfType', value: ['string', 'node'] }
      },
    {
      name: 'required',
      title: '是否必填',
      propType: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    },
    {
      name: 'initialValue',
      title: {
        label: '默认值',
        tip: '设置子元素默认值，如果与 Form 的 initialValues 冲突则以 Form 为准',
      },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'noStyle',
      title: {
        label: '隐藏标签',
        tip: '为 true 时不带样式，作为纯字段控件使用',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'valuePropName',
      title: {
        label: '子组件值字段',
        tip: `子节点的值的字段，如 Switch 的是 'checked'`,
      },
      propType: 'string',
      defaultValue: 'value',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'getValueFromEvent',
      title: {
        label: 'event转换器',
        tip: `设置如何将 event 的值转换成字段值，如将上传组件的fileList作为value值传出`,
      },
      propType: 'func',
    },
    {
      name: 'hasFeedback',
      title: { label: 'hasFeedback', tip: '配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用' },
      prop: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    },
    {
      name: 'help',
      title: { label: '提示信息', tip: '不设置，则会根据校验规则自动生成' },
      propType: { type: 'oneOfType', value: ['string', 'node'] }
    },
    {
      name: 'htmlFor',
      title: { label: 'htmlFor', tip: '设置子元素 label htmlFor 属性' },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      type: 'group',
      title: '布局',
      display: 'accordion',
      items: [
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
          title: '内容栅格布局设置',
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
      ],},
    {
      name: 'rules',
      title: '表单验证规则',
      propType: { type: 'oneOfType', value: ['object', 'array'] }
    },
    {
      name: 'requiredobj',
      title: { label: '必填设置', tip: '必填设置' },
      propType: {
        type: 'shape',
        value: [
          {
            name: 'required',
            title: '是否必填',
            propType: 'bool',
            setter: 'BoolSetter',
            supportVariable: true,
            extraProps: {
              setValue(target: any, value: boolean) {
                // 同步 必填标记
                target.parent.parent.setPropValue('required', value);
              }
            }
          },
          {
            name: 'message',
            title: '错误信息提示',
            propType: 'string',
            setter: 'StringSetter',
            supportVariable: true
          },
        ],
      },
    },
    {
      name: 'typeobj',
      title: { label: '输入类型设置', tip: '输入类型设置' },
      propType: {
        type: 'shape',
        value: [
          {
            name: 'type',
            title: '输入类型',
            setter: {
              componentName: 'SelectSetter',
              props: {
                options: [
                  {
                    title: '字符串',
                    value: 'string',
                  },
                  // {
                  //   title: '纯数字',
                  //   value: 'number',
                  // },
                  {
                    title: '邮箱',
                    value: 'email',
                  },
                  {
                    title: '网址',
                    value: 'url',
                  },
                ],
              },
            },
            propType: {
              type: 'oneOf',
              value: ['string', 'number', 'email', 'url'],
            },
          },
          { name: 'message', title: '错误信息提示', propType: 'string' },
        ],
      },
    },
    {
      name: 'lenobj',
      title: { label: '长度校验设置', tip: '长度校验设置' },
      propType: {
        type: 'shape',
        value: [
          // { name: 'len', title: '固定长度', propType: 'string' },
          { name: 'max', title: '最大长度', propType: 'number' },
          { name: 'min', title: '最小长度', propType: 'number' },
          { name: 'message', title: '错误信息提示', propType: 'string' },
        ],
      },
    },
    {
      name: 'patternobj',
      title: { label: '正则设置', tip: '正则设置' },
      propType: {
        type: 'shape',
        value: [
          { name: 'pattern', title: '正则', propType: 'string' },
          { name: 'message', title: '错误信息提示', propType: 'string' },
        ],
      },
    },
    {
      name: 'validator',
      title: {
        label: '自定义校验函数',
        tip: '自定义校验，接收 Promise 作为返回值',
      },
      propType: 'func',
    },
    {
      name: 'validateFirst',
      title: { label: 'validateFirst', tip: '当某一规则校验不通过时，是否停止剩下的规则的校验' },
      prop: 'bool',
      setter: 'BoolSetter',
      defaultValue: false
    },
    {
      name: 'validateStatus',
      title: { label: 'validateStatus', tip: '校验状态，如不设置，则会根据校验规则自动生成' },
      prop: { type: 'oneOf', value: ['success', 'warning', 'error', 'validating'] },
      defaultValue: 'error'
    },
    {
      name: 'validateTrigger',
      title: { label: 'validateTrigger', tip: '设置字段校验的时机' },
      propType: { type: 'oneOfType', value: ['string', 'array'] },
      defaultValue: 'change'
    }
  ],
  configure: {
    component: {
      isContainer: true,
      nestingRule: { childWhitelist: [], parentWhitelist: [] }
    },
    supports: {
      style: true
    },
    advanced: {
      callbacks: {
        onNodeRemove: (removedNode: any, currentNode: { remove?: any; children?: any; }) => {
          if (!removedNode || !currentNode) {
            return;
          }
          const { children } = currentNode;
          // 若无children,则说明当前P组件内已为空,需要删除P组件本身
          if (children && children.length === 0) {
            currentNode.remove();
          }
        }
      }
    }
  },
  snippets: [
    {
      title: '表单项',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/form-item-1.jpg',
      schema: {
        componentName: 'AFormItem',
        props: {
          label: '表单项'
        }
      }
    }
  ]
};
