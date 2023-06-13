export default {
  group: 'ant-vue组件',
  componentName:'AMenuItem',
  title: '菜单项',
  category: '基础组件',
  npm: {
    destructuring: true,
    componentName: 'AMenuItem'
  },
  props:[
    {
      name: 'children',
      title: { label: '内容', tip: 'children | 内容' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'danger',
      title: { label: '错误状态', tip: 'danger | 展示错误状态样式' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: 'disabled | 是否为禁用状态' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'icon',
      title: { label: '菜单图标', tip: 'icon | 菜单图标' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
      defaultValue: false,
    },
    {
      name: 'key',
      title: { label: '唯一标志', tip: 'key | item 的唯一标志' },
      propType: 'string',
    },
    {
      name: 'title',
      title: {
        label: '悬浮标题',
        tip: 'title | 设置收缩时展示的悬浮标题',
      },
      propType: 'string',
    },
  ],
  configure: {
    component: {
      isContainer: true,
      nestingRule: { parentWhitelist: ['AMenu'] },
    },
    supports: {
      style:true
    }
  },
  snippets:[]
}
