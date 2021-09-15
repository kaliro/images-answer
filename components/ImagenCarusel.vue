<template>
  <div>
    <slide :data="sliderImagesUrls" :spot="spot" :type="transitionMode" :time="sliderTime" @change="onChangeEvent" />
  </div>
</template>

<script>
import slide from '@wyhaya/vue-slide'
export default {
  name: 'ImagenCarusel',
  components: { slide },
  props: {
    dataImages: {
      type: Array,
      default: () => [],
    },
    imagenPath: {
      type: String,
      require: true,
      default: '~/static',
    },
    spot: {
      type: Boolean,
      default: true,
    },
    transitionMode: {
      type: String,
      default: 'ease-in',
    },
    sliderTime: {
      type: Number,
      default: -1,
    }
  },
  data() {
    return {
      sliderImagesUrls: [],
    }
  },
  // computed: {
  //   dataImagesLocal() {
  //     return this.loadImagenUrl()|| []
  //   },
  // },
  beforeMount() {
    const allImagenUrl = this.loadImagenUrl()
    this.sliderImagesUrls = allImagenUrl
  },
  methods: {
    fullPathImage(imagenName) {
      return this.imagenPath + imagenName
    },
    onChangeEvent(index) {
      this.$emit('onchangestory', index)
    },
    loadImagenUrl() {
      const fullUrls = this.dataImages.map((x) => this.fullPathImage(x.imagen))
      return fullUrls
    },
  },
}
</script>
