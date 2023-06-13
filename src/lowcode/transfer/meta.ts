import {uuid} from '../../utils/index';
// @ts-ignore
import avatarImg from './__screenshots__/transfer-1.png?inline';
export default {
  group: 'ant-vue组件',
  componentName:'ATransfer',
  title: '穿梭框',
  category: '数据展示',
  npm: {
    destructuring: true,
    componentName: 'ATransfer'
  },
  props:[
    {
      name: 'dataSource',
      title: {
        label: '数据源',
        tip: 'dataSource|数据源，其中的数据将会被渲染到左边一栏中，`targetKeys` 中指定的除外',
      },
      propType: { type: 'arrayOf', value: 'object' },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'ObjectSetter',
            initialValue: () => {
              return {
                key: uuid(),
              };
            },
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
                    title: 'title',
                    setter: 'StringSetter',
                    isRequired: true,
                  },
                  {
                    name: 'description',
                    title: '描述',
                    setter: 'StringSetter',
                  },
                  {
                    name: 'disabled',
                    title: '禁止穿梭',
                    setter: ['BoolSetter', 'FunctionSetter'],
                  },
                ],
              },
            },
          },
        },
      },
    },
    {
      name: 'v-model:selectedKeys',
      title: { label: '选中项', tip: 'v-model:selectedKeys|设置哪些项应该被选中' },
      propType: { type: 'arrayOf', value: 'string' },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: 'StringSetter'
        }
      },
      supportVariable: true,
    },
    {
      name: 'v-model:targetKeys',
      title: {
        label: '右侧框数据',
        tip: 'v-model:targetKeys|显示在右侧框数据的 key 集合',
      },
      propType: { type: 'arrayOf', value: 'string' },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: 'StringSetter'
        }
      },
      supportVariable: true,
    },
    {
      title: '常用设置',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'oneWay',
          title: { label: '展示为单向样式', tip: 'oneWay|展示为单向样式' },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
        },
        {
          name: 'disabled',
          title: { label: '是否禁用', tip: 'disabled|是否为禁用状态' },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
        },
        {
          name: 'showSearch',
          title: { label: '是否显示搜索框', tip: 'showSearch|是否显示搜索框' },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
        },
        {
          name: 'showSelectAll',
          title: { label: '是否展示全选勾选框', tip: 'showSelectAll|是否展示全选勾选框' },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: true,
        },
        {
          name: 'pagination',
          title: {
            label: '分页设置',
            tip: 'pagination|使用分页样式，自定义渲染列表下无效',
          },
          setter: [
            'BoolSetter',
            {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'pageSize',
                      title: '单页条数',
                      setter: 'NumberSetter',
                    },
                    {
                      name: 'simple',
                      title: '简单模式',
                      setter: 'BoolSetter',
                    },
                    {
                      name: 'showSizeChanger',
                      title: '展示条数切换器',
                      setter: 'BoolSetter',
                    },
                  ],
                },
              },
            }
          ],
          propType: {
            type: 'oneOfType',
            value: ['bool', 'object']
          },
          defaultValue: false,
        },
        {
          name: 'render',
          title: {
            label: '每行数据渲染函数',
            tip:
              'render|每行数据渲染函数，该函数的入参为 dataSource 中的项，返回值为 element。或者返回一个普通对象，其中 label 字段为 element，value 字段为 title',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'renderItem(record,${extParams}){\n// 每行数据渲染函数\nreturn record.title;\n}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'filterOption',
          title: {
            label: '过滤选项',
            tip:
              'filterOption|接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 true，反之则返回 false',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'filterOption(inputValue,option,${extParams}){\n// 接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false\n\n}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'footer',
          title: {
            label: '底部',
            tip: 'footer | 底部',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template: 'renderItem(item,${extParams}){\n// 自定义渲染列表项\nreturn `item`;\n}',
              },
            },
            {
              componentName: 'SlotSetter',
              title: '渲染函数插槽',
              initialValue: {
                type: 'JSSlot',
                value: [],
                params: ['props', 'info']
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'operations',
          title: {
            label: '操作文案',
            tip: 'operations|操作文案集合，顺序从上至下',
          },
          propType: { type: 'arrayOf', value: 'string' },
        },

        {
          name: 'titles',
          title: { label: '标题集合', tip: 'titles|标题集合，顺序从左至右' },
          propType: { type: 'arrayOf', value: 'node' },
        },
        {
          name: 'selectAllLabels',
          title: {
            label: '多选框标题集合',
            tip: 'selectAllLabels|自定义顶部多选框标题的集合',
          },
          propType: {
            type: 'arrayOf',
            value: { type: 'oneOfType', value: ['node', 'func'] },
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
          name: 'onChange',
          template:
            "onChange(targetKeys,direction,moveKeys,${extParams}){\n// 选项在两栏之间转移时的回调函数\nconsole.log('onChange',targetKeys,direction,moveKeys);}",
        },
        {
          name: 'onScroll',
          template:
            "onScroll(direction,event,${extParams}){\n// 选项列表滚动时的回调函数\nconsole.log('onScroll',direction,event);}",
        },
        {
          name: 'onSearch',
          template:
            "onSearch(direction,value,${extParams}){\n// 搜索框内容时改变时的回调函数\nconsole.log('onSearch',direction,value);}",
        },
        {
          name: 'onSelectChange',
          template:
            "onSelectChange(sourceSelectedKeys,targetSelectedKeys,${extParams}){\n// 选中项发生改变时的回调函数\nconsole.log('onSelectChange',sourceSelectedKeys,targetSelectedKeys);}",
        },
      ]
    }
  },
  snippets:[
    {
      title:"穿梭框",
      screenshot:avatarImg,
      schema:{
        componentName:"ATransfer",
        props:{
         dataSource:[
           {
              key:uuid(),
              title:'测试数据1'
           },
           {
             key:uuid(),
             title:'lyllovelemon'
           },
           {
             key:uuid(),
             title:'lyltest'
           },
           {
             key:uuid(),
             title:'content 4'
           },
           {
             key:uuid(),
             title:'content 5'
           }
           ],
         render:{
           type:"JSFunction",
           value: `function renderItem(record, extParams) {
              return record.title;
            }`,
          }
        }
      }
    }
  ]
}
