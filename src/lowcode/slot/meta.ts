/* eslint-disable */
// @ts-ignore
import avatarImg from "./__screenshots__/icon-1.jpg?inline";
export default {
  componentName:"Slot",
  title: "插槽",
  category: "基础组件",
  npm: {
    destructuring: true,
    componentName: "Slot"
  },
  props:[
    {
      name:"__title",
      title:"title|插槽标题",
      setter:"StringSetter",
      defaultValue:"插槽容器"
    },
    {
      name:"__params",
      title:"params|插槽入参",
      setter:{
        componentName:"ArraySetter",
        props:{
          itemSetter:{
            componentName:"StringSetter",
            props:{
              placeholder:"参数名称"
            }
          }
        }
      }
    }
  ],
  configure: {
    component:{
      isContainer:true,
      disableBehaviors:["hide"],
      actions: {
        name: "copy", // string;
        content: "＋", // string | ReactNode | ActionContentObject;
        items: [], // ComponentAction[];
        condition: "always", // boolean | ((currentNode: any) => boolean) | "always";
        important: true, // boolean;
      },
    },
    supports: false,
    advanced:{
      callbacks:{
        onHoverHook:()=>false,
        onMouseDownHook:()=>false,
        onClickHook:()=>false
      }
    }
  },
  snippets:[
    {
      title: "插槽",
      screenshot: avatarImg,
      schema: {
        componentName: "Slot",
        props: {
          type: "SmileOutlined",
          size: 20,
        },
      },
    },
  ]
}
