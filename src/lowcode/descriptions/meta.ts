import {uuid} from '../../utils/index';
// @ts-ignore
import avatarImg from './__screenshots__/descriptions-1.jpg?inline';
export default {
  group: 'ant-vue组件',
  componentName:'ADescriptions',
  title: '描述列表',
  category: '数据展示',
  npm: {
    destructuring: true,
    componentName: 'ADescriptions'
  },
  props:[
    {
      name: 'title',
      title: {
        label: '标题',
        tip: 'title|描述列表的标题，显示在最顶部',
      },
      propType: {
        type: 'oneOfType',
        value: ['string', 'node'],
      },
    },
    {
      name: 'items',
      title: {
        label: '列表项',
        tip: 'items|列表项',
      },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'key',
                    title: 'key',
                    setter: 'StringSetter',
                    initialValue: (val: any) => val || uuid(),
                    condition: () => false,
                  },
                  {
                    name: 'label',
                    title: '标题',
                    setter: 'StringSetter',
                    initialValue: '列表项',
                  },
                  {
                    name: 'span',
                    title: '所占列数',
                    setter: 'NumberSetter',
                    initialValue: 1,
                  },
                  {
                    name: 'children',
                    title: '内容',
                    setter: {
                      componentName: 'SlotSetter',
                      initialValue: {
                        type: 'JSSlot',
                        value: [],
                      },
                    },
                  },
                ],
              },
            },
            initialValue: () => {
              return {
                key: uuid(),
                label: '标签项',
                span: 1,
                children: {
                  type: 'JSSlot',
                  value: [],
                },
              };
            },
          },
        },
      },
      extraProps: {
        getValue(target: { node: { children: any[]; }; }) {
          const map = target.node.children.map((child) => {
            const key = child.getPropValue('key') ? String(child.getPropValue('key')) : child.id;
            return {
              key,
              label: child.getPropValue('label'),
              span: child.getPropValue('span'),
              children: child.getPropValue('children'),
            };
          });
          return map;
        },
        setValue(target: { node: any; }, value: { key: string | number; }[]) {
          const { node } = target;
          const map = {};

          if (!Array.isArray(value)) {
            value = [];
          }
          value.forEach((item: { key: string | number; }) => {
            const tabItem = Object.assign({}, item);
            // @ts-ignore
            map[item.key] = tabItem;
          });

          node.children.mergeChildren(
            (child: { getPropValue: (arg0: string) => any; setPropValue: (arg0: string, arg1: any) => void; }) => {
              const key = String(child.getPropValue('key'));
              if (Object.hasOwnProperty.call(map, key)) {
                // @ts-ignore
                child.setPropValue('label', map[key].label);
                // @ts-ignore
                child.setPropValue('span', map[key].span);
                // @ts-ignore
                child.setPropValue('children', map[key].children);
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
                    componentName: 'Descriptions.Item',
                    // @ts-ignore
                    props: map[key],
                  });
                }
              }
              return items;
            },
            (child1: { getPropValue: (arg0: string) => any; }, child2: { getPropValue: (arg0: string) => any; }) => {
              const a = value.findIndex(
                (item) => String(item.key) === String(child1.getPropValue('key')),
              );
              const b = value.findIndex(
                (item) => String(item.key) === String(child2.getPropValue('key')),
              );
              return a - b;
            },
          );
        }
      },
    },
    {
      name: 'bordered',
      title: { label: '显示边框', tip: 'bordered|是否展示边框' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'column',
      title: {
        label: '列数',
        tip: 'column|一行的列表项数量',
      },
      propType: 'number',
      defaultValue: 3,
    },
    {
      name: 'size',
      title: {
        label: '尺寸',
        tip:
          'size|设置列表的大小。可以设置为 `middle` 、`small`, 或不填（只有设置 `bordered={true}` 生效）',
      },
      propType: { type: 'oneOf', value: ['default', 'middle', 'small'] },
      defaultValue: 'middle',
    },
    {
      name: 'layout',
      title: { label: '布局方向', tip: 'layout|描述布局' },
      propType: { type: 'oneOf', value: ['horizontal', 'vertical'] },
      defaultValue: 'horizontal',
    },
    {
      name: 'colon',
      title: {
        label: '展示冒号',
        tip: 'colon|配置 `Descriptions.Item` 的 `colon` 的默认值',
      },
      propType: 'bool',
      defaultValue: true,
    }
  ],
  configure: {
    supports: {
      style:true
    }
  },
  snippets:[
    {
      title:"描述列表",
      screenshot:avatarImg,
      schema:{
        componentName:"ADescriptions",
        props:{
          title:"用户信息",
          items:[
            {
              label:"用户名",
              children:"li yi li"
            }
          ]
        }
      }
    }
  ]
}
