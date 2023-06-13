/* eslint-disable */
// @ts-ignore
export default {
  group: 'ant-vue组件',
  componentName: 'ASelectOptGroup',
  title: '选择器-分组',
  category: '基础组件',
  npm: {
    destructuring: true,
    componentName: 'ASelectOptGroup'
  },
  props:[
    {
      title:{label:'key',tip:'key'},
      name:'key',
      propType:'string',
      setter:'StringSetter'
    },
    {
      title:{label:'title',tip:'title|组名'},
      name:'title',
      propType:{
        type:'oneOfType',
        value:['string','node','func']
      }
    }
  ]
};
