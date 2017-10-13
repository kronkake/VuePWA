<template>
  <div id="app">
    <MainHeader></MainHeader>
    <main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>
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
  * {
    line-height: 1em;
  }
  #app {
    display:  flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
    padding-right: 5px;
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
