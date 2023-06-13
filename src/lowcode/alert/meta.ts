// @ts-ignore
import Alert1 from './__screenshots__/alert-1.png?inline';
// @ts-ignore
import Alert2 from './__screenshots__/alert-2.png?inline';
// @ts-ignore
import Alert3 from './__screenshots__/alert-3.png?inline';
// @ts-ignore
import Alert4 from './__screenshots__/alert-4.png?inline';
export default {
  group: 'ant-vue组件',
  componentName: "AAlert",
  title: '警告提示',
  category: '反馈',
  npm: {
    destructuring: true,
    componentName: 'AAlert'
  },
  props:[
    {
      name: 'afterClose',
      title: {
        label: '关闭动画结束后触发的回调函数',
        tip: 'afterClose | 关闭动画结束后触发的回调函数',
      },
      propType: 'func',
    },
    {
      name: 'banner',
      title: { label: '顶部公告', tip: 'banner | 是否用作顶部公告' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'closable',
      title: { label: '可关闭', tip: 'closable | 默认不显示关闭按钮' },
      propType: 'bool',
    },
    {
      name: 'closeText',
      title: { label: '自定义关闭按钮', tip: 'closeText | 自定义关闭按钮' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'description',
      title: {
        label: '描述信息',
        tip: 'description | 警告提示的辅助性文字介绍',
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'icon',
      title: {
        label: '图标',
        tip: 'icon | 自定义图标，`showIcon` 为 true 时有效',
      },
      propType: 'node',
    },
    {
      name: 'message',
      title: { label: '警告提示内容', tip: 'message | 警告提示内容' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'showIcon',
      title: { label: '显示图标', tip: 'showIcon | 是否显示辅助图标' },
      propType: 'bool',
    },
    {
      name: 'type',
      title: { label: '类型', tip: 'type | 类型' },
      propType: {
        type: 'oneOf',
        value: ['success', 'info', 'warning', 'error'],
      },
    },
    {
      name: 'onClose',
      title: { label: '关闭时触发的回调函数', tip: 'onClose | 关闭时触发的回调函数' },
      propType: 'func',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'close',
          template:
            "close(event,${extParams}){\n// 关闭时触发的回调函数\nconsole.log('close',event);}",
        },
      ],
    }
  },
  snippets:[
    {
      title: '成功提示',
      screenshot: Alert1,
      schema: {
        componentName: 'AAlert',
        props: {
          style:{
            color:'#707070',
            height:'24px',
            padding:'0 4px',
            boxSizing:'border-box',
            border:'1px solid transparent'
          },
          message: '',
          description: 'Detailed description and advice about successful copywriting.',
          type: 'success',
          showIcon: true,
        },
      },
    },
    {
      title: '信息提示',
      screenshot: Alert2,
      schema: {
        componentName: 'AAlert',
        props: {
          style:{
            color:'#707070',
            height:'24px',
            padding:'0 4px',
            boxSizing:'border-box',
            border:'1px solid transparent'
          },
          message: '',
          description: 'Additional description and information about copywriting.',
          type: 'info',
          showIcon: true,
        },
      },
    },
    {
      title: '警告提示',
      screenshot: Alert3,
      schema: {
        componentName: 'AAlert',
        props: {
          style:{
            backgroundColor:'#fef8e9',
            color:'#707070',
            height:'24px',
            padding:'0 4px',
            boxSizing:'border-box',
            border:'1px solid transparent'
          },
          message: '',
          description: 'This is a warning notice about copywriting.',
          type: 'warning',
          showIcon: true,
          banner:false,
          closable:true,
          icon:{
            type:'JSSlot',
            value:[
              {
                componentName:"AIcon",
                props:{
                  type:"InfoCircleFilled",
                  size:12,
                  color:"#f7ba2b",
                  rotate:0,
                  spin:false
                }
              }
            ]
          }
        },
      },
    },
    {
      title: '错误提示',
      screenshot: Alert4,
      schema: {
        componentName: 'AAlert',
        props: {
          style:{
            color:'#707070',
            height:'24px',
            padding:'0 4px',
            boxSizing:'border-box',
            border:'1px solid transparent'
          },
          message: '',
          description: 'This is an error message about copywriting.',
          type: 'error',
          showIcon: true,
        },
      },
    },
  ]
}
