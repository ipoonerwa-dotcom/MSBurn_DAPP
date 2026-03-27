<template>
  <div class="vortex-container">
    <div class="vortex-glow"></div>
    <div class="vortex-ring ring-1"></div>
    <div class="vortex-ring ring-2"></div>
    <div class="vortex-ring ring-3"></div>
    <div class="vortex-core">
      <span class="core-emoji">🐴</span>
    </div>
    <!-- 粒子被吸入效果 -->
    <div v-for="p in particles" :key="p.id" class="particle"
      :style="{
        '--angle': p.angle + 'deg',
        '--delay': p.delay + 's',
        '--dist': p.dist + 'px',
        '--size': p.size + 'px',
        '--color': p.color,
      }"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const colors = ['#FF6B35', '#FFD700', '#FF4081', '#00E5FF', '#AA00FF', '#76FF03']
const particles = ref(
  Array.from({ length: 20 }, (_, i) => ({
    id: i,
    angle: Math.random() * 360,
    delay: Math.random() * 4,
    dist: 60 + Math.random() * 60,
    size: 2 + Math.random() * 3,
    color: colors[Math.floor(Math.random() * colors.length)],
  }))
)
</script>

<style scoped>
.vortex-container {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 20px auto;
}

.vortex-glow {
  position: absolute;
  inset: -30px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(170,0,255,0.15) 0%, rgba(0,0,0,0) 70%);
  animation: pulse-glow 3s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}

.vortex-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid;
  animation: spin-ring linear infinite;
}

.ring-1 {
  inset: 10px;
  border-color: rgba(255, 107, 53, 0.4);
  animation-duration: 8s;
}

.ring-2 {
  inset: 25px;
  border-color: rgba(255, 215, 0, 0.3);
  animation-duration: 6s;
  animation-direction: reverse;
}

.ring-3 {
  inset: 40px;
  border-color: rgba(170, 0, 255, 0.4);
  animation-duration: 4s;
}

@keyframes spin-ring {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.vortex-core {
  position: absolute;
  inset: 55px;
  border-radius: 50%;
  background: radial-gradient(circle, #1a0a30 0%, #0A0A1A 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(170, 0, 255, 0.3), inset 0 0 20px rgba(0,0,0,0.8);
}

.core-emoji {
  font-size: 36px;
  animation: float-core 3s ease-in-out infinite;
}

@keyframes float-core {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.1) rotate(5deg); }
}

/* 粒子吸入动画 */
.particle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: var(--color);
  box-shadow: 0 0 6px var(--color);
  animation: spiralIn 4s var(--delay) linear infinite;
}

@keyframes spiralIn {
  0% {
    transform: rotate(var(--angle)) translateX(var(--dist)) scale(1);
    opacity: 0.8;
  }
  80% {
    opacity: 0.6;
  }
  100% {
    transform: rotate(calc(var(--angle) + 720deg)) translateX(0px) scale(0);
    opacity: 0;
  }
}
</style>
