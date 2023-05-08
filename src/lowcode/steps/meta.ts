import {uuid} from '../../utils/index';

export default {
  group: 'Antd',
  componentName:'ASteps',
  title: '步骤条',
  category: '导航',
  npm: {
    destructuring: true,
    componentName: 'ASteps'
  },
  props:[
    {
      name: 'steps',
      title: '步骤配置',
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
                    name: 'title',
                    title: '标题',
                    setter: 'StringSetter',
                  },
                  {
                    name: 'subTitle',
                    title: '子标题',
                    setter: 'StringSetter',
                  },
                  {
                    name: 'description',
                    title: '详细描述',
                    setter: 'StringSetter',
                  },
                  {
                    name: 'disabled',
                    title: '禁用',
                    setter: 'BoolSetter',
                    initialValue: false,
                  },
                  {
                    name: 'status',
                    title: { label: '状态', tip: '选择框大小' },
                    setter: {
                      componentName: 'RadioGroupSetter',
                      props: {
                        options: [
                          {
                            title: 'wait',
                            value: 'wait',
                          },
                          {
                            title: 'process',
                            value: 'process',
                          },
                          {
                            title: 'finish',
                            value: 'finish',
                          },
                          {
                            title: 'error',
                            value: 'error',
                          },
                        ],
                      },
                    },
                    propType: {
                      type: 'oneOf',
                      value: ['wait', 'process', 'finish', 'error'],
                    },
                    defaultValue: 'wait',
                  },
                ],
              },
            },
            initialValue: () => {
              return {
                key: `Steps${uuid()}`,
                title: '步骤',
                disabled: false,
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
              title: child.getPropValue('title'),
              subTitle: child.getPropValue('subTitle'),
              description: child.getPropValue('description'),
              disabled: child.getPropValue('disabled'),
              status: child.getPropValue('status'),
            };
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
            (child: { getPropValue: (arg0: string) => any; setPropValue: (arg0: string, arg1: any) => void; }) => {
              const key = String(child.getPropValue('key'));
              if (Object.hasOwnProperty.call(map, key)) {
                // @ts-ignore
                child.setPropValue('title', map[key].title);
                // @ts-ignore
                child.setPropValue('subTitle', map[key].subTitle);
                // @ts-ignore
                child.setPropValue('description', map[key].description);
                // @ts-ignore
                child.setPropValue('disabled', map[key].disabled);
                // @ts-ignore
                child.setPropValue('status', map[key].status);

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
                    componentName: 'AStepsStep',
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
        },
      },
    },
    {
      name: 'class',
      title: { label: '步骤条类名', tip: '步骤条类名' },
      propType: 'string',
    },
    {
      name: 'type',
      title: {
        label: '类型',
        tip: '步骤条类型，有 `default` 和 `navigation` 两种',
      },
      propType: { type: 'oneOf', value: ['default', 'navigation'] },
      defaultValue: 'default',
    },
    {
      name: 'current',
      title: {
        label: '当前步骤',
        tip: '指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态',
      },
      propType: 'number',
    },
    {
      name: 'direction',
      title: {
        label: '步骤条方向',
        tip: '指定步骤条方向。目前支持水平（`horizontal`）和竖直（`vertical`）两种方向',
      },
      propType: {
        type: 'oneOf',
        value: ['horizontal', 'vertical'],
      },
    },
    {
      name: 'labelPlacement',
      title: {
        label: '标签放置位置',
        tip: '指定标签放置位置，默认水平放图标右侧，可选 `vertical` 放图标下方',
      },
      propType: {
        type: 'oneOf',
        value: ['horizontal', 'vertical'],
      },
      defaultValue: 'horizontal',
    },
    {
      name: 'progressDot',
      title: {
        label: '点状步骤条',
        tip: '点状步骤条，可以设置为一个 func',
      },
      propType: { type: 'oneOfType', value: ['bool', 'func'] },
    },
    {
      name: 'size',
      title: {
        label: '尺寸',
        tip: '指定大小',
      },
      propType: {
        type: 'oneOf',
        value: ['default', 'small'],
      },
      defaultValue: 'default',
    },
    {
      name: 'status',
      title: {
        label: '当前步骤状态',
        tip: '指定当前步骤的状态，可选 `wait` `process` `finish` `error`',
      },
      propType: {
        type: 'oneOf',
        value: ['wait', 'process', 'finish', 'error'],
      },
      defaultValue: 'process',
    },
    {
      name: 'initial',
      title: {
        label: '起始序号',
        tip: '起始序号，从 0 开始记数',
      },
      propType: 'number',
      defaultValue: 0,
    },
    {
      name: 'change',
      title: { label: '点击切换步骤时触发', tip: '点击切换步骤时触发' },
      propType: 'func',
    },
  ],
  configure: {
    component: {
      isContainer: true,
      nestingRule: { childWhitelist: ['AStepsStep'] },
    },
    supports: {
      style:true,
      events: [
        {
          name: 'change',
          template:
            "change(current,${extParams}){\n// 点击切换步骤时触发\nconsole.log('change',current);}",
        },
      ],
    }
  },
  snippets:[
    {
      title: '步骤条',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/steps-1.png',
      schema: {
        componentName: 'ASteps',
        props: {
          current: 1,
        },
        children: [
          {
            componentName: 'AStepsStep',
            props: {
              title: 'Finished',
              description: 'This is a description.',
            },
          },
          {
            componentName: 'AStepsStep',
            props: {
              title: 'In Progress',
              subTitle: 'Left 00:00:08',
              description: 'This is a description.',
            },
          },
          {
            componentName: 'AStepsStep',
            props: {
              title: 'Waiting',
              description: 'This is a description.',
            },
          },
        ],
      },
    },
  ]
}