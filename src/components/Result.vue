<template>
<v-app>
  <v-navigation-drawer fixed v-model="drawer" app clipped>
    <!-- topic -->
    <!-- <topic :search="search" :search02="search02" :search03="search03" /> -->
    <!-- /.topic -->
    <v-list dense>
      <v-list-tile @click="">
        <v-list-tile-action class="icon">
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
  </v-navigation-drawer>
  <v-toolbar color="indigo" dark fixed app clipped-left>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>Justgo</v-toolbar-title>
  </v-toolbar>
  <v-content>
    <v-container fluid fill-height>
      <v-layout column>
        <v-flex xs12>
          <v-container fluid grid-list-md class="grey lighten-4">
            <v-layout row wrap>
              <v-flex v-bind="{ [`xs${card.flex}`]: true }" v-for="card in filteredCustomers" :key="card.tag">
                <v-card hover="true" ripple="true">
                  <v-card-media :src="card.src" height="200px">
                    <div class="opacity"></div>
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline white--text" v-text="card.title"></span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-media>
                  <router-link class="total-btn" tag="button" :to="{ name: 'Country', params: { id: $route.params.id }, query: {country: card.title}}">
                  </router-link>
                  <v-card-actions class="white">
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>favorite</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>bookmark</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>share</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
  <v-footer color="indigo" app>
    <span class="white--text">&copy; 2018</span>
  </v-footer>
</v-app>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Result',
  data: () => ({
    drawer: null,
    countries: []
  }),
  // props: {
  //   source: String,
  // },
  props: ['search', 'search02', 'search03'],
  methods: {
    countryList: function() {
      this.error = null;
      axios.get('../static/data/country.json', {})
        .then(response => {
          console.log('countryList Response:', response)
          if (response.status !== 200) {
            this.error = response.statusText
            return
          }
          this.countries = response.data
        })
        .catch(error => {
          // Request failed.
          console.log('error', error.response)
          this.error = error.response
        })
    }
  },
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
  },
  mounted() {
    //from your component
    console.log("query ID:" + this.$route.query.country)
    this.countryList()
  }
}
</script>
<style lang="scss" scoped>
.opacity {
    background-color: rgba(0, 0, 0, 0.3);
    -moz-transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    -o-transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    -webkit-transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.headline {
    position: relative;
}

.search-wrapper {
    position: relative;
    label {
        position: absolute;
        font-size: 12px;
        color: rgba(0, 0, 0, .50);
        top: 8px;
        left: 12px;
        z-index: -1;
        transition: 0.15s all ease-in-out;
    }
    input {
        padding: 4px 12px;
        color: rgba(0, 0, 0, .70);
        border: 1px solid rgba(0, 0, 0, .12);
        transition: 0.15s all ease-in-out;
        background: white;
        &:focus {
            outline: none;
            transform: scale(1.05);
            &+label {
                font-size: 10px;
                transform: translateY(-24px) translateX(-12px);
            }
        }
        &::-webkit-input-placeholder {
            font-size: 12px;
            color: rgba(0, 0, 0, .50);
            font-weight: 100;
        }
    }
}
.icon img {
    width: 30px;
    height: auto;
}
.total-btn {
    position: absolute !important;
    top: 0;
    width: 100%;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    opacity: 0;
    /* z-index: 999; */
}
</style>
