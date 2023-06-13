// @ts-ignore
import avatarImg from './__screenshots__/result-1.png?inline';
export default {
  group: 'ant-vue组件',
  componentName:'AResult',
  title: '结果',
  category: '反馈',
  npm: {
    destructuring: true,
    componentName: 'AResult'
  },
  props:[
    {
      name: 'title',
      title: { label: '标题', tip: 'title|标题' },
      propType: 'node',
    },
    {
      name: 'subTitle',
      title: { label: '副标题', tip: 'subTitle|副标题' },
      propType: 'node',
    },
    {
      name: 'status',
      title: {
        label: '状态',
        tip: 'status|结果的状态，决定图标和颜色',
      },
      propType: {
        type: 'oneOf',
        value: ['success', 'error', 'info', 'warning', '404', '403', '500'],
      },
    },
    {
      name: 'icon',
      title: { label: '自定义 icon', tip: 'icon|自定义 icon' },
      propType: 'node',
    },
    {
      name: 'extra',
      title: { label: '操作区', tip: 'extra|操作区' },
      propType: 'node',
    },
  ],
  configure: {
    supports: {
      style:true
    }
  },
  snippets:[
    {
      title:"结果",
      screenshot:avatarImg,
      schema:{
        componentName:"AResult",
        props:{
          status: "success",
          title: "成功提示!",
          subTitle:"li yi li测试成功提示"
        }
      }
    }
  ]
}
