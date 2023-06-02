// @ts-ignore
import avatarImg from './__screenshots__/config-provider-1.jpg?inline';
export default {
  group: 'ant-vue组件',
  componentName: "ConfigProvider",
  title: '全局化配置',
  category: '其他',
  npm: {
    destructuring: true,
    componentName: 'ConfigProvider'
  },
  props:[
    {
      name: 'autoInsertSpaceInButton',
      title: {
        label: '按钮插入空格',
        tip: '自动在按钮中 2 个汉字之间插入空格',
      },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'componentSize',
      title: { label: '组件大小', tip: '设置 antd 组件大小' },
      propType: {type:'oneOf',value:['small','middle','large']},
      setter:{
        componentName:'RadioGroupSetter',
        props: {
          options: [
            { label: 'small', value: 'small' },
            { label: 'middle', value: 'middle' },
            { label: 'large', value: 'large' }
          ],
        },
      },
      defaultValue:'middle'
    },
    {
      name: 'csp',
      title: {
        label: 'CSP配置',
        tip: '设置Content Security Policy配置',
      },
      propType: 'object',
      setter: 'JsonSetter',
    },
    {
      name: 'form',
      title: {
        label: 'Form通用属性',
        tip: '设置 Form 组件的通用属性',
      },
      propType: 'object',
      setter: 'JsonSetter',
    },
    {
      name: 'input',
      title: {
        label: 'Input通用属性',
        tip: '设置 Input 组件的通用属性',
      },
      propType: 'object',
      setter: 'JsonSetter',
    },
    {
      name: 'direction',
      title: { label: '文本方向', tip: '设置文本展示方向' },
      propType: {type:'oneOf',value:['ltr','rtl']},
      setter:{
        componentName:'RadioGroupSetter',
        props: {
          options: [
            { label: '左', value: 'ltr' },
            { label: '右', value: 'rtl' }
          ],
        },
      }
    },
    {
      name: 'getPopupContainer',
      title: {
        label: '弹出框父节点',
        tip: '弹出框渲染父节点，默认渲染到 body 上。',
      },
      propType: 'func',
    },
    {
      name: 'getTargetContainer',
      title: {
        label: '滚动监听容器',
        tip: '配置 Affix、Anchor 滚动监听容器。',
      },
      propType: 'func',
    },
    {
      name: 'locale',
      title: { label: '语言', tip: '语言' },
      propType: {
        type: 'oneOf',
        value: ['zh-CN', 'en-US'],
      },
      defaultValue: 'zh-CN',
    },
    {
      name: 'prefixCls',
      title: {
        label: '样式前缀',
        tip: '设置统一样式前缀。注意：需要配合 less 变量 @ant-prefix 使用',
      },
      propType: 'string',
    },
    {
      name: 'pageHeader',
      title: {
        label: '统一设置 PageHeader 的 ghost',
        tip: '统一设置 PageHeader 的 ghost',
      },
      propType: 'object',
      setter: 'JsonSetter',
    },
    {
      name: 'space',
      title: { label: '设置 Space 的 尺寸', tip: '设置 Space 的 `size`' },
      propType: {
        type: 'oneOf',
        value: ['small', 'middle', 'large', 'number'],
      },
    },
    {
      name: 'virtual',
      title: {
        label: '虚拟滚动',
        tip: '设置 `false` 时关闭虚拟滚动',
      },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'dropdownMatchSelectWidth',
      title: { label: '下拉菜单和选择器同宽', tip: '下拉菜单和选择器同宽' },
      propType: { type: 'oneOfType', value: ['bool', 'number'] },
    }
  ],
  configure: {
    component: { isContainer: true }
  },
  snippets:[
    {
      title: '全局化配置',
      screenshot:avatarImg,
      schema: {
        componentName: 'ConfigProvider',
        props: {}
      }
    }
  ]
}
