/* eslint-disable */
// @ts-ignore
export default {
  group: 'Antd',
  componentName: 'ASelect',
  title: '选择器',
  category: '基础组件',
  npm: {
    destructuring: true,
    componentName: 'ASelect'
  },
  props:[
    {
      name:'defaultValue',
      title:{label:'默认值',tip:'默认选中值'},
      propType:{
        type:'oneOfType',
        value:['string',{type:'arrayOf',value:'string'},'number',{type:'arrayOf',value:'number'}]
      }
    },
    {
      name:'value',
      title:{label:'当前值',tip:'当前值'},
      propType:{
        type:'oneOfType',
        value:['string',{type:'arrayOf',value:'string'},'number',{type:'arrayOf',value:'number'}]
      }
    },
    {
      name:'options',
      title:{label:'可选项',tip:'可选项'},
      propType:{
        type:'arrayOf',
        value:{
          type:'shape',
          value:[
            { name:'label',propType:'string',description:'选项名',defaultValue:'选项名'},
            { name:'value',propType:['string','number'],description:'选项值',defaultValue:'选项值'},
            { name:'disabled',propType:'bool',description:'是否禁用',defaultValue:false}
          ]
        }
      },
      setter:{
        componentName:'ArraySetter',
        props:{
          itemSetter:{
            componentName:'ObjectSetter',
            props:{
              config:{
                items:[
                  {name:'label',title:'选项名',setter:['StringSetter','VariableSetter'],isRequired:true},
                  {name:'value',title:'选项值',setter:['StringSetter','NumberSetter','VariableSetter'],isRequired:true},
                  {name:'disabled',title:'是否禁用',setter:['BoolSetter','VariableSetter']}
                ]
              }
            },
            initialValue:()=>{
              return{
                label:'选项名',
                value:'test',
                disabled:false
              }
            }
          }
        }
      }
    },
    {
      title:'占位提示',
      name:'placeholder',
      propType:'string',
      setter:'StringSetter'
    },
    {
      title:{label:'展示边框',tip:'是否有边框'},
      name:'bordered',
      propType:'bool',
      setter:'BoolSetter',
      defaultValue:true
    },
    {
      title:{label:'筛选可选项',tip:'是否根据输入进行筛选'},
      name:'filterOption',
      propType:{
        type:'oneOfType',
        value:['bool','func']
      },
      defaultValue:false
    },
    {
      title:{label:'用于筛选的字段',tip:'用于过滤的字段'},
      propType:{
        type:'oneOf',
        value:['value','label']
      },
      defaultValue:'value'
    },
    {
      title:{label:'allowClear',tip:'支持清除'},
      name: 'allowClear',
      propType:'bool',
      setter:'BoolSetter',
      defaultValue:false,
      supportVariable: true
    },
    {
      title:{label:'autoClearSearchValue',tip:'是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效' },
      name:'autoClearSearchValue',
      propType:'bool',
      setter:'BoolSetter',
      defaultValue:true
    },
    {
      title:'可搜索',
      name:'showSearch',
      propType:'bool',
      setter:'BoolSetter',
      defaultValue:false,
      supportVariable:true
    },
    {
      title:"选择框大小",
      name:'size',
      propType:{
        type:'oneOf',
        value:['default','large','small']
      },
      setter:{
        componentName:'RadioGroupSetter',
        props:{
          options:[
            {label:'default',value:'default'},
            {label:'large',value:'large'},
            {label:'small',value:'small'}
          ]
        }
      },
      defaultValue:'default'
    },
    {
      title: '默认获取焦点',
      name: 'autoFocus',
      propType:'bool',
      setter: 'BoolSetter',
      defaultValue:false,
    },
    {
      title:'是否展开菜单',
      name:'open',
      propType:'bool',
      setter:'BoolSetter',
      defaultValue:true
    },
    {
      title:'是否默认展开下拉菜单',
      name:'defaultOpen',
      propType:'bool',
      setter:'BoolSetter',
      defaultValue:true
    },
    {
      title:{label:'模式',tip:'模式为多选或标签'},
      name:'mode',
      propType:{type:'oneOf',value:['multiple','tags','combobox']},
      setter:{
        componentName:'RadioGroupSetter',
        props:{
          options:[
            {title:'多选',value:'multiple'},
            {title:'标签',value:'tags'},
            {title:'combobox',value:'combobox'}
          ],
          defaultValue:'tags',
        }
      },
      supportVariable: true
    },
    {
      name:'maxTagCount',
      title:'最多显示tag数',
      propType:'number',
      condition(target:any){
        return target.getProps().getPropValue('mode')==='tags'
      }
    },
    {
      name:'maxTagTextLength',
      title:'最大tag文本长度',
      propType:'number',
      condition(target:any){
        return target.getProps().getPropValue('mode')==='tags'
      }
    },
    {
      name:'searchValue',
      title:'搜索文本',
      propType:'string',
      setter:'StringSetter'
    },
    {
      title:'搜索为空时提示文案',
      name:'notFoundContent',
      propType:'string',
      setter:'StringSetter',
      defaultValue:'not found'
    },
    {
      name:'suffixIcon',
      title:{label:'后缀图标',tip:'自定义的选择框后缀图标'},
      propType:'node'
    },
    {
      name:'removeIcon',
      title:{label:'清除图标',tip:'自定义的多选框清除图标'},
      propType:'node'
    },
    {
      name:'tagRender',
      title:'tagRender',
      propType:'node',
      condition(target: any): boolean {
        const mode = target.getProps().getPropValue('mode')
        return mode === 'tags' || mode === 'multiple'
      }
    },
    {
      name:'blur',
      title:{label:'失焦回调',tip:'失去焦点的时回调'},
      propType:'func'
    },
    {
      name:'change',
      title:{label:'change回调',tip:'选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数'},
      propType:'func'
    },
    {
      name:'deselect',
      title:{label:'deselect回调',tip:'取消选中时调用'},
      condition(target: any): boolean {
        const mode = target.getProps().getPropValue('mode')
        return mode === 'tags' || mode === 'multiple'
      },
      propType:'func'
    },
    {
      name:'focus',
      title:{label:'focus回调',tip:'获得焦点时回调'},
      propType:'func'
    },
    {
      name:'inputKeyDown',
      title:{label:'inputKeyDown回调',tip:'键盘按下时回调'},
      propType:'func'
    },
    {
      name:'mouseenter',
      title:{label:'mouseenter回调',tip:'鼠标移入时回调'},
      propType:'func'
    },
    {
      name:'mouseleave',
      title:{label:'mouseleave',tip:'鼠标移出时回调'},
      propType:'func'
    },
    {
      name:'popupScroll',
      title:'下拉列表滚动时的回调',
      propType:'func'
    },
    {
      name:'search',
      title:{label:'search回调',tip:'文本框值变化时回调'},
      propType:'func'
    },
    {
      name:'select',
      title:{label:'select回调',tip:'被选中时调用，参数为选中项的 value (或 key) 值'},
      propType:'func'
    }
  ],
  configure: {
    component:{
      isContainer:true
    },
    supports:{
      style:true,
      events:[
        {
          name:'blur',
          template:"blur(${extParams}){\n//失焦回调\n console.log('blur')}"
        },
        {
          name:'change',
          template:"change(value,option){\n console.log('change',value,option)}"
        },
        {
          name:'deselect',
          template:"deselect(value,option){\n console.log('deselect',value,option)}"
        },
        {
          name:'focus',
          template:"focus(${extParams}){\n//聚焦回调\n console.log('focus')}"
        }
      ]
    }
  },
  snippets: [
    {
      title: '选择器',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/select-1.png',
      schema: {
        componentName: 'ASelect',
        props: {
          style:{
            width:200
          },
          options:[
            {label:'选项一',value:'1'},
            {label:'选项二',value:'2'},
            {label:'选项三',value:'3'}
          ],
          bordered:true
        },
      },
    },
  ],
};