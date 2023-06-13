// @ts-ignore
import avatarImg from './__screenshots__/statistic-1.png?inline';
export default {
  group: 'ant-vue组件',
  componentName:'AStatistic',
  title: '统计数值',
  category: '数据展示',
  npm: {
    destructuring: true,
    componentName: 'AStatistic'
  },
  props:[
    {
      name: 'value',
      title: { label: '数值内容', tip: 'value|数值内容' },
      propType: { type: 'oneOfType', value: ['string', 'number'] },
    },
    {
      name: 'decimalSeparator',
      title: { label: '设置小数点', tip: 'decimalSeparator|设置小数点' },
      propType: 'string',
    },
    {
      name: 'formatter',
      title: { label: '自定义数值展示', tip: 'formatter|自定义数值展示' },
      propType: 'func',
    },
    {
      name: 'groupSeparator',
      title: { label: '设置千分位标识符', tip: 'groupSeparator|设置千分位标识符' },
      propType: 'string',
    },
    {
      name: 'precision',
      title: { label: '数值精度', tip: 'precision|数值精度' },
      propType: 'number',
    },
    {
      name: 'prefix',
      title: { label: '设置数值的前缀', tip: 'prefix|设置数值的前缀' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'suffix',
      title: { label: '设置数值的后缀', tip: 'suffix|设置数值的后缀' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'title',
      title: { label: '数值的标题', tip: 'title|数值的标题' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'valueStyle',
      title: { label: '设置数值的样式', tip: 'valueStyle|设置数值的样式' },
      propType: 'object',
    },
  ],
  configure: {
    supports: {
      style:true
    }
  },
  snippets:[
    {
      title:"统计数值",
      screenshot:avatarImg,
      schema:{
        componentName:"AStatistic",
        props:{
          title: 'Active Users',
          value: 16589,
        }
      }
    }
  ]
}
