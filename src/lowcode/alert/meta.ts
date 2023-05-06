export default {
  group: 'Antd',
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
        tip: '关闭动画结束后触发的回调函数',
      },
      propType: 'func',
    },
    {
      name: 'banner',
      title: { label: '顶部公告', tip: '是否用作顶部公告' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'closable',
      title: { label: '可关闭', tip: '默认不显示关闭按钮' },
      propType: 'bool',
    },
    {
      name: 'closeText',
      title: { label: '自定义关闭按钮', tip: '自定义关闭按钮' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'description',
      title: {
        label: '描述信息',
        tip: '警告提示的辅助性文字介绍',
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'icon',
      title: {
        label: '图标',
        tip: '自定义图标，`showIcon` 为 true 时有效',
      },
      propType: 'node',
    },
    {
      name: 'message',
      title: { label: '警告提示内容', tip: '警告提示内容' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'showIcon',
      title: { label: '显示图标', tip: '是否显示辅助图标' },
      propType: 'bool',
    },
    {
      name: 'type',
      title: { label: '类型', tip: '类型' },
      propType: {
        type: 'oneOf',
        value: ['success', 'info', 'warning', 'error'],
      },
    },
    {
      name: 'onClose',
      title: { label: '关闭时触发的回调函数', tip: '关闭时触发的回调函数' },
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
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/alert-1.png',
      schema: {
        componentName: 'AAlert',
        props: {
          message: 'Success Tips',
          description: 'Detailed description and advice about successful copywriting.',
          type: 'success',
          showIcon: true,
        },
      },
    },
    {
      title: '信息提示',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/alert-2.png',
      schema: {
        componentName: 'AAlert',
        props: {
          message: 'Informational Notes',
          description: 'Additional description and information about copywriting.',
          type: 'info',
          showIcon: true,
        },
      },
    },
    {
      title: '警告提示',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/alert-3.png',
      schema: {
        componentName: 'AAlert',
        props: {
          message: 'Warning',
          description: 'This is a warning notice about copywriting.',
          type: 'warning',
          showIcon: true,
        },
      },
    },
    {
      title: '错误提示',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/alert-4.png',
      schema: {
        componentName: 'AAlert',
        props: {
          message: 'Error',
          description: 'This is an error message about copywriting.',
          type: 'error',
          showIcon: true,
        },
      },
    },
  ]
}