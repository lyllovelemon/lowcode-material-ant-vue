/* eslint-disable */
// @ts-ignore
export default {
  group: 'Antd',
  componentName: 'ATabPane',
  title: '标签项',
  category: '数据展示',
  npm: {
    destructuring: true,
    componentName: 'ATabPane'
  },
  props:[
    {
      name: 'key',
      title: {
        label: 'key',
        tip: 'key',
      },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'tab',
      title: {
        label: '标题',
        tip: '标题',
      },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'forceRender',
      title: {
        label: '隐藏时保留',
        tip: '被隐藏时是否渲染 DOM 结构',
      },
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true
    },
  ],
  configure:{
    component:{
      isContainer:true,
      nestingRule:{
        parentWhitelist:['ATabs']
      }
    }
  },
  snippets:[
    {
      title:'标签项',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tabs-1.jpg',
      schema:{
        componentName:'ATabPane',
        props:{
          type:'inline',
          activeKey:'1'
        }
      }
    }
  ]
}