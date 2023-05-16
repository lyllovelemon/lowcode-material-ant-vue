<template>
    <div class="lc-antd-icon-setter">
        <a-popover class="lc-antd-icon-setter-balloon" visible title="" trigger="click">
            <template #content>
                <div class="lc-antd-icon-setter-header">
                    <a-radio-group v-model:value="selectedGroup" @change="changeGroup">
                        <a-radio v-for="item in groups" :key="item.group" :value="item.group">{{IconGroupNameMap[item.group]}}</a-radio>
                    </a-radio-group>
                    <a-input-search class="lc-antd-icon-setter-header-search"
                                    v-model:value="search"
                                    placeholder="请输入"
                                    @change="onSearch" />
                </div>
                <div class="lc-antd-icon-setter-content">
                    <ul class="lc-antd-icon-setter-list">
                        <li class="lc-antd-icon-setter-list-item" v-for="item in list" :key="item.name" @click="handleChange(item.name)">
                          <Icon :type="item.name" :icons="icons" style="font-size: 16px;"/>
                          <div class="lc-antd-icon-setter-list-item-name">{{item.name}}</div>
                        </li>
                    </ul>
                </div>
            </template>
            <a-button type="primary">Hover me</a-button>
        </a-popover>
    </div>
</template>
<script setup lang="ts">
  /* eslint-disable */
  import { ref,onMounted,watch,defineProps } from 'vue';
  import { get } from '../../../utils';
  import Icon from './Icon.vue';

  type IconGroup = 'outlined' | 'filled' | 'two-tone' | 'iconfont';
  const IconGroupNameMap: Record<IconGroup, string> = {
    outlined: '线框风格',
    filled: '实底风格',
    'two-tone': '双色风格',
    iconfont: 'Iconfont',
  };

  const props=  defineProps({
    value:String,
    type:String,
    defaultValue:String,
    placeholder:String,
    hasClear:Boolean,
    change:()=>undefined,
    icons:Array
  })

  const search = ref<string>('');
  let icons = ref<any>({})
  let groups = ref<{ group: IconGroup|string; list: any[]; }[]>([])
  let selectedGroup = ref<IconGroup|string>('outlined')
  let firstLoad = ref<boolean>(true);
  let list = ref<any[]>([]);
  let {value,defaultValue,type,change=(val: any)=>{},placeholder} = props
  if(firstLoad && defaultValue && typeof value==='undefined'){
    change(defaultValue);
    firstLoad.value = false
  }


  const handleChange=(icon:string)=>{
    if(type==='string'){
      change(icon)
    } else if(type==='node'){
      change({
        componentName:"AIcon",
        props:{
          type:Icon
        }
      })
    }
  };

  const onSearch = (searchValue: string) => {
    search.value = searchValue
    console.log('onSearch value', searchValue);
  };


  const getIconfontIconList=()=> {
    const iframe = document.querySelector<HTMLIFrameElement>(
      'iframe.lc-simulator-content-frame',
    )!;

    const antdIcons = get(iframe, 'contentWindow.icons', {}) as Record<
      string,
      any
      >;

    // iconfont的js会在页面中添加svg元素
    const symbols = Array.prototype.slice.call(
      iframe.contentDocument!.querySelectorAll(
        'svg[style="position: absolute; width: 0px; height: 0px; overflow: hidden;"][aria-hidden="true"] > symbol',
      ),
    );

    const Icon = antdIcons.createFromIconfontCN();
    let list:any[] = []
    symbols.map(symbol=>{
      const {id}=  symbol;
      list.push({
        name:id,
        group:'iconfont',
        innerHTML: symbol.innerHTML
      })
    })
    return{
      list,
      Icon
    }
  }

  const getAntdIconList=()=> {
    const iframe = document.querySelector<HTMLIFrameElement>(
      'iframe.lc-simulator-content-frame',
    );

    const antdIcons = get(iframe, 'contentWindow.icons', {}) as Record<
      string,
      any
      >;

    return Object.keys(antdIcons)
      .map(key => {
        const item = (antdIcons as any)[key];

        if (typeof item !== 'object') {
          return null;
        }

        const name = item?.displayName || item?.render?.displayName || key;
        let group: IconGroup = 'outlined';

        const lowercaseName = name.toLowerCase();

        if (/outlined$/.test(lowercaseName)) {
          group = 'outlined';
        } else if (/filled$/.test(lowercaseName)) {
          group = 'filled';
        } else if (/twotone$/.test(lowercaseName)) {
          group = 'two-tone';
        } else {
          return null;
        }

        return {
          name,
          group,
          icon: item,
        };
      })
      .filter(Boolean);
  }

  const getIconList=()=> {
    const iconfontIconList = getIconfontIconList();
    const antdIconList = getAntdIconList();

    return [...antdIconList, ...iconfontIconList.list];
  }

  const handleList=()=>{
    const currentGroup = groups.value.find((item:{group:any})=>item.group === selectedGroup );
    list.value = (currentGroup?.list||[]).filter(item=>{
      return search.value
        ? item.name.toLowerCase().indexOf(search.value.toLowerCase())
        : true;
    })
  }

 onMounted(()=>{
  const iconList = getIconList()
  console.log('iconList------>',iconList)
  let currentIcons ={}
  let currentGroups: { group: IconGroup; list: any[]; }[] = []
  iconList.forEach(item=>{
    const { group} = item!;
    if(group.every((item: { group: any; })=>item.group!==group)){
      currentGroups.push({group:group as IconGroup,list:[]});
    }
    const target = currentGroups.find((item: { group: any; })=>item.group === group)!;
    target.list.push(item);
    icons[item!.name] = item?.icon;

    icons.value = currentIcons;
    groups.value = currentGroups;
    selectedGroup.value = currentGroups[0]?.group
  })
 })


 watch([()=>selectedGroup,()=>search,()=>groups],handleList,{immediate:true})
</script>
<style scoped lang="less">
    @import "./style.less";
</style>
