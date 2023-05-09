/* eslint-disable */
// @ts-ignore
const meta = {
  group: 'Antd',
  componentName: 'ADivider',
  title: '分割线',
  category: '数据展示',
  configure: {
    supports: {
      style: true,
      events: [],
    },
    props: [
      {
        name:'children',
        title:{label:'文案',tip:'自定义分割线文本内容'},
        setter:'StringSetter',
        supportVariable:true
      },
      {
        name: 'dashed',
        title: { label: '是否虚线', tip: '是否虚线' },
        setter: 'BoolSetter',
      },
      {
        name: 'content-position',
        title: {
          label: '分割线内容的位置',
          tip: '分割线内容的位置',
        },
        setter: {
          componentName:'RadioGroupSetter',
          props:{
            options:[
              { title:'left',value:'left'},
              { title:'right',value:'right'},
              { title:'center',value:'center'}
            ]
          }
        },
        defaultValue:'center'
      },
      {
        name: 'border-style',
        title: { label: '设置分隔符样式', tip: '设置分隔符样式' },
        setter: {
          componentName:'RadioGroupSetter',
          props:{
            options:[
              { title:'none',value:'none'},
              { title:'solid',value:'solid'},
              { title:'hidden',value:'hidden'},
              { title:'dashed',value:'dashed'}
            ]
          }
        },
        defaultValue:'solid'
      },
      {
        name: 'direction',
        title: {
          label: '方向',
          tip: '水平还是垂直方向',
        },
        setter: {
          componentName:'RadioGroupSetter',
          props:{
            options:[
              { title:'水平',value:'horizontal' },
              { title:'垂直',value:'vertical'}]
          }
        },
        defaultValue: 'horizontal',
      }
    ],
  },
  snippets: [
    {
      title: '分割线',
      schema: {
        componentName: 'ADivider',
        props: {
          plain:false,
          direction: 'horizontal'
        },
      },
    },
    {
      title: '带文字分割线',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/divider-2.png',
      schema: {
        componentName: 'ADivider',
        props: {
          children: [
            {
              componentName: 'ATypographyText',
              props: {
                children: '分割文字',
              }
            }
          ]
        }
      }
    }
  ],
};

export default meta;