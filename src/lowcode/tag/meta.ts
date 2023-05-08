export default {
  group: 'Antd',
  componentName:'ATag',
  title: '标签',
  category: '反馈',
  npm: {
    destructuring: true,
    componentName: 'ATag'
  },
  props:[
    {
      name: 'children',
      title: { label: '内容', tip: '内容' },
      propType: 'string',
    },
    {
      name: 'closable',
      title: { label: '可关闭', tip: '标签是否可以关闭' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'color',
      title: { label: '标签色', tip: '标签色' },
      propType: 'string',
    },
    {
      name: 'closeIcon',
      title: { label: '自定义关闭按钮', tip: '自定义关闭按钮' },
      propType: 'node',
    },
    {
      name: 'visible',
      title: { label: '是否显示标签', tip: '是否显示标签' },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'icon',
      title: { label: '设置图标', tip: '设置图标' },
      propType: 'node',
    },
  ],
  configure: {
    supports: {
      style:true,
      events: [
        {
          name: 'close',
          template: "close(event,${extParams}){\n// 关闭时的回调\nconsole.log('close',event);}",
        },
      ],
    }
  },
  snippets:[
    {
      title:"标签",
      screenshot:"https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tag-1.png",
      schema:{
        componentName:"ATag",
        props:{
          color:"magenta",
          children:"标签"
        }
      }
    }
  ]
}