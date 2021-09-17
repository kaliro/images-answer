<template>
  <v-card max-width="400" class="mx-auto">
    <v-container>
      <v-row dense>

        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card :color="item.color" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.description"></v-card-subtitle>

                <v-card-actions>
                  <v-btn  class="ml-2 mt-5" outlined rounded small :to="item.to">
                    START
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <v-icon x-large >{{item.icon}}</v-icon>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import config from 'assets/config.json'

export default {
  data() {
    return {
      items: [],
    }
  },
  created() {
    this.loadMenu()
  },
  methods: {
    loadMenu() {
      const rawMenu = config.Menu.filter(x=> !x.hidden)
      const rawTest = []
      config.Tests.forEach(x => {
        if(!x.hidden){
          x.to = `/tests/${x.fileName}`
          rawTest.push(x)
        }
      })
      this.items = rawMenu.concat(rawTest)
    },
  },
}
</script>
