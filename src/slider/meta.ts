/* eslint-disable */
// @ts-ignore
export default {
  group: 'Antd',
  componentName: 'ASlider',
  title: '滑块',
  category: '基础组件',
  npm: {
    destructuring: true,
    componentName: 'ASlider',
  },
  props:[
    { name:'value',propType:'number',defaultValue:1},
    { name:'max',propType:'number',defaultValue:10},
    { name:'min',propType:'number',defaultValue:0},
    { name:'disabled',propType:'bool',defaultValue:false},
    { name:'show-input',propType:'bool',defaultValue:false},
    { name:'show-input-controls',propType:'bool',defaultValue:true},
    { name:'size',title:{label:'size',tip:'slider的大小'},propType:{ type:'oneOf',value:['large','default','small']}},
    { name:'input-size',title:{label:'输入框大小',tip:'输入框的大小'},propType:{ type:'oneOf',value:['large','default','small']}},
    { name:'show-tooltip',title:{label:'提示信息',tip:'是否展示提示信息'},propType:'bool',defaultValue:true},
    { name:'height',title:'滑块高度',propType:'string'},
    { name:'debounce',title:'输入时的去抖延迟',propType:'number',defaultValue:300},
    { name:'range',title:'是否开启选择范围',propType:'bool',defaultValue:false},
    { name:'vertical',title:'垂直模式',propType:'bool',defaultValue:false},
    { name:'placement',title:'tooltip出现位置',propType:{type:'oneOf',value:['top','top-start','top-end','bottom','bottom-start','bottom-end','left','left-start','left-end','right','right-start','right-end']},defaultValue:'top'},
    { name:'marks',title:'标记',propType:'object',defaultValue:null},
    { name:'validate-event',propType:'bool',description:'输入时是否触发表单的校验',defaultValue:true}
  ],
  configure:{
    component:{
      isContainer:true
    },
    props:{
      isExtends:true,
      override:[]
    },
    supports:{
      style:true,
      loop:false,
      events:[
        { name:'change',propType:'func',description:'值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）'},
        { name:'input',propType:'func',description:'数据改变时触发（使用鼠标拖曳时，活动过程实时触发）'}
      ]
    }
  },
  snippets:[
    {
      title:'滑块',
      schema:{
        componentName:'ASlider',
        props:{
          value:1,
          disabled:false,
          placement:'top'
        }
      }
    }
  ]
}