<template>
  <div class="main">
    <div>
      <button @click="open">X</button>
    </div>
    <div class="panel">
      <div class="item" v-for="(one, idx) of shortPanel" :key="one"
           @click="handleClick(idx)"
           style="position: relative"
           :style="{
            backgroundImage: `url(${one ? one.icon : ''})`,
            backgroundSize: 'cover'
               }"
      >
        <p class="icon_num">{{ idx + 1 }}</p>
        <div v-show="one?.isCd" class="item"
             style="position: absolute; width: 100%; height: 100%"
             :style="{
               background: `linear-gradient(360deg, rgba(0, 0, 0, 0.5) ${cooldownAnimation(one?.cd)}% , transparent ${cooldownAnimation(one?.cd)}%)`
           }"
        ></div>
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
    const cooldownAnimation = (cd: number, currentCd: number) => {
      const k = 100 / cd
      return k * currentCd
    }
    const handleClick = (idx: number) => {
      store.$patch((state) => {
        if (!state.shortPanel[idx].isCd) {
          state.shortPanel[idx].isCd = true
        }
        console.log(shortPanel.value[idx])
      })
    }
    return {
      shortPanel,
      open,
      handleClick,
      cooldownAnimation
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
  transition: all 1s ease-in-out;
}

.icon_num {
  position: absolute;
  margin: 0 0 0 4px;
  top: 0;
  left: 0;
}

</style>
