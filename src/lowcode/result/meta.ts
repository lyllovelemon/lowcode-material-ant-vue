export default {
  group: 'Antd',
  componentName:'AResult',
  title: '结果',
  category: '反馈',
  npm: {
    destructuring: true,
    componentName: 'AResult'
  },
  props:[
    {
      name: 'title',
      title: { label: '标题', tip: 'title 文字' },
      propType: 'node',
    },
    {
      name: 'subTitle',
      title: { label: '副标题', tip: 'subTitle 文字' },
      propType: 'node',
    },
    {
      name: 'status',
      title: {
        label: '状态',
        tip: '结果的状态，决定图标和颜色',
      },
      propType: {
        type: 'oneOf',
        value: ['success', 'error', 'info', 'warning', '404', '403', '500'],
      },
    },
    {
      name: 'icon',
      title: { label: '自定义 icon', tip: '自定义 icon' },
      propType: 'node',
    },
    {
      name: 'extra',
      title: { label: '操作区', tip: '操作区' },
      propType: 'node',
    },
  ],
  configure: {
    supports: {
      style:true
    }
  },
  snippets:[
    {
      title:"结果",
      screenshot:"https://alifd.alicdn.com/fusion-cool/icons/icon-antd/result-1.png",
      schema:{
        componentName:"AResult",
        props:{
          status: "success",
          title: "成功提示!",
          subTitle:"li yi li测试成功提示"
        }
      }
    }
  ]
}