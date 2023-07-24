/* eslint-disable */
// @ts-ignore
import avatarImg from "./__screenshots__/input-text-area-1.png?inline";
export default {
  group: "ant-vue组件",
  componentName: "AInputTextArea",
  title: "长文本(文本框)",
  category: "表单",
  npm: {
    destructuring: true,
    componentName: "AInputTextArea"
  },
  props: [
    {
      name: "defaultValue",
      title: { label: "默认值", tip: "defaultValue | 默认内容" },
      propType: "string",
      setter: "TextAreaSetter",
    },
    {
      name: "value",
      title: { label: "当前值", tip: "value(v-model) |当前值" },
      propType: "string",
      setter: "TextAreaSetter",
    },
    {
      name: "bordered",
      title: { label: "显示边框", tip: "bordered | 是否有边框" },
      propType: "bool",
      defaultValue: true,
      setter: "BoolSetter"
    },
    {
      name: "disabled",
      title: { label: "是否禁用", tip: "disabled | 是否为禁用状态" },
      propType: "bool",
      defaultValue: false,
      setter: "BoolSetter"
    },
    {
      name: "placeholder",
      title: { label: "占位提示", tip: "placeholder | 占位提示" },
      propType: "string",
      defaultValue: "请输入",
      setter: "StringSetter"
    },
    {
      name: "showCount",
      title: { label: "展示字数", tip: "showCount | 是否展示字数" },
      propType: "bool",
      defaultValue: false,
      setter: "BoolSetter"
    },
    {
      name: "id",
      title: { label: "输入框ID", tip: "id | 输入框的ID" },
      propType: "string",
      setter: "StringSetter"
    },
    {
      name: "maxLength",
      title: { label: "最大长度", tip: "maxLength | 最大长度" },
      propType: "number",
      setter: "NumberSetter"
    },
    {
      name: "size",
      title: { label: "控件大小", tip: "size | 控件大小" },
      propType: { type: "oneOf", value: ["large", "middle", "small"] },
      setter: {
        componentName: "RadioGroupSetter",
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
      name: "autoSize",
      title: { label: "高度自适应设置", tip: "autoSize | 高度自适应设置" },
      propType: {
        type: "oneOfType",
        value: [
          "bool",
          {
            type: "shape",
            value: [
              {
                name: "minRows",
                title: "最小行数",
                setter: "NumberSetter",
                defaultValue: 3,
              },
              {
                name: "maxRows",
                title: "最大行数",
                setter: "NumberSetter",
                defaultValue: 3,
              },
            ],
          },
        ],
      },
      defaultValue: false,
    },
    {
      name: "onChange",
      title: { label: "输入框内容变化时的回调", tip: "onChange | 输入框内容变化时的回调" },
      propType: "func",
    },
    {
      name: "onPressEnter",
      title: { label: "按下回车的回调", tip: "onPressEnter | 按下回车的回调" },
      propType: "func",
    },
    {
      name: "onResize",
      title: { label: "resize 回调", tip: "onResize | resize 回调" },
      propType: "func",
    },
    {
      name: "onFocus",
      title: { label: "获取焦点回调", tip: "onResize | 获取焦点回调" },
      propType: "func",
    },
    {
      name: "onKeyDown",
      title: { label: "按键按下时的回调", tip: "onKeyDown | 按键按下时的回调" },
      propType: "func",
    },
    {
      name: "onKeyPress",
      title: { label: "按键按下后的回调", tip: "onKeyPress | 按键按下之后释放之前的回调" },
      propType: "func",
    },
    {
      name: "onKeyUp",
      title: { label: "按键释放回调", tip: "onKeyUp | 按键释放之后的回调" },
      propType: "func",
    },
    {
      name: "onBlur",
      title: { label: "失去焦点回调", tip: "onBlur | 失去焦点回调" },
      propType: "func",
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: "onChange",
          template:
            "onChange(event,${extParams}){\n// 输入框内容变化时的回调\nconsole.log(\"onChange\",event);}",
        },
        {
          name: "onPressEnter",
          template:
            "onPressEnter(event,${extParams}){\n// 按下回车的回调\nconsole.log(\"onPressEnter\",event);}",
        },
        {
          name: "onResize",
          template:
            "onResize({width,height},${extParams}){\n// resize 回调\nconsole.log(\"onResize\",width,height);}",
        },
        {
          name: "onFocus",
          template: "onFocus(event,${extParams}){\n// 获取焦点回调\nconsole.log(\"onFocus\",event);}",
        },
        {
          name: "onKeyDown",
          template:
            "onKeyDown(event,${extParams}){\n// 按键按下时的回调\nconsole.log(\"onKeyDown\",event);}",
        },
        {
          name: "onKeyPress",
          template:
            "onKeyPress(event,${extParams}){\n// 按键按下后的回调\nconsole.log(\"onKeyPress\",event);}",
        },
        {
          name: "onKeyUp",
          template: "onKeyUp(event,${extParams}){\n// 按键释放回调\nconsole.log(\"onKeyUp\",event);}",
        },
        {
          name: "onBlur",
          template: "onBlur(event,${extParams}){\n// 按键释放回调\nconsole.log(\"onBlur\",event);}",
        },
      ]
    }
  },
  snippets: [
    {
      title: "长文本(文本框)",
      screenshot: avatarImg,
      schema: {
        componentName: "AInputTextArea",
        props: {
          style:{
            backgroundColor:"#ddf4ff",
            border:"1px solid #ddf4ff",
            fontSize:"12px",
            borderRadius:"2px"
          },
          autoSize: {
            minRows: 3,
            maxRows: 3,
          },
          placeholder: "请输入"
        }
      }
    }
  ]
};
