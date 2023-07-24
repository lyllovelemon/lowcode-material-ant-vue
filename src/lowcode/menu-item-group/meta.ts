import {uuid} from "../../utils/index";
import {itemsExtraProps} from "../menu/util";

export default {
  group: "ant-vue组件",
  componentName:"AMenuItemGroup",
  title: "菜单组",
  category: "基础组件",
  npm: {
    destructuring: true,
    componentName: "AMenuItemGroup"
  },
  props:[
    {
      name: "items",
      title: {label:"菜单组项",tip:"items|菜单组项"},
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
                    title: "children|菜单名",
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
      name: "children",
      title: { label: "分组的菜单项", tip: "children|分组的菜单项" },
      propType: { type: "oneOfType", value: ["string", "node"] },
    },
    {
      name: "title",
      title: { label: "分组标题", tip: "title|分组标题" },
      propType: { type: "oneOfType", value: ["string", "node"] },
    },
  ],
  configure: {
    component: {
      isContainer: true,
      nestingRule: { parentWhitelist: ["AMenu", "ASubMenu"] },
    },
    supports: {
      style:true
    }
  },
  snippets:[]
}
