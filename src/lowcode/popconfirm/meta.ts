// @ts-ignore
import avatarImg from './__screenshots__/popconfirm-1.jpg?inline';
export default {
  group: 'ant-vue组件',
  componentName:'APopconfirm',
  title: '气泡确认框',
  category: '反馈',
  npm: {
    destructuring: true,
    componentName: 'APopconfirm'
  },
  props:[
    {
      name: 'title',
      title: { label: '确认框内容', tip: '确认框内容' },
      propType: { type: 'oneOfType', value: ['string', 'node', 'func'] },
    },
    {
      name: 'visible',
      title: { label: '是否可见', tip: '确认框是否可见' },
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'okText',
      title: { label: '确认按钮文字', tip: '确认按钮文字' },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'showCancel',
      title: { label: '是否展示取消', tip: '是否显示取消按钮' },
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'cancelText',
      title: { label: '取消按钮文字', tip: '取消按钮文字' },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'onConfirm',
      title: { label: '点击确认回调', tip: '点击确认回调' },
      propType: 'func',
    },
    {
      name: 'okType',
      title: { label: '确认按钮类型', tip: '确认按钮类型' },
      propType: {
        type: 'oneOf',
        value: ['primary', 'ghost', 'dashed', 'danger', 'link', 'text'],
      },
      setter: {
        componentName: 'SelectSetter',
        props: {
          options: [
            {
              title: '主按钮',
              value: 'primary',
            },
            {
              title: '虚线框按钮',
              value: 'dashed',
            },
            {
              title: '危险按钮',
              value: 'danger',
            },
            {
              title: '链接按钮',
              value: 'link',
            },
            {
              title: '类文本按钮',
              value: 'text',
            },
          ],
        },
      },
    },
    {
      name: 'okButtonProps',
      title: { label: 'ok按钮props', tip: 'ok按钮props' },
      propType: 'object',
    },
    {
      name: 'cancelButtonProps',
      title: { label: 'cancel按钮props', tip: 'cancel按钮props' },
      propType: 'object',
    },
    {
      name: 'icon',
      title: { label: '自定义Icon图标', tip: '自定义弹出气泡Icon图标' },
      propType: 'node',
    },
    {
      name: 'disabled',
      title: {
        label: '是否禁用',
        tip: '是否为禁用状态',
      },
      propType: 'bool',
      defaultValue: false,
    },
  ],
  configure: {
    component: { isContainer: true },
    supports: {
      style:true,
      events: [
        {
          name: 'onConfirm',
          template: "onConfirm(${extParams}){\n// 点击确认的回调\nwindow.LowcodeMaterialAntVue.message.success('点击确定');}",
        },
        {
          name:'onCancel',
          template:"onCancel(${extParams}){\n // 点击取消的回调\n window.LowcodeMaterialAntVue.message.error('点击取消');}"
        }
      ]
    }
  },
  snippets:[
    {
      title:"气泡确认框",
      screenshot:avatarImg,
      schema:{
        componentName:"APopconfirm",
        props:{
          title:"确认删除？",
          okType:"primary",
          okText:"确定",
          cancelText:"取消"
        },
        children:{
          componentName:"AButton",
          props:{
            children:"删除"
          }
        }
      }
    }
  ]
}
