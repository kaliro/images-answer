<template>
  <v-container>
    <v-card
      class="mx-auto my-12"
      max-width="700"
      @touchstart="showAnwser"
      @touchmove="hideAnwser"
      @touchend="hideAnwser"
    >
      <ImagenCarusel
        :data-images="answerImagens"
        :imagen-path="imagenPath"
        :slider-time="slideTime"
        :spot="showSpot"
        @onchangestory="onChangeStory"
      />

      <v-fade-transition>
        <v-overlay v-if="overlay" absolute :opacity="opacity">
          <div>
            <img class="test-overlay" :src="fullPath(currentTest.answer)" />
          </div>
        </v-overlay>
      </v-fade-transition>
    </v-card>
  </v-container>
</template>
<script>

export default {
  data() {
    return {
      imagenPath: '',
      currentTest: [],
      allTestData: [],
      slideTime: 0,
      showSpot: false,
      overlay: false,
      absolute: true,
      opacity: 0,
      testName: this.$route.params.test,
      answerImagens: []
    }
  },
  created() {
    this.loadTests()
  },
  methods: {
    loadTests() {
      const rawTest = require('assets/tests/' + this.testName + '.json')

      this.imagenPath = '/images/tests/' + rawTest.ImagesPath
      this.allTestData = rawTest.Data
      this.answerImagens = rawTest.Data.map((x) => x.question)
      this.slideTime= rawTest.TimeSlider
      this.showSpot= rawTest.ShowSpot

      this.currentTest = this.allTestData[0]
    },
    onChangeStory(index) {
      this.hideAnwser()
      this.currentTest = this.allTestData[index]
    },
    fullPath(imagen) {
      return this.imagenPath + imagen
    },
    showAnwser() {
      this.overlay = true
    },
    hideAnwser() {
      this.overlay = false
    },
  },
}
</script>

<style >
.test-overlay {
  overflow: hidden;
  position: relative;
  display: block;
  width: 100%;
}
</style>
