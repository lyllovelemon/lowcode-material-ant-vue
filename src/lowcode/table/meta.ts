/* eslint-disable */
// @ts-ignore
import avatarImg from './__screenshots__/table-1.png?inline';
export default {
  group: 'ant-vue组件',
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
                        title: { label: '列标题', tip: 'title | 列头显示文字' },
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
                          }
                        ],
                      },
                      {
                        name: 'dataIndex',
                        title: { label: '数据字段', tip: 'dataIndex | 数据字段' },
                        propType: {
                          type:'oneOfType',
                          value:['string',{type:'arrayOf',value:'string'}]
                        },
                        setter: ['StringSetter','ArraySetter'],
                        isRequired: true,
                      },
                      {
                        name: 'key',
                        title: { label: 'key', tip: 'Vue 需要的 key,设置了dataIndex可以忽略这个属性' },
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
                          'BoolSetter',
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
                        name:'maxWidth',
                        title:{label:'最大宽度',tip:'maxWidth|最大宽度'},
                        propType:'number',
                        setter:['NumberSetter']
                      },
                      {
                        name:'minWidth',
                        title:{label:'最小宽度',tip:'minWidth|最小宽度'},
                        propType:'number',
                        setter:['NumberSetter']
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
                        name:'sortDirections',
                        title:{
                          label:'排序方式',
                          tip:'sortDirections|支持的排序方式'
                        },
                        propType:{ type:'oneOf',value:['','ascend','descend']},
                        setter:{
                          componentName:'RadioGroupSetter',
                          props:{
                            options:[
                              { title:'不排序',value:''},
                              { title:'升序',value:'ascend'},
                              { title:'降序',value:'descend'}
                            ]
                          }
                        }
                      },
                      {
                        name:'sortOrder',
                        title:{
                          label:'排序受控属性',
                          tip:'sortOrder|排序的受控属性，外界可用此控制列的排序'
                        },
                        propType:{ type:'oneOf',value:['','ascend','descend']},
                        setter:{
                          componentName:'RadioGroupSetter',
                          props:{
                            options:[
                              { title:'不排序',value:''},
                              { title:'升序',value:'ascend'},
                              { title:'降序',value:'descend'}
                            ]
                          }
                        }
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
                        name:'class',
                        title:{
                          label:'列的class',
                          tip:'class|列的class'
                        },
                        propType:{ type: 'oneOfType', value: ['string', 'func'] },
                        setter:[
                          'StringSetter','FunctionSetter'
                        ]
                      },
                      {
                        name: 'customRender',
                        title: {
                          label: '自定义渲染',
                          tip:
                            'customRender | 插槽内的物料表达式可通过this.data.record获取当前行数据，this.data.index获取索引(该项用于自定义操作列)',
                        },
                        propType: { type: 'oneOfType', value: ['string','node','func'] },
                        setter: [
                          {
                            componentName: 'SlotSetter',
                            title: '单元格插槽',
                            initialValue: {
                              type: 'JSSlot',
                              params: ['data'],
                              value: [],
                            },
                          },
                          'VariableSetter'
                        ]
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
          propType: {type:'oneOfType',value:['bool','object']},
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
          defaultValue:false
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
          name: 'pagination.pageSizeOptions',
          title: { label: '每页条数组', tip: 'pagination.pageSizeOptions | 指定每页可以显示多少条' },
          propType: {
            type: 'arrayOf',
            value: { type: 'oneOfType', value: ['string'] },
          },
          defaultValue:['10','20','50','100'],
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
          }
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
          name:'pagination.itemRender',
          title:{label:"自定义页面结构",tip:"用于自定义页码的结构"},
          propType:{type:'oneOfType',value:['func','node']},
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
          setter: [
            'FunctionSetter',
            {
              componentName: 'SlotSetter',
              initialValue: {
                type: 'JSSlot',
                value: [],
              },
            },
          ],
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
          propType: {type:'oneOfType',value:['object','bool']},
          setter:['JsonSetter','boolSetter'],
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
        {
          name:'rowSelection.onSelect',
          title:{
            label:'选择/反选回调',
            tip:'用户手动选择/取消选择某列的回调'
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'onSelect(record,${extParams}){\n// 用户手动选择/取消选择某列的回调\nreturn ${record.id};\n}',
              },
            }
          ],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          }
        },
        {
          name:'rowSelection.onSelectAll',
          title:{
            label:'全选/反选回调',
            tip:'用户手动选择/取消选择所有列的回调'
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'onSelectAll(record,${extParams}){\n// 用户手动选择/取消选择所有列的回调\nreturn ${record.id};\n}',
              },
            }
          ],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          }
        }
      ],
    },
    {
      title: '行展开',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'expandedRowRender',
          title: {
            label: '展开行渲染',
            tip: 'expandedRowRender | 额外的展开行',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'SlotSetter',
              title: '展开行插槽',
              initialValue: {
                type: 'JSSlot',
                params: ['data']
              },
            },
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'onExpandedRowRender(data,${extParams}){\n// 展开行渲染\nreturn `${data.id}`}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name:'defaultExpandAllRows',
          title:{
            label:'初始是否展开所有行',
            tip:'defaultExpandAllRows|初始时，是否展开所有行'
          },
          propType:'bool',
          setter:['BoolSetter','VariableSetter']
        },
        {
          name:'expandedRowKeys',
          title:{
            label:'展开的行',
            tip:'expandedRowKeys|展开的行，控制属性'
          },
          propType:{
            type: 'arrayOf', value:'string'
          }
        },
        {
          name: 'rowExpandable',
          title: {
            label: '是否可展开',
            tip: 'rowExpandable | 行是否可展开',
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
          propType: {
            type:'oneOfType',
            value:['func','node']
          },
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
          name:'emptyText',
          title:{label:'空数据文本',tip:'自定义空数据时的显示内容'},
          propType:{type:'oneOfType',value:['string','node','func']},
          defaultValue:'暂无数据'
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
        }
      ]
    },
  ],
  configure:{
    supports:{
      style:true,
      events: [
        {
          name: 'onChange',
          template:
            "onChange(pagination,filters,sorter,extra,${extParams}){\n// 分页、排序、筛选变化时触发\nconsole.log('onChange', pagination);}",
        },
        {
          name: 'onExpandedRowsChange',
          template:
            "onExpandedRowsChange(expanded, record,${extParams}){\n// 展开的行变化时触发\nconsole.log('onExpandedRowsChange', expanded, record);}",
        },
        {
          name: 'onExpand',
          template:
            "onExpand(expanded,record){\n// 点击展开图标时触发\nconsole.log('onExpand', expanded, record);}",
        },
      ],
    }
  },
  snippets:[
    {
      title:'表格',
      screenshot: avatarImg,
      schema:{
        componentName:'ATable',
        props:{
          style:{
            backgroundColor:'#fff',
            marginTop:'4px',
            minHeight:'240px',
            color:"#000"
          },
          showHeader:true,
          size:'small',
          dataSource:[
            {
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
            }
            ],
          columns: [
            {
              title:"序号",
              dataIndex:'index',
              align:'center',
              fixed:'',
              ellipsis:false,
              filterSearch:false,
              filterMultiple:true,
              customRender:{
                type:'JSSlot',
                params:["data"],
                value:[
                  {
                    componentName:'ATypographyText',
                    props:{
                      children:{
                        type:"JSExpression",
                        value:"this.data.index+1",
                        mock:"text"
                      },
                      code:false,
                      delete:false,
                      underline:false,
                      strong:false,
                      style:{
                        color:'#000'
                      }
                    }
                  }
                ]
              },
              width:60
            },
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
              align:'center'
            },
            {
              title: '年龄',
              dataIndex: 'age',
              key: 'age',
              align:'center'
            },
            {
              title:'地址',
              dataIndex:'address',
              key:'address',
              align:'center'
            },
            {
              title:'操作',
              fixed:'right',
              align:'center',
              filterSearch:false,
              filterMultiple:true,
              customRender:{
                type:'JSSlot',
                params:["data"],
                value:[
                  {
                    componentName:"AButton",
                    props:{
                      type:"link",
                      children:"详情",
                      htmlType:"button",
                      size:'small',
                      shape:'default',
                      block:false,
                      ghost:false,
                      danger:false,
                      style:{
                        fontSize:"12px"
                      }
                    }
                  }
                ]
              },
              class:"operation-list"
            }
          ],
          rowKey: 'id',
          pagination: false
        }
      }
    }
  ]
}
