import {uuid} from "../../utils/index";
// @ts-ignore
import avatarImg from "./__screenshots__/carousel-1.jpg?inline";
export default {
  group: "ant-vue组件",
  componentName:"ACarousel",
  title: "走马灯",
  category: "数据展示",
  npm: {
    destructuring: true,
    componentName: "ACarousel"
  },
  props:[
    {
      name:"autoplay",
      title:{label:"自动切换",tip:"autoplay|是否自动切换"},
      propType:"bool",
      setter:"BoolSetter",
      defaultValue:false
    },
    {
      name:"dotPosition",
      title:{label:"指示点位置",tip:"dotPosition|面板指示点位置"},
      propType:{type:"oneOf",value:["top","bottom","left","right"]},
      setter:{
        componentName:"SelectSetter",
        props:{
          options:[
            { title:"top",value:"top"},
            { title:"bottom",value:"bottom"},
            { title:"left",value:"left"},
            { title:"right",value:"right"}
          ]
        }
      },
      defaultValue:"bottom"
    },
    {
      name:"dot",
      title:{label:"展示指示点",tip:"dot|是否显示面板指示点"},
      propType:"bool",
      setter:"BoolSetter",
      defaultValue:true
    },
    {
      name:"dotsClass",
      title:{label:"指示点类名",tip:"dotsClass|面板指示点类名"},
      propType:"string",
      setter:"StringSetter",
      defaultValue:"slick-dots"
    },
    {
      name:"easing",
      title:{label:"动画效果",tip:"easing|动画效果"},
      propType:"string",
      defaultValue:"linear"
    },
    {
      name: "effect",
      title: { label: "动画效果函数", tip: "effect|动画效果函数" },
      propType: { type: "oneOf", value: ["scrollx", "fade"] },
    },
    {
      name: "items",
      title: {label:"折叠项",tip:"items|折叠项"},
      setter: {
        componentName: "ArraySetter",
        props: {
          itemSetter: {
            componentName: "ObjectSetter",
            initialValue: () => {
              return {
                key: uuid(),
              };
            },
          },
        },
      },
      extraProps: {
        getValue(target: { node: { children: any[]; }; }) {
          console.log("getValue", target.node.children.length);
          const map = target.node.children.map((child) => {
            const key = child.getPropValue("key") ? String(child.getPropValue("key")) : child.id;
            return { key };
          });
          return map;
        },
        setValue(target: { node: any; }, value: any[]) {
          const { node } = target;
          const map = {};
          if (!Array.isArray(value)) {
            value = [];
          }
          value.forEach((item) => {
            const tabItem = Object.assign({}, item);
            // @ts-ignore
            map[item.key] = tabItem;
          });

          node.children.mergeChildren(
            (child: { getPropValue: (arg0: string) => any; }) => {
              const key = String(child.getPropValue("key"));
              if (Object.hasOwnProperty.call(map, key)) {
                // @ts-ignore
                delete map[key];
                return false;
              }
              return true;
            },
            () => {
              const items = [];
              for (const key in map) {
                if (Object.hasOwnProperty.call(map, key)) {
                  items.push({
                    componentName: "Card",
                    // @ts-ignore
                    props: map[key],
                  });
                }
              }
              return items;
            },
            (child1: { getPropValue: (arg0: string) => any; }, child2: { getPropValue: (arg0: string) => any; }) => {
              const a = value.findIndex(
                (item: { key: any; }) => String(item.key) === String(child1.getPropValue("key")),
              );
              const b = value.findIndex(
                (item: { key: any; }) => String(item.key) === String(child2.getPropValue("key")),
              );
              return a - b;
            },
          );
        },
      },
    },
    {
      name: "afterChange",
      title: { label: "切换面板的回调", tip: "afterChange|切换面板的回调" },
      propType: "func",
    },
    {
      name: "beforeChange",
      title: { label: "切换面板的回调", tip: "beforeChange|切换面板的回调" },
      propType: "func",
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    supports: {
      style:true
    },
    events:[
      {
        name: "onChange ",
        template: "onChange (time,timeString,${extParams}){\n// 时间发生变化的回调\nconsole.log(\"onChange \",time,timeString);}",
      },
      {
        name: "onOpenChange",
        template:
          "onOpenChange(open,${extParams}){\n// 面板打开/关闭时的回调\nconsole.log(\"onOpenChange\",open);}",
      }
    ]
  },
  snippets:[
    {
      title:"走马灯",
      screenshot:avatarImg,
      schema:{
        componentName:"ACarousel",
        children:[
          {
            componentName:"ACard",
            props:{
              key:"panel 1"
            }
          },
          {
            componentName:"ACard",
            props:{
              key:"panel 2"
            }
          },
          {
            componentName:"ACard",
            props:{
              key:"panel 3"
            }
          }
        ]
      }
    }
  ]
}
