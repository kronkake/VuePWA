<template>
    <header class="Header">
        <nav class="Nav-link-1"><router-link to="/counter" >Button counter {{ count }} </router-link></nav>
        <nav class="Nav-link-2"><router-link to="/" ><img class="Rotating-logo" src="../assets/favicon-white-on-orange.png"></router-link></nav>
        <nav class="Nav-link-3"><router-link to="/doggo" >Wanna see doggies?</router-link></nav>
    </header>
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
    .Header {
        padding-top: 10px;
        display: grid;
        align-items: center;
        grid-column-gap: 10px;
        grid-template-areas: 
            "Nav-link-1 Nav-link-2 Nav-link-3";
    }
    .Rotating-logo {
        animation: rotate 10s infinite linear;
        backface-visibility: visible;
        height: 100px;
        max-width: 150px;
    }
    .Nav-link-1 {
        grid-area: Nav-link-1;
    }
    .Nav-link-2 {
        grid-area: Nav-link-2;
        justify-self: center;
    }
    .Nav-link-3 {
        grid-area: Nav-link-3;
    }
    @media (max-width: 600px) {
        .Header {
            grid-row-gap: 15px;
            grid-template-areas:
            "Nav-link-2 Nav-link-2" 
            "Nav-link-1 Nav-link-3";
        }
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
