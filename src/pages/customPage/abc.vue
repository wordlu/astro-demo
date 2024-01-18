<script setup lang="ts">
  import Sortable from 'sortablejs';
  import { onMounted } from 'vue';

  onMounted(()=>{
    const components = document.getElementById('components') as HTMLElement
    const customPage = document.getElementById('customPage') as HTMLElement
    new Sortable(components, {
      group: {
          name: 'shared',
          pull: 'clone',
          put: false // 不允许拖拽进这个列表
      },
      animation: 150,
      sort: false // 设为false，禁止sort
    });

    new Sortable(customPage, {
      group: 'shared',
      animation: 150
    });
  })
  
</script>
<script>

</script>

<template>
<div class="sortable">
  <div id="components">
    <div class="components-item1">
      组件1
    </div>

    <div class="components-item2">
      组件2
    </div>
  </div>

  <div id="customPage">
    
  </div>
</div>
</template>

<style>
.sortable{
  width: 100%;
}

#components,#customPage{
  width: 500px;
  height: 500px;
  border: 1px solid #000000;
}

.components-item1{
  width: 200px;
  height: 50px;
  background-color: red;
}

.components-item2{
  width: 50px;
  height: 50px;
  background-color: green;
}

#customPage{
  display: grid;
}

.grid-item {
  width: 25%;
  height: 30px;
  padding: 10px;
  box-sizing: border-box;
}
</style>