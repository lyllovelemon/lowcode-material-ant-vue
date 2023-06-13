export default {
  group: 'ant-vue组件',
  componentName:'ATimelineItem',
  title: '时间轴项',
  category: '数据展示',
  npm: {
    destructuring: true,
    componentName: 'ATimelineItem'
  },
  props:[
    {
      name:'color',
      title:{label:'颜色',tip:"color|颜色"},
      propType:'string',
      setter:'StringSetter',
      defaultValue:'blue'
    },
    {
      name:'dot',
      title:{label:'时间轴点',tip:'dot|自定义时间轴点'},
      propType:{type:'oneOfType',value:['string','node']}
    },
    {
      name:'label',
      title:{label:'标签',tip:'label|标签'},
      propType:{type:'oneOfType',value:['string','node']}
    },
    {
      name:'position',
      title:{label:'节点位置',tip:'position'},
      propType:{
        type:'oneOf',
        value:['left','right']
      },
      setter:{
        componentName:'RadioGroupSetter',
        props:{
          options:[
            { title:'left',value:'left'},
            { title:'right',value:'right'}
          ]
        }
      },
      defaultValue:'left'
    }
  ],
  configure: {
    supports: {
      style:true
    }
  },
  snippets:[
  ]
}
