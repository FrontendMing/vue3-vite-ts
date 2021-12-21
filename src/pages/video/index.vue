<template>
  <div class="video">
    <div ref="domRef"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Player from 'xgplayer';
import videoUrl from '@/assets/video/1640058355851573.mp4';

const domRef = ref<HTMLElement | null>(null);
const player = ref<Player | null>(null);

const renderXgPlayer = () => {
  player.value = new Player({
    el: domRef.value!,
    url: videoUrl,
    playbackRate: [0.5, 0.75, 1, 1.5, 2],
    width: 323,
    height: 700,
  });
}

const destroyXgPlayer = () => {
  player.value?.destroy();
}

onMounted(() => {
  renderXgPlayer();
});

onUnmounted(() => {
  destroyXgPlayer();
});
</script>

<style lang="scss" scoped>
.video {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
