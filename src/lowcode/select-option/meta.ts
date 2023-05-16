/* eslint-disable */
// @ts-ignore
export default {
  group: 'Antd',
  componentName: 'ASelectOption',
  title: '选择器-选择项',
  category: '基础组件',
  npm: {
    destructuring: true,
    componentName: 'ASelectOption'
  },
  props:[
    {
      title:'类名',
      name:'class',
      propType:'string',
      setter:'StringSetter'
    },
    {
      title:'是否禁用',
      name:"disabled",
      propType:'bool',
      setter:'BoolSetter'
    },
    {
      title:'key',
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
