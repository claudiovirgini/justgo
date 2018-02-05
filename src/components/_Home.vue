<template>
<v-app>
  <div id="bg" v-if="filter">

  </div>
  <div id="e3" style="max-width: 800px; margin: auto;" class="grey lighten-3" v-if="filter">
    <v-container fluid style="min-height: 0;" grid-list-lg>
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action class="icon">
            <!-- <v-icon>content_paste</v-icon> -->
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <v-switch label="Mountain" v-model="search" value="mountain"></v-switch>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action class="icon">
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
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <v-switch label="Adventure" v-model="search02" value="adventure"></v-switch>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action class="icon">
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
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <v-switch label="Nature" v-model="search03" value="nature"></v-switch>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action class="icon">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <v-switch label="City" v-model="search03" value="city"></v-switch>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <!-- <v-list-tile>
          <p>{{ ex15 }} </p>
          <v-btn @click="countryList">submit</v-btn>
        </v-list-tile> -->

        <!-- <div class="search-wrapper mt-5">
          <input type="text" v-model="search" placeholder="Search title.." />
        </div>
        <div class="search-wrapper mt-5">
          <input type="text" v-model="search02" placeholder="Search title.." />
        </div> -->
      </v-list>
      <v-layout row wrap>
        <v-flex xs6>
          <v-card color="blue-grey darken-2" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <div class="headline">Topic</div>
                    <div>Foster the People</div>
                    <v-card-actions>
                      <!-- <v-btn flat dark @click.native.stop="dialog = true">GO!</v-btn> -->
                      <v-btn class="total-btn" color="primary" dark @click.native.stop="dialogTopic = true">Go!</v-btn>
                      <v-dialog v-model="dialogTopic" max-width="290">
                        <v-card color="white" class="black--text">
                          <v-card-title class="headline">Topic</v-card-title>
                          <!-- <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text> -->

                          <v-flex xs12>
                            <v-card flat>
                              <v-card-text>
                                <p>{{ search }} | {{ search02 }} | {{ search03 }}</p>
                                <v-switch label="Sea" v-model="search" value="sea"></v-switch>
                                <v-switch label="Mountain" v-model="search" value="mountain"></v-switch>
                                <v-divider></v-divider>
                                <v-switch label="Adventure" v-model="search02" value="adventure"></v-switch>
                                <v-switch label="Laze" v-model="search02" value="laze"></v-switch>
                                <v-divider></v-divider>
                                <v-switch label="Nature" v-model="search03" value="nature"></v-switch>
                                <v-switch label="City" v-model="search03" value="city"></v-switch>
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green darken-1" flat="flat" @click.native="dialogTopic = false">Disagree</v-btn>
                            <v-btn color="green darken-1" flat="flat" @click.native="dialogTopic = false">Agree</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-card-actions>
                  </div>
                </v-flex>
                <v-flex xs5>
                  <v-card-media src="https://themes.htc.com/assets/1b6aa8a2724819a179d1af16473328ae/theme/landing/themelanding_logo.png" height="125px" contain></v-card-media>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card color="cyan darken-2" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <div class="headline">Temperature</div>
                    <div>Foster the People</div>
                    <v-card-actions>
                      <!-- <v-btn flat dark @click.native.stop="dialog = true">GO!</v-btn> -->
                      <v-btn class="total-btn" color="primary" dark @click.native.stop="dialogTemperature = true">Go!</v-btn>
                      <v-dialog v-model="dialogTemperature" max-width="290">
                        <v-card color="white" class="black--text">
                          <v-card-title class="headline">Temperature</v-card-title>
                          <!-- <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text> -->
                          <v-card>
                            <v-card-text>
                              <v-slider v-model="value" thumb-label step="10" ticks></v-slider>
                            </v-card-text>
                          </v-card>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green darken-1" flat="flat" @click.native="dialogTemperature = false">Disagree</v-btn>
                            <v-btn color="green darken-1" flat="flat" @click.native="dialogTemperature = false">Agree</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-card-actions>
                  </div>
                </v-flex>
                <v-flex xs5>
                  <v-card-media src="https://image.flaticon.com/icons/png/512/187/187244.png" height="125px" contain></v-card-media>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card color="purple" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <div class="headline">Budget</div>
                    <div>Foster the People</div>
                    <v-card-actions>
                      <!-- <v-btn flat dark @click.native.stop="dialog = true">GO!</v-btn> -->
                      <v-btn class="total-btn" color="primary" dark @click.native.stop="dialogBudget = true">Go!</v-btn>
                      <v-dialog v-model="dialogBudget" max-width="290">
                        <v-card color="white" class="black--text">
                          <v-card-title class="headline">Budget</v-card-title>
                          <v-divider></v-divider>
                          <!-- <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text> -->
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green darken-1" flat="flat" @click.native="dialogBudget = false">Disagree</v-btn>
                            <v-btn color="green darken-1" flat="flat" @click.native="dialogBudget = false">Agree</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-card-actions>
                  </div>
                </v-flex>
                <v-flex xs5>
                  <v-card-media src="https://cdn.iconscout.com/public/images/icon/premium/png-512/budget-accounting-claculator-calc-calculation-rate-rent-3a08c550e7e8c750-512x512.png" height="125px" contain></v-card-media>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card color="teal darken-1" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <div class="headline">Period</div>
                    <div>Foster the People</div>
                    <v-card-actions>
                      <!-- <v-btn flat dark @click.native.stop="dialog = true">GO!</v-btn> -->
                      <v-btn class="total-btn" color="primary" dark @click.native.stop="dialogPeriod = true">Go!</v-btn>
                      <v-dialog v-model="dialogPeriod" max-width="290">
                        <v-card color="white" class="black--text">
                          <v-card-title class="headline">Period</v-card-title>
                          <!-- <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text> -->

                          <v-flex md12 lg4>
                            <v-date-picker type="month" v-model="picker"></v-date-picker>
                          </v-flex>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green darken-1" flat="flat" @click.native="dialogPeriod = false">Disagree</v-btn>
                            <v-btn color="green darken-1" flat="flat" @click.native="dialogPeriod = false">Agree</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-card-actions>
                  </div>
                </v-flex>
                <v-flex xs5>
                  <v-card-media src="https://cdn.iconscout.com/public/images/icon/premium/png-512/period-minute-minutes-thirty-time-3a7b6aed6aaae637-512x512.png" height="125px" contain></v-card-media>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card color="grey darken-4" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs12>
                  <div>
                    <div class="headline">Result</div>
                    <div>{{ ex15 }} | {{ ex16 }} | {{ ex17 }}</div>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <!-- <router-link :to="{ path: '/result'}"> -->
        <!-- , query: { id: card.title } -->
        <md-icon>
          <v-btn @click="countryList()">submit</v-btn>
        </md-icon>
        <!-- </router-link> -->
      </v-layout>
    </v-container>
  </div>

  <!-- result -->
  <result v-if="cardResult" />
  <!-- /.result -->
</v-app>
</template>

<script>
import Result from './Result'

export default {
  data() {
    return {
      dialogTopic: false,
      dialogTemperature: false,
      dialogBudget: false,
      dialogPeriod: false,
      ex15: ['Sea'],
      ex16: ['Adventure'],
      ex17: ['Nature'],
      search: '',
      search02: '',
      search03: '',
      countries: [],
      value: 0,
      picker: null,
      filter: true,
      filteredCustomers: [],
      cardResult: true
    }
  },
  components: {
    Result
  },
  computed: {
    filteredCustomers: function() {
      alert("filter")
      const {
        search,
        search02,
        search03
      } = this;
      return this.cards
        .filter(card => card.tag === search || card.tag02 === search02 || card.tag03 === search03)
    }
  },
  methods: {
    countryList: function() {
      alert("filter")
      const {
        search,
        search02,
        search03
      } = this;
      return this.cards
        .filter(card => card.tag === search || card.tag02 === search02 || card.tag03 === search03)

      alert("click")
      this.filter = false
      this.cardResult = true
      this.error = null;
      axios.get('../static/data/test.json', {
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
          this.filteredCustomers = response.data
        })
        .catch(error => {
          // Request failed.
          console.log('error', error.response)
          this.error = error.response
        })
    }
  },
  mounted() {
    // this.countryList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headline {
  text-transform: uppercase;
}

.dialog-dark {
  background-color: gray;
}

.divider {
  background-color: rgba(0, 0, 0, .12)
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

#bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  /* height: 100%; */
  background: url('https://theplanetd.com/images/road-trip-songs.jpg') center center no-repeat;
  -moz-background-size: cover;
  -o-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover;
  filter: blur(7px);
  opacity: .9;
  height: calc(100% + 70px);
}
</style>
