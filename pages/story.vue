<template>
  <v-container>
    <v-card class="mx-auto my-12" max-width="374">
      <ImagenCarusel
        :data-images="allStory"
        :imagen-path="imagenPath"
        @onchangestory="onChangeStory"
      />

      <v-card-text>
        <div>
          {{ currentStory.text }}
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
      imagenPath: '/images/story/',
      currentStory: [],
      allStory: rawStory,
      imageSelected: {},
    }
  },
  beforeMount() {
    this.loadStories()
  },
  methods: {
    loadStories() {
      this.currentStory = this.allStory[0]
    },
    onSelectImage(data) {
      this.imageSelected = data
      this.onSendImage()
    },
    onChangeStory(index) {
      this.currentStory = this.allStory[index]
    },
  },
}
</script>
