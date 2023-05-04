/* eslint-disable */
// @ts-ignore
export default{
  group: 'Antd',
  componentName: 'AInputPassword',
  title: '密码框',
  category: '表单',
  npm: {
    destructuring: true,
    componentName: 'AInputPassword'
  },
  props:[
    {
      name: 'defaultValue',
      title: { label: '默认值', tip: '默认内容' },
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name:'value',
      title:'当前值',
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name: 'allowClear',
      title: { label: '支持清除', tip: '是否允许清除' },
      propType: 'bool',
      setter: 'BoolSetter',
    },
    {
      name: 'bordered',
      title: { label: '显示边框', tip: '是否有边框' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'visibilityToggle',
      title: { label: '切换按钮', tip: '是否显示切换按钮' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'placeholder',
      title: { label: '占位提示', tip: '占位提示' },
      propType: 'string',
      defaultValue: '请输入',
      setter: 'StringSetter'
    },
    {
      name: 'maxLength',
      title: { label: '最大长度', tip: '最大长度' },
      propType: 'number',
      setter: 'NumberSetter'
    },
    {
      name: 'size',
      title: { label: '尺寸', tip: '密码框大小' },
      propType: { type: 'oneOf', value: ['large', 'default', 'small'] },
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
      defaultValue: 'default',
    },
    {
      name: 'addonAfter',
      title: { label: '后置标签', tip: '后置标签' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'addonBefore',
      title: { label: '前置标签', tip: '前置标签' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'change',
      title: { label: '输入框内容变化时的回调', tip: '输入框内容变化时的回调' },
      propType: 'func',
    },
    {
      name: 'pressEnter',
      title: { label: '按下回车的回调', tip: '按下回车的回调' },
      propType: 'func',
    },
  ],
  configure:{
    component:{
      isContainer:true
    },
    supports:{
      style:true,
      events:[
        {
          name: 'change',
          template:
            "change(event,${extParams}){\n// 输入框内容变化时的回调\nconsole.log('change',event);}",
        },
        {
          name: 'pressEnter',
          template:
            "pressEnter(event,${extParams}){\n// 按下回车的回调\nconsole.log('pressEnter',event);}",
        },
      ]
    }
  },
  snippets:[
    {
      title:'密码框',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/input-password-1.png',
      schema:{
        componentName:'AInputPassword',
        props:{}
      }
    }
  ]
}