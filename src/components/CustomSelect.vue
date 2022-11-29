<template>
  <div style="height: fit-content"
    ref="btnGrp">
    <button
      v-for="spell in spellList"
      :key="spell.id"
      :style="{
        backgroundImage: `url(${spell.icon})`,
        width: '40px',
        height: '40px',
        backgroundSize: 'cover',
        padding: 0,
        border: '1px solid white',
        borderRadius: '5px'
      }"
    @click="handleClick(spell)">
    </button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CustomSelect',
  props: {
    spellList: Array
  },
  setup (props, { emit }) {
    const btnGrp = ref()
    const handleClick = (skill) => {
      emit('setSkill', skill)
    }
    return {
      btnGrp,
      handleClick
    }
  }
})
</script>

<style scoped>
  button:hover {
    scale: 0.9;
  }
</style>
