export default {
  group: 'Antd',
  componentName:'ASpace',
  title: '间距',
  category: '数据展示',
  npm: {
    destructuring: true,
    componentName: 'ASpace'
  },
  props:[
    {
      name: 'align',
      title: { label: '对齐方式', tip: '对齐方式' },
      propType: {
        type: 'oneOf',
        value: ['start', 'end', 'center', 'baseline'],
      },
    },
    {
      name: 'direction',
      title: { label: '间距方向', tip: '间距方向' },
      propType: { type: 'oneOf', value: ['vertical', 'horizontal'] },
    },
    {
      name: 'size',
      title: { label: '间距大小', tip: '间距大小' },
      propType: {
        type: 'oneOfType',
        value: [
          {
            type: 'oneOf',
            value: ['small', 'middle', 'large'],
          },
          'number',
        ],
      },
      defaultValue: 'middle',
    },
    {
      name: 'wrap',
      title: { label: '是否自动换行', tip: '是否自动换行' },
      propType: "bool",
      condition: {
        type: 'JSFunction',
        value: 'target => target.getProps().getPropValue("direction")==="horizontal"',
      },
    },
    {
      name: 'split',
      title: { label: '间隔组件', tip: '间隔组件,可拖组件进来， 常用的有竖向分隔线' },
      propType: "node",
    },
  ],
  configure: {
    component:{
      isContainer:true
    },
    supports: {
      style:true
    }
  },
  snippets:[
    {
      title: '间距',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/space-1.png',
      schema: {
        componentName: 'ASpace',
        props: {},
        children: [
          {
            componentName: 'AButton',
            props: {
              children: 'Button-lyl',
            },
          },
          {
            componentName: 'AButton',
            props: {
              children: 'Button-lemon',
            },
          },
        ],
      },
    },
  ]
}
