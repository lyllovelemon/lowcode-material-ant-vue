export default {
  group: 'Antd',
  componentName: 'ACalendar',
  title: '日历',
  category: '数据展示',
  npm: {
    destructuring: true,
    componentName: 'ACalendar'
  },
  props:[
    {
      name: 'defaultValue',
      title: { label: '默认值', tip: '默认展示的日期' },
      propType: 'date',
      setter: 'DateSetter',
    },
    {
      name: 'disabledDate',
      title: { label: '不可选日期', tip: '不可选择的日期' },
      propType: 'func',
    },
    {
      name: 'dateCellRender',
      title: {
        label: '自定义日期追加渲染',
        tip: '自定义渲染日期单元格，返回内容会被追加到单元格',
      },
      propType: 'func',
    },
    {
      name: 'dateFullCellRender',
      title: {
        label: '自定义渲染日期单元格，返回内容覆盖单元格',
        tip: '自定义渲染日期单元格，返回内容覆盖单元格',
      },
      propType: 'func',
    },
    {
      name: 'fullscreen',
      title: { label: '全屏显示', tip: '是否全屏显示' },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'mode',
      title: { label: '初始模式', tip: '初始模式' },
      propType: { type: 'oneOf', value: ['month', 'year'] },
      defaultValue: 'month',
    },
    {
      name:'valueFormat',
      title:{label:'格式',tip:"绑定值的格式"},
      propType: 'string',
      defaultValue: 'YYYY-MM-DD',
      setter: 'StringSetter',
    }


  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onPanelChange',
          template:
            "onPanelChange(date,mode,${extParams}){\n// 日期面板变化回调\nconsole.log('onPanelChange', date, mode);}",
        },
        {
          name: 'onSelect',
          template:
            "onSelect(date,${extParams}){\n// 点击选择日期回调\nconsole.log('onSelect', date);}",
        },
        {
          name: 'onChange',
          template:
            "onChange (date,${extParams}){\n// 日期变化回调\nconsole.log('onChange', date);}",
        },
      ],
    }
  },
  snippets:[
    {
      title:'日历',
      screenshot:"https://alifd.alicdn.com/fusion-cool/icons/icon-antd/calendar-1.jpg",
      schema:{
        componentName:"ACalendar",
        props:{}
      }
    }
  ]
}