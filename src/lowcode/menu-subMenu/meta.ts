import {uuid} from "../../utils/index";
import {itemsExtraProps} from "../menu/util";

export default {
  group: "ant-vue组件",
  componentName:"ASubMenu",
  title: "子菜单",
  category: "基础组件",
  npm: {
    destructuring: true,
    componentName: "ASubMenu"
  },
  props:[
    {
      name: "items",
      title: {label:"子菜单项",tip:"items|子菜单项"},
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
                    title: "子菜单名",
                    setter: "StringSetter",
                  },
                  {
                    name: "category",
                    title: {
                      label: "类型",
                      tip: "菜单项类型",
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
                key: `item-${uuid()}`,
                category: "AMenuItem",
                children: "子菜单名",
              };
            },
          },
        },
      },
      extraProps: itemsExtraProps,
    },
    {
      name: "danger",
      title: { label: "错误状态", tip: "danger|展示错误状态样式" },
      propType: "bool",
      defaultValue: true,
    },
    {
      name: "disabled",
      title: { label: "是否禁用", tip: "disabled|是否为禁用状态" },
      propType: "bool",
      defaultValue: false,
    },
    {
      name: "icon",
      title: { label: "菜单图标", tip: "icon|菜单图标" },
      propType: { type: "oneOfType", value: ["string", "node"] },
      defaultValue: false,
    },
    {
      name: "key",
      title: { label: "唯一标志", tip: "key|item 的唯一标志" },
      propType: "string",
    },
    {
      name: "title",
      title: {
        label: "悬浮标题",
        tip: "title|设置收缩时展示的悬浮标题",
      },
      propType: "string",
    },
  ],
  configure: {
    component:{
      isContainer:true,
      nestingRule:{parentWhitelist:["AMenu"]}
    },
    supports: {
      style:true
    }
  },
  snippets:[]
}
