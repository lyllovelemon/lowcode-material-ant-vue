// @ts-ignore
import avatarImg from './__screenshots__/time-picker-1.png?inline';
export default {
  group: 'ant-vue组件',
  componentName:'ATimePicker',
  title: '时间选择框',
  category: '数据展示',
  npm: {
    destructuring: true,
    componentName: 'ATimePicker'
  },
  props:[
    {
      name: 'defaultValue',
      title: { label: '默认时间', tip: '默认时间' },
      propType: 'date',
      setter: 'DateSetter',
    },
    {
      name: 'value',
      title: { label: '当前时间', tip: '当前时间' },
      propType: 'date',
      setter: 'DateSetter',
    },
    {
      name: 'allowClear',
      title: { label: '支持清除', tip: '是否允许清除' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'autoFocus',
      title: { label: '自动聚焦', tip: '自动获取焦点' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'bordered',
      title: { label: '显示边框', tip: '是否有边框' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'clearText',
      title: { label: '清除按钮的提示文案', tip: '清除按钮的提示文案' },
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'disabledHours',
      title: { label: '禁止选择部分小时选项', tip: '禁止选择部分小时选项' },
      propType: 'func',
    },
    {
      name: 'disabledMinutes',
      title: { label: '禁止选择部分分钟选项', tip: '禁止选择部分分钟选项' },
      propType: 'func',
    },
    {
      name: 'disabledSeconds',
      title: { label: '禁止选择部分秒选项', tip: '禁止选择部分秒选项' },
      propType: 'func',
    },
    {
      name: 'format',
      title: { label: '展示的时间格式', tip: '展示的时间格式' },
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name: 'getPopupContainer',
      title: {
        label: '定义浮层的容器',
        tip: '定义浮层的容器，默认为 body 上新建 div',
      },
      propType: 'func',
    },
    {
      name: 'hideDisabledOptions',
      title: { label: '隐藏禁止选择的选项', tip: '隐藏禁止选择的选项' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'hourStep',
      title: { label: '小时选项间隔', tip: '小时选项间隔' },
      propType: 'number',
      setter: 'NumberSetter'
    },
    {
      name: 'inputReadOnly',
      title: {
        label: '只读',
        tip: '设置输入框为只读（避免在移动设备上打开虚拟键盘）',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'minuteStep',
      title: { label: '分钟选项间隔', tip: '分钟选项间隔' },
      propType: 'number',
      setter: 'NumberSetter'
    },
    {
      name: 'placeholder',
      title: { label: '空值提示', tip: '没有值的时候显示的内容' },
      propType: {
        type: 'oneOfType',
        value: ['string', { type: 'arrayOf', value: 'string' }],
      },
    },
    {
      name: 'popupClassName',
      title: { label: '弹出层类名', tip: '弹出层类名' },
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name: 'secondStep',
      title: { label: '秒选项间隔', tip: '秒选项间隔' },
      propType: 'number',
      setter: 'NumberSetter'
    },
    {
      name: 'use12Hours',
      title: {
        label: '12小时制',
        tip: '使用 12 小时制，为 true 时 `format` 默认为 `h:mm:ss a`',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name:'showNow',
      title:{
        label:'展示此刻',
        tip:'面板是否显示“此刻”按钮'
      },
      propType:'bool',
      setter:'BoolSetter'
    }
  ],
  configure: {
    supports: {
      style:true
    },
    events:[
      {
        name: 'onChange',
        template: "onChange (time,timeString,${extParams}){\n// 时间发生变化的回调\nconsole.log('onChange ',time,timeString);}",
      },
      {
        name: 'onOpenChange',
        template:
          "onOpenChange(open,${extParams}){\n// 面板打开/关闭时的回调\nconsole.log('onOpenChange',open);}",
      }
    ]
  },
  snippets:[
    {
      title:"时间选择框",
      screenshot:avatarImg,
      schema:{
        componentName:"ATimePicker",
        props:{
          showNow:true
        }
      }
    }
  ]
}
