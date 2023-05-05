export default {
  group: 'Antd',
  componentName:'ADescriptionsItem',
  title: '提及',
  category: '数据展示',
  npm: {
    destructuring: true,
    componentName: 'ADescriptionsItem'
  },
  props:[
    {
      name: 'key',
      title: {
        label: 'key',
        tip: 'key',
      },
      propType: 'string',
    },
    {
      name: 'tab',
      title: {
        label: '标题',
        tip: '标题',
      },
      propType: 'string',
    }
  ],
  configure: {
    component: { isContainer: true },
    supports: { style: true }
  }
}