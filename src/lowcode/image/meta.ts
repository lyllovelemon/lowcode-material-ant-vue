export default {
  group: 'Antd',
  componentName:'AImage',
  title: '图片',
  category: '数据展示',
  npm: {
    destructuring: true,
    componentName: 'AImage'
  },
  props:[
    {
      name: 'src',
      title: { label: '图片地址', tip: '图片地址' },
      propType: { type: 'string', isRequired: true },
    },
    {
      name: 'alt',
      title: { label: '替换文本', tip: '替换文本' },
      propType: 'string',
    },
    {
      name: 'preview',
      title: { label: '支持预览', tip: '支持预览' },
      defaultValue: true,
      propType: 'bool',
    },
    {
      name: 'fallback',
      title: { label: '失败地址', tip: '加载失败容错地址' },
      propType: 'string',
    },
    {
      name: 'width',
      title: { label: '宽度', tip: '宽度' },
      propType: 'number',
    },
    {
      name: 'height',
      title: { label: '高度', tip: '高度' },
      propType: 'number',
    },
  ],
  configure: {
    supports: {
      style:true
    }
  },
  snippets:[
    {
      title:"图片",
      screenshot:"https://alifd.alicdn.com/fusion-cool/icons/icon-antd/image-1.png",
      schema:{
        componentName:"AImage",
        props:{
          src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
          width:120,
          height:120
        }
      }
    }
  ]
}