// @ts-ignore
import avatarImg from './__screenshots__/page-header-1.jpg?inline'
export default {
  group: 'ant-vue组件',
  componentName:'APageHeader',
  title: '页头',
  category: '导航',
  npm: {
    destructuring: true,
    componentName: 'APageHeader'
  },
  props:[
    {
      name: 'title',
      title: { label: '标题', tip: 'title|自定义标题文字' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'subTitle',
      title: { label: '二级标题', tip: 'subTitle|自定义的二级标题文字' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'ghost',
      title: { label: 'ghost风格', tip: 'ghost|ghost风格' },
      propType: 'bool',
      defaultValue: true,
    },
    {
      name: 'tags',
      title: { label: 'tag 列表', tip: 'tags|title 旁的 tag 列表' },
      propType: 'node',
    },
    {
      name: 'extra',
      title: { label: '操作区', tip: 'extra|操作区，位于 title 行的行尾' },
      propType: 'node',
    },
    {
      name: 'footer',
      title: { label: '页脚', tip: 'footer|PageHeader 的页脚，一般用于渲染 TabBar' },
      propType: 'node',
    },
    {
      name: 'avatar',
      title: { label: '头像', tip: 'avatar|标题栏旁的头像' },
      propType: 'object',
      supportVariable: false,
      setter: [
        {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  name: 'src',
                  title: { label: '地址', tip: '头像地址' },
                  setter: {
                    componentName: 'StringSetter',
                  },
                },
              ],
            },
          },
        },
        'JsonSetter',
      ],
    },
    {
      name: 'breadcrumb',
      title: { label: '面包屑的配置', tip: 'breadcrumb|面包屑的配置' },
      propType: 'object',
      supportVariable: false,
      setter: [
        {
          componentName: 'ObjectSetter',
          props: {
            config: {
              items: [
                {
                  name: 'routes',
                  title: { label: '路由栈信息', tip: '路由栈信息' },
                  setter: {
                    componentName: 'ArraySetter',
                    props: {
                      itemSetter: {
                        componentName: 'ObjectSetter',
                        initialValue: {
                          path: 'path',
                          breadcrumbName: 'pathName',
                        },
                        isRequired: true,
                        props: {
                          config: {
                            items: [
                              {
                                name: 'path',
                                defaultValue: 'path',
                                title: { label: '路径', tip: 'path | 路径' },
                                setter: 'StringSetter',
                              },
                              {
                                name: 'breadcrumbName',
                                defaultValue: 'pathName',
                                title: {
                                  label: '名称',
                                  tip: 'breadcrumbName | 名称',
                                },
                                setter: 'StringSetter',
                              },
                            ],
                          },
                        },
                      },
                    },
                  },
                },
              ],
            },
          },
        },
        'JsonSetter',
      ],
    },
    {
      name: 'onBack',
      title: { label: '返回按钮的点击事件', tip: 'onBack|返回按钮的点击事件' },
      propType: 'func',
    },
  ],
  configure: {
    supports: {
      style:true,
      events: [
        {
          name: 'onBack',
          template: "onBack(${extParams}){\n// 返回按钮的点击事件\nconsole.log('onBack');}",
        }
      ]
    }
  },
  snippets:[
    {
      title:"页头",
      screenshot:avatarImg,
      schema:{
        componentName:"APageHeader",
        props:{
          title:"Title",
          subTitle:"lyl test for page-header"
        }
      }
    }
  ]
}
