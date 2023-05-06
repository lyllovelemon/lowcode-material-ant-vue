/* eslint-disable */
const meta={
  group: 'Antd',
  componentName: 'AAvatar',
  title: '头像',
  category: '数据展示',
  props:[
    {
      name:'icon',
      title:{label:'图标头像',tip:'设置头像的图标类型'},
      propType:'node'
    },
    {
      name:'shape',
      title:{ label:'形状',tip:'指定头像的形状'},
      propType:{
        type:'oneOf',
        value:['circle','square']
      },
      setter:{
        componentName:'RadioGroupSetter',
        props:{
          options:[
            { title:'circle',value:'circle'},
            { title:'square',value:'square'}
          ]
        }
      },
      defaultValue:'circle'
    },
    {
      name: 'size',
      title: { label: '尺寸', tip: '设置头像的大小' },
      setter: {
        componentName: 'MixedSetter',
        props: {
          setters: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  { label: 'default', value: 'default' },
                  { label: 'large', value: 'large' },
                  { label: 'small', value: 'small' },
                ],
              },
            },
            'NumberSetter',
          ],
        },
      },
      defaultValue: 'default',
    },
    {
      name: 'src',
      title: { label: '图片地址', tip: '图片类头像的资源地址' },
      propType:'string',
      setter: 'StringSetter',
    },
    {
      name: 'alt',
      title: {
        label: '替代文本',
        tip: '图像无法显示时的替代文本',
      },
      propType:'string',
      setter: 'StringSetter',
    },
    {
      name: 'loadError',
      title: {
        label: '图片加载失败的事件',
        tip: '图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为',
      },
      propType: 'func',
    },
    {
      name:'crossOrigin',
      title:{
        label:'cors 属性设置',
        tip:'cors 属性设置'
      },
      propType:{
        type:'oneOf',
        value:['anonymous','use-credentials','']
      },
      setter:{
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            { label: 'anonymous', value: 'anonymous' },
            { label: 'use-credentials', value: 'use-credentials' },
            { label:'default',value:''}
          ],
        },
      }
    },
    {
      name: 'src',
      title: { label: '允许拖动', tip: '图片是否允许拖动' },
      setter: 'BoolSetter',
    },
    {
      name:'srcset',
      title:{
        label:'图片资源地址',
        tip:'设置图片类头像响应式资源地址'
      },
      propType:'string',
      setter:'StringSetter'
    },
    {
      name: 'gap',
      title: {
        label: '文字边距',
        tip: '字符类型距离左右两侧边界单位像素',
      },
      propType:'number',
      setter: 'NumberSetter',
      defaultValue: 4,
    },
    {
      name: 'draggable',
      title: { label: '拖动', tip: '图片是否允许拖动' },
      propType:'bool',
      setter: 'BoolSetter'
    }
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'loadError',
          template: "loadError(${extParams}){\n// 图片加载失败的事件\nconsole.log('loadError');}",
        },
      ],
    }
  },
  snippets: [
    {
      title: '头像',
      screenshot: "https://alifd.alicdn.com/fusion-cool/icons/icon-antd/avatar-1.jpg",
      schema: {
        componentName: 'AAvatar',
        props: {
          src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          size: 'default'
        },
      },
    },
  ],
};

export default meta;