/* eslint-disable */
// @ts-ignore
export default {
  group: 'Antd',
  componentName: 'ASwitch',
  title: '开关',
  category: '基础组件',
  npm: {
    destructuring: true,
    componentName: 'ASwitch',
  },
  configure: {
    props: [
      {
        title: '当前状态',
        name: 'checked-value',
        setter: ['StringSetter','VariableSetter'],
      },
      {
        title:'是否禁用',
        name:'disabled',
        setter:'BoolSetter',
        defaultValue:false,
        supportVariable:true
      },
      {
        title:'是否在loading',
        name:'loading',
        setter:'BoolSetter',
        defaultValue:false,
        supportVariable:true
      },
      {
        title:'尺寸',
        name:'size',
        setter:{
          componentName:'RadioGroupSetter',
          props:{
            options:[
              {label:'default',value:'default'},
              {label:'small',value:'small'}
            ]
          }
        },
        defaultValue:'default'
      },
      {
        title:'选中时的内容',
        name:'checked-children',
        setter:['StringSetter','SlotSetter'],
        supportVariable:true
      },
      {
        title:'非选中时的内容',
        name:'unchecked-children',
        setter:['StringSetter','SlotSetter'],
        supportVariable:true
      }
    ],
    supports:{
      style:true,
      events:['click','change']
    }
  },
  snippets: [
    {
      title: '开关',
      schema: {
        componentName: 'ASwitch',
        props: {
          checkedChildren: '选中内容',
          uncheckedChildren:'非选中内容',
          color:'#fff',
          checkedValue:true
        },
      },
    },
  ],
};
