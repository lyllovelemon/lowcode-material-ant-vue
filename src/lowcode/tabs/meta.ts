/* eslint-disable */
// @ts-ignore
export default {
  group: 'ant-vue组件',
  componentName: 'ATabs',
  title: '标签',
  category: '数据展示',
  npm: {
    destructuring: true,
    componentName: 'ATabs'
  },
  props:[
    {
      name: 'activeKey',
      title: {
        label: '当前激活',
        tip: '当前激活 tab 面板的 key',
      },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'animated',
      title: {
        label: '切换动画',
        tip: '是否使用动画切换Tabs',
      },
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'size',
      title: {
        label: '尺寸',
        tip: '大小，提供 `large` `default` 和 `small` 三种大小',
      },
      propType: {
        type: 'oneOf',
        value: ['large', 'default', 'small'],
      },
      defaultValue: 'default',
    },
    {
      name: 'centered',
      title: { label: '标签居中', tip: '标签居中展示' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'tabBarGutter',
      title: { label: '标签间隙', tip: 'tabs之间的间隙' },
      propType: 'number',
      setter: 'NumberSetter',
      supportVariable: true
    },
    {
      name: 'tabPosition',
      title: {
        label: '页签位置',
        tip: '页签位置',
      },
      propType: {
        type: 'oneOf',
        value: ['top', 'right', 'bottom', 'left'],
      },
      defaultValue: 'top',
    },
    {
      name: 'type',
      title: {
        label: '页签样式',
        tip: '页签的基本样式，可选`line`、`card`、`editable-card`类型',
      },
      propType: {
        type: 'oneOf',
        value: ['line', 'card', 'editable-card'],
      },
      defaultValue: 'line',
    },
    {
      name:'onChange',
      title:'切换面板的回调',
      propType:'func'
    },
    {
      name:'edit',
      title:'新增和删除页签的回调',
      propType:'func'
    },
    {
      name:'tabClick',
      title:'tab 被点击的回调',
      propType:'func'
    },
    {
      name:'tabScroll',
      title:'滚动 TabBar触发',
      propType:'func'
    }
  ],
  configure:{
    component:{
      isContainer:true
    },
    supports:{
      style:true,
      events: ['onChange','onEdit','onTabClick','onTabScroll'],
    }
  },
  snippets:[
    {
      title:'标签',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tabs-1.jpg',
      schema:{
        componentName:'ATabs',
        props:{
          type:'inline',
          activeKey:'1'
        }
      }
    }
  ]
}
