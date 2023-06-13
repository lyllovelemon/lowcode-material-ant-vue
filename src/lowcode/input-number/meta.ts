/* eslint-disable */
// @ts-ignore
import avatarImg from './__screenshots__/input-number-1.png?inline';
export default {
  group: 'ant-vue组件',
  componentName: 'AInputNumber',
  title: '数字输入框',
  category: '基础组件',
  npm: {
    destructuring: true,
    componentName: 'AInputNumber',
  },
  configure: {
    props: [
      {
        name: 'defaultValue',
        title: { label: '默认值', tip: 'defaultValue | 默认值' },
        propType: 'number',
        setter: 'NumberSetter',
      },
      {
        name: 'value',
        title: { label: '当前值', tip: 'value | 当前值' },
        propType: 'number',
        setter: 'NumberSetter',
      },
      {
        name: 'autoFocus',
        title: { label: '自动聚焦', tip: 'autoFocus | 自动获取焦点' },
        propType: 'bool',
        defaultValue: false,
        setter: 'BoolSetter'
      },
      {
        name: 'disabled',
        title: { label: '是否禁用', tip: 'disabled | 是否为禁用状态' },
        propType: 'bool',
        defaultValue: false,
        setter: 'BoolSetter'
      },
      {
        name: 'placeholder',
        title: { label: '占位提示', tip: 'placeholder | 占位提示' },
        propType: 'string',
        defaultValue: '请输入',
        setter: 'StringSetter'
      },
      {
        name: 'controls',
        title: { label: '是否显示增减按钮', tip: 'controls | 是否显示增减按钮' },
        propType: 'bool',
        defaultValue: true,
        setter: 'BoolSetter'
      },
      {
        name: 'bordered',
        title: { label: '显示边框', tip: 'bordered | 是否有边框' },
        propType: 'bool',
        defaultValue: true,
        setter: 'BoolSetter'
      },
      {
        name: 'addonAfter',
        title: { label: '后置标签', tip: 'addonAfter | 后置标签' },
        propType: { type: 'oneOfType', value: ['string', 'node'] },
      },
      {
        name: 'addonBefore',
        title: { label: '前置标签', tip: 'addonBefore | 前置标签' },
        propType: { type: 'oneOfType', value: ['string', 'node'] },
      },
      // {
      //   name: 'formatter',
      //   title: {
      //     label: '指定输入框展示值的格式',
      //     tip: '指定输入框展示值的格式',
      //   },
      //   propType: 'func',
      // },
      {
        name: 'max',
        title: { label: '最大值', tip: 'max | 最大值' },
        propType: 'number',
        setter: 'NumberSetter'
      },
      {
        name: 'min',
        title: { label: '最小值', tip: 'min | 最小值' },
        propType: 'number',
        setter: 'NumberSetter'
      },
      {
        name: 'precision',
        title: { label: '数值精度', tip: 'precision | 数值精度' },
        propType: 'number',
        setter: 'NumberSetter'
      },
      // {
      //   name: 'decimalSeparator',
      //   title: { label: '小数点', tip: '小数点' },
      //   propType: 'string',
      // },
      {
        name: 'size',
        title: { label: '尺寸', tip: 'size | 输入框大小' },
        propType: { type: 'oneOf', value: ['large', 'middle', 'small'] },
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
        name: 'step',
        title: { label: '单步长', tip: 'step | 每次改变步数' },
        propType: 'number',
        setter: 'NumberSetter'
      },
      {
        name: 'onChange',
        title: { label: '变化回调', tip: 'onChange | 变化回调' },
        propType: 'func',
      },
      {
        name: 'onPressEnter',
        title: { label: '按下回车的回调', tip: 'onPressEnter | 按下回车的回调' },
        propType: 'func',
      },
      {
        name: 'onFocus',
        title: { label: '获取焦点回调', tip: 'onFocus | 获取焦点回调' },
        propType: 'func',
      },
      {
        name: 'onKeyDown',
        title: { label: '按键按下时的回调', tip: 'onKeyDown | 按键按下时的回调' },
        propType: 'func',
      },
      {
        name: 'onKeyPress',
        title: { label: '按键按下后的回调', tip: 'onKeyPress | 按键按下之后释放之前的回调' },
        propType: 'func',
      },
      {
        name: 'onKeyUp',
        title: { label: '按键释放回调', tip: 'onKeyUp | 按键释放之后的回调' },
        propType: 'func',
      },
      {
        name: 'onBlur',
        title: { label: '失去焦点回调', tip: 'onBlur | 失去焦点回调' },
        propType: 'func',
      },
    ],
    supports:{
      style:true,
      loop:true,
      events:[
        {
          name: 'onChange',
          template: "onChange(value,${extParams}){\n// 变化回调\nconsole.log('onChange',value);}",
        },
        {
          name: 'onPressEnter',
          template:
            "onPressEnter(event,${extParams}){\n// 按下回车的回调\nconsole.log('onPressEnter',event);}",
        },
        {
          name: 'onFocus',
          template: "onFocus(event,${extParams}){\n// 获取焦点回调\nconsole.log('onFocus',event);}",
        },
        {
          name: 'onKeyDown',
          template:
            "onKeyDown(event,${extParams}){\n// 按键按下时的回调\nconsole.log('onKeyDown',event);}",
        },
        {
          name: 'onKeyPress',
          template:
            "onKeyPress(event,${extParams}){\n// 按键按下后的回调\nconsole.log('onKeyPress',event);}",
        },
        {
          name: 'onKeyUp',
          template: "onKeyUp(event,${extParams}){\n// 按键释放回调\nconsole.log('onKeyUp',event);}",
        },
        {
          name: 'onBlur',
          template: "onBlur(event,${extParams}){\n// 按键释放回调\nconsole.log('onBlur',event);}",
        },
      ]
    }
  },
  snippets: [
    {
      title: '数字输入框',
      screenshot: avatarImg,
      schema: {
        componentName: 'AInputNumber',
        props: {
          style:{
            backgroundColor:'#ddf4ff',
            border:'1px solid #ddf4ff'
          },
          value: 10,
          placeholder:"请输入"
        }
      }
    }
  ]
};
