export default {
  group: "ant-vue组件",
  componentName:"AListItem",
  title: "列表项",
  category: "数据展示",
  npm: {
    destructuring: true,
    componentName: "AListItem"
  },
  props:[
    {
      name: "actions",
      title: {
        label: "列表操作组",
        tip: "actions|列表操作组",
      },
      propType: { type: "arrayOf", value: "node" },
      setter: {
        componentName: "ArraySetter",
        props: {
          itemSetter: {
            componentName: "SlotSetter",
            title: "操作组插槽",
            initialValue: {
              type: "JSSlot",
              value: []
            }
          }
        }
      }
    },
    {
      name: "extra",
      title: {
        label: "额外内容",
        tip: "extra|额外内容",
      },
      propType: "node",
      setter: "SlotSetter"
    },
  ],
  configure: {
    component:{
      isContainer:true,
      nestingRule:{
        parentWhitelist:["AList"]
      }
    },
    supports: {
      style:true
    }
  }
}
