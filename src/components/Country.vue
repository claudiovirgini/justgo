<template>
<v-app id="inspire">

  <v-parallax src="/static/doc-images/parallax/material.jpg"></v-parallax>


  <v-toolbar color="indigo" dark fixed app>
    <v-toolbar-title>
      <router-link :to="{ path: '/'}">
        Justgo
      </router-link>
    </v-toolbar-title>
  </v-toolbar>
  <v-content>
    <v-container fluid fill-height>
      <v-layout column>
        <v-flex xs12>
          <v-container fluid grid-list-md class="grey lighten-4">
            <v-layout row wrap>
              Country: {{ $route.query.country }}
              <v-flex v-bind="{ [`xs${card.flex}`]: true }" v-for="card in countries">
                <v-card v-if="card.title === $route.query.country">
                  <iframe :src="card.iframeUrl" frameborder="0" width="100%" height="800"></iframe>
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
  data: () => ({
    drawer: null,
    search: '',
    search02: '',
    search03: '',
    countries: []
  }),
  props: {
    source: String
  },
  methods: {
    countryList: function() {
      this.error = null;
      axios.get('../static/data/country.json', {
          // params: {
          //   title: 'Reykjavik'
          // }
        })
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
    },
    startExploring: function() {
      // this.$refs.fileInput.click()
    }
  },
  // computed: {
  //   filteredCustomers: function() {
  //     const {
  //       search,
  //       search02,
  //       search03
  //     } = this;
  //     return this.cards
  //       .filter(card => card.tag === search || card.tag02 === search02 || card.tag03 === search03)
  //   }
  // },
  mounted() {
    //from your component
    console.log("query ID:" + this.$route.query.country)
    this.countryList()
    // this.startExploring()
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
.application a {
    color: #FFF;
    text-decoration: none;
}
</style>
