export default {
  group: 'Antd',
  componentName: 'ARate',
  title: '评分',
  category: '数据展示',
  npm: {
    destructuring: true,
    componentName: 'ARate'
  },
  props:[
    {
      name: 'value',
      title: { label: '默认值', tip: '默认值' },
      propType: 'number',
      setter: 'NumberSetter',
      defaultValue:1
    },
    {
      name: 'allowClear',
      title: { label: '点击清除', tip: '是否允许再次点击后清除' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'allowHalf',
      title: { label: '允许半选', tip: '是否允许半选' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'autoFocus',
      title: { label: '自动聚焦', tip: '自动获得焦点' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name:'character',
      title:{label:'自定义字符',tip:'自定义字符'},
      propType:{type:'oneOfType',value:['string','node']}
    },
    {
      name:'count',
      title:{label:'star总数',tip:'star 总数'},
      propType: 'number',
      setter: 'NumberSetter',
      defaultValue:5
    },
    {
      name: 'disabled',
      title: { label: '禁用', tip: '是否禁用' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name:'tooltips',
      title:{label:'提示信息',tip:'自定义每项的提示信息'},
      propType:{
        type: 'arrayOf', value:'string'
      }
    }
  ],
  configure:{
    supports:{
      style:true,
      events: [
        {
          name: 'change',
          template: "change(value,${extParams}){\n// 选择时的回调\nconsole.log('change',value);}",
        },
        {
          name: 'hoverChange',
          template:
            "hoverChange(value,${extParams}){\n// 鼠标经过时数值变化的回调\nconsole.log('hoverChange',value);}",
        },
        {
          name: 'keydown',
          template:
            "keydown(event,${extParams}){\n// 按键回调\nconsole.log('keydown',event);}",
        },
        {
          name: 'focus',
          template: "focus(${extParams}){\n// 获得焦点时触发\nconsole.log('focus');}",
        },
        {
          name: 'blur',
          template: "blur(${extParams}){\n// 失去焦点时触发\nconsole.log('blur');}",
        },
      ],
    }
  },
  snippets:[
    {
      title:'评分',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/rate-1.png',
      schema:{
        componentName:'ARate',
        props:{
          value:3
        }
      }
    }
  ]
}