// @ts-ignore
import Row1 from './__screenshots__/row-1.png?inline';
// @ts-ignore
import Row2 from './__screenshots__/row-2.png?inline';
// @ts-ignore
import Row3 from './__screenshots__/row-3.png?inline';
// @ts-ignore
import Row4 from './__screenshots__/row-4.png?inline';
export default {
  group: 'ant-vue组件',
  componentName: 'ARow',
  title: '栅格-行',
  category: '布局',
  props: [
    {
      name: 'align',
      title: { label: '垂直对齐方式', tip: '垂直对齐方式' },
      propType: { type: 'oneOf', value: ['top', 'middle', 'bottom'] },
    },
    {
      name: 'gutter',
      title: {
        label: '间隔',
        tip: '栅格间隔，单位为像素(px)',
      },
      propType: {
        type:'oneOfType',
        value:['object',{ type: 'arrayOf', value: 'number' },'number']
      },
      defaultValue: { xs: 8, sm: 16, md: 24},
      extraProps: {
        getValue(target: { node: any; }) {
          const { node } = target;
          const gutter = node.getPropValue('gutter');
          if (typeof gutter === 'number') {
            return gutter;
          } else if (Array.isArray(gutter)) {
            return gutter[0];
          }
          return 0;
        },
        setValue(target: { node: any; }, value: any) {
          const { node } = target;
          const gutter = node.getPropValue('gutter');
          if (Array.isArray(gutter)) {
            gutter[0] = value;
            node.setPropValue('gutter', gutter);
          } else {
            node.setPropValue('gutter', [value, 0]);
          }
        },
      },
    },
    {
      name: 'justify',
      title: { label: '水平排列方式', tip: '水平排列方式' },
      propType: {
        type: 'oneOf',
        value: ['start', 'end', 'center', 'space-around', 'space-between'],
      },
    },
    {
      name: 'wrap',
      title: { label: '自动换行', tip: '是否自动换行' },
      propType: 'bool',
      defaultValue: true,
    },
  ],
  configure: {
    component: { isContainer: true, nestingRule: { childWhitelist: ['ACol'] } },
    supports: { style: true }
  },
  snippets:[
    {
      title: '栅格-两栏',
      screenshot: Row1,
      schema: {
        componentName: 'ARow',
        props: {},
        children: [
          {
            componentName: 'ACol',
            props: {
              span: 12,
            },
          },
          {
            componentName: 'ACol',
            props: {
              span: 12,
            },
          },
        ],
      },
    },
    {
      title: '栅格-三栏',
      screenshot: Row2,
      schema: {
        componentName: 'ARow',
        props: {},
        children: [
          {
            componentName: 'ACol',
            props: {
              span: 8,
            },
          },
          {
            componentName: 'ACol',
            props: {
              span: 8,
            },
          },
          {
            componentName: 'ACol',
            props: {
              span: 8,
            },
          },
        ],
      },
    },
    {
      title: '栅格-四栏',
      screenshot: Row3,
      schema: {
        componentName: 'ARow',
        props: {},
        children: [
          {
            componentName: 'ACol',
            props: {
              span: 6,
            },
          },
          {
            componentName: 'ACol',
            props: {
              span: 6,
            },
          },
          {
            componentName: 'ACol',
            props: {
              span: 6,
            },
          },
          {
            componentName: 'ACol',
            props: {
              span: 6,
            },
          },
        ],
      },
    },
    {
      title: '栅格-1:3',
      screenshot:Row4,
      schema: {
        componentName: 'ARow',
        props: {},
        children: [
          {
            componentName: 'ACol',
            props: {
              span: 6,
            },
          },
          {
            componentName: 'ACol',
            props: {
              span: 18,
            },
          },
        ],
      },
    }
  ]
}
