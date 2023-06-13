import {uuid} from '../../utils/index';
// @ts-ignore
import avatarImg from './__screenshots__/timeline-1.jpg?inline';
export default {
  group: 'ant-vue组件',
  componentName:'ATimeline',
  title: '时间轴',
  category: '数据展示',
  npm: {
    destructuring: true,
    componentName: 'ATimeline'
  },
  props:[
    {
      name: 'steps',
      title: {label:'步骤配置',tip:'steps|步骤配置'},
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
                  },
                  {
                    name: 'color',
                    title: '圆圈颜色',
                    setter: 'StringSetter',
                  },
                  {
                    name: 'dot',
                    title: '自定义时间轴点',
                    setter: 'node',
                  },
                  {
                    name: 'label',
                    title: '设置标签',
                    setter: 'StringSetter',
                  },
                  {
                    name: 'position',
                    title: {
                      label: '自定义节点位置',
                      tip: '自定义节点位置',
                    },
                    propType: {
                      type: 'oneOf',
                      value: ['left', 'right'],
                    },
                    setter: [
                      {
                        componentName: 'RadioGroupSetter',
                        props: {
                          options: [
                            {
                              title: 'left',
                              value: 'left',
                            },
                            {
                              title: 'right',
                              value: 'right',
                            },
                          ],
                        },
                      },
                      'VariableSetter',
                    ],
                  },
                ],
              },
            },
            initialValue: () => {
              return {
                key: `timeLine${uuid()}`,
                label: '时间轴',
              };
            },
          },
        },
      },
      extraProps: {
        getValue(target: { node: { children: any[]; }; }, fieldValue: any) {
          const map = target.node.children.map((child) => {
            const key = child.getPropValue('key') ? String(child.getPropValue('key')) : child.id;
            const result = { key };
            ['color', 'dot', 'label', 'position'].forEach((propKey) => {
              // @ts-ignore
              result[propKey] = child.getPropValue(propKey);
            });
            return result;
          });
          return map.length === 0 ? fieldValue : map;
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
                ['color', 'dot', 'label', 'position'].forEach((propKey) => {
                  // @ts-ignore
                  child.setPropValue(propKey, map[key][propKey]);
                });
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
                    componentName: 'ATimelineItem',
                    // @ts-ignore
                    props: map[key],
                  });
                }
              }
              return items;
            },

            (child1: { getPropValue: (arg0: string) => any; }, child2: { getPropValue: (arg0: string) => any; }) => {
              const a = value.findIndex(
                (item: { key: any; }) => String(item.key) === String(child1.getPropValue('key')),
              );
              const b = value.findIndex(
                (item: { key: any; }) => String(item.key) === String(child2.getPropValue('key')),
              );
              return a - b;
            },
          );
        },
      },
    },
    {
      name: 'mode',
      title: {
        label: '模式',
        tip: 'mode|通过设置 `mode` 可以改变时间轴和内容的相对位置',
      },
      propType: { type: 'oneOf', value: ['left', 'alternate', 'right'] },
    },
    {
      name: 'pending',
      title: {
        label: '存在最后节点',
        tip: 'pending|指定最后一个幽灵节点是否存在',
      },
      propType: 'bool',
    },
    {
      name: 'pendingDot',
      title: {
        label: '当最后一个幽灵节点存在時，指定其时间图点',
        tip: 'pendingDot|当最后一个幽灵节点存在時，指定其时间图点',
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'reverse',
      title: { label: '节点排序', tip: 'reverse|节点排序' },
      propType: 'bool',
      defaultValue: false,
    }
  ],
  configure: {
    supports: {
      style:true
    }
  },
  snippets:[
    {
      title:"时间轴",
      screenshot:avatarImg,
      schema:{
        componentName:"ATimeline",
        props:{
          steps: [
            {
              key: 'timeLinei5wd',
              label: '时间轴1',
            },
            {
              key: 'timeLinei5wx',
              label: '时间轴2',
            }
          ],
        }
      }
    }
  ]
}
