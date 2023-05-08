/* eslint-disable */
// @ts-ignore
export default {
  group:'Antd',
  componentName:'AFormItem',
  title:'表单项',
  category:'表单',
  npm:{
    destructuring:true,
    componentName: 'AFormItem'
  },
  props:[
    { name:'name',title:'字段名',isRequired:true,propType:'string',setter:'StringSetter',supportVariable:true},
    { name:'label',title:'标签名',propType:{type:'oneOfType',value:['string','node']}},
    { name:'labelAlign',title:'标签文本对齐方式',propType:{type:'oneOf',value:['left','right']},setter:{componentName:'RadioGroupSetter',props:{options:[{title:'left',value:'left'},{title:'right',value:'right'}]}},defaultValue:'right'},
    { name:'autoLink',title:'是否自动关联表单域',propType:'bool',defaultValue:true,setter:'BoolSetter'},
    { name:'colon',title:'是否显示 label 后面的冒号',propType:'bool',defaultValue:true,setter:'BoolSetter',supportVariable:true},
    { name:'extra',title:'额外的提示信息',propType:{type:'oneOfType',value:['string','node']}},
    { name:'required',title:'是否必填',propType:'bool',setter:'BoolSetter',defaultValue:false},
    { name:'hasFeedback',title:{label:'hasFeedback',tip:'配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用'},prop:'bool',setter:'BoolSetter',defaultValue:false},
    { name:'help',title:{label:'提示信息',tip:'不设置，则会根据校验规则自动生成'},propType:{type:'oneOfType',value:['string','node']}},
    { name:'htmlFor',title:{label:'htmlFor',tip:'设置子元素 label htmlFor 属性'},propType:'string',setter:'StringSetter',supportVariable:true},
    { name:'wrapperCol',title:{label:'wrapperCol',tip:'为输入控件设置布局样式'},display:'inline',setter:{componentName:'ObjectSetter',props:{config:{items:[{name:'span',title:'宽度',setter:{componentName:'NumberSetter',props:{min:0,max:24}}},{name:'offset',title:'偏移',setter:{componentName:'NumberSetter',props:{min:0,max:24}}}]}}}},
    { name:'rules',title:'表单验证规则',propType:{type:'oneOfType',value:['object','array']}},
    { name:'validateFirst',title:{label:'validateFirst',tip:'当某一规则校验不通过时，是否停止剩下的规则的校验'},prop:'bool',setter:'BoolSetter',defaultValue:false},
    { name:'validateStatus',title:{label:'validateStatus',tip:'校验状态，如不设置，则会根据校验规则自动生成'},prop:{type:'oneOf',value:['success','warning','error','validating']},defaultValue:'error'},
    { name:'validateTrigger',title:{label:'validateTrigger',tip:'设置字段校验的时机'},propType:{type:'oneOfType',value:['string','array']},defaultValue:'change'},
  ],
  configure:{
    component:{
      isContainer:true,
      nestingRule:{childWhitelist:[],parentWhitelist:[]}
    },
    supports:{
      style:true
    },
    advanced: {
      callbacks: {
        onNodeRemove: (removedNode: any, currentNode: { remove?: any; children?: any; }) => {
          if (!removedNode || !currentNode) {
            return;
          }
          const { children } = currentNode;
          // 若无children,则说明当前P组件内已为空,需要删除P组件本身
          if (children && children.length === 0) {
            currentNode.remove();
          }
        },
      },
    },
  },
  snippets:[
    {
      title:'表单项',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/form-item-1.jpg',
      schema:{
        componentName:'AFormItem',
        props:{
          label:'表单项'
        }
      }
    }
  ]
}