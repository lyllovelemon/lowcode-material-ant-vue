export default {
  group: 'Antd',
  componentName:'AFormList',
  title: '表单列表',
  category: '表单',
  npm: {
    destructuring: true,
    componentName: 'AFormList'
  },
  props:[
    {
      name: 'name',
      title: { label: '字段名', tip: '字段名' },
      isRequired: true,
      propType: 'string',
    },
    {
      name: 'initialValue',
      title: {
        label: '默认值',
        tip: '设置子元素默认值，如果与 Form 的 initialValues 冲突则以 Form 为准',
      },
      propType: 'object',
      setter: 'JsonSetter',
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    supports: { className: true, style: true },
  },
  snippets:[
    {
      title: '表单列表',
      screenshot: 'https://user-images.githubusercontent.com/5419886/221425341-e982c944-8af4-4bad-9c17-1b2fd3fda835.png',
      schema: {
        componentName: 'AFormList',
        props: {},
      }
    }
  ]
}