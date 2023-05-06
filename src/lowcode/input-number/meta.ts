/* eslint-disable */
// @ts-ignore
export default {
  group: 'Antd',
  componentName: 'AInputNumber',
  title: '数字输入框',
  category: '基础组件',
  npm: {
    destructuring: true,
    componentName: 'AInputNumber',
  },
  configure: {
    props: [
      {
        title: '当前值',
        name: 'value',
        setter: 'NumberSetter',
        defaultValue:10
      },
      {
        title:'尺寸',
        name: 'size',
        setter:{
          componentName:'RadioGroupSetter',
          props:{
            options:[
              { label:'small',value:'small'},
              { label:'default',value:'default'},
              { label:'large',value:'large'}
            ]
          }
        },
        defaultValue:'default',
        supportVariable: true
      },
      {
        title: '最大值',
        name: 'max',
        setter: 'NumberSetter',
        defaultValue:100
      },
      {
        title:'最小值',
        name:'min',
        setter:'NumberSetter',
        defaultValue:0
      },
      {
        title:'是否使用控制按钮',
        name:'controls',
        setter:'BoolSetter',
        defaultValue:true
      },
      {
        title:'控制按钮位置',
        name:'controls-position',
        setter:{
          componentName:'RadioGroupSetter',
          props:{
            options:[
              {title:'left',value:'left'},
              {title:'right',value:'right'}
            ]
          }
        },
        defaultValue:'right'
      },
      {
        title:'步数',
        name:'step',
        setter:'NumberSetter',
        defaultValue:1
      },
      {
        title:'是否只能输入 step 的倍数',
        name:'step-strictly',
        setter:'BoolSetter',
        defaultValue:false
      },
      {
        title:'是否使用键盘行为',
        name:'keyboard',
        setter:'BoolSetter',
        defaultValue:true
      },
      {
        title:{label:'小数点',tip:'小数点位数'},
        name:'decimal-separator',
        setter:'StringSetter',
        supportVariable: true
      },
      {
        title:'是否禁用',
        name:'disabled',
        setter:'BoolSetter',
        defaultValue:false
      },
      {
        title:'是否只读',
        name:'readonly',
        setter:'BoolSetter',
        defaultValue:false
      },
      {
        title:'高级',
        type:'group',
        extraProps:{
          display:'block'
        },
        items:[
          { title:'唯一标识',name:'id',setter:'StringSetter', supportVariable: true},
          { title:'表单标识',name:'name',setter:'StringSetter', supportVariable: true}
        ]
      }
    ],
    supports:{
      style:true,
      loop:true,
      events:['change','blur','focus']
    }
  },
  snippets: [
    {
      title: '数字输入框',
      schema: {
        componentName: 'AInputNumber',
        props: {
          value: 10
        },
      },
    },
  ],
};
