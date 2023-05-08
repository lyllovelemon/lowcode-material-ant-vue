export default {
  group: 'Antd',
  componentName:'AAnchor',
  title: '锚点',
  category: '基础组件',
  npm: {
    destructuring: true,
    componentName: 'AAnchor'
  },
  snippets:[
    {
      title: '锚点',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/anchor-1.png',
      schema: {
        componentName: 'AAnchor',
        props: {},
        children: [
          {
            componentName: 'AAnchorLink',
            props: {
              title: 'Document',
            },
          },
          {
            componentName: 'AAnchorLink',
            props: {
              title: 'API',
            },
          },
          {
            componentName: 'AAnchorLink',
            props: {
              title: 'Demo',
            }
          }
        ]
      }
    }
  ]
}