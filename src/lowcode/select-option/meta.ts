/* eslint-disable */
// @ts-ignore
export default {
  group: 'ant-vue组件',
  componentName: 'ASelectOption',
  title: '选择器-选择项',
  category: '基础组件',
  npm: {
    destructuring: true,
    componentName: 'ASelectOption'
  },
  props:[
    {
      title:{label:'类名',tip:'class|类名'},
      name:'class',
      propType:'string',
      setter:'StringSetter'
    },
    {
      title:{label:'是否禁用',tip:'disabled|是否禁用'},
      name:"disabled",
      propType:'bool',
      setter:'BoolSetter'
    },
    {
      title:{label:'key',tip:'key'},
      name:'key',
      propType:'string',
      setter:'StringSetter'
    },
    {
      title:'title',
      name:'title',
      propType:'string',
      setter:'StringSetter'
    },
    {
      title:'value',
      name:'value',
      propType:{
        type: 'oneOfType', value:['string','number']
      },
      setter:['StringSetter','NumberSetter']
    }
  ],
  configure: {
    component:{
      nestingRule:{
        parentWhitelist:['ASelect']
      }
    }
  }
};
