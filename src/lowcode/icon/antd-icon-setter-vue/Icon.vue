<template>
<span role="img" class="anticon">
   <svg viewBox="64 64 896 896"
        width="1em"
        height="1em"
        fill="currentColor"
        :dangerouslySetInnerHTML="innerHTML"></svg>
</span>
</template>
<script setup lang="ts">
   /* eslint-disable */
 import {defineProps,reactive,onMounted} from 'vue';
 const props=defineProps({
   type:{
     type:String,
     default:'SmileOutlined'
   },
   icons:{

   },
   symbol:{
     type:Object,
     default(){
       return {
         innerHTML:''
       }
     }
   }
 })

 let innerHTML=  reactive<object>({})
 onMounted(()=>{
   innerHTML = {__html:props.symbol.innerHTML}
 })
</script>
