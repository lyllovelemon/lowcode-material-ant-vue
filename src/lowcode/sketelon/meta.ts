/* eslint-disable */
// @ts-ignore
export default {
  group: 'Antd',
  componentName: 'ASkeleton',
  title: '骨架屏',
  category: '反馈',
  npm: {
    destructuring: true,
    componentName: 'ASkeleton'
  },
  props:[
    {
      name: 'active',
      title: { label: '动画效果', tip: '是否展示动画效果' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'avatar',
      title: { label: '头像占位图', tip: '是否显示头像占位图' },
      propType: { type: 'oneOfType', value: ['bool', 'object'] },
    },
    {
      name: 'loading',
      title: {
        label: '加载中',
        tip: '为 true 时，显示占位图。反之则直接展示子组件',
      },
      propType: 'bool',
    },
    {
      name: 'paragraph',
      title: { label: '段落占位图', tip: '是否显示段落占位图' },
      propType: { type: 'oneOfType', value: ['bool', 'object'] },
    },
    {
      name: 'title',
      title: { label: '标题占位图', tip: '是否显示标题占位图' },
      propType: { type: 'oneOfType', value: ['bool', 'object'] },
    },
    {
      name: 'round',
      title: {
        label: '圆角',
        tip: '为 true 时，段落和标题显示圆角',
      },
      propType: 'bool',
      defaultValue: false,
    }
  ],
  configure: {
    component:{
      isContainer:true
    },
    supports:{
      style:true
    }
  },
  snippets: [
    {
      title: '骨架屏',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/skeleton-1.png',
      schema: {
        componentName: 'ASkeleton',
        props: {
          active:true,
          loading:true
        }
      }
    }
  ]
};
