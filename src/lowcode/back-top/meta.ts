// @ts-ignore
import avatarImg from './__screenshots__/back-top-1.jpg?inline';
export default {
  group: 'ant-vue组件',
  componentName:'ABackTop',
  title: '回到顶部',
  category: '其他',
  npm: {
    destructuring: true,
    componentName: 'ABackTop'
  },
  props:[
    {
      name: 'target',
      title: {
        label: '监听元素',
        tip: '设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数',
      },
      propType: 'func',
    },
    {
      name: 'visibilityHeight',
      title: {
        label: '可见高度',
        tip: '滚动高度达到此参数值才出现 BackTop',
      },
      propType: 'number',
    },
    {
      name: 'click',
      title: { label: '点击按钮的回调函数', tip: '点击按钮的回调函数' },
      propType: 'func',
    },
    {
      name: 'duration',
      title: { label: '滚动时间', tip: '回到顶部所需时间（ms）' },
      propType: 'number',
    },
  ],
  configure: {
    supports: {
      style:true,
      events: [
        {
          name: 'click',
          template: "click(${extParams}){\n// 点击按钮的回调函数\nconsole.log('click');}",
        }
      ]
    }
  },
  snippets:[
    {
      title:"回到顶部",
      screenshot:avatarImg,
      schema:{
        componentName:"ABackTop",
        props:{}
      }
    }
  ]
}
