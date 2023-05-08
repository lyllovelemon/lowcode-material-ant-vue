/* eslint-disable */
// @ts-ignore
export default{
  group:'Antd',
  componentName:'ARangePicker',
  title:'日期区间选择',
  category:'表单',
  npm:{
    destructuring:true,
    componentName:'ARangePicker'
  },
  props:[
    {
      title: '值设置',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'defaultValue',
          title: {
            label: '默认值',
            tip: 'defaultValue | 默认值',
          },
          propType: 'object',
          setter: 'JsonSetter',
        },
        {
          name: 'value',
          title: {
            label: '当前值',
            tip: 'value | 当前值',
          },
          propType: 'object',
          setter: 'JsonSetter',
        },
        {
          name: 'defaultPickerValue',
          title: {
            label: '默认面板日期',
            tip: 'defaultPickerValue | 默认面板日期',
          },
          propType: 'object',
          setter: 'JsonSetter',
        },
      ],
    },
    {
      title: '功能选项',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'size',
          title: {
            label: '尺寸',
            tip: 'size | 输入框大小',
          },
          propType: {
            type: 'oneOf',
            value: ['large', 'middle', 'small'],
          },
          setter: {
            componentName: 'RadioGroupSetter',
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
          name: 'picker',
          title: {
            label: '日期类型',
            tip: 'picker | 选择器日期类型',
          },
          setter: {
            componentName: 'SelectSetter',
            props: {
              options: [
                {
                  title: '日期',
                  value: 'date',
                },
                {
                  title: '周',
                  value: 'week',
                },
                {
                  title: '月份',
                  value: 'month',
                },
                {
                  title: '季度',
                  value: 'quarter',
                },
                {
                  title: '年份',
                  value: 'year',
                },
              ],
            },
          },
          propType: {
            type: 'oneOf',
            value: ['date', 'week', 'month', 'quarter', 'year'],
          },
        },
        {
          name: 'mode',
          title: {
            label: '面板模式',
            tip: 'mode | 日期面板的状态',
          },
          propType: {
            type: 'oneOf',
            value: ['time', 'date', 'month', 'year', 'decade'],
          },
          setter: {
            componentName: 'SelectSetter',
            props: {
              options: [
                {
                  title: '日期',
                  value: 'date',
                },
                {
                  title: '周',
                  value: 'week',
                },
                {
                  title: '月份',
                  value: 'month',
                },
                {
                  title: '年份',
                  value: 'year',
                },
                {
                  title: '十年间隔',
                  value: 'decade',
                },
              ],
            },
          },
        },
        {
          name: 'format',
          title: {
            label: '日期格式',
            tip: 'format | 展示的日期格式，配置参考 moment.js',
          },
          propType: 'string',
          setter: 'StringSetter',
        },
        {
          name: 'placeholder',
          title: {
            label: '提示文字',
            tip: 'placeholder | 输入框提示文字',
          },
          propType: 'string',
          setter: 'StringSetter',
        },
        {
          name: 'allowClear',
          title: {
            label: '支持清除',
            tip: 'allowClear | 是否允许清除',
          },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter',
        },
        {
          name: 'bordered',
          title: {
            label: '显示边框',
            tip: 'bordered | 是否有边框',
          },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter',
        },
        {
          name: 'showToday',
          title: {
            label: '展示今天按钮',
            tip: 'showToday | 是否展示今天按钮',
          },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter',
        },
        {
          name: 'autoFocus',
          title: {
            label: '自动聚焦',
            tip: 'autoFocus | 自动获取焦点',
          },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
        {
          name: 'disabled',
          title: {
            label: '是否禁用',
            tip: 'disabled | 是否为禁用状态',
          },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
        {
          name: 'inputReadOnly',
          title: {
            label: '是否只读',
            tip: 'inputReadOnly | 避免在移动设备上打开虚拟键盘',
          },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
        {
          name: 'showTime',
          title: {
            label: '时间选择',
            tip: 'showTime | 是否能选择时间',
          },
          propType: 'bool',
          defaultValue: false,
          setter: 'BoolSetter',
        },
      ],
    },
    {
      title: '高级',
      display: 'block',
      type: 'group',
      items:[
        {
          name: 'ranges',
          title: {
            label: '预设范围',
            tip: 'ranges | 预设时间范围快捷选择',
          },
          propType: 'object',
          setter: 'JsonSetter',
        },
        {
          name: 'disabledDate',
          title: {
            label: '不可选日期',
            tip: 'disabledDate | 不可选择的日期',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'disabledDate(currentDate,${extParams}){\n// 设置不可选择的日期\nreturn true\n}',
              },
            },
            'VariableSetter',
          ],
        },
      ]
    }
  ],
  configure:{
    supports:{
      style:true,
      events:[
        {
          name:'onChange',
          template:"onChange(dates,dateStrings){\n//日期范围发生变化的回调\nconsole.log('onChange ',JSON.stringify(dates));}"
        },
        {
          name:'onCalendarChange',
          template:"onCalendarChange(dates,dateStrings){\n//待选日期发生变化的回调\nconst [start,end] = dates;\nconsole.log('onCalendarChange',start,end);}"
        },
        {
          name:'onOk',
          template:"onOk(dates){\n//点击确定按钮的回调\nconst [start,end] = dates;\nconsole.log('onOk',start,end);}"
        }
      ]
    }
  },
  snippets: [
    {
      title: '日期区间',
      screenshot:
        'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/date-picker-range-picker-1.png',
      schema: {
        componentName: 'ARangePicker',
        props: {},
      },
    },
    {
      title: '周区间',
      screenshot:
        'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/date-picker-range-picker-2.png',
      schema: {
        componentName: 'ARangePicker',
        props: {
          picker: 'week',
        },
      },
    },
    {
      title: '月区间',
      screenshot:
        'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/date-picker-range-picker-3.png',
      schema: {
        componentName: 'ARangePicker',
        props: {
          picker: 'month',
        },
      },
    },
    {
      title: '年区间',
      screenshot:
        'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/date-picker-range-picker-4.png',
      schema: {
        componentName: 'ARangePicker',
        props: {
          picker: 'year',
        },
      },
    },
  ]
}