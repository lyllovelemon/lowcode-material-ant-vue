// @ts-ignore
import avatarImg from "./__screenshots__/tree-select-1.png?inline";
export default {
  group: "ant-vue组件",
  componentName:"ATreeSelect",
  title:"树型选择控件",
  category: "数据展示",
  npm: {
    destructuring: true,
    componentName: "ATreeSelect"
  },
  props:[
    {
      name: "treeData",
      title: { label: "数据源", tip: "treeData|数据源" },
      setter: "JsonSetter",
    },
    {
      name: "defaultValue",
      title: { label: "默认值", tip: "defaultValue|默认选中值" },
      propType: {
        type: "oneOfType",
        value: ["string", { type: "arrayOf", value: "string" }],
      },
    },
    {
      name: "value",
      title: { label: "当前值", tip: "value|当前值" },
      propType: {
        type: "oneOfType",
        value: ["string", { type: "arrayOf", value: "string" }],
      },
    },
    {
      name: "allowClear",
      title: { label: "支持清除", tip: "allowClear|是否允许清除" },
      propType: "bool",
      defaultValue: false,
      setter: "BoolSetter"
    },
    {
      name: "autoClearSearchValue",
      title: {
        label: "自动清空搜索",
        tip: "autoClearSearchValue|当多选模式下值被选择，自动清空搜索框",
      },
      propType: "bool",
      defaultValue: true,
      setter: "BoolSetter"
    },
    {
      name: "bordered",
      title: { label: "显示边框", tip: "bordered|是否显示边框" },
      propType: "bool",
      defaultValue: true,
      setter: "BoolSetter"
    },
    {
      name: "disabled",
      title: { label: "是否禁用", tip: "disabled|是否为禁用状态" },
      propType: "bool",
      defaultValue: false,
      setter: "BoolSetter"
    },
    {
      name: "dropdownMatchSelectWidth",
      title: {
        label: "下拉列表同款",
        tip: "dropdownMatchSelectWidth|下拉菜单和选择器同宽",
      },
      propType: "bool",
      setter: "BoolSetter"
    },
    {
      name: "filterTreeNode",
      title: {
        label: "筛选节点",
        tip: "filterTreeNode|是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值",
      },
      propType: {
        type: "oneOfType",
        value: ["bool", "func"]
      },
    },
    {
      name: "labelInValue",
      title: {
        label: "值包含标签",
        tip:
          "labelInValue|是否把每个选项的 label 包装到 value 中，会把 value 类型从 `string` 变为 {value: string, label: ReactNode, halfChecked(treeCheckStrictly 时有效): string[] } 的格式",
      },
      propType: "bool",
      defaultValue: true,
      setter: "BoolSetter"
    },
    {
      name: "listHeight",
      title: { label: "设置弹窗滚动高度", tip: "listHeight|设置弹窗滚动高度" },
      propType: "number",
      setter: "NumberSetter"
    },
    {
      name: "loadData",
      title: { label: "异步加载数据", tip: "loadData|异步加载数据" },
      propType: "func",
    },
    {
      name: "maxTagCount",
      title: { label: "最多显示多少个 tag", tip: "maxTagCount|最多显示多少个 tag" },
      propType: "number",
      setter: "NumberSetter"
    },
    {
      name: "maxTagPlaceholder",
      title: { label: "隐藏 tag 时显示的内容", tip: "maxTagPlaceholder|隐藏 tag 时显示的内容" },
      propType: { type: "oneOfType", value: ["node", "func"] },
    },
    {
      name: "multiple",
      title: {
        label: "支持多选",
        tip: "multiple|支持多选（当设置 treeCheckable 时自动变为 true）",
      },
      propType: "bool",
      defaultValue: false,
      setter: "BoolSetter"
    },
    {
      name: "placeholder",
      title: { label: "选择框默认文字", tip: "placeholder|选择框默认文字" },
      propType: "string",
      setter: "StringSetter"
    },
    {
      name: "showCheckedStrategy",
      title: {
        label: "定义选中项回填的方式",
        tip:
          "showCheckedStrategy|定义选中项回填的方式。`SHOW_ALL`: 显示所有选中节点(包括父节点)。`SHOW_PARENT`: 只显示父节点(当父节点下所有子节点都选中时)。 默认只显示子节点",
      },
      propType: {
        type: "oneOf",
        value: ["SHOW_ALL", "SHOW_PARENT", "SHOW_CHILD"],
      },
    },
    {
      name: "showSearch",
      title: { label: "是否支持搜索框", tip: "showSearch|是否支持搜索框" },
      propType: "bool",
      setter: "BoolSetter"
    },
    {
      name: "size",
      title: { label: "尺寸", tip: "size|选择框大小" },
      propType: { type: "oneOf", value: ["large", "middle", "small"] },
      setter: {
        componentName: "SelectSetter",
        props: {
          options: [
            {
              title: "大",
              value: "large",
            },
            {
              title: "中",
              value: "middle",
            },
            {
              title: "小",
              value: "small",
            },
          ],
        },
      },
      defaultValue: "middle",
    },
    {
      name: "showArrow",
      title: {
        label: "下拉图标",
        tip: "showArrow|是否显示下拉图标，单选模式下默认 `true`",
      },
      propType: "bool",
      setter: "BoolSetter"
    },
    {
      name: "treeCheckable",
      title: { label: "显示勾选框", tip: "treeCheckable|显示勾选框" },
      propType: "bool",
      defaultValue: false,
      setter: "BoolSetter"
    },
    {
      name: "treeDefaultExpandAll",
      title: { label: "默认展开所有树节点", tip: "treeDefaultExpandAll|默认展开所有树节点" },
      propType: "bool",
      defaultValue: false,
      setter: "BoolSetter"
    },
    {
      name: "treeDefaultExpandedKeys",
      title: { label: "默认展开的树节点", tip: "treeDefaultExpandedKeys|默认展开的树节点" },
      propType: { type: "arrayOf", value: "string" },
      setter: {
        componentName: "ArraySetter",
        props: {
          itemSetter: {
            componentName: "StringSetter",
          }
        }
      }
    },
    {
      name: "treeExpandedKeys",
      title: { label: "设置展开的树节点", tip: "treeExpandedKeys|设置展开的树节点" },
      propType: { type: "arrayOf", value: "string" },
      setter: {
        componentName: "ArraySetter",
        props: {
          itemSetter: {
            componentName: "StringSetter",
          }
        }
      }
    },
    {
      name: "virtual",
      title: {
        label: "设置 false 时关闭虚拟滚动",
        tip: "virtual|设置 false 时关闭虚拟滚动",
      },
      propType: "bool",
      defaultValue: true,
      setter: "BoolSetter"
    },
  ],
  configure: {
    supports: {
      style:true
    },
    events:[
      {
        name: "onChange",
        template:
          "onChange(value,label,extra,${extParams}){\n// 选中树节点时调用此函数\nconsole.log(\"onChange\",value,label,extra);}",
      },
      {
        name: "onSearch",
        template:
          "onSearch(value,${extParams}){\n// 文本框值变化时回调\nconsole.log(\"onSearch\",value);}",
      },
      {
        name: "onSelect",
        template:
          "onSelect(value,node,extra,${extParams}){\n// 被选中时调用\nconsole.log(\"onSelect\",value,node,extra);}",
      },
      {
        name: "onTreeExpand",
        template:
          "onTreeExpand(expandedKeys,${extParams}){\n// 展示节点时调用\nconsole.log(\"onTreeExpand\",expandedKeys);}",
      },
    ]
  },
  snippets:[
    {
      title:"树型选择控件",
      screenshot:avatarImg,
      schema:{
        componentName:"ATreeSelect",
        props:{
          treeData: [
            {
              title: "parent 0",
              value: "0-0",
              children: [
                { title: "leaf 0-0", value: "0-0-0", isLeaf: true },
                { title: "leaf 0-1", value: "0-0-1", isLeaf: true },
              ],
            },
            {
              title: "parent 1",
              value: "0-1",
              children: [
                { title: "leaf 1-0", value: "0-1-0", isLeaf: true },
                { title: "leaf 1-1", value: "0-1-1", isLeaf: true },
              ],
            },
          ],
          treeDefaultExpandAll: true,
          placeholder: "请选择",
          style: {
            width: "300px",
          }
        }
      }
    }
  ]
}
