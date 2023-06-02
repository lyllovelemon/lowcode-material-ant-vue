// @ts-ignore
import avatarImg from './__screenshots__/dropdown-1.png?inline'
export default {
  group: 'ant-vue组件',
  componentName:'ADropdown',
  title: '下拉菜单',
  category: '导航',
  npm: {
    destructuring: true,
    componentName: 'ADropdown'
  },
  props:[
    {
      name: 'visible',
      title: { label: '菜单是否显示', tip: '菜单是否显示' },
      propType: { type: 'oneOf', value: [true, false, '-'] },
      defaultValue: '-',
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '默认非受控',
              value: '-',
            },
            {
              title: '显示',
              value: true,
            },
            {
              title: '不显示',
              value: false,
            },
          ],
        },
      },
      extraProps: {
        getValue(target: { node: any; }) {
          const { node } = target;
          let value = node.getPropValue('visible');
          if (value === undefined) {
            value = '-';
          }
          return value;
        },
        setValue(target: { node: any; }, value: string) {
          const { node } = target;
          if (value === '-') {
            setTimeout(() => {
              node.clearPropValue('visible');
            });
          }
        },
      },
    },
    {
      name: 'arrow',
      title: { label: '显示下拉箭头', tip: '是否显示下拉箭头' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
    },
    {
      name: 'overlay',
      title: { label: '菜单', tip: '菜单' },
      propType: { type: 'oneOfType', value: ['node', 'func'] },
    },
    {
      name:'size',
      title:{ label:'尺寸',tip:'按钮大小'},
      propType:{ type:'oneOf',value:['default','small','large']},
      setter:{
        componentName:"RadioGroupSetter",
        props: {
          options: [
            { label: 'default', value: 'default' },
            { label: 'large', value: 'large' },
            { label: 'small', value: 'small' },
          ],
        }
      },
      defaultValue:'default'
    },
    {
      name: 'placement',
      title: {
        label: '弹出位置',
        tip:
          '菜单弹出位置：`bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight`',
      },
      propType: {
        type: 'oneOf',
        value: ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'],
      },
    },
    {
      name: 'trigger',
      title: {
        label: '触发下拉的行为',
        tip: '触发下拉的行为, 移动端不支持 hover',
      },
      propType: {
        type: 'arrayOf',
        value: { type: 'oneOf', value: ['click', 'hover', 'contextMenu'] },
      },
    },
    {
      name: 'visibleChange',
      title: {
        label: '显示状态回调',
        tip: '菜单显示状态改变时调用，参数为 `visible`',
      },
      propType: 'func',
    },
  ],
  configure: {
    component: { isContainer: true },
    supports: {
      style:true,
      events: [
        {
          name: 'visibleChange',
          template:
            "visibleChange(open,${extParams}){\n// 菜单显示状态改变时调用\nconsole.log('visibleChange',open);}",
        },
      ]
    }
  },
  snippets:[
    {
      title:"下拉菜单",
      screenshot:avatarImg,
      schema:{
        componentName:"ADropdown",
        props:{
          overlay: {
            type: 'JSSlot',
            value: [
              {
                componentName: 'AMenu',
                props: {
                  items: [
                    {
                      key: 'timeLinei5wd',
                      category: 'Item',
                      title: '菜单名',
                    },
                  ],
                },
                children: [
                  {
                    componentName: 'AMenuItem',
                    id: 'node_ocky01yzdq3',
                    props: {
                      key: 'timeLinei5wd',
                      category: 'Item',
                      title: '菜单名',
                      children: '菜单名',
                    },
                  },
                ],
              },
            ],
          },
        },
        children: [
          {
            componentName: 'AButton',
            props: {
              type: 'link',
              children: {
                type: 'JSSlot',
                value: [
                  {
                    componentName: 'ATypographyText',
                    props: {
                      children: 'Hover me',
                      style: {
                        color: 'inherit',
                      },
                    },
                  }
                ]
              }
            }
          }
        ]
        }
    }
  ]
}
