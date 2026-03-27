<template>
  <div class="stars-bg" ref="starsRef">
    <div
      v-for="s in stars"
      :key="s.id"
      class="star"
      :style="{
        left: s.x + '%',
        top: s.y + '%',
        '--dur': s.dur + 's',
        '--op': s.op,
        width: s.size + 'px',
        height: s.size + 'px',
        animationDelay: s.delay + 's',
      }"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const starsRef = ref(null)
const stars = ref([])

onMounted(() => {
  const arr = []
  for (let i = 0; i < 80; i++) {
    arr.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      dur: 2 + Math.random() * 4,
      op: 0.2 + Math.random() * 0.6,
      size: 1 + Math.random() * 2,
      delay: Math.random() * 5,
    })
  }
  stars.value = arr
})
</script>

<style scoped>
.stars-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}
</style>
