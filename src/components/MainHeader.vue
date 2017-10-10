<template>
    <div>
        <router-link to="/counter">Button counter {{ count }} </router-link>
        <router-link to="/"><img class="Rotating-logo" src="../assets/logo.png"></router-link>
        <router-link to="/doggo">Wanna see doggies?</router-link>
    </div>
</template>

<script>
export default {
  name: 'MainHeader',
  data () {
    return {
    }
  },
  computed: {
      count() {
          return this.$store.state.counter.count
      }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .Rotating-logo {
        animation: rotate 5s infinite linear;
        backface-visibility: visible;
    }

    @keyframes rotate {
        0% {
            transform: rotateY(0deg);
        }
        100% {
            transform: rotateY(360deg);
        }
    }
</style>
