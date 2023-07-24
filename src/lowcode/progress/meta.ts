// @ts-ignore
import avatarImg from "./__screenshots__/progress-1.png?inline";
// @ts-ignore
import Progress2 from "./__screenshots__/progress-2.png?inline";
export default {
  group: "ant-vue组件",
  componentName:"AProgress",
  title: "进度条",
  category: "反馈",
  npm: {
    destructuring: true,
    componentName: "AProgress"
  },
  props:[
    {
      name: "type",
      title: { label: "类型", tip: "type|类型" },
      propType: { type: "oneOf", value: ["line", "circle", "dashboard"] },
      setter: {
        componentName: "RadioGroupSetter",
        props: {
          options: [
            { title: "线型", value: "line" },
            { title: "圆型", value: "circle" },
            { title: "仪表盘", value: "dashboard" },
          ],
        },
      },
      defaultValue: "line",
    },
    {
      name: "format",
      title: { label: "内容格式", tip: "format|内容格式" },
      propType: "func",
    },
    {
      name: "percent",
      title: { label: "百分比", tip: "percent|百分比" },
      propType: "number",
    },
    {
      name: "showInfo",
      title: { label: "显示数值或图标", tip: "showInfo|显示数值或图标" },
      propType: "bool",
      defaultValue: true,
    },
    {
      name: "status",
      title: { label: "状态", tip: "status|状态" },
      propType: {
        type: "oneOf",
        value: ["success", "exception", "normal", "active"],
      },
    },
    {
      name: "steps",
      title: { label: "总步数", tip: "steps|进度条总共步数" },
      condition(target: { getProps: () => { (): any; new(): any; getPropValue: { (arg0: string): string; new(): any; }; }; }) {
        // 仅线型有效
        return target.getProps().getPropValue("type") === "line";
      },
      propType: "number",
    },
    {
      name: "strokeLinecap",
      title: { label: "进度条的样式", tip: "strokeLinecap|进度条的样式" },
      propType: {
        type: "oneOf",
        value: ["round", "square"],
      },
      setter: {
        componentName: "RadioGroupSetter",
        props: {
          options: [
            { title: "圆角", value: "round" },
            { title: "方角", value: "square" },
          ],
        },
      },
      defaultValue: "round",
    },
    {
      name: "strokeWidth",
      title: { label: "线宽度", tip: "strokeWidth|线宽度" },
      propType: "number",
    },
    {
      name: "strokeColor",
      title: { label: "进度条的颜色", tip: "strokeColor|进度条的颜色" },
      propType: "string",
      condition(target: { getProps: () => { (): any; new(): any; getPropValue: { (arg0: string): string; new(): any; }; }; }) {
        // 仪表盘样式无效
        return target.getProps().getPropValue("type") !== "dashboard";
      },
      setter: "ColorSetter",
    },
    {
      name: "trailColor",
      title: {
        label: "未完成的分段的颜色",
        tip: "trailColor|未完成的分段的颜色",
      },
      propType: "string",
      setter: "ColorSetter",
    },
    {
      name: "gapDegree",
      title: {
        label: "缺口角度",
        tip: "gapDegree|仪表盘进度条缺口角度，可取值 0 ~ 295",
      },
      condition(target: { getProps: () => { (): any; new(): any; getPropValue: { (arg0: string): string; new(): any; }; }; }) {
        // 仅仪表盘样式有效
        return target.getProps().getPropValue("type") === "dashboard";
      },
      propType: "number",
      defaultValue: 75,
    },
    {
      name: "gapPosition",
      title: {
        label: "缺口位置",
        tip: "gapPosition|仪表盘进度条缺口位置",
      },
      condition(target: { getProps: () => { (): any; new(): any; getPropValue: { (arg0: string): string; new(): any; }; }; }) {
        // 仅仪表盘样式有效
        return target.getProps().getPropValue("type") === "dashboard";
      },
      propType: {
        type: "oneOf",
        value: ["top", "bottom", "left", "right"],
      },
      defaultValue: "bottom",
    },
  ],
  configure: {
    supports: {
      style:true
    }
  },
  snippets:[
    {
      title:"进度条",
      screenshot:avatarImg,
      schema:{
        componentName:"AProgress",
        props:{
          percent: 20,
          status: "active"
        }
      }
    },
    {
      title:"进度圈",
      screenshot:Progress2,
      schema:{
        componentName:"AProgress",
        props:{
          percent: 20,
          type:"circle",
          status: "circle"
        }
      }
    }
  ]
}
