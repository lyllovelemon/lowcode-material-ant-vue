/* eslint-disable */
// @ts-ignore
import avatarImg from './__screenshots__/input-1.png?inline';
export default {
  group: 'ant-vue组件',
  componentName: 'AInput',// 组件名
  title: '输入框', // 组件对应标题
  category: '表单', // 分类
  npm: {
    destructuring: true,  // 是否解构
    componentName: 'AInput'// 导出组件名
  },
  // props 支持配置的属性
  props: [
    {
      name: 'defaultValue', // 属性名
      title: { label: '默认值', tip: 'defaultValue | 默认内容' },// 属性标题
      propType: 'string',// 类型检查
      setter: 'StringSetter',// 设置器定义
    },
    {
      name: 'v-model:value',
      title: { label: '当前值', tip: 'v-model:value | 当前值' },
      propType: 'string',
      setter: 'StringSetter'
    },
    {
      name: 'label',
      propType: 'string',
      title: {label:'标签文案',tip:'label | 标签文案'},
      description: 'label'
    },
    {
      name: 'allowClear',
      title: { label: '支持清除', tip: 'allowClear | 是否允许清除' },
      propType: 'bool',
      setter: 'BoolSetter',
    },
    {
      name: 'bordered',
      title: { label: '显示边框', tip: 'bordered | 是否有边框' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: 'disabled | 是否为禁用状态' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
    },
    {
      name: 'placeholder',
      title: { label: '占位提示', tip: 'placeholder | 占位提示' },
      propType: 'string',
      defaultValue: '请输入',
      setter: 'StringSetter'
    },
    { name: 'id', title:'id',propType: 'string', description: 'ID' },
    { name: 'name',title:'name',propType: 'string' },
    {
      name: 'type',
      title:{label:'类型',tip:'type | 类型'},
      propType: {
        type: 'oneOf',
        value: ['text', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'time', 'url', 'week', 'button', 'checkbox', 'color', 'date', 'textarea']
      }
    },
    {
      name: 'maxLength',
      title: { label: '最大长度', tip: 'maxLength | 最大长度' },
      propType: 'number',
      setter: 'NumberSetter',
    },
    {
      name: 'size',
      title: { label: '控件大小', tip: 'size | 控件大小' },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '大',
              value: 'large',
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
      propType: { type: 'oneOf', value: ['large', 'middle', 'small'] },
      defaultValue: 'middle',
    },
    {
      name: 'addonAfter',
      title: { label: '后置标签', tip: 'addonAfter | 后置标签' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'addonBefore',
      title: { label: '前置标签', tip: 'addonBefore | 前置标签' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'prefix',
      title: { label: '前缀', tip: 'prefix | 前缀' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'suffix',
      title: { label: '后缀', tip: 'suffix |后缀' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'onChange',
      title: { label: '输入框内容变化时的回调', tip: 'onChange | 输入框内容变化时的回调' },
      propType: 'func',
    },
    {
      name: 'onPressEnter',
      title: { label: '按下回车的回调', tip: 'onPressEnter | 按下回车的回调' },
      propType: 'func',
    },
    {
      name: 'onFocus',
      title: { label: '获取焦点回调', tip: 'onFocus | 获取焦点回调' },
      propType: 'func',
    },
    {
      name: 'onKeyDown',
      title: { label: '按键按下时的回调', tip: 'onKeyDown | 按键按下时的回调' },
      propType: 'func',
    },
    {
      name: 'onKeyPress',
      title: { label: '按键按下后的回调', tip: 'onKeyPress | 按键按下之后释放之前的回调' },
      propType: 'func',
    },
    {
      name: 'onKeyUp',
      title: { label: '按键释放回调', tip: 'onKeyUp | 按键释放之后的回调' },
      propType: 'func',
    },
    {
      name: 'onBlur',
      title: { label: '失去焦点回调', tip: 'onBlur | 失去焦点回调' },
      propType: 'func',
    }
  ],
  configure: {
    supports: {
      style: true,// 是否支持css样式
      events: [
        {
          name: 'onChange',// 事件名
          // 事件对应回调
          template:
            "onChange(event,${extParams}){\n// 输入框内容变化时的回调\nconsole.log('onChange',event);}",
        },
        {
          name: 'onPressEnter',
          template:
            "onPressEnter(event,${extParams}){\n// 按下回车的回调\nconsole.log('onPressEnter',event);}",
        },
        {
          name: 'onFocus',
          template: "onFocus(event,${extParams}){\n// 获取焦点回调\nconsole.log('onFocus',event);}",
        },
        {
          name: 'onKeyDown',
          template:
            "onKeyDown(event,${extParams}){\n// 按键按下时的回调\nconsole.log('onKeyDown',event);}",
        },
        {
          name: 'onKeyPress',
          template:
            "onKeyPress(event,${extParams}){\n// 按键按下后的回调\nconsole.log('onKeyPress',event);}",
        },
        {
          name: 'onKeyUp',
          template: "onKeyUp(event,${extParams}){\n// 按键释放回调\nconsole.log('onKeyUp',event);}",
        },
        {
          name: 'onBlur',
          template: "onBlur(event,${extParams}){\n// 按键释放回调\nconsole.log('onBlur',event);}",
        }
      ]
    }
  },
  // snippets组件库展示字段
  snippets: [
    {
      title: '输入框',//标题
      screenshot: avatarImg,// 图片
      schema: {
        componentName: 'AInput',// 组件名
        // props定义了默认属性
        props: {
          style:{
            width:'160px',
            height:'22px',
            display:'inline-flex',
            alignItems:'center',
            marginRight:'10px',
            backgroundColor:'#ddf4ff',
            border:'1px solid #ddf4ff'
          },
          type: 'text',
          size: 'default',
          placeholder: '请输入',
          autocomplete: 'off',
          label:"",
          bordered:true,
          name:"",
          prefix:{
            type:"JSSlot",
            value:[
              {
                componentName:'ATypographyText',
                props:{
                  children:'用户姓名：',
                  code:false,
                  delete:false,
                  disabled:false,
                  mark:false,
                  keyboard:false,
                  underline:false,
                  strong:false,
                  style:{
                    color:'#707070',
                    fontSize:'12px'
                  }
                }
              }
            ]
          }
        }
      }
    }
  ]
};
