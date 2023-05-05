import {uuid} from '../utils/index';
import {itemsExtraProps} from './util';

export default {
  group: 'Antd',
  componentName:'AMenu',
  title: '菜单',
  category: '基础组件',
  npm: {
    destructuring: true,
    componentName: 'AMenu'
  },
  props:[
    {
      name: 'items',
      title: '菜单项',
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'key',
                    title: 'key',
                    setter: 'StringSetter',
                    initialValue: (val: any) => val || uuid(),
                  },
                  {
                    name: 'children',
                    title: '菜单名称',
                    setter: 'StringSetter',
                  },
                  {
                    name: 'category',
                    title: {
                      label: '类型',
                      tip: '菜单项类型',
                    },
                    propType: {
                      type: 'oneOf',
                      value: ['Menu.Item', 'Menu.SubMenu', 'Menu.ItemGroup'],
                    },
                    setter: [
                      {
                        componentName: 'RadioGroupSetter',
                        props: {
                          options: [
                            {
                              title: 'Item',
                              value: 'Menu.Item',
                            },
                            {
                              title: 'SubMenu',
                              value: 'Menu.SubMenu',
                            },
                            {
                              title: 'ItemGroup',
                              value: 'Menu.ItemGroup',
                            },
                          ],
                        },
                      },
                      'VariableSetter',
                    ],
                  },
                ],
              },
            },
            initialValue: () => {
              return {
                key: 'item-' + uuid(),
                category: 'Menu.Item',
                children: '菜单名',
              };
            },
          },
        },
      },
      extraProps: itemsExtraProps,
    },
    {
      name: 'defaultOpenKeys',
      title: {
        label: '初始展开菜单项',
        tip: '初始展开的 SubMenu 菜单项 key 数组',
      },
      propType: { type: 'arrayOf', value: 'string' },
    },
    {
      name: 'defaultSelectedKeys',
      title: { label: '初始选中的菜单项', tip: '初始选中的菜单项 key 数组' },
      propType: { type: 'arrayOf', value: 'string' },
    },
    {
      name: 'forceSubMenuRender',
      title: {
        label: '子菜单预渲染',
        tip: '在子菜单展示之前就渲染进 DOM',
      },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'inlineCollapsed',
      title: { label: '是否收起', tip: 'inline 时菜单是否收起状态' },
      propType: 'bool',
    },
    {
      name: 'inlineIndent',
      title: { label: '缩进宽度', tip: 'inline 模式的菜单缩进宽度' },
      propType: 'number',
    },
    {
      name: 'mode',
      title: {
        label: '菜单类型',
        tip: '菜单类型，现在支持垂直、水平、和内嵌模式三种',
      },
      propType: { type: 'oneOf', value: ['vertical', 'horizontal', 'inline'] },
    },
    {
      name: 'multiple',
      title: { label: '是否允许多选', tip: '是否允许多选' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'openKeys',
      title: {
        label: '当前展开的菜单项',
        tip: '当前展开的 SubMenu 菜单项 key 数组',
      },
      propType: { type: 'arrayOf', value: 'string' },
    },
    {
      name: 'selectable',
      title: { label: '是否允许选中', tip: '是否允许选中' },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'selectedKeys',
      title: { label: '当前选中项', tip: '当前选中的菜单项 key 数组' },
      propType: { type: 'arrayOf', value: 'string' },
    },
    {
      name: 'style',
      title: { label: '根节点样式', tip: '根节点样式' },
      propType: 'object',
    },
    {
      name: 'subMenuCloseDelay',
      title: {
        label: '关闭延时',
        tip: '用户鼠标离开子菜单后关闭延时，单位：秒',
      },
      propType: 'number',
    },
    {
      name: 'subMenuOpenDelay',
      title: {
        label: '开启延时',
        tip: '用户鼠标进入子菜单后开启延时，单位：秒',
      },
      propType: 'number',
    },
    {
      name: 'theme',
      title: { label: '主题颜色', tip: '主题颜色' },
      propType: { type: 'oneOf', value: ['light', 'dark'] },
    },
    {
      name: 'click',
      title: { label: '点击 MenuItem 调用函数', tip: '点击 MenuItem 调用函数' },
      propType: 'func',
    },
    {
      name: 'deselect',
      title: {
        label: '取消选中时调用函数',
        tip: '取消选中时调用，仅在 multiple 生效',
      },
      propType: 'func',
    },
    {
      name: 'triggerSubMenuAction',
      title: {
        label: '触发方式',
        tip: '展开/关闭的触发行为',
      },
      propType: { type: 'oneOf', value: ['hover', 'click'] },
    },
    {
      name: 'openChange',
      title: { label: 'SubMenu 展开/关闭的回调', tip: '展开/关闭的回调' },
      propType: 'func',
    },
    {
      name: 'select',
      title: { label: '被选中时调用函数', tip: '被选中时调用函数' },
      propType: 'func',
    },
    {
      name: 'overflowedIndicator',
      title: { label: '折叠图标', tip: '自定义 Menu 折叠时的图标' },
      propType: 'node',
    },
  ],
  configure: {
    supports: {
      style:true,
      events: [
        {
          name: 'click',
          template:
            "click({item,key,keyPath,domEvent},${extParams}){\n// 点击 MenuItem 调用此函数\nconsole.log('click',item,key,keyPath,domEvent);}",
        },
        {
          name: 'deselect',
          template:
            "deselect({item,key,keyPath,selectedKeys,domEvent},${extParams}){\n// 取消选中时调用，仅在 multiple 生效\nconsole.log('deselect',item,key,keyPath,selectedKeys,domEvent);}",
        },
        {
          name: 'openChange',
          template:
            "openChange(openKeys,${extParams}){\n// SubMenu 展开/关闭的回调\nconsole.log('openChange',openKeys);}",
        },
        {
          name: 'select',
          template:
            "select({item,key,keyPath,selectedKeys,domEvent},${extParams}){\n// 被选中时调用\nconsole.log('select',item,key,keyPath,selectedKeys,domEvent);}",
        },
      ],
    }
  },
  snippets:[
    {
      title:"菜单",
      screenshot:"https://alifd.alicdn.com/fusion-cool/icons/icon-antd/menu-1.jpg",
      schema:{
        componentName:"AMenu",
        props:{
          mode:"inline",
          defaultSelectedKeys:["1"],
          defaultOpenKeys:["sub1"],
          theme:"dark",
          items:[
            {
              key:"item-i5wd",
              category:"AMenuItem",
              children:"菜单名"
            }
          ]
        }
      }
    }
  ]
}