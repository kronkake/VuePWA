<template>
  <div id="app">
    <MainHeader></MainHeader>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'

export default {
  name: 'app',
  components: { MainHeader }
}
</script>

<style>
  #app {
    display:  flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
  }
  .fade-enter-active {
    transition: all 0.4s ease;
  }
  .fade-enter {
    opacity: 0;
    transform: translateY(-10px);
  }
  .fade-enter-to {
    opacity: 1;
    transform: translateY(0px);
  }
</style>
