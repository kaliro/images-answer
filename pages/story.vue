<template>
  <v-container>
    <v-card class="mx-auto my-12" max-width="700">
      <ImagenCarusel
        :data-images="dataImages"
        :imagen-path="imagenPath"
        :slider-time="slideTime"
        :spot="showSpot"
        @onchangestory="onChangeStory"
      />
      <v-card-text>
        <div>
          {{ currentStory.story }}
        </div>
        <div v-if="currentStory.order">
          {{ currentStory.order }}
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import rawStory from 'assets/story.json'

export default {
  data() {
    return {
      imagenPath: 'images/story/',
      currentStory: [],
      allStory: rawStory.Stories,
      slideTime: rawStory.TimeSlider,
      showSpot: rawStory.ShowSpot,
    }
  },
  computed: {
    dataImages() {
      return rawStory.Stories.map((x) => x.imagen)
    },
  },
  beforeMount() {
    this.loadStories()
  },
  methods: {
    loadStories() {
      this.currentStory = this.allStory[0]
    },
    onChangeStory(index) {
      this.currentStory = this.allStory[index]
    },
  },
}
</script>
