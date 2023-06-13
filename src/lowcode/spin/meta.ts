// @ts-ignore
import avatarImg from './__screenshots__/spin-1.png?inline';
export default {
  group: 'ant-vue组件',
  componentName: "ASpin",
  title: '加载中',
  category: '反馈',
  npm: {
    destructuring: true,
    componentName: 'ASpin'
  },
  props:[
    {
      name: 'delay',
      title: { label: '延迟显示', tip: 'delay|延迟显示加载效果的时间（防止闪烁）' },
      propType: 'number',
    },
    {
      name: 'indicator',
      title: { label: '加载指示符', tip: 'indicator|加载指示符' },
      propType: 'node',
    },
    {
      name: 'size',
      title: {
        label: '尺寸',
        tip: 'size|组件大小',
      },
      propType: { type: 'oneOf', value: ['small', 'default', 'large'] },
      defaultValue: 'default',
    },
    {
      name: 'spinning',
      title: { label: '加载状态', tip: 'spinning|是否为加载中状态' },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'tip',
      title: { label: '描述文案', tip: 'tip|当作为包裹元素时，可以自定义描述文案' },
      propType: 'string',
    },
    {
      name: 'wrapperClassName',
      title: { label: '包装器的类属性', tip: 'wrapperClassName|包装器的类属性' },
      propType: 'string',
    },
  ],
  configure: {
    component: { isContainer: true },
    supports: {
      style: true
    }
  },
  snippets:[
    {
      title: "加载中",
      screenshot: avatarImg,
      schema: {
        componentName: 'ASpin',
        props: {
         size:"large",
         tip:"loading..."
        },
      },
    }
  ]
}
