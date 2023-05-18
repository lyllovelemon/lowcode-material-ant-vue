/* eslint-disable */
// @ts-ignore
export default {
  group: 'Antd',
  componentName: 'ASlider',
  title: '滑块(滑动输入条)',
  category: '表单',
  npm: {
    destructuring: true,
    componentName: 'ASlider',
  },
  props:[
    {
      name: 'defaultValue',
      title: {
        label: '默认值',
        tip: '设置初始取值。当 `range` 为 false 时，使用 number，否则用 \\[number, number]',
      },
      propType: {
        type: 'oneOfType',
        value: ['number', { type: 'arrayOf', value: 'number' }],
      },
    },
    {
      name: 'range',
      title: { label: '双滑块模式', tip: '双滑块模式' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      setValue(target: { node: { getPropValue: (arg0: string) => any; setPropValue: (arg0: string, arg1: any) => void; }; }, range: any) {
        let defaultValue = target.node.getPropValue('defaultValue');
        if (range) {
          defaultValue = Array.isArray(defaultValue) ? defaultValue : [0, defaultValue];
        } else {
          defaultValue = Array.isArray(defaultValue)
            ? defaultValue[1] || defaultValue[0]
            : defaultValue;
        }
        target.node.setPropValue('defaultValue', defaultValue);
      },
    },
    {
      name: 'value',
      title: {
        label: '当前值',
        tip:
          '设置当前取值。当 `range` 为 false 时，使用 number，否则用 \\[number, number]',
      },
      propType: {
        type: 'oneOfType',
        value: ['number', { type: 'arrayOf', value: 'number' }],
      },
    },
    {
      name: 'allowClear',
      title: { label: '支持清除', tip: '是否允许清除' },
      condition(target: { getProps: () => { (): any; new(): any; getPropValue: { (arg0: string): boolean; new(): any; }; }; }) {
        return target.getProps().getPropValue('range');
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'disabled',
      title: {
        label: '是否禁用',
        tip: '是否为禁用状态',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'dots',
      title: { label: '对齐刻度', tip: '是否只能拖拽到刻度上' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'max',
      title: { label: '最大值', tip: '最大值' },
      propType: 'number',
      setter: 'NumberSetter'
    },
    {
      name: 'min',
      title: { label: '最小值', tip: '最小值' },
      propType: 'number',
      setter: 'NumberSetter'
    },
    {
      name: 'reverse',
      title: { label: '反向坐标轴', tip: '反向坐标轴' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
    {
      name: 'step',
      title: {
        label: '步长',
        tip:
          '步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 null，此时 Slider 的可选值仅有 marks 标出来的部分',
      },
      propType: 'number',
      setter: 'NumberSetter'
    },
    {
      name: 'vertical',
      title: {
        label: '垂直方向',
        tip: '值为 true 时，Slider 为垂直方向',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter'
    },
  ],
  configure:{
    component:{
      isContainer:true
    },
    supports:{
      style:true,
      events:[
        {
          name: 'onAfterChange',
          template:
            "onAfterChange(value,${extParams}){\n// 与 onmouseup 触发时机一致\nconsole.log('onAfterChange',value);}",
        },
        {
          name: 'onChange',
          template:
            "onChange(value,${extParams}){\n// 当 Slider 的值发生改变时触发回调\nconsole.log('onChange',value);}",
        },
      ]
    }
  },
  snippets:[
    {
      title:"滑块(滑动输入条)",
      screenshot:"https://alifd.alicdn.com/fusion-cool/icons/icon-antd/slider-1.png",
      schema:{
        componentName:"ASlider",
        props:{
          defaultValue:30
        }
      }
    }
  ]
}
