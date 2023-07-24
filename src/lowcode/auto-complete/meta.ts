// @ts-ignore
import avatarImg from "./__screenshots__/auto-complete-1.png?inline";
export default{
  group: "ant-vue组件",
  componentName:"AAutoComplete",
  title:"自动补全输入框",
  category:"表单",
  npm:{
    destructuring:true,
    componentName:"AAutoComplete"
  },
  props:[
    {
      name: "defaultValue",
      title: { label: "默认值", tip: "defaultValue | 默认选中值" },
      propType: "string",
    },
    {
      name: "v-model:value",
      title: { label: "当前值", tip: "v-model:value | 当前选中值" },
      propType: "string",
    },
    {
      name: "allowClear",
      title: { label: "支持清除", tip: "allowClear|是否允许清除" },
      propType: "bool",
      defaultValue: false,
    },
    {
      name: "autoFocus",
      title: { label: "自动聚焦", tip: "autoFocus|自动获取焦点" },
      propType: "bool",
      defaultValue: false,
    },
    {
      name: "options",
      title: { label: "选项内容", tip: "options|选项列表" },
      setter: {
        componentName: "ArraySetter",
        props: {
          itemSetter: {
            componentName: "ObjectSetter",
            props: {
              config: {
                items: [
                  {
                    name: "label",
                    title: "选项名",
                    setter: "StringSetter",
                  },
                  {
                    name: "value",
                    title: "选项值",
                    setter: "StringSetter",
                  },
                ],
              },
            },
            initialValue: () => {
              return {
                label: "选项名",
                value: "请选择",
              };
            },
          },
        },
      },
    },
    {
      name: "backfill",
      title: {
        label: "键盘选中回填",
        tip: "backfill|使用键盘选择选项的时候把选中项回填到输入框中",
      },
      propType: "bool",
      defaultValue: false,
    },
    {
      name: "defaultActiveFirstOption",
      title: { label: "默认高亮首个选项", tip: "defaultActiveFirstOption|是否默认高亮第一个选项" },
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
      name: "filterOption",
      title: { label: "可选项筛选", tip: "filterOption|是否根据输入项进行筛选" },
      propType: "bool",
    },
    {
      name: "placeholder",
      title: { label: "输入框提示", tip: "placeholder|输入框提示" },
      propType: "string",
    },
    {
      name:"default",
      title:{label:"自定义输入框",tip:"default|自定义输入框 "},
      propType: "node",
      setter: {
        componentName: "SlotSetter",
        initialValue: {
          type: "JSSlot",
          value: []
        }
      }
    },
    {
      name: "defaultOpen",
      title: { label: "默认展开菜单", tip: "defaultOpen|是否默认展开下拉菜单" },
      propType: "bool",
    },
    {
      name:"onBlur",
      title:{label:"失焦回调",tip:"onBlur|失去焦点时的回调"},
      propType:"func"
    },
    {
      name:"onChange",
      title:{label:"选中回调",tip:"onChange|选中 option，或 input 的 value 变化回调"},
      propType:"func"
    },
    {
      name:"onDropdownVisibleChange",
      title:{label:"下拉菜单回调",tip:"onDropdownVisibleChange|下拉菜单回调"},
      propType:"func"
    },
    {
      name:"onFocus",
      title:{label:"聚焦回调",tip:"onFocus | 聚焦回调"},
      propType:"func"
    },
    {
      name:"onSearch",
      title:{label:"搜索补全回调",tip:"onSearch|搜索补全回调"},
      propType:"func"
    },
    {
      name:"onSelect",
      title:{label:"被选中时调用",tip:"onSelect | 被选中时调用"},
      propType:"func"
    },
    {
      name: "notFoundContent",
      title: { label: "无数据展示", tip: "notFoundContent|当下拉列表为空时显示的内容" },
      propType: "string",
    },
  ],
  configure:{
    props:[
      {
        name: "defaultValue",
        title: {
          label: {
            type: "i18n",
            zh_CN: "默认值",
            en_US: "Default Value",
          },
          tip: {
            type: "i18n",
            zh_CN: "属性: defaultValue | 说明: 默认值",
            en_US: "prop: defaultValue | description: defaultValue",
          },
        },
        setter: "StringSetter",
        supportVariable: true,
      },
      {
        name: "value",
        title: {
          label: {
            type: "i18n",
            zh_CN: "当前值",
            en_US: "Value",
          },
          tip: {
            type: "i18n",
            zh_CN: "属性: Value | 说明: 当前值",
            en_US: "prop: Value | description: Value",
          },
        },
        setter: "StringSetter",
        supportVariable: true,
      },
      {
        name: "allowClear",
        title: {
          label: {
            type: "i18n",
            zh_CN: "支持清除",
            en_US: "Allow Clear",
          },
          tip: {
            type: "i18n",
            zh_CN: "属性: allowClear | 说明：是否允许清除",
            en_US: "prop: allowClear | description: Allow Clear",
          }
        },
        setter: "BoolSetter",
        supportVariable: true,
      },
      {
        name: "options",
        title: {
          label: {
            type: "i18n",
            zh_CN: "选项内容",
            en_US: "Options",
          },
          tip: {
            type: "i18n",
            zh_CN: "属性: options | 说明：选项列表",
            en_US: "prop: options | description: Options",
          }
        },
        setter: {
          componentName: "ArraySetter",
          props: {
            itemSetter: {
              componentName: "ObjectSetter",
              props: {
                config: {
                  items: [
                    {
                      name: "label",
                      title: {label:"选项名",tip:"label|选项名"},
                      setter: "StringSetter",
                      isRequired: true
                    },
                    {
                      name: "value",
                      title: {label:"选项值",tip:"value|选项值"},
                      setter: "StringSetter",
                      isRequired: true
                    },
                  ],
                },
              },
              initialValue: () => {
                return {
                  label: "选项名",
                  value: "请选择",
                };
              },
            },
          },
        },
      },
      {
        name: "autoFocus",
        title: {
          label: {
            type: "i18n",
            zh_CN: "自动聚焦",
            en_US: "Auto Focus",
          },
          tip: {
            type: "i18n",
            zh_CN: "属性: autoFocus | 说明：自动获取焦点",
            en_US: "prop: autoFocus | description: Auto Focus",
          }
        },
        setter: "BoolSetter",
        supportVariable: true,
      },
      {
        name: "backfill",
        title: {
          label: {
            type: "i18n",
            zh_CN: "键盘选中回填",
            en_US: "Backfill",
          },
          tip: {
            type: "i18n",
            zh_CN: "属性: backfill | 说明：使用键盘选择选项的时候把选中项回填到输入框中",
            en_US: "prop: backfill | description: When using the keyboard to onSelect options, backfill the onSelected items into the input box",
          }
        },
        setter: "BoolSetter",
        supportVariable: true,
      },
      {
        name: "defaultActiveFirstOption",
        title: {
          label: {
            type: "i18n",
            zh_CN: "默认高亮首个选项",
            en_US: "Default Active First Option",
          },
          tip: {
            type: "i18n",
            zh_CN: "属性: defaultActiveFirstOption | 说明：是否默认高亮第一个选项",
            en_US: "prop: defaultActiveFirstOption | description: Whether to highlight the first option by default",
          }
        },
        setter: "BoolSetter",
        defaultValue: true,
        supportVariable: true,
      },
      {
        name: "disabled",
        title: {
          label: {
            type: "i18n",
            zh_CN: "是否禁用",
            en_US: "Disabled",
          },
          tip: {
            type: "i18n",
            zh_CN: "属性: disabled | 说明：是否为禁用状态",
            en_US: "prop: disabled | description: Disable",
          }
        },
        setter: "BoolSetter",
        supportVariable: true,
      },
      {
        name: "filterOption",
        title: {
          label: {
            type: "i18n",
            zh_CN: "可选项筛选",
            en_US: "Filter Option",
          },
          tip: {
            type: "i18n",
            zh_CN: "属性: filterOption | 说明：是否根据输入项进行筛选",
            en_US: "prop: filterOption | description: Filter based on input",
          }
        },
        setter: "BoolSetter",
        supportVariable: true,
      },
      {
        name: "placeholder",
        title: {
          label: {
            type: "i18n",
            zh_CN: "输入框提示",
            en_US: "Placeholder",
          },
          tip: {
            type: "i18n",
            zh_CN: "属性: placeholder | 说明: 输入框提示",
            en_US: "prop: placeholder | description: Placeholder",
          },
        },
        setter: "StringSetter",
        supportVariable: true,
      },
      {
        name: "defaultOpen",
        propType: "bool",
        title: {
          label: {
            type: "i18n",
            zh_CN: "默认展开菜单",
            en_US: "Default Open",
          },
          tip: {
            type: "i18n",
            zh_CN: "属性: defaultOpen | 说明：是否默认展开下拉菜单",
            en_US: "prop: defaultOpen | description: Expand drop-down menu by default",
          }
        },
        setter: "BoolSetter",
        supportVariable: true,
      },
      {
        name: "notFoundContent",
        title: {
          label: {
            type: "i18n",
            zh_CN: "无数据展示",
            en_US: "Not Found Content",
          },
          tip: {
            type: "i18n",
            zh_CN: "属性: notFoundContent | 说明: 当下拉列表为空时显示的内容",
            en_US: "prop: notFoundContent | description: Content displayed when the drop-down list is empty",
          },
        },
        setter: "StringSetter",
        supportVariable: true,
      },
    ],
    supports:{
      style:true,
      loop:false,
      events:[
        { name:"onBlur",template: "onBlur(${extParams}){\n// 失去焦点时的回调\nconsole.log(\"onBlur\");}",},
        { name:"onChange",template:"onChange(value){\n//选中 option，或 input 的 value 变化时，调用此函数\nconsole.log(\"onChange\",value);}"},
        { name:"onDropdownVisibleChange", template:"onDropdownVisibleChange(open){\nconsole.log(\"onDropdownVisibleChange\",open);}" },
        { name:"onFocus",template:"onFocus(${extParams}){\n// 获得焦点时的回调\nconsole.log(\"onFocus\");}"},
        { name:"onSearch",template:"onSearch(value){\n// 搜索补全项的时候调用\nconsole.log(\"onSearch\",value);}"},
        { name:"onSelect",template:"onSelect(value,option){\n//被选中时调用，参数为选中项的 value 值\nconsole.log(\"onSelect\",value,option);}"}
        ]
    }
  },
  snippets:[
    {
      title:"自动补全输入框",
      screenshot: avatarImg,
      schema:{
        componentName:"AAutoComplete",
        props:{
          placeholder: "请输入",
          options: [
            {
              label: "测试1",
              value: "aaa",
            },
            {
              label: "测试2",
              value: "bbb",
            },
          ],
          filterOption: true,
          style: {
            width: "200px",
          },
        }
      }
    }
  ]
}
