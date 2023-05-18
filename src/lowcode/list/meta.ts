export default {
  group: 'Antd',
  componentName:'AList',
  title: '列表',
  category: '数据展示',
  npm: {
    destructuring: true,
    componentName: 'AList'
  },
  props:[
    {
      title: '数据源',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'dataSource',
          title: { label: '列表数据源', tip: '列表数据源' },
          propType: { type: 'arrayOf', value: 'any' },
          setter: ['JsonSetter', 'VariableSetter'],
        },
        {
          name: 'loading',
          title: {
            label: '是否加载中',
            tip: 'loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位',
          },
          propType: 'bool',
          defaultValue: false,
          setter: ['BoolSetter', 'VariableSetter'],
        },
        {
          name: 'rowKey',
          title: {
            label: '行Key',
            tip: 'rowKey | 当 renderItem 自定义渲染列表项有效时，自定义每一行的 key 的获取方式',
          },
          propType: {
            type: 'oneOfType',
            value: ['string', 'function'],
          },
          defaultValue: 'id',
          setter: [
            'StringSetter',
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'rowKey(item,${extParams}){\n// 自定义每一行的 key\nreturn `key-${item.id}`;\n}',
              },
            },
            'VariableSetter',
          ],
        },
      ]
    },
    {
      title: '外观',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'itemLayout',
          title: {
            label: '尺寸',
            tip: 'itemLayout  | 设置 AListItem 布局, 设置成 vertical 则竖直样式显示, 默认横排',
          },
          propType: { type: 'oneOf', value: ['horizontal', 'vertical'] },
          defaultValue: 'horizontal',
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '水平',
                    value: 'horizontal',
                  },
                  {
                    title: '垂直',
                    value: 'vertical',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'size',
          title: { label: '尺寸', tip: 'size  | 列表的尺寸' },
          propType: { type: 'oneOf', value: ['default', 'large', 'small'] },
          defaultValue: 'default',
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '默认',
                    value: 'default',
                  },
                  {
                    title: '大',
                    value: 'large',
                  },
                  {
                    title: '小',
                    value: 'small',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'bordered',
          title: { label: '显示边框', tip: 'bordered | 是否展示边框' },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter',
        },
        {
          name: 'split',
          title: { label: '展示分割线', tip: 'split | 是否展示分割线' },
          propType: 'bool',
          defaultValue: true,
          setter: 'BoolSetter',
        }
      ]
    },
    {
      title: '栅格',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'gridEnable',
          title: { label: '启用栅格', tip: 'grid | 是否启用栅格' },
          propType: 'bool',
          setter: 'BoolSetter',
          extraProps: {
            setValue(target: { node: any; }, value: boolean) {
              if (!value) {
                const { node } = target;
                node.setPropValue('grid', false);
              }
            },
          },
        },
        {
          name: 'grid.column',
          title: { label: '列数', tip: 'grid.column | 栅格的列数' },
          propType: 'number',
          setter: 'NumberSetter',
          defaultValue: 4,
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("gridEnable")',
          },
        },
        {
          name: 'grid.gutter',
          title: { label: '间隔', tip: 'grid.gutter | 栅格的间隔' },
          propType: 'number',
          setter: 'NumberSetter',
          defaultValue: 0,
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("gridEnable")',
          },
        }
      ]
    },
    {
      title: '分页',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'pagination',
          title: { label: '显示分页', tip: 'pagination | 显示分页' },
          propType: 'object',
          setter: 'BoolSetter',
          extraProps: {
            setValue: (target: { parent: { setPropValue: (arg0: string, arg1: { pageSize: number; }) => void; }; }, value: any) => {
              if (value) {
                target.parent.setPropValue('pagination', {
                  pageSize: 5,
                });
              }
            },
          },
        },
        {
          name: 'pagination.pageSize',
          title: { label: '每页条数', tip: 'pagination.pageSize | 每页条数' },
          setter: 'NumberSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.total',
          title: { label: '数据总数', tip: 'pagination.total | 数据总数' },
          setter: 'NumberSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.current',
          title: { label: '当前页数', tip: 'pagination.current | 当前页数' },
          setter: 'NumberSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.showTotal',
          title: {
            label: '显示总数',
            tip: 'pagination.showTotal | 用于显示数据总量和当前数据顺序',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'showTotal(total,range,${extParams}){\n// 用于格式化显示表格数据总量\nreturn `共 ${total} 条`;\n}',
              },
            },
            'VariableSetter',
          ],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.showSizeChanger',
          title: {
            label: '页数切换',
            tip: 'pagination.showSizeChanger | 是否展示 pageSize 切换器',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.showQuickJumper',
          title: {
            label: '快速跳转',
            tip: 'pagination.showQuickJumper | 是否可以快速跳转至某页',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.simple',
          title: { label: '简单分页', tip: 'pagination.simple | 简单分页' },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.size',
          title: { label: '分页尺寸', tip: 'pagination.size | 分页尺寸' },
          propType: {
            type: 'oneOf',
            value: ['default', 'small'],
          },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '默认',
                    value: 'default',
                  },
                  {
                    title: '小',
                    value: 'small',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
          defaultValue: 'default',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.position',
          title: { label: '分页位置', tip: 'pagination.position | 分页位置' },
          setter: {
            componentName: 'SelectSetter',
            props: {
              options: [
                {
                  title: '上',
                  value: 'top',
                },
                {
                  title: '下',
                  value: 'bottom',
                },
                {
                  title: '上下',
                  value: 'both',
                },
              ],
            },
            initialValue: 'bottomRight',
          },
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        }
      ]
    },
    {
      title: '扩展',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'renderItem',
          title: {
            label: '渲染函数',
            tip: 'renderItem | 当使用 dataSource 时，可以用 `renderItem` 自定义渲染列表项',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'SlotSetter',
              title: '渲染函数插槽',
              initialValue: {
                type: 'JSSlot',
                params: ['item'],
                value: [
                  {
                    componentName: 'AListItem',
                    props: {},
                    children: {
                      componentName: 'ATypographyText',
                      props: {
                        children: {
                          type: 'JSExpression',
                          value: 'this.item.text',
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              componentName: 'FunctionSetter',
              props: {
                template: 'renderItem(item,${extParams}){\n// 自定义渲染列表项\nreturn `item`;\n}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'header',
          title: {
            label: '列表头部',
            tip: 'header | 列表头部',
          },
          propType: 'node',
          setter: {
            componentName: 'SlotSetter',
            initialValue: {
              type: 'JSSlot',
              value: [
                {
                  componentName: 'ATypographyText',
                  props: {
                    children: '列表头部',
                  },
                },
              ],
            },
          },
        },
        {
          name: 'footer',
          title: {
            label: '列表底部',
            tip: 'footer | 列表底部',
          },
          propType: 'node',
          setter: {
            componentName: 'SlotSetter',
            initialValue: {
              type: 'JSSlot',
              value: [
                {
                  componentName: 'ATypographyText',
                  props: {
                    children: '列表底部',
                  },
                },
              ],
            },
          },
        },
        {
          name: 'loadMore',
          title: {
            label: '加载更多',
            tip: 'loadMore | 加载更多',
          },
          propType: 'node',
          setter: {
            componentName: 'SlotSetter',
            initialValue: {
              type: 'JSSlot',
              value: [
                {
                  componentName: 'AButton',
                  props: {
                    children: 'loading more',
                  },
                },
              ],
            },
          },
        }
      ]
    }
  ],
  configure: {
    supports: {
      style:true,
      events:[
        {
          name: 'pagination.onChange',
          template: 'onChange(page,pageSize,${extParams}){\n// 页码或 pageSize 改变的回调\n}',
        }
      ]
    }
  },
  snippets:[
    {
      title: '简单列表',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/list-1.png',
      schema: {
        componentName: 'AList',
        props: {
          dataSource: [
            {
              id: 1,
              text: 'Racing car sprays burning fuel into crowd.',
            },
            {
              id: 2,
              text: 'Japanese princess to wed commoner.',
            },
            {
              id: 3,
              text: 'Australian walks 100km after outback crash.',
            },
            {
              id: 4,
              text: 'Man charged over missing wedding girl.',
            },
            {
              id: 5,
              text: 'Los Angeles battles huge wildfires.',
            },
          ],
          renderItem: {
            type: 'JSSlot',
            params: ['item'],
            value: [
              {
                componentName: 'AListItem',
                props: {},
                children: {
                  componentName: 'ATypographyText',
                  props: {
                    children: {
                      type: 'JSExpression',
                      value: 'this.item.text',
                    },
                  },
                },
              },
            ],
          },
          header: {
            type: 'JSSlot',
            value: [
              {
                componentName: 'ATypographyText',
                props: {
                  children: '列表头部',
                },
              },
            ],
          },
          footer: {
            type: 'JSSlot',
            value: [
              {
                componentName: 'ATypographyText',
                props: {
                  children: '列表底部',
                },
              },
            ],
          },
          itemLayout: 'horizontal',
          size: 'default',
          bordered: true,
          split: true,
          pagination: {
            pageSize: 5,
            total: 10,
            current: 1,
          },
        },
      },
    },
    {
      title: '基础列表',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/list-1.png',
      schema: {
        componentName: 'AList',
        props: {
          dataSource: [
            {
              id: 1,
              title: 'Ant Design Title 1',
              avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
              description:
                'Ant Design, a design language for background applications, is refined by Ant UED Team',
            },
            {
              id: 2,
              title: 'Ant Design Title 2',
              avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
              description:
                'Ant Design, a design language for background applications, is refined by Ant UED Team',
            },
            {
              id: 3,
              title: 'Ant Design Title 3',
              avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
              description:
                'Ant Design, a design language for background applications, is refined by Ant UED Team',
            },
            {
              id: 4,
              title: 'Ant Design Title 4',
              avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
              description:
                'Ant Design, a design language for background applications, is refined by Ant UED Team',
            },
            {
              id: 5,
              title: 'Ant Design Title 5',
              avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
              description:
                'Ant Design, a design language for background applications, is refined by Ant UED Team',
            },
          ],
          renderItem: {
            type: 'JSSlot',
            params: ['item'],
            value: [
              {
                componentName: 'AListItem',
                props: {},
                children: {
                  componentName: 'AListItemMeta',
                  props: {
                    avatar: {
                      type: 'JSSlot',
                      value: [
                        {
                          componentName: 'AAvatar',
                          props: {
                            // icon: {
                            //   componentName: 'AIcon',
                            //   props: {
                            //     type: 'UserOutlined',
                            //   },
                            // },
                            src: {
                              type: 'JSExpression',
                              value: 'this.item.avatar',
                            },
                          },
                        },
                      ],
                    },
                    title: {
                      type: 'JSSlot',
                      value: [
                        {
                          componentName: 'ATypographyLink',
                          props: {
                            children: {
                              type: 'JSExpression',
                              value: 'this.item.title',
                            },
                          },
                        },
                      ],
                    },
                    description: {
                      type: 'JSSlot',
                      value: [
                        {
                          componentName: 'ATypographyText',
                          props: {
                            children: {
                              type: 'JSExpression',
                              value: 'this.item.description',
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              },
            ],
          },
          itemLayout: 'horizontal',
          size: 'default',
          bordered: true,
          split: true,
          pagination: {
            pageSize: 10,
            total: 15,
            current: 1,
          },
        },
      },
    }
  ]
}
