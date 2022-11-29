<template>
  <div class="main">
    <div class="close">
      <button @click="close">X</button>
    </div>
    <div class="block">
      <div class="items-spells">
        <div class="items">
          <div class="item" v-for="one of items" :key="one"
               :style="{
            backgroundImage: `url(${one.icon})`,
            backgroundSize: 'cover'
               }"
               draggable="true"
               @dragstart="dragStart($event, one)"
               style="height: 50px; width: 50px; border: 1px solid black; border-radius: 10px"></div>
        </div>
        <div class="spells">
          <div class="item" v-for="one of spells" :key="one"
               :style="{
            backgroundImage: `url(${one ? one.icon : ''})`,
            backgroundSize: 'cover'
               }"
               draggable="true"
               @dragstart="dragStart($event, one)"
               style="height: 50px; width: 50px; border: 1px solid black; border-radius: 10px">{{ one }}
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="item" v-for="(one, idx) of shortPanel" :key="one"
               @drop="onDrop($event, idx)"
               @dragover.prevent
               @dragenter.prevent
               :style="{
            backgroundImage: `url(${one ? one.icon : ''})`,
            backgroundSize: 'cover'
               }"
               style="width: 50px; height: 50px; border: 1px solid black; border-radius: 10px"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { Ability } from '@/type'
import { usePanelStore } from '@/store/store'
import { storeToRefs } from 'pinia'
import router from '@/router'

export default defineComponent({
  name: 'SettingShortPanel',
  setup () {
    const store = usePanelStore()
    const {
      items,
      spells,
      shortPanel
    } = storeToRefs(store)
    const arr2 = reactive(new Array(6))
    const dragStart = (e: DragEvent, item: Ability): void => {
      if (e.dataTransfer != null) {
        e.dataTransfer.dropEffect = 'copy'
        e.dataTransfer.setData('item', JSON.stringify(item))
      }
    }
    const onDrop = (e: DragEvent, idx: number): void => {
      if (e.dataTransfer != null) {
        const item = JSON.parse(e.dataTransfer.getData('item'))
        store.$patch((state) => {
          state.shortPanel[idx] = item
        })
      }
    }
    const close = () => {
      router.push({ path: '/' })
    }
    return {
      items,
      spells,
      shortPanel,
      arr2,
      dragStart,
      onDrop,
      close
    }
  }
})
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 20px 0 20px;
}

.block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.items-spells {
  display: flex;
  flex-flow: row nowrap;
  height: fit-content;
  width: 75%;
}

.items, .spells {
  display: flex;
  flex-flow: row wrap;
  width: 350px;
  margin: 0;
  padding: 0;
}

.close {
  display: flex;
  justify-content: flex-end;
  padding: 20px;
}

.item {
  overflow: hidden;
  margin: 10px;
}

</style>
