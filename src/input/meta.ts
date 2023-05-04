/* eslint-disable */
// @ts-ignore
export default {
  group: 'Antd',
  componentName: 'AInput',
  title: '输入框',
  category: '基础组件',
  npm: {
    destructuring: true,
    componentName: 'AInput'
  },
  props:[
    { name:'label',propType:'string',title:'标签文案',description:'label'},
    { name:'id',propType:'string',description:'ID'},
    { name:'name',propType:'string'},
    { name:'value',propType:{type:'oneOfType',value:['string','number']}},
    { name:'type',propType:{type:'oneOf',value:['text','number','password','radio','range','reset','search','submit','tel','time','url','week','button','checkbox','color','date','textarea']}},
    { name:'placeholder',propType:'string',defaultValue:'请输入'},
    { name:'clearable',propType:'bool',defaultValue:true},
    { name:'disabled',propType:'bool',defaultValue:false},
    { name:'size',propType:{type:'oneOf',value:['default','large','small']}},
    { name:'showWordLimit',propType:'bool',description:'是否展示统计字数',defaultValue:false},
    { name:'prefixIcon',propType:{type:'instanceOf',value:'node'},description:'前缀图标'},
    { name:'suffixIcon',propType:{type:'instanceOf',value:'node'},description:'后缀图标'},
    { name:'formatter',propType:'func'},
    { name:'parser',propType:'func'}
  ],
  configure:{
    component:{
      isContainer:true
    },
    props:[
      { name:'label',title:'标签文本',setter:'StringSetter'},
      { name:'value',title:'绑定值',setter:{ componentName:'MixedSetter', props:{ setters:['StringSetter','NumberSetter'] } },supportVariable: true},
      { name:'type',title:'类型',setter:[{componentName:'RadioGroupSetter',props:{options:['text','number','password','radio','range','reset','search','submit','tel','time','url','week','button','checkbox','color','date','textarea']}}],defaultValue:'text'},
      { name:'placeholder',title:'placeholder',setter:'StringSetter'},
      { name:'clearable',title:'可清除',setter:'BoolSetter',defaultValue:true},
      { name:'disabled',title:'禁用',setter:'BoolSetter',defaultValue:false},
      { name:'autocomplete',title:'autocomplete',setter:'StringSetter',defaultValue:'off'},
      { name:'size',title:'输入框尺寸',setter:{componentName:'RadioGroupSetter',props:{options:['default','large','small']}},defaultValue:'default'},
      { name:'resize',title:'缩放',setter:{componentName:'SelectSetter',props:{options:[{label:'none',value:'none'},{label:'both',value:'both'},{label:'horizontal',value:'horizontal'},{label:'vertical',value:'vertical'}]}},defaultValue:'none'},
      { name:'maxlength',title:'最大长度',setter:'NumberSetter',defaultValue:20},
      { name:'minlength',title:'最小长度',setter:'NumberSetter',defaultValue:1},
      { name:'showWordLimit',title:'是否展示统计字数',setter:'BoolSetter',defaultValue:false},
      { name:'showPassword',title:'是否展示密码',setter:'BoolSetter',defaultValue:false},
      { name:'prefixIcon',title:'前缀图标',setter:{componentName:'IconSetter'}},
      { name:'suffixIcon',title:'后缀图标',setter:{componentName:'IconSetter'}},
      {type:'group',title:'高级',display:'block',items:[
          { name:'id',title:'唯一标识',setter:'StringSetter'},
          { name:'name',title:'表单标识',setter:'StringSetter'}
        ]}
    ],
    supports:{
      style:true,
      events:['input','change','focus','blur','keydown','clear','mouseleave','mouseenter']
    }
  },
  snippets:[
    {
      title:'输入框',
      screenshot:'https://img.alicdn.com/tfs/TB1ysp3u8v0gK0jSZKbXXbK2FXa-112-64.png',
      schema:{
        componentName:'AInput',
        props:{
          type:'text',
          size:'default',
          placeholder:'请输入',
          autocomplete:'off'
        }
      }
    }
  ]
}