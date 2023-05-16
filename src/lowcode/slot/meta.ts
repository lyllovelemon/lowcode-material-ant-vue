/* eslint-disable */
// @ts-ignore
export default {
  componentName:'Slot',
  title: '插槽',
  category: '基础组件',
  npm: {
    destructuring: true,
    componentName: 'Slot'
  },
  props:[
    {
      name:"__title",
      title:'title|插槽标题',
      setter:'StringSetter',
      defaultValue:'插槽容器'
    },
    {
      name:"__params",
      title:"params|插槽入参",
      setter:{
        componentName:'ArraySetter',
        props:{
          itemSetter:{
            componentName:'StringSetter',
            props:{
              placeholder:'参数名称'
            }
          }
        }
      }
    }
  ],
  configure: {
    component:{
      isContainer:true,
      disableBehaviors:'*'
    },
    supports: false,
    advanced:{
      callbacks:{
        onHoverHook:()=>false,
        onMouseDownHook:()=>false,
        onClickHook:()=>false
      }
    }
  },
  snippets:[
    {
      title: '插槽',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/icon-1.jpg',
      schema: {
        componentName: 'Slot',
        props: {
          type: 'SmileOutlined',
          size: 20,
        },
      },
    },
  ]
}
