<template>
<div class="main">
  <div>
    <button @click="open">X</button>
  </div>
  <div class="panel">
    <div class="item" v-for="(one, idx) of shortPanel" :key="one"
         :style="{
            backgroundImage: `url(${one ? one.icon : ''})`,
            backgroundSize: 'cover'
               }"
    >
      <p class="icon_num">{{idx + 1}}</p>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePanelStore } from '@/store/store'
import { storeToRefs } from 'pinia'
import router from '@/router'

export default defineComponent({
  name: 'ShortPanel',
  setup () {
    const store = usePanelStore()
    const { shortPanel } = storeToRefs(store)
    const open = () => {
      router.push({ path: '/setting' })
    }
    return {
      shortPanel,
      open
    }
  }
})
</script>

<style scoped>
.main {
  display: block;
  height: 100vh;
  position: relative;
}
.panel {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.item {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  margin: 5px;
  overflow: hidden;
}

.icon_num {
  position: absolute;
  margin: 0 0 0 4px;
  top: 0;
  left: 0;
}

</style>
