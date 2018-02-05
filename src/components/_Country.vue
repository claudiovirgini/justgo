<template>
<v-app id="inspire">
  <v-toolbar color="indigo" dark fixed app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>justgo</v-toolbar-title>
  </v-toolbar>
  <v-content>
    <v-container fluid fill-height>
      <v-layout column>
        <v-flex xs12>
          <v-container fluid grid-list-md class="grey lighten-4">
            <v-layout row wrap>
              Country: {{ $route.query.country }}
              <v-flex v-bind="{ [`xs${card.flex}`]: true }" v-for="card in filteredCustomers" :key="card.tag">
                <v-card>
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
    ex15: ['Sea'],
    search: '',
    search02: '',
    search03: '',
    cards: [{
        title: 'Barcelona',
        src: 'http://newacttravel.com/wp-content/uploads/2017/08/barcelona.jpg',
        tag: 'sea',
        tag02: 'laze',
        tag03: 'city',
        flex: 12
      },
      {
        title: 'London',
        src: 'http://www.eventsinthesky.co.uk/wp-content/uploads/2015/07/londonoptimised.jpg',
        tag: 'other',
        tag02: 'laze',
        tag03: 'city',
        flex: 6
      },
      {
        title: 'Lisbon',
        src: 'http://www.vortexmag.net/wp-content/uploads/2015/08/2048-16.jpg',
        tag: 'sea',
        tag02: 'laze',
        tag03: 'city',
        flex: 6
      },
      {
        title: 'Reykjavik',
        src: 'http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1496156708/northern-lights-waterfall-iceland-ICELANDHOT0517.jpg?itok=20DPvEd0',
        tag: 'mountain',
        tag02: 'adventure',
        tag03: 'nature',
        iframeUrl: 'https://uploads.knightlab.com/storymapjs/fce83aeb432c4c4694535196ffd086bb/iceland/index.html',
        flex: 12
      },
      {
        title: 'Patagonia',
        src: 'https://www.boscolo.com/it/viaggi/files/it_viaggi/styles/bootstrap_header/public/Argentina-il-fascino-della-Patagonia-e-della-Terra-del-Fuoco_TESTATA.jpg?itok=u9HmWiVD',
        tag: 'mountain',
        tag02: 'adventure',
        tag03: 'nature',
        flex: 6
      }
    ]
  }),
  props: {
    source: String
  },
  methods: {
    countryList: function() {
      alert("click")
      this.error = null;
      axios.get('../static/data/country.json', {
          // headers: {
          //   "x-Rubik-ConversationId": "8fe80000-4452-28d2-2b93-08d4b7aaaaaa"
          // }
        })
        .then(response => {
          console.log('countryList Response:', response)
          if (response.status !== 200) {
            this.error = response.statusText
            return
          }
          this.response = response.data
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
      return this.cards
        .filter(card => card.tag === search || card.tag02 === search02 || card.tag03 === search03)


      // var self = this;
      // return this.cards.filter(function(cust, custx) {
      //   return cust.title.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
      //   return cust.tag.indexOf(self.search) >= 0;
      //   return custx.tagx.indexOf(self.searchx) >= 0;
      // });
    }
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
</style>
