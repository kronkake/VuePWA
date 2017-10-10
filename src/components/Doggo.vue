<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <md-button v-on:click="fetchNewDog">Click to see a new good doggo</md-button>
    <img v-if="dogUrl" :src="dogUrl"></img>
    <span v-if="loading">{{ lasteText }}</span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Doggo',
  data () {
    return {
      msg: 'Look at all those cute doggies!',
      loading: false,
      lasteText: 'Laster nytt bilde!'
    }
  },
  mounted: function() {
    if (!this.dogUrl) {
        this.fetchNewDog()
    }
  },
  computed: {
    ...mapGetters({
      dogUrl: 'url',
    })
  },
  methods: {
      ...mapActions([ 
          'setUrl'
      ]),
      fetchNewDog: function() {
          this.loading = true
          this.get('https://dog.ceo/api/breeds/image/random')
          .then((data) => { 
              this.setUrl(data.message)
              this.loading = false
        } ).catch((exp) => {
              this.lasteText = 'Noe gikk galt.'
              console.error(exp)
        })
    },
    get: async function(url) {
      const response = await fetch(url)
      const data = await response.json()
      return data
    }
      
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
