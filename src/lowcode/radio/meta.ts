/* eslint-disable */
// @ts-ignore
import avatarImg from './__screenshots__/radio-1.png?inline';
export default {
  group: 'ant-vue组件',
  componentName: 'ARadio',
  title: '单选框',
  category: '表单',
  npm: {
    destructuring: true,
    componentName: 'ARadio'
  },
  props:[
    {
      name: 'children',
      title: { label: '内容', tip: '内容' },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'autoFocus',
      title: { label: '自动聚焦', tip: '自动获取焦点' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'defaultChecked',
      title: { label: '默认选中', tip: '初始是否选中' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'checked',
      title: { label: '是否选中', tip: '指定当前是否选中' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
  ],
  configure:{
    supports:{
      style:true
    }
  },
  snippets:[
    {
      title:'单选框',
      screenshot: avatarImg,
      schema:{
        componentName:'ARadio',
        props:{
          children:'Radio'
        }
      }
    }
  ]
}
