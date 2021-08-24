<template>
  <div class="images-answer">
    <ul class="images-answer__wrapper">
      <li
        v-for="(dataImage, index) in dataImagesLocal"
        :key="index"
        class="images-answer__item"
      >
        <div
          :class="classThumbnail(dataImage)"
          @click="onSelectImage(dataImage)"
        >
          <img
            :id="dataImage.id"
            :src="fullUrl(dataImage.src)"
            height="auto"
            width="auto"
            class="images-answer__img"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ImageAnswer',
  props: {
    dataImages: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      imageSelected: {},
    }
  },
  computed: {
    dataImagesLocal() {
      return this.dataImages || []
    },
  },
  mounted() {
    // set initial selectedImage
    // this.setInitialSelection();
  },
  methods: {
    classThumbnail(selectedId) {
      const baseClass = 'images-answer__thumbnail'
      if (this.imageSelected === selectedId) {
        return `${baseClass} ${baseClass}--selected`
      }
      return `${baseClass}`
    },
    onSelectImage(objectImage) {
      if (objectImage) {
        this.imageSelected = objectImage // Object.assign({}, this.imageSelected, objectImage)
        this.$emit('onselectimage', objectImage)
      }
    },
    fullUrl(url) {
      return require(`~/assets/images-answer/${url}`)
    },
  },
}
</script>
<style >
.images-answer {
  display: flex;
  justify-content: center;
}
.images-answer__wrapper {
  overflow: auto;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
}

.images-answer__item {
  margin: 0px 12px 12px 0px;
  float: left;
}

.images-answer__thumbnail {
  cursor: pointer;
  padding: 6px;
  border: 1px solid #dddddd;

  display: block;
  padding: 4px;
  line-height: 20px;
  border: 1px solid #ddd;

  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;

  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);

  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.images-answer__thumbnail--selected {
  background: #0088cc;
}

.images-answer__thumbnail--disabled {
  background: #b9b9b9;
  cursor: not-allowed;
}

.images-answer__thumbnail--disabled > .images-answer__img {
  opacity: 0.5;
}

.images-answer__img {
  -webkit-user-drag: none;
  display: block;
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
}

.images-answer__lbl {
  line-height: 3;
}

@media only screen and (min-width: 1200px) {
  .images-answer__item {
    margin-left: 30px;
  }
}
</style>
