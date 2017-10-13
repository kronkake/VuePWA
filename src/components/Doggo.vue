<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="flexRow">
      <md-button class="md-raised md-primary" v-on:click="fetchPrevDog">Prev good Doggo</md-button>
      <md-button class="md-raised md-accent" v-on:click="fetchNextDog">Next good Doggo</md-button>
    </div>
    <img id="doggoImage" ref="doggoImage" v-if="dogUrls" :src="dogUrls[dogImageIndex]"></img>
    <span v-if="loading">{{ lasteText }}</span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Doggo',
  data () {
    return {
      msg: 'Welcome to Labrador heaven!',
      lasteText: 'Laster nytt bilde!',
      loading: true,
      dogImageIndex: 20
    }
  },
  mounted: function() {
    this.setUrls().then(() => {
      this.loading = false
    })
  },
  computed: {
    ...mapGetters({
      dogUrls: 'urls'
    })
  },
  methods: {
      ...mapActions([ 
          'setUrls'
      ]),
      fetchNextDog: function() {
        if (this.loading) { return }

        this.updateImageLoading()

        this.dogImageIndex++
        if (this.dogImageIndex === this.dogUrls.length) {
          this.dogImageIndex = 0
        }
      },
      fetchPrevDog: function() {
        if (this.loading) { return }

        this.updateImageLoading()

        this.dogImageIndex--
        if (this.dogImageIndex < 0) {
          this.dogImageIndex = this.dogUrls.length - 1 
        }
      },
      updateImageLoading: function() {
        if (!this.$refs.doggoImage) { this.loading = false; return }
        this.loading = true
        this.$refs.doggoImage.onload = () => {
        this.loading = false
      }
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
  .flexRow {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>
