/* eslint-disable */
// @ts-ignore
export default{
  group:'Antd',
  componentName:'ACascader',
  title:'级联选择',
  category:'表单',
  npm:{
    destructuring:true,
    componentName:'ACascader'
  },
  props:[
    {
      name: 'defaultValue',
      title: { label: '默认的选中项', tip: '默认的选中项' },
      propType: {
        type: 'arrayOf',
        value: { type: 'oneOfType', value: ['string', 'number'] },
      },
    },
    {
      name: 'value',
      title: { label: '当前选中项', tip: '当前选中项' },
      propType: {
        type: 'arrayOf',
        value: { type: 'oneOfType', value: ['string', 'number'] },
      },
    },
    {
      name: 'options',
      title: { label: '选项数据', tip: '可选项数据源' },
      setter: 'JsonSetter',
    },
    {
      name: 'allowClear',
      title: { label: '支持清除', tip: '是否允许清除' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'autoFocus',
      title: { label: '自动聚焦', tip: '自动获取焦点' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'bordered',
      title: { label: '显示边框', tip: '是否有边框' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter'
    },
    {
      name: 'changeOnSelect',
      title: {
        label: '点选触发',
        tip: '点选每级菜单选项值都会触发onChange',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'expandTrigger',
      title: { label: '菜单触发方式', tip: '触发次级菜单的展开的方式' },
      propType: { type: 'oneOf', value: ['click', 'hover'] },
    },
    {
      name: 'notFoundContent',
      title: { label: '无数据展示', tip: '无数据' },
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name: 'placeholder',
      title: { label: '输入框占位文本', tip: '输入框占位文本' },
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name: 'placement',
      title: { label: '浮层预设位置', tip: '浮层预设位置' },
      propType: {
        type: 'oneOf',
        value: ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'],
      },
      defaultValue:'bottomLeft'
    },
    {
      name:'searchValue',
      title:'设置搜索的值，需要与 showSearch 配合使用',
      propType:'string',
      setter:'StringSetter'
    },
    {
      name:'showSearch',
      title:{ label: '支持搜索', tip: '在选择框中显示搜索框'},
      propType:'bool',
      defaultValue:false,
      setter:'BoolSetter'
    },
    {
      name: 'size',
      title: { label: '尺寸', tip: '输入框大小' },
      propType: { type: 'oneOf', value: ['large', 'middle', 'small'] },
      setter: {
        componentName: 'SelectSetter',
        props: {
          options: [
            {
              title: '大',
              value: 'large',
            },
            {
              title: '中',
              value: 'middle',
            },
            {
              title: '小',
              value: 'small',
            },
          ],
        },
      },
      defaultValue: 'middle',
    },
    {
      name:'multiple',
      title:{label:'多选',tip:'支持多选节点'},
      propType:'bool',
      setter:'BoolSetter',
      defaultValue:false
    },
    {
      name:'tagRender',
      title:'自定义 tag 内容，多选时生效',
      condition:(target:any)=>{
        return target.getProps().getPropValue('multiple') === true
      },
      setter:[
        {
          componentName: 'SlotSetter',
          title: '展开行插槽',
          initialValue: {
            type: 'JSSlot',
            params: ['value', 'label'],
            value: [],
          },
        },
      ]
    },
    {
      name:'open',
      title:'控制浮层显隐',
      propType:'bool',
      setter:'BoolSetter',
      supportVariable:true
    },
    {
      name:'change',
      title:'选择完成回调',
      propType:'func'
    },
    {
      name:'dropdownVisibleChange',
      title:{label:'显隐回调',tip:'dropdownVisibleChange|显隐浮层的回调'},
      propType:'func'
    },
    {
      name:'search',
      title:{label:'search',tip:'search|监听搜索，返回输入的值'},
      propType:'func'
    }
  ],
  configure:{
    supports:{
      style:true,
      events:[
        {
          name:'change',
          template:"change(value,selectedOptions,${extParams}){\n//选择完成后回调\nconsole.log('change',value,selectedOptions);}"
        },
        {
          name:'dropdownVisibleChange',
          template:"dropdownVisibleChange(value){\n//显示/隐藏浮层的回调\nconsole.log('dropdownVisibleChange',value);}"
        },
        {
          name:'search',
          template:"search(value){\n//监听搜索，返回输入的值\nconsole.log('search',value);}"
        }
      ]
    }
  },
  snippets: {
    title: '级联选择',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/cascader-1.png',
    schema:{
      componentName:'ACascader',
      props:{
        options:[
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                  {
                    value: 'xihu',
                    label: 'West Lake',
                  },
                ],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                  },
                ],
              },
            ],
          },
        ],
        placeholder:'请选择'
      }
    }
  }
}