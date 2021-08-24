<template>
  <v-container>
    <v-row justify="center" class="d-flex mb-6" no-gutters>
      <h2>{{ currentAnswer.question }}</h2>
    </v-row>
    <v-row class="d-flex mb-6" no-gutters>
      <ImageAnswer
        :data-images="currentAnswer.options"
        @onselectimage="onSelectImage"
      />
    </v-row>
    <v-row justify="center" class="d-flex mb-6">
      <v-btn
        class="ma-2"
        :loading="loading"
        :disabled="loading"
        color="primary"
        dark
        @click="onSendImage()"
      >
        Answer
        <template v-slot:loader>
          <span>Loading...</span>
        </template>
      </v-btn>
      <v-bottom-sheet v-model="dialog" persistent>
        <v-sheet class="text-center" height="200px">
          <v-btn class="mt-6" text color="error" @click="dialog = !dialog">
            Accept
          </v-btn>
          <div class="py-3">
            Congratulations!! Your finish all anwsers!!
          </div>
        </v-sheet>
      </v-bottom-sheet>
    </v-row>
  </v-container>
</template>
<script>
import rawData from 'assets/answer.json'
// import ImageAnswer from 'components/ImageAnswer.vue'

export default {
  data() {
    return {
      loading: false,
      dialog: false,
      currentAnswer: [],
      allAnswer: rawData,
      imageSelected: {},
    }
  },
  beforeMount() {
    this.loadAnswer()
  },
  methods: {
    loadAnswer() {
      this.currentAnswer = this.allAnswer[0]
    },
    onSelectImage(data) {
      this.imageSelected = data
    },
    onSendImage() {
      this.loading = true
      if (this.imageSelected.id === this.currentAnswer.response) {
        const answerIndex = this.allAnswer.indexOf(this.currentAnswer)
        if (answerIndex >= 0 && answerIndex < this.allAnswer.length - 1) {
          this.currentAnswer = this.allAnswer[answerIndex + 1]
        } else {
          this.dialog = true
        }
      }
      this.loading = false
    },
  },
}
</script>
