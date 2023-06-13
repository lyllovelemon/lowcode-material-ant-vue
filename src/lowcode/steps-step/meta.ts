export default {
  group: 'ant-vue组件',
  componentName: 'AStepsStep',
  title: '步骤项',
  props: [
    {
      name: 'title',
      title: { label: '标题', tip: 'title|标题' },
      propType: 'string',
    },
    {
      name: 'subTitle',
      title: { label: '子标题', tip: 'subTitle|子标题' },
      propType: 'string',
    },
    {
      name: 'description',
      title: { label: '步骤描述', tip: 'description|步骤描述' },
      propType: 'string',
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: 'disabled|是否为禁用状态' },
      propType: 'bool',
    },
    {
      name: 'icon',
      title: { label: '图标', tip: 'icon|图标' },
      propType: 'node',
    },
    {
      name: 'status',
      title: { label: '状态', tip: 'status|状态' },
      propType: 'string',
    },
  ],
  configure: {
    component: { nestingRule: { parentWhitelist: ['ASteps'] } },
    supports: { style: true },
  },
  snippets:[]
}
