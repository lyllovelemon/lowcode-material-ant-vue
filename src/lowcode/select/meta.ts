/* eslint-disable */
// @ts-ignore
import avatarImg from './__screenshots__/select-1.png?inline'
export default {
  group: 'ant-vue组件',
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
      title:{label:'支持清除',tip:'allowClear|支持清除'},
      name: 'allowClear',
      propType:'bool',
      setter:'BoolSetter',
      defaultValue:true,
      supportVariable: true
    },
    {
      title: {label:'自动聚焦',tip:'默认获取焦点'},
      name: 'autoFocus',
      propType:'bool',
      setter: 'BoolSetter',
      defaultValue:false,
    },
    {
      name: 'labelInValue',
      title: {
        label: '值包含label',
        tip: '把每个选项的 label 包装到 value 中',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      title:'占位提示',
      name:'placeholder',
      propType:{
        type:'oneOfType',
        value:['string','node']
      },
      setter:['StringSetter','SlotSetter']
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
      title:{label:'autoClearSearchValue',tip:'是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效' },
      name:'autoClearSearchValue',
      propType:'bool',
      setter:'BoolSetter',
      defaultValue:true
    },
    {
      name: 'showArrow',
      title: { label: '是否显示下拉箭头', tip: '是否显示下拉小箭头' },
      propType: 'bool',
      setter: 'BoolSetter'
    },
    {
      title:'是否可搜索',
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
    // {
    //   title:'是否展开菜单',
    //   name:'open',
    //   propType:'bool',
    //   setter:'BoolSetter',
    //   defaultValue:false
    // },
    // {
    //   title:'是否默认展开下拉菜单',
    //   name:'defaultOpen',
    //   propType:'bool',
    //   setter:'BoolSetter',
    //   defaultValue:false
    // },
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
      setter:'StringSetter'
    },
    {
      name:'dropdownRender',
      title:{label:'自定义下拉框',tip:'dropdownRender|自定义下拉框内容'},
      propType: { type: 'oneOfType', value: ['node', 'func'] },
      setter:[
        {
          componentName: 'SlotSetter',
          title: '自定义下拉框',
          initialValue: {
            type: 'JSSlot',
            params: ['menuNode'],
            value: [],
          },
        },
        {
          componentName: 'FunctionSetter',
          props: {
            template:
              'dropdownRender(menuNode,props,${extParams}){\n// 自定义下拉框内容\nconsole.log("dropdownRender menuNode",menuNode,"props",props)\n}',
          },
        }
      ]
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
      name: 'tokenSeparators',
      title: { label: '自动分词的分隔符', tip: '自动分词的分隔符' },
      propType: { type: 'arrayOf', value: 'string' },
    },
    {
      name:'onBlur',
      title:{label:'失焦回调',tip:'失去焦点的时回调'},
      propType:'func'
    },
    {
      name:'onChange',
      title:{label:'onChange回调',tip:'选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数'},
      propType:'func'
    },
    {
      name:'onDeselect',
      title:{label:'onDeselect回调',tip:'取消选中时调用'},
      condition(target: any): boolean {
        const mode = target.getProps().getPropValue('mode')
        return mode === 'tags' || mode === 'multiple'
      },
      propType:'func'
    },
    {
      name:'onFocus',
      title:{label:'onFocus回调',tip:'获得焦点时回调'},
      propType:'func'
    },
    {
      name:'onInputKeyDown',
      title:{label:'onInputKeyDown回调',tip:'键盘按下时回调'},
      propType:'func'
    },
    {
      name:'onMouseEnter',
      title:{label:'onMouseEnter回调',tip:'鼠标移入时回调'},
      propType:'func'
    },
    {
      name:'onMouseLeave',
      title:{label:'onMouseLeave',tip:'鼠标移出时回调'},
      propType:'func'
    },
    {
      name:'onPopupScroll',
      title:'下拉列表滚动时的回调',
      propType:'func'
    },
    {
      name:'onSearch',
      title:{label:'onSearch回调',tip:'文本框值变化时回调'},
      propType:'func'
    },
    {
      name:'onSelect',
      title:{label:'onSelect回调',tip:'被选中时调用，参数为选中项的 value (或 key) 值'},
      propType:'func'
    }
  ],
  configure: {
    supports:{
      style:true,
      events:[
        {
          name:'onBlur',
          template:"onBlur(${extParams}){\n//失焦回调\n console.log('onBlur')}"
        },
        {
          name:'onChange',
          template:"onChange(value,option){\n console.log('onChange',value,option)}"
        },
        {
          name:'onDeselect',
          template:"onDeselect(value,option){\n console.log('onDeselect',value,option)}"
        },
        {
          name:'onFocus',
          template:"onFocus(${extParams}){\n//聚焦回调\n console.log('onFocus')}"
        }
      ]
    }
  },
  snippets: [
    {
      title: '选择器',
      screenshot: avatarImg,
      schema: {
        componentName: 'ASelect',
        props: {
          style:{
            width:"200px"
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
