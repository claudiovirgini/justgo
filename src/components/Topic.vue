<template>
<v-app>
  <v-list dense>
    <v-list-tile @click="">
      <v-list-tile-action class="icon">
        <!-- <v-icon>content_paste</v-icon> -->
        <img src="../../static/img/mountain.svg" />
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
          <v-switch label="Mountain" v-model="search" value="mountain"></v-switch>
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile @click="">
      <v-list-tile-action class="icon">
        <img src="../../static/img/sea.svg" />
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
          <v-switch label="Sea" v-model="search" value="sea"></v-switch>
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-divider></v-divider>
    <v-list-tile @click="">
      <v-list-tile-action class="icon">
        <img src="../../static/img/adventure.svg" />
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
          <v-switch label="Adventure" v-model="search02" value="adventure"></v-switch>
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile @click="">
      <v-list-tile-action class="icon">
        <img src="../../static/img/laze.svg" />
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
          <v-switch label="Laze" v-model="search02" value="laze"></v-switch>
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-divider></v-divider>
    <v-list-tile @click="">
      <v-list-tile-action class="icon">
        <img src="../../static/img/nature.svg" />
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
          <v-switch label="Nature" v-model="search03" value="nature"></v-switch>
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-list-tile @click="">
      <v-list-tile-action class="icon">
        <img :src="'../../static/img/city.svg'" alt="City" />
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
          <v-switch label="City" v-model="search03" value="city"></v-switch>
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
    <v-divider></v-divider>
  </v-list>
</v-app>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Topic',
  data: () => ({
    drawer: null,
    countries: []
  }),
  props: ['search', 'search02', 'search03'],
  computed: {
    filteredCustomers: function() {
      const {
        search,
        search02,
        search03
      } = this;
      return this.countries
        .filter(card => card.tag === search || card.tag02 === search02 || card.tag03 === search03)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon img {
  width: 30px;
  height: auto;
}
</style>
