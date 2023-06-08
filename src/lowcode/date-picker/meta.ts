// @ts-ignore
import DatePicker1 from './__screenshots__/date-picker-1.png?inline';
// @ts-ignore
import DatePicker2 from './__screenshots__/date-picker-2.png?inline';
// @ts-ignore
import DatePicker3 from './__screenshots__/date-picker-3.png?inline';
// @ts-ignore
import DatePicker4 from './__screenshots__/date-picker-4.png?inline';
// @ts-ignore
import DatePicker5 from './__screenshots__/date-picker-5.png?inline';
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
export default {
  group: 'ant-vue组件',
  componentName:'ADatePicker',
  title:'日期选择框',
  category:'表单',
  npm:{
    destructuring:true,
    componentName:'ADatePicker'
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
          propType: 'date',
          setter: 'DateSetter',
        },
        {
          name: 'value',
          title: {
            label: '当前值',
            tip: 'value | 当前值',
          },
          propType: 'date',
          setter: 'DateSetter',
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
          name: 'format',
          title: {
            label: '日期格式',
            tip: 'format | 设置日期格式',
          },
          propType: 'string',
          defaultValue: 'YYYY-MM-DD',
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
          name:'locale',
          title:'语言',
          propType:'string',
          defaultValue:locale
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
          name:'onOpenChange',
          template:"onOpenChange(status,${extParams}){\n//弹出日历和关闭日历的回调\nconsole.log('onOpenChange',status);}"
        },
        {
          name:'onChange',
          template:"onChange(value,mode){\n//日期面板变化时的回调\nconsole.log('onChange',value,mode);}"
        }
      ]
    }
  },
  snippets: [
    {
      title: '选择日期',
      screenshot: DatePicker1,
      schema: {
        componentName: "ADatePicker",
        props: {
          style:{
            height:'22px',
            backgroundColor:'#ddf4ff',
            border:"1px solid #ddf4ff",
            marginLeft:'10px'
          }
        },
      },
    },
    {
      title: '选择周',
      screenshot:DatePicker2,
      schema: {
        componentName: 'ADatePicker',
        props: {
          style:{
            height:'22px',
            backgroundColor:'#ddf4ff',
            border:"1px solid #ddf4ff",
            marginLeft:'10px'
          },
          picker: 'week',
        },
      },
    },
    {
      title: '选择月份',
      screenshot: DatePicker3,
      schema: {
        componentName: 'ADatePicker',
        props: {
          style:{
            height:'22px',
            backgroundColor:'#ddf4ff',
            border:"1px solid #ddf4ff",
            marginLeft:'10px'
          },
          picker: 'month',
        },
      },
    },
    {
      title: '选择季度',
      screenshot: DatePicker4,
      schema: {
        componentName: 'ADatePicker',
        props: {
          style:{
            height:'22px',
            backgroundColor:'#ddf4ff',
            border:"1px solid #ddf4ff",
            marginLeft:'10px'
          },
          picker: 'quarter',
        },
      },
    },
    {
      title: '选择年份',
      screenshot: DatePicker5,
      schema: {
        componentName: 'ADatePicker',
        props: {
          style:{
            height:'22px',
            backgroundColor:'#ddf4ff',
            border:"1px solid #ddf4ff",
            marginLeft:'10px'
          },
          picker: 'year',
        },
      },
    },
  ]
}
