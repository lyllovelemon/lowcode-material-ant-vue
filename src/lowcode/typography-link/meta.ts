export default {
  group: 'Antd',
  componentName:'ATypographyLink',
  title: '链接',
  category: '基础组件',
  npm: {
    destructuring: true,
    componentName: 'ATypographyLink'
  },
  props:[
    {
      name: 'children',
      title: { label: '内容', tip: '内容' },
      propType: 'string',
      defaultValue: '',
      supportVariable: true,
    },
    {
      name: 'href',
      title: { label: '跳转链接', tip: '跳转链接' },
      propType: 'string',
      defaultValue: '',
    },
    {
      name: 'target',
      title: { label: '跳转位置', tip: '在何处显示链接的资源' },
      propType: {
        type: 'oneOf',
        value: ['_self', '_blank', '_parent', '_top'],
      },
      defaultValue: '_self',
    },
  ],
  configure: {
    supports: {
      style:true
    }
  },
  snippets:[
    {
      title:"链接",
      screenshot:"https://alifd.alicdn.com/fusion-cool/icons/icon-antd/typography-link-1.png",
      schema:{
        componentName:"ATypographyLink",
        props:{
          href:"https://www.antdv.com/components/typography-cn#API",
          target:"_blank",
          children:"链接"
        }
      }
    }
  ]
}