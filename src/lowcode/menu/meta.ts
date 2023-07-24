import {uuid} from "../../utils/index";
import {itemsExtraProps} from "./util";
// @ts-ignore
import avatarImg from "./__screenshots__/menu-1.jpg?inline"
export default {
  group: "ant-vue组件",
  componentName:"AMenu",
  title: "菜单",
  category: "导航",
  npm: {
    destructuring: true,
    componentName: "AMenu"
  },
  props:[
    {
      name: "items",
      title: {label:"菜单项",tip:"items | 菜单项"},
      setter: {
        componentName: "ArraySetter",
        props: {
          itemSetter: {
            componentName: "ObjectSetter",
            props: {
              config: {
                items: [
                  {
                    name: "key",
                    title: "key",
                    setter: "StringSetter",
                    initialValue: (val: any) => val || uuid(),
                  },
                  {
                    name: "children",
                    title: {label:"菜单名称",tip:"children|菜单名称"},
                    setter: "StringSetter",
                  },
                  {
                    name: "category",
                    title: {
                      label: "类型",
                      tip: "category|菜单项类型",
                    },
                    propType: {
                      type: "oneOf",
                      value: ["AMenuItem", "ASubMenu", "AMenuItemGroup"],
                    },
                    setter: [
                      {
                        componentName: "RadioGroupSetter",
                        props: {
                          options: [
                            {
                              title: "Item",
                              value: "AMenuItem",
                            },
                            {
                              title: "SubMenu",
                              value: "ASubMenu",
                            },
                            {
                              title: "ItemGroup",
                              value: "AMenuItemGroup",
                            },
                          ],
                        },
                      },
                      "VariableSetter",
                    ],
                  },
                ],
              },
            },
            initialValue: () => {
              return {
                key: "item-" + uuid(),
                category: "AMenuItem",
                children: "菜单名",
              };
            },
          },
        },
      },
      extraProps: itemsExtraProps,
    },
    {
      name: "defaultOpenKeys",
      title: {
        label: "初始展开菜单项",
        tip: "defaultOpenKeys | 初始展开的 SubMenu 菜单项 key 数组",
      },
      propType: { type: "arrayOf", value: "string" },
    },
    {
      name: "defaultSelectedKeys",
      title: { label: "初始选中的菜单项", tip: "defaultSelectedKeys | 初始选中的菜单项 key 数组" },
      propType: { type: "arrayOf", value: "string" },
    },
    {
      name: "selectedKeys",
      title: { label: "当前选中项", tip: "selectedKeys | 当前选中的菜单项 key 数组" },
      propType: { type: "arrayOf", value: "string" },
    },
    {
      name: "forceSubMenuRender",
      title: {
        label: "子菜单预渲染",
        tip: "forceSubMenuRender | 在子菜单展示之前就渲染进 DOM",
      },
      propType: "bool",
      defaultValue: false,
    },
    {
      name: "inlineCollapsed",
      title: { label: "是否收起", tip: "inlineCollapsed | inline 时菜单是否收起状态" },
      propType: "bool",
    },
    {
      name: "inlineIndent",
      title: { label: "缩进宽度", tip: "inlineIndent | inline 模式的菜单缩进宽度" },
      propType: "number",
    },
    {
      name: "mode",
      title: {
        label: "菜单类型",
        tip: "mode | 菜单类型，现在支持垂直、水平、和内嵌模式三种",
      },
      propType: { type: "oneOf", value: ["vertical", "horizontal", "inline"] },
    },
    {
      name: "multiple",
      title: { label: "是否允许多选", tip: "multiple | 是否允许多选" },
      propType: "bool",
      defaultValue: false,
    },
    {
      name: "openKeys",
      title: {
        label: "当前展开的菜单项",
        tip: "openKeys | 当前展开的 SubMenu 菜单项 key 数组",
      },
      propType: { type: "arrayOf", value: "string" },
    },
    {
      name: "selectable",
      title: { label: "是否允许选中", tip: "selectable | 是否允许选中" },
      propType: "bool",
      defaultValue: true,
    },
    {
      name: "style",
      title: { label: "根节点样式", tip: "style | 根节点样式" },
      propType: "object",
    },
    {
      name: "subMenuCloseDelay",
      title: {
        label: "关闭延时",
        tip: "subMenuCloseDelay | 用户鼠标离开子菜单后关闭延时，单位：秒",
      },
      propType: "number",
    },
    {
      name: "subMenuOpenDelay",
      title: {
        label: "开启延时",
        tip: "subMenuOpenDelay | 用户鼠标进入子菜单后开启延时，单位：秒",
      },
      propType: "number",
    },
    {
      name: "theme",
      title: { label: "主题颜色", tip: "theme | 主题颜色" },
      propType: { type: "oneOf", value: ["light", "dark"] },
    },
    {
      name: "onClick",
      title: { label: "点击 MenuItem 调用函数", tip: "onClick | 点击 MenuItem 调用函数" },
      propType: "func",
    },
    {
      name: "onDeselect",
      title: {
        label: "取消选中时调用函数",
        tip: "onDeselect | 取消选中时调用，仅在 multiple 生效",
      },
      propType: "func",
    },
    {
      name: "triggerSubMenuAction",
      title: {
        label: "触发方式",
        tip: "triggerSubMenuAction | 展开/关闭的触发行为",
      },
      propType: { type: "oneOf", value: ["hover", "click"] },
    },
    {
      name: "onOpenChange",
      title: { label: "SubMenu 展开/关闭的回调", tip: "onOpenChange | 展开/关闭的回调" },
      propType: "func",
    },
    {
      name: "onSelect",
      title: { label: "被选中时调用函数", tip: "onSelect | 被选中时调用函数" },
      propType: "func",
    },
    {
      name: "overflowedIndicator",
      title: { label: "折叠图标", tip: "overflowedIndicator | 自定义 Menu 折叠时的图标" },
      propType: "node",
    },
  ],
  configure: {
    supports: {
      style:true,
      events: [
        {
          name: "onClick",
          template:
            "onClick({item,key,keyPath,domEvent},${extParams}){\n// 点击 MenuItem 调用此函数\nconsole.log(\"onClick\",item,key,keyPath,domEvent);}",
        },
        {
          name: "onDeselect",
          template:
            "onDeselect({item,key,keyPath,selectedKeys,domEvent},${extParams}){\n// 取消选中时调用，仅在 multiple 生效\nconsole.log(\"onDeselect\",item,key,keyPath,selectedKeys,domEvent);}",
        },
        {
          name: "onOpenChange",
          template:
            "onOpenChange(openKeys,${extParams}){\n// SubMenu 展开/关闭的回调\nconsole.log(\"onOpenChange\",openKeys);}",
        },
        {
          name: "onSelect",
          template:
            "onSelect({item,key,keyPath,selectedKeys,domEvent},${extParams}){\n// 被选中时调用\nconsole.log(\"onSelect\",item,key,keyPath,selectedKeys,domEvent);}",
        },
      ],
    }
  },
  snippets:[
    {
      title:"水平菜单",
      screenshot:avatarImg,
      schema:{
        componentName:"AMenu",
        props:{
          style:{
            height:"200px",
            lineHeight:"200px",
            paddingLeft:"10px"
          },
          mode:"inline",
          defaultSelectedKeys:["sub1"],
          defaultOpenKeys:["sub1"],
          theme:"light",
          items:[
            {
              key:"sub1",
              category:"AMenuItem",
              children:"菜单名1"
            },
            {
              key:"sub2",
              category:"AMenuItem",
              children:"菜单名2"
            },
            {
              key:"sub3",
              category:"AMenuItem",
              children:"菜单名3"
            }
          ],
          selectedKeys:["sub1"],
          triggerSubMenuAction:"click"
        }
      }
    },
    {
      title:"垂直菜单",
      screenshot:avatarImg,
      schema:{
        componentName:"AMenu",
        props:{
          style:{
            width:"160px",
            height:"100%",
            lineHeight:"100%"
          },
          mode:"vertical",
          defaultSelectedKeys:["sub1"],
          defaultOpenKeys:["sub1"],
          theme:"light",
          items:[
            {
              key:"sub1",
              category:"AMenuItem",
              children:"菜单名1"
            },
            {
              key:"sub2",
              category:"AMenuItem",
              children:"菜单名2"
            },
            {
              key:"sub3",
              category:"AMenuItem",
              children:"菜单名3"
            }
          ],
          selectedKeys:["sub1"],
          triggerSubMenuAction:"click"
        }
      }
    }
  ]
}
