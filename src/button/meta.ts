/* eslint-disable */
// @ts-ignore
export default {
  group: 'Antd',
  componentName: 'AButton',
  title: '按钮',
  category: '基础组件',
  npm: {
    destructuring: true,
    componentName: 'AButton',
  },
  props:[
    { name:'children', propType:'string' },
    { name:'disabled', propType:'bool' },
    { name:'loading',propType:'bool'},
    { name:'attr-type',propType:'string'},
    { name:'type',propType:'string'},
    { name:'color',propType:'string'},
    { name:'text-color',propType:'string'},
    { name:'strong',propType:'bool'},
    { name:'href',propType:'string'},
    { name:'size',propType:'string'}
  ],
  configure: {
    props: [
      {
        title:'按钮功能',
        type:'group',
        extraProps:{
          display:'block'
        },
        items:[
          {
            title: '按钮内容',
            name: 'children',
            setter: ['StringSetter','VariableSetter'],
          },
          {
            title:{label:'是否禁用',tip:'是否禁用'},
            name: 'disabled',
            setter:'BoolSetter',
            defaultValue:false,
            supportVariable: true
          },
          {
            title:{label:'loading',tip:'显示加载状态'},
            name:'loading',
            setter:'BoolSetter',
            defaultValue:false,
            supportVariable: true
          },
          {
            title:{label:'按钮原生类型',tip:'按钮DOM的type属性'},
            name:'attr-type',
            setter:{
              componentName:'RadioGroupSetter',
              props:{
                options:[
                  {title:'button',value:'button'},
                  {title:'submit',value:'submit'},
                  {title:'reset',value:'reset'}
                ]
              }
            },
            defaultValue:'button'
          }
        ]
      },
      {
        title:'按钮样式',
        type:'group',
        extraProps:{
          display:'block'
        },
        items:[
          {
            title:'按钮类型',
            name:'type',
            setter:{
              componentName:'RadioGroupSetter',
              props:{
                options:[
                  { title:'default',value:'default' },
                  { title:'primary',value:'primary'},
                  { title:'ghost',value:'ghost'},
                  { title:'text',value:'text'},
                  { title:'link',value:'link'},
                  { title:'dashed',value:'dashed'}
                ]
              }
            },
            defaultValue:'default',
          },
          {
            title: '按钮颜色',
            name: 'color',
            setter: 'ColorSetter',
          },
          {
            title:'按钮文本颜色',
            name:'text-color',
            setter:'ColorSetter'
          },
          {
            title:'文字是否加粗',
            name:'strong',
            setter:'BoolSetter'
          },
          {
            title:'点击跳转地址',
            name:'href',
            setter:'StringSetter'
          },
          {
            title:'按钮尺寸',
            name:'size',
            setter:{
              componentName:'RadioGroupSetter',
              props:{
                options:[
                  { title:'大号',value:'large'},
                  { title:'中号',value:'middle'},
                  { title:'小号',value:'small'}
                ]
              }
            },
            defaultValue:'middle'
          },
        ]
      },
    ],
    supports:{
      style:true,
      loop:false,
      events:['click']
    }
  },
  snippets: [
    {
      title: '按钮',
      schema: {
        componentName: 'AButton',
        props: {
          children: '按钮文字',
          color:'#fff',
          textColor:'#333'
        },
      },
    },
  ],
};
