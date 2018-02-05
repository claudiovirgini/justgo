<template>
<v-app>
  <div id="bg" v-if="filter">

  </div>

  <!-- countryMenu -->
  <countryMenu v-if="!cardResult" />
  <!-- /.countryMenu -->
  <div id="e3" style="max-width: 800px; margin: auto;" class="grey lighten-3" v-if="filter">
    <v-card-media src="../static/img/logo.png" height="200px" contain></v-card-media>
    <v-container fluid style="min-height: 0;" grid-list-lg>
      <v-layout row wrap>
        <v-flex xs6>
          <v-card color="blue-grey darken-2" class="white--text" hover="true">
            <v-container fluid grid-list-lg v-bind:class="{ active: topicIsActive}">
              <div class="text-xs-left badge-result" v-if="topicBadge">
                <v-badge overlay left color="purple" overlap>
                  <v-icon slot="badge" dark>done</v-icon>
                  <v-icon large color="grey lighten-1">
                    turned_in
                  </v-icon>
                </v-badge>
              </div>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <div class="headline">Topic</div>
                    <div>Foster the People</div>

                    <!-- {{ search }} -->
                    <v-card-actions>
                      <!-- <v-btn flat dark @click.native.stop="dialog = true">GO!</v-btn> -->
                      <v-btn class="total-btn" color="primary" dark @click.native.stop="dialogTopic = true">Go!</v-btn>
                      <v-dialog v-model="dialogTopic" max-width="290">
                        <v-card color="teal lighten-2" class="black--text">
                          <v-card-title class="headline" align-center>Topic</v-card-title>
                          <!-- <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text> -->
                          <v-flex xs12>
                            <!-- topic -->
                            <!-- <topic :search="search" :search02="search02" :search03="search03" /> -->
                            <!-- /.topic -->
                            <v-card flat>
                              <v-card-text>
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
                                <!-- <p>{{ search }} | {{ search02 }} | {{ search03 }}</p>
                                <v-switch label="Sea" v-model="search" value="sea"></v-switch>
                                <v-switch label="Mountain" v-model="search" value="mountain"></v-switch>
                                <v-divider></v-divider>
                                <v-switch label="Adventure" v-model="search02" value="adventure"></v-switch>
                                <v-switch label="Laze" v-model="search02" value="laze"></v-switch>
                                <v-divider></v-divider>
                                <v-switch label="Nature" v-model="search03" value="nature"></v-switch>
                                <v-switch label="City" v-model="search03" value="city"></v-switch> -->
                              </v-card-text>
                            </v-card>
                          </v-flex>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn fab dark color="teal" @click.native="dialogTopic = false" @click="topicBadgeRes()">
                              <v-icon dark>done</v-icon>
                            </v-btn>
                            <!-- <v-btn color="green darken-1" flat="flat" @click.native="dialogTopic = false">Disagree</v-btn> -->
                            <!-- <v-btn color="green darken-1" flat="flat" @click.native="dialogTopic = false" @click="topicBadgeRes()">Agree</v-btn> -->
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
          <v-card color="cyan darken-2" class="white--text" hover="true">
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
                        <v-card color="teal lighten-2" class="black--text">
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
          <v-card color="purple" class="white--text" hover="true">
            <v-container fluid grid-list-lg v-bind:class="{ active: budgetIsActive}">
              <div class="text-xs-left badge-result" v-if="budgetBadge">
                <v-badge overlay left color="purple" overlap>
                  <v-icon slot="badge" dark>done</v-icon>
                  <v-icon large color="grey lighten-1">
                    turned_in
                  </v-icon>
                </v-badge>
              </div>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <div class="headline">Budget</div>
                    <div>Foster the People</div>
                    <v-card-actions>
                      <!-- <v-btn flat dark @click.native.stop="dialog = true">GO!</v-btn> -->
                      <v-btn class="total-btn" color="primary" dark @click.native.stop="dialogBudget = true">Go!</v-btn>
                      <v-dialog v-model="dialogBudget" max-width="290">
                        <v-card color="teal lighten-2" class="black--text">
                          <v-card-title class="headline">Budget</v-card-title>
                          <v-card>
                            <v-card-text>
                              <v-slider v-model="budget" prepend-icon="euro_symbol" thumb-label step="500" min="500" max="3000" ticks></v-slider>
                            </v-card-text>
                          </v-card>
                          <v-divider></v-divider>
                          <!-- <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text> -->
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn fab dark color="teal" @click.native="dialogBudget = false" @click="budgetBadgeRes()">
                              <v-icon dark>done</v-icon>
                            </v-btn>
                            <!-- <v-btn color="green darken-1" flat="flat" @click.native="dialogBudget = false" @click="budgetBadgeRes()">Agree</v-btn> -->
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
          <v-card color="teal darken-1" class="white--text" hover="true">
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
                        <v-card color="teal lighten-2" class="black--text">
                          <v-card-title class="headline">Period</v-card-title>
                          <!-- <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text> -->

                          <v-flex md12 lg4>
                            <v-date-picker color="teal darken-4" type="month" v-model="picker"></v-date-picker>
                          </v-flex>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn fab dark color="teal" @click.native="dialogPeriod = false" @click="periodBadgeRes()">
                              <v-icon dark>done</v-icon>
                            </v-btn>
                            <!-- <v-btn color="green darken-1" flat="flat" @click.native="dialogPeriod = false">Agree</v-btn> -->
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
        <!-- <v-flex xs12>
          <v-card>
            <v-container fluid>
              <v-layout row wrap justify-space-around align-center>
                <v-avatar size="70px">
                  <img :src="'../static/img/sea.svg'" alt="Sea" v-if="search === 'sea'">
                  <img :src="'../static/img/mountain.svg'" alt="Mountain" v-if="search === 'mountain'">
                  <img :src="'../static/img/adventure.svg'" alt="Adventure" v-if="search02 === 'adventure'">
                  <img :src="'../static/img/laze.svg'" alt="Laze" v-if="search02 === 'laze'">
                  <img :src="'../static/img/nature.svg'" alt="Nature" v-if="search03 === 'nature'">
                  <img :src="'../static/img/city.svg'" alt="City" v-if="search03 === 'city'">
                </v-avatar>
              </v-layout>
              <v-layout row wrap justify-space-around align-center>
                € {{ budget }}
              </v-layout>
            </v-container>
          </v-card>
        </v-flex> -->
        <v-flex xs12>
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs12>
                <div>
                  <v-btn @click="countryList()" color="indigo darken-1" dark class="btn--large">GO!
                    <v-icon right dark>flight_takeoff</v-icon>
                  </v-btn>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <!-- <router-link :to="{ path: '/result'}"> -->
        <!-- , query: { id: card.title } -->
        <!-- <md-icon>
          <v-btn @click="countryList()" color="indigo darken-1" dark class="btn--large">submit</v-btn>
        </md-icon> -->
        <!-- </router-link> -->
      </v-layout>
    </v-container>
  </div>

  <!-- result -->
  <result v-if="cardResult" :search="search" :search02="search02" :search03="search03" />
  <!-- /.result -->
</v-app>
</template>

<script>
import axios from 'axios'
import Result from './Result'
import Topic from './Topic'
import CountryMenu from './CountryMenu'

export default {
  data() {
    return {
      dialogTopic: false,
      dialogTemperature: false,
      dialogBudget: false,
      dialogPeriod: false,
      search: '',
      search02: '',
      search03: '',
      countries: [],
      value: 0,
      picker: null,
      filter: true,
      cardResult: false,
      budget: 1000,
      topicBadge: false,
      topicIsActive: false,
      budgetBadge: false,
      budgetIsActive: false,
      periodBadge: false,
      periodIsActive: false
    }
  },
  components: {
    Result,
    Topic,
    CountryMenu
  },
  methods: {
    countryList: function() {
      this.filter = false
      this.cardResult = true
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
    topicBadgeRes: function() {
      this.topicBadge = true
      this.topicIsActive = true
    },
    budgetBadgeRes: function() {
      this.budgetBadge = true
      this.budgetIsActive = true
    },
    periodBadgeRes: function() {
      this.periodBadge = true
      this.periodIsActive = true
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
  background: url('~/static/img/bg.jpg') center center no-repeat;
  -moz-background-size: cover;
  -o-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover;
  /* filter: blur(7px); */
  opacity: .9;
  height: calc(100% + 70px);
}

.logo-result {
  display: inline-block;
}

.badge-result {
  position: absolute;
  top: -10px;
  left: 0px;
}

.active {
  border-bottom: 3px solid #d4e157;
}

.icon img {
  width: 30px;
  height: auto;
}
</style>
