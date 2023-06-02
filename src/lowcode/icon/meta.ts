// @ts-ignore
import avatarImg from './__screenshots__/icon-1.jpg?inline'
export default {
  group: 'ant-vue组件',
  componentName:'AIcon',
  title: '图标',
  category: '通用',
  npm: {
    destructuring: true,
    componentName: 'AIcon'
  },
  props: [
    {
      name: 'class',
      title: { label: '设置图标的样式名', tip: '设置图标的样式名' },
      propType: 'string',
    },
    {
      name: 'type',
      description: '图标',
      propType: 'string',
      setter: 'AntdIconSetter',
    },
    {
      name: 'size',
      description: '大小',
      propType: 'number',
      defaultValue: 20,
    },
    {
      name: 'color',
      description: '颜色',
      propType: 'string',
      setter: 'ColorSetter',
    },
    {
      name: 'rotate',
      title: {
        label: '旋转角度',
        tip: '图标旋转角度',
      },
      propType: 'number',
      defaultValue: 0,
    },
    {
      name: 'spin',
      title: { label: '旋转动画', tip: '是否有旋转动画' },
      propType: 'bool',
      defaultValue: false,
    },
  ],
  configure: {
    supports: {
      style:true
    }
  },
  snippets:[
    {
      title: '图标',
      screenshot: avatarImg,
      schema: {
        componentName: 'AIcon',
        props: {
          type: 'SmileOutlined',
          size: 20,
        },
      },
    },
  ]
}
