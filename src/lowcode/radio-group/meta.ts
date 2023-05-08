/* eslint-disable */
// @ts-ignore
export default {
  group: 'Antd',
  componentName: 'ARadioGroup',
  title: '单选框组',
  category: '表单',
  npm: {
    destructuring: true,
    componentName: 'ARadioGroup'
  },
  props:[
    {
      name: 'value',
      title: { label: '当前值', tip: '指定选中的选项' },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true
    },
    {
      name: 'options',
      propType: {
        type: 'arrayOf',
        value: {
          type: 'shape',
          value: [
            {
              name: 'label',
              propType: 'string',
              description: '选项名',
              defaultValue: '选项名',
            },
            {
              name: 'value',
              propType: 'string',
              description: '选项值',
              defaultValue: '选项值',
            },
            {
              name: 'disabled',
              propType: 'bool',
              description: '是否禁用',
              defaultValue: false,
            },
          ],
        },
      },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'label',
                    title: '选项名',
                    setter: 'StringSetter',
                    isRequired: true
                  },
                  {
                    name: 'value',
                    title: '选项值',
                    setter: 'StringSetter',
                    isRequired: true
                  },
                  {
                    name: 'disabled',
                    title: '是否禁用',
                    setter: 'BoolSetter',
                  },
                ],
              },
            },
            initialValue: () => {
              return {
                label: '选项名',
                value: '随机',
                disabled: false,
              };
            },
          },
        },
      },
    },
    {
      name: 'buttonStyle',
      title: { label: 'buttonStyle', tip: 'RadioButton 的风格样式' },
      propType: {type:'oneOf',value:['outline','solid']},
      defaultValue: 'outline',
      condition(target: { getProps: () => { (): any; new(): any; getPropValue: { (arg0: string): string; new(): any; }; }; }) {
        return target.getProps().getPropValue('optionType') === 'button';
      },
      setter:{
        componentName:'RadioGroupSetter',
        props: {
          options: [
            { label: 'outline', value: 'outline' },
            { label: 'solid', value: 'solid' },
          ],
        },
      }
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '禁选所有子单选器' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true
    },
    {
      name: 'optionType',
      title: { label: '类型', tip: '类型' },
      propType: { type: 'oneOf', value: ['default', 'button'] },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '默认类型',
              value: 'default',
            },
            {
              title: '按钮类型',
              value: 'button',
            },
          ],
        },
      },
      defaultValue: 'default',
    },
    {
      name: 'size',
      title: { label: '尺寸', tip: '大小，只对按钮样式生效' },
      condition(target: { getProps: () => { (): any; new(): any; getPropValue: { (arg0: string): string; new(): any; }; }; }) {
        return target.getProps().getPropValue('optionType') === 'button';
      },
      propType: { type: 'oneOf', value: ['large', 'middle', 'small'] },
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
      name: 'onChange ',
      title: { label: '变化时回调函数', tip: '变化时回调函数' },
      propType: 'func',
    },
  ],
  configure:{
    supports:{
      style:true,
      events:[
        {
          name:'onChange',
          template:"onChange(event,${extParams}){\n//选项变化回调函数\nconsole.log('onChange',event);}"
        }
      ]
    }
  },
  snippets:[
    {
      title:'单选框组',
      screenshot:'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/radio-group-1.png',
      props:{
        options: [
          {
            label: 'A',
            value: 'A',
          },
          {
            label: 'B',
            value: 'B',
          },
          {
            label: 'C',
            value: 'C',
          },
        ],
      }
    }
  ]
}