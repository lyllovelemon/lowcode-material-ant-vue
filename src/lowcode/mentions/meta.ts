export default {
  group: 'Antd',
  componentName:'AMentions',
  title: '提及',
  category: '数据展示',
  npm: {
    destructuring: true,
    componentName: 'AMentions'
  },
  props:[
    {
      name: 'defaultValue',
      title: { label: '默认值', tip: '默认值' },
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name: 'autoFocus',
      title: { label: '自动聚焦', tip: '自动获得焦点' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'filterOption',
      title: { label: '自定义过滤逻辑', tip: '自定义过滤逻辑' },
      propType: { type: 'oneOfType', value: ['bool', 'func'] },
    },
    {
      name: 'notFoundContent',
      title: {
        label: '空值展示',
        tip: '当下拉列表为空时显示的内容',
      },
      propType: 'node',
    },
    {
      name: 'placement',
      title: { label: '弹出层展示位置', tip: '弹出层展示位置' },
      propType: { type: 'oneOf', value: ['top', 'bottom'] },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '上',
              value: 'top',
            },
            {
              title: '下',
              value: 'bottom',
            },
          ],
        },
      },
    },
    {
      name: 'prefix',
      title: { label: '设置触发关键字', tip: '设置触发关键字' },
      propType: {
        type: 'oneOfType',
        value: ['string', { type: 'arrayOf', value: 'string' }],
      },
    },
    {
      name: 'split',
      title: { label: '设置选中项前后分隔符', tip: '设置选中项前后分隔符' },
      propType: 'string',
    },
    {
      name: 'validateSearch',
      title: { label: '自定义触发验证逻辑', tip: '自定义触发验证逻辑' },
      propType: 'func',
    },
    {
      name: 'value',
      title: { label: '设置值', tip: '设置值' },
      propType: 'string',
    },
    {
      name: 'onChange ',
      title: { label: '值改变时触发', tip: '值改变时触发' },
      propType: 'func',
    },
    {
      name: 'onSelect',
      title: { label: '选择选项时触发', tip: '选择选项时触发' },
      propType: 'func',
    },
    {
      name: 'onSearch',
      title: { label: '搜索时触发', tip: '搜索时触发' },
      propType: 'func',
    },
    {
      name: 'onFocus',
      title: { label: '获得焦点时触发', tip: '获得焦点时触发' },
      propType: 'func',
    },
    {
      name: 'onBlur',
      title: { label: '失去焦点时触发', tip: '失去焦点时触发' },
      propType: 'func',
    },
    {
      name: 'getPopupContainer',
      title: {
        label: '指定建议框挂载的 HTML 节点',
        tip: '指定建议框挂载的 HTML 节点',
      },
      propType: 'func',
    }
  ],
  configure: {
    supports: {
      style:true
    },
    events:[
      {
        name: 'onChange ',
        template: "onChange (text,${extParams}){\n// 值改变时触发\nconsole.log('onChange ',text);}",
      },
      {
        name: 'onSelect',
        template:
          "onSelect(option,prefix,${extParams}){\n// 选择选项时触发\nconsole.log('onSelect',option,prefix);}",
      },
      {
        name: 'onSearch',
        template:
          "onSearch(text,prefix,${extParams}){\n// 搜索时触发\nconsole.log('onSearch',text,prefix);}",
      },
      {
        name: 'onFocus',
        template: "onFocus(${extParams}){\n// 获得焦点时触发\nconsole.log('onFocus');}",
      },
      {
        name: 'onBlur',
        template: "onBlur(${extParams}){\n// 失去焦点时触发\nconsole.log('onBlur');}",
      },
    ]
  },
  snippets:[
    {
      title:"提及",
      screenshot:"https://alifd.alicdn.com/fusion-cool/icons/icon-antd/mentions-1.png",
      schema:{
        componentName:"AMentions",
        props:{}
      }
    }
  ]
}