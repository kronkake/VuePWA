<template>
  <div class="hello">
    <h1>{{ msg }} {{ count }} </h1>
    <h2 style="text-align:center">Is the counter "even" or "odd"? </h2>
    <h2 style="text-align:center">{{ evenOrOdd }}</h2>
    <div class="flexRow">
      <md-button class="md-raised md-primary" v-on:click="increment">Increment</md-button>
      <md-button class="md-raised md-accent" v-on:click="decrement">Decrement</md-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'counter',
  data () {
    return {
      msg: 'This counter is powered bye Vuex'
    }
  },
  computed: {
    ...mapGetters({
      count: 'count',
      evenOrOdd: 'evenOrOdd'
    })
  },
  methods: mapActions([ 
        'increment',
        'decrement'
   ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .flexRow {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
</style>
