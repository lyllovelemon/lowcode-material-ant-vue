/* eslint-disable */
// @ts-ignore
export default {
  group: 'Antd',
  componentName: 'ATable',
  title: '表格',
  category: '数据展示',
  npm: {
    destructuring: true,
    componentName: 'ATable'
  },
  props:[
    {
      title:'数据源',
      display:'block',
      type:'group',
      items:[
        {
          name:'dataSource',
          title:{label:'表格数据',tip:'datasource|表格数据'},
          propType:'object',
          setter:'JsonSetter',
          supportVariable:true
        },
        {
          name:'loading',
          title:{label:'加载中',tip:'页面是否在加载中'},
          propType:'bool',
          setter:'BoolSetter',
          defaultValue:false,
          supportVariable:true
        },
        {
          name: 'rowKey',
          title: {
            label: '行Key',
            tip: 'rowKey | 表格行 key 的取值，可以是字符串或一个函数',
          },
          propType: { type: 'oneOfType', value: ['string', 'func'] },
          setter: [
            'StringSetter',
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'getRowKey(record,index,${extParams}){\n// 通过函数获取表格行 key\nreturn record.id;\n}',
              },
            },
            'VariableSetter',
          ],
          defaultValue: 'id',
        },
        {
          name: 'columns',
          title: { label: '表格列', tip: '表格列的配置描述，具体项见下表' },
          setter: {
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    items: [
                      {
                        name: 'title',
                        title: { label: '列标题', tip: 'title | 列标题' },
                        propType: { type: 'oneOfType', value: ['string', 'func'] },
                        setter: [
                          'StringSetter',
                          {
                            componentName: 'SlotSetter',
                            title: '列标题插槽',
                            initialValue: {
                              type: 'JSSlot',
                              params: ['options'],
                              value: [],
                            },
                          },
                        ],
                      },
                      {
                        name: 'dataIndex',
                        title: { label: '数据字段', tip: 'dataIndex | 数据字段' },
                        propType: 'string',
                        setter: 'StringSetter',
                        isRequired: true,
                      },
                      {
                        name: 'key',
                        title: { label: 'key', tip: 'Vue 需要的 key' },
                        propType: 'string',
                        setter: 'StringSetter',
                      },
                      {
                        name: 'align',
                        title: { label: '对齐方式', tip: 'align | 对齐方式' },
                        propType: {
                          type: 'oneOf',
                          value: ['left', 'right', 'center'],
                        },
                        defaultValue: 'left',
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
                                {
                                  title: 'center',
                                  value: 'center',
                                },
                              ],
                            },
                          },
                          'VariableSetter',
                        ],
                      },
                      {
                        name: 'fixed',
                        title: { label: '列是否固定', tip: 'fixed | 列是否固定' },
                        description: '（IE 下无效）列是否固定，可选 true (等效于 left) left right',
                        defaultValue: '',
                        propType: {
                          type: 'oneOf',
                          value: ['', 'left', 'right',true,false],
                        },
                        setter: [
                          'BoolSetter',
                          {
                            componentName: 'RadioGroupSetter',
                            props: {
                              options: [
                                {
                                  title: '不固定',
                                  value: '',
                                },
                                {
                                  title: '固定在左侧',
                                  value: 'left',
                                },
                                {
                                  title: '固定在右侧',
                                  value: 'right',
                                },
                              ],
                            },
                          },
                          'VariableSetter',
                        ],
                      },
                      {
                        name: 'width',
                        title: { label: '宽度', tip: 'width | 列宽度' },
                        propType: {
                          type: 'oneOfType',
                          value: ['number', 'string'],
                        },
                        setter: ['NumberSetter', 'StringSetter', 'VariableSetter'],
                      },
                      {
                        name: 'sorter',
                        title: {
                          label: '排序规则',
                          tip: 'sorter | 排序函数，本地排序使用一个函数，需要服务端排序可设为 true',
                        },
                        propType: { type: 'oneOfType', value: ['bool', 'func'] },
                        setter: ['BoolSetter', 'FunctionSetter', 'VariableSetter'],
                      },
                      {
                        name:'ellipsis',
                        title:{
                          label:'省略',
                          tip:'ellipsis|超过宽度将自动省略'
                        },
                        propType:'bool',
                        setter:'BoolSetter',
                        defaultValue:false
                      },
                      {
                        name: 'filters',
                        title: {
                          label: '筛选菜单项',
                          tip: 'filters | 表头的筛选菜单项',
                        },
                        propType: 'object',
                        setter: 'JsonSetter',
                      },
                      {
                        name:'filterSearch',
                        title:{
                          label:'筛选菜单项是否可搜索',
                          tip:'filterSearch|筛选菜单项是否可搜索'
                        },
                        propType:'bool',
                        setter:'BoolSetter',
                        defaultValue:false
                      },
                      {
                        name:'filterMultiple',
                        title:'是否多选',
                        propType:'bool',
                        setter:'BoolSetter',
                        defaultValue:true
                      },
                      {
                        name: 'filterMode',
                        title: {
                          label: 'filterMode',
                          tip:
                            'filterMode | 指定筛选菜单的用户界面',
                        },
                        propType: {type:'oneOf',value:['menu','tree']},
                        setter: [{
                          componentName:'RadioGroupSetter',
                          props:{
                            options:[
                              {title:'menu',value:'menu'},
                              {title:'tree',value:'tree'}
                            ]
                          }
                        }],
                        defaultValue:'menu'
                      },
                      {
                        name: 'render',
                        title: {
                          label: '自定义渲染',
                          tip:
                            'render | 插槽内的物料表达式可通过this.record获取当前行数据，this.index获取索引(该项用于自定义操作列)',
                        },
                        propType: 'func',
                        setter: [
                          {
                            componentName: 'SlotSetter',
                            title: '单元格插槽',
                            initialValue: {
                              type: 'JSSlot',
                              params: ['text', 'record', 'index'],
                              value: [],
                            },
                          },
                          'VariableSetter',
                        ],
                      },
                    ],
                  },
                },
                initialValue: { title: '标题' },
              },
            },}
        }
      ]
    },
    {
      title: '外观',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'showHeader',
          title: { label: '显示表头', tip: 'showHeader | 是否显示表头' },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: true,
        },
        {
          name: 'bordered',
          title: {
            label: '显示边框',
            tip: 'bordered | 是否展示外边框和列边框',
          },
          propType: 'bool',
          setter: 'BoolSetter',
        },
        {
          name: 'size',
          title: { label: '表格大小', tip: 'size | 表格大小' },
          propType: {
            type: 'oneOf',
            value: ['default', 'middle', 'small'],
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
                    title: '中',
                    value: 'middle',
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
        },
        {
          name: 'tableLayout',
          title: { label: '表格布局', tip: 'tableLayout | 表格布局' },
          defaultValue: '',
          propType: {
            type: 'oneOf',
            value: ['', 'auto', 'fixed'],
          },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '默认',
                    value: '',
                  },
                  {
                    title: '自动',
                    value: 'auto',
                  },
                  {
                    title: '固定',
                    value: 'fixed',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
        },
      ],
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
                  pageSize: 10,
                });
              }
            },
          },
        },
        {
          name: 'pagination.pageSize',
          title: { label: '每页条数', tip: 'pagination.pageSize | 每页条数' },
          propType: 'number',
          setter: 'NumberSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.total',
          title: { label: '数据总数', tip: 'pagination.total | 数据总数' },
          propType: 'number',
          setter: 'NumberSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.defaultCurrent',
          title: {
            label: '默认当前页',
            tip: 'pagination.defaultCurrent | 默认的当前页数',
          },
          propType: 'number',
          setter: 'NumberSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.current',
          title: { label: '当前页数', tip: 'pagination.current | 当前页数' },
          propType: 'number',
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
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'SelectSetter',
                props: {
                  options: [
                    {
                      title: '上左',
                      value: 'topLeft',
                    },
                    {
                      title: '上中',
                      value: 'topCenter',
                    },
                    {
                      title: '上右',
                      value: 'topRight',
                    },
                    {
                      title: '下左',
                      value: 'bottomLeft',
                    },
                    {
                      title: '下中',
                      value: 'bottomCenter',
                    },
                    {
                      title: '下右',
                      value: 'bottomRight',
                    },
                  ],
                },
                initialValue: 'bottomRight',
              },
            },
          },
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
      ],
    },
    {
      title: '滚动',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'scroll.scrollToFirstRowOnChange',
          title: {
            label: '自动滚动',
            tip: 'scroll.scrollToFirstRowOnChange | 是否自动滚动到表格顶部',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: true,
        },
        {
          name: 'scroll.x',
          title: {
            label: '横向滚动',
            tip:
              'scroll.x | 	设置横向滚动，也可用于指定滚动区域的宽，可以设置为像素值，百分比，true 和 max-content',
          },
          propType: { type: 'oneOfType', value: ['number', 'bool'] },
          setter: ['NumberSetter', 'BoolSetter', 'VariableSetter'],
        },
        {
          name: 'scroll.y',
          title: {
            label: '纵向滚动',
            tip: 'scroll.y | 	设置纵向滚动，也可用于指定滚动区域的高，可以设置为像素值',
          },
          propType: 'number',
          setter: ['NumberSetter', 'VariableSetter'],
        },
      ],
    },
    {
      title: '行选择器',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'rowSelection',
          title: { label: '行选择', tip: 'rowSelection | 行选择' },
          propType: 'object',
          setter: 'BoolSetter',
          extraProps: {
            setValue: (target: { parent: { setPropValue: (arg0: string, arg1: { type: string; }) => void; }; }, value: any) => {
              if (value) {
                target.parent.setPropValue('rowSelection', {
                  type: 'radio',
                });
              }
            },
          },
        },
        {
          name: 'rowSelection.type',
          title: { label: '行选择类型', tip: 'rowSelection.type | 多选/单选' },
          propType: {
            type: 'oneOf',
            value: ['checkbox', 'radio'],
          },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '多选',
                    value: 'checkbox',
                  },
                  {
                    title: '单选',
                    value: 'radio',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.fixed',
          title: {
            label: '固定左边',
            tip: 'rowSelection.fixed | 把选择框列固定在左边',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.selectedRowKeys',
          title: {
            label: '选中行Key',
            tip: 'rowSelection.selectedRowKeys | 指定选中项的 key 数组',
          },
          propType: 'object',
          setter: 'JsonSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.preserveSelectedRowKeys',
          title: { label: '保留选项', tip: 'rowSelection.preserveSelectedRowKeys | 当数据被删除时仍然保留选项' },
          propType: 'bool',
          setter: 'BoolSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.getCheckboxProps',
          title: {
            label: '默认属性',
            tip: 'rowSelection.getCheckboxProps | 选择框的默认属性配置',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'getCheckboxProps(record,${extParams}){\n// 选择框的默认属性配置\nreturn { disabled: false };\n}',
              },
            },
            'VariableSetter',
          ],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
      ],
    },
    {
      title: '行展开',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'expandable.expandedRowRender',
          title: {
            label: '展开行渲染',
            tip: 'expandable.expandedRowRender | 额外的展开行',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'SlotSetter',
              title: '展开行插槽',
              initialValue: {
                type: 'JSSlot',
                params: ['record', 'index', 'indent', 'expanded'],
                value: [],
              },
            },
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'expandedRowRender(record,index,indent,expanded,${extParams}){\n// 展开行渲染\nreturn `${record.id}`}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'expandable.rowExpandable',
          title: {
            label: '是否可展开',
            tip: 'expandable.rowExpandable | 行是否可展开',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template: 'rowExpandable(record,${extParams}){\n// 行是否可展开\nreturn true;\n}',
              },
            },
            'VariableSetter',
          ],
        },
      ],
    },
    {
      title: '扩展',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'title',
          title: { label: '表格标题', tip: 'title | 表格标题' },
          propType: 'func',
          setter: [
            {
              componentName: 'SlotSetter',
              title: '表格标题插槽',
              initialValue: {
                type: 'JSSlot',
                params: ['currentPageData'],
                value: [],
              },
            },
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'renderTitle(currentPageData,${extParams}){\n// 自定义渲染表格顶部\nreturn "表格顶部";\n}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'footer',
          title: { label: '表格尾部', tip: 'footer | 表格尾部' },
          propType: 'func',
          setter: [
            {
              componentName: 'SlotSetter',
              title: '表格尾部插槽',
              initialValue: {
                type: 'JSSlot',
                params: ['currentPageData'],
                value: [],
              },
            },
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'renderFooter(currentPageData,${extParams}){\n// 自定义渲染表格尾部\nreturn "表格尾部";\n}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'customHeaderRow',
          title: { label: '头部行属性', tip: 'customHeaderRow | 设置头部行属性' },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'customHeaderRow(columns,index,${extParams}){\n// 设置头部行属性\nreturn {onClick:()=>{}};\n}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'customRow',
          title: { label: '行属性', tip: 'customRow | 设置行属性' },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'customRow(record,index,${extParams}){\n// 设置行属性\nreturn {onClick: (event) => {},       // 点击行\n' +
                  '      onDblclick: (event) => {},\n' +
                  '      onContextmenu: (event) => {},\n' +
                  '      onMouseEnter: (event) => {},  // 鼠标移入行\n' +
                  '      onMouseLeave: (event) => {}};\n}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'rowClassName',
          title: { label: '行类名', tip: 'rowClassName | 表格行的类名' },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'rowClassName(record,index,${extParams}){\n// 表格行的类名\nreturn `table-${record.type}`;\n}',
              },
            },
            'VariableSetter',
          ],
        },
      ],
    },
  ],
  configure:{
    supports:{
      style:true,
      events: [
        {
          name: 'onChange',
          template:
            "onChange(pagination,filters,sorter,extra,${extParams}){\n// 表格翻页事件\nconsole.log('onChange', pagination);}",
        },
        {
          name: 'rowSelection.onChange',
          template:
            "onRowSelectionChange(selectedRowKeys,selectedRows,${extParams}){\n// 选中项发生变化时的回调\nconsole.log('onRowSelectionChange', selectedRowKeys, selectedRows);}",
        },
        {
          name: 'expandable.onExpand',
          template:
            "onExpandableExpand(expanded,record){\n// 点击展开图标时触发\nconsole.log('onRowSelectionChange', expanded, record);}",
        },
      ],
    }
  },
  snippets:[
    {
      title:'表格',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/table-1.png',
      schema:{
        componentName:'ATable',
        props:{
          dataSource:[{
            id: '1',
            name: '毛不易',
            age: 32,
            address: '西湖区湖底公园1号',
          },
            {
              id: '2',
              name: '邓紫棋',
              age: 28,
              address: '滨江区网商路699号',
            }],
          columns: [
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '年龄',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title:'地址',
              dataIndex:'address',
              key:'address'
            },
            {
              title:'操作',
              align:'left',
              fixed:'right',
              render:{
                type:"JSSlot",
                params:["text","record","index"]
              }
            }
          ],
          rowKey: 'id',
          pagination: {
            pageSize: 10,
            total: 15,
            current: 1,
          },
        }
      }
    }
  ]
}
