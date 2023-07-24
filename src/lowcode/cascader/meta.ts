/* eslint-disable */
// @ts-ignore
import avatarImg from "./__screenshots__/cascader-1.png?inline";
export default{
  group: "ant-vue组件",
  componentName:"ACascader",
  title:"级联选择框",
  category:"表单",
  npm:{
    destructuring:true,
    componentName:"ACascader"
  },
  props:[
    {
      name: "defaultValue",
      title: { label: "默认的选中项", tip: "defaultValue|默认的选中项" },
      propType: {
        type: "arrayOf",
        value: { type: "oneOfType", value: ["string", "number"] },
      },
    },
    {
      name: "value",
      title: { label: "当前选中项", tip: "value|当前选中项" },
      propType: {
        type: "arrayOf",
        value: { type: "oneOfType", value: ["string", "number"] },
      },
    },
    {
      name: "options",
      title: { label: "选项数据", tip: "options|可选项数据源" },
      setter: "JsonSetter",
    },
    {
      name: "allowClear",
      title: { label: "支持清除", tip: "allowClear|是否允许清除" },
      propType: "bool",
      defaultValue: true,
      setter: "BoolSetter"
    },
    {
      name: "autoFocus",
      title: { label: "自动聚焦", tip: "autoFocus|自动获取焦点" },
      propType: "bool",
      defaultValue: false,
      setter: "BoolSetter"
    },
    {
      name: "bordered",
      title: { label: "显示边框", tip: "bordered|是否有边框" },
      propType: "bool",
      defaultValue: true,
      setter: "BoolSetter"
    },
    {
      name: "changeOnSelect",
      title: {
        label: "点选触发",
        tip: "changeOnSelect|点选每级菜单选项值都会触发onChange",
      },
      propType: "bool",
      defaultValue: false,
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
      name: "expandTrigger",
      title: { label: "菜单触发方式", tip: "expandTrigger|触发次级菜单的展开的方式" },
      propType: { type: "oneOf", value: ["click", "hover"] },
    },
    {
      name: "notFoundContent",
      title: { label: "无数据展示", tip: "notFoundContent|无数据" },
      propType: "string",
      setter: "StringSetter"
    },
    {
      name: "placeholder",
      title: { label: "输入框占位文本", tip: "placeholder|输入框占位文本" },
      propType: "string",
      setter: "StringSetter"
    },
    {
      name: "placement",
      title: { label: "浮层预设位置", tip: "placement|浮层预设位置" },
      propType: {
        type: "oneOf",
        value: ["bottomLeft", "bottomRight", "topLeft", "topRight"],
      },
      defaultValue:"bottomLeft"
    },
    {
      name:"searchValue",
      title:{label:"设置搜索的值，需要与 showSearch 配合使用",tip:"searchValue"},
      propType:"string",
      setter:"StringSetter"
    },
    {
      name:"showSearch",
      title:{ label: "支持搜索", tip: "showSearch|在选择框中显示搜索框"},
      propType:"bool",
      defaultValue:false,
      setter:"BoolSetter"
    },
    {
      name: "size",
      title: { label: "尺寸", tip: "size|输入框大小" },
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
      name:"multiple",
      title:{label:"多选",tip:"multiple|是否支持多选"},
      propType:"bool",
      setter:"BoolSetter",
      defaultValue:false
    },
    {
      name:"tagRender",
      title:{label:"自定义 tag 内容，多选时生效",tip:"tagRender"},
      condition:(target:any)=>{
        return target.getProps().getPropValue("multiple") === true
      },
      setter:[
        {
          componentName: "SlotSetter",
          title: "展开行插槽",
          initialValue: {
            type: "JSSlot",
            params: ["value", "label"],
            value: [],
          },
        },
      ]
    },
    {
      name:"popupVisible",
      title:{label:"控制浮层显隐",tip:"popupVisible"},
      propType:"bool",
      setter:"BoolSetter",
      supportVariable:true
    },
    {
      name:"onChange",
      title:{label:"选择完成回调",tip:"onChange |选择完成回调 "},
      propType:"func"
    },
    {
      name:"onPopupVisibleChange",
      title:{label:"显隐回调",tip:"onPopupVisibleChange|显隐浮层的回调"},
      propType:"func"
    },
    {
      name:"onSearch",
      title:{label:"onSearch",tip:"onSearch|监听搜索，返回输入的值"},
      propType:"func"
    }
  ],
  configure:{
    supports:{
      style:true,
      events:[
        {
          name:"onChange",
          template:"onChange(value,selectedOptions,${extParams}){\n//选择完成后回调\nconsole.log(\"onChange\",value,selectedOptions);}"
        },
        {
          name:"onPopupVisibleChange",
          template:"onPopupVisibleChange(value){\n//显示/隐藏浮层的回调\nconsole.log(\"onPopupVisibleChange\",value);}"
        },
        {
          name:"onSearch",
          template:"onSearch(value){\n//监听搜索，返回输入的值\nconsole.log(\"onSearch\",value);}"
        }
      ]
    }
  },
  snippets: {
    title: "级联选择框",
    screenshot: avatarImg,
    schema:{
      componentName:"ACascader",
      props:{
        options:[
          {
            value: "zhejiang",
            label: "Zhejiang",
            children: [
              {
                value: "hangzhou",
                label: "Hangzhou",
                children: [
                  {
                    value: "xihu",
                    label: "West Lake",
                  },
                ],
              },
            ],
          },
          {
            value: "jiangsu",
            label: "Jiangsu",
            children: [
              {
                value: "nanjing",
                label: "Nanjing",
                children: [
                  {
                    value: "zhonghuamen",
                    label: "Zhong Hua Men",
                  },
                ],
              },
            ],
          },
        ],
        placeholder:"请选择"
      }
    }
  }
}
