export default {
  componentName: 'ACard',
  title: '卡片',
  category: '数据展示',
  npm:{
    destructuring: true,
    componentName: 'ACard'
  },
  props: [
    {
      name:'activeTabKey',
      title:{label:'激活key',tip:'当前激活页签的 key'},
      propType:'string',
      setter:'StringSetter',
      supportVariable:true
    },
    {
      name:'defaultActiveTabKey',
      title:{label:'初始化激活key',tip:'初始化选中页签的 key，如果没有设置 activeTabKey'},
      propType:'string',
      setter:'StringSetter',
      supportVariable:true
    },
    {
      name: 'title',
      title: { label: '卡片标题', tip: '卡片标题' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'bordered',
      title: { label: '显示边框', tip: '是否有边框' },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'bodyStyle',
      title: { label: '内容样式', tip: '内容区域自定义样式' },
      propType: 'object',
    },
    {
      name:'headStyle',
      title:{label:'标题样式',tip:'自定义标题区域样式'},
      propType:'object'
    },
    {
      name: 'extra',
      title: { label: '额外元素', tip: '卡片右上角的操作区域' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'hoverable',
      title: { label: '可浮起', tip: '鼠标移过时可浮起' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'loading',
      title: {
        label: 'loading',
        tip: '当卡片内容还在加载中时，可以用 loading 展示一个占位',
      },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'size',
      title: { label: '尺寸', tip: 'card 的尺寸' },
      propType: { type: 'oneOf', value: ['default', 'small'] },
      defaultValue: 'default',
    },
    {
      name: 'type',
      title: { label: '卡片类型', tip: '卡片类型' },
      propType: { type: 'oneOf', value: ['default', 'inner'] },
      defaultValue: 'default',
    },
  ],
  configure:{
    component: { isContainer: true },
    supports:{
      style:true
    },
    events:[
      {
        name: 'onTabChange',
        template:
          "onTabChange(key,${extParams}){\n// 页签切换的回调\nconsole.log('onTabChange', key);}",
      },
    ]
  },
  snippets:[
    {
      title:"卡片",
      screenshot:"https://alifd.alicdn.com/fusion-cool/icons/icon-antd/card-1.png",
      schema:{
        componentName: "ACard",
        props:{
          title:"Default card for lyl",
          style:{
            width:"300px"
          }
        }
      }
    }
  ]
}