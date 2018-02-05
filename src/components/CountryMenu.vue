<template>
<div>
  <div id="menu-trigger" class="" style="transform: translateX(0px);"><span></span></div>
  <div id="countries-menu">
    <div class="countries-menu-inner">
      <ul class="pagination-list" id="pagination-list" target-url="./weather/">
        <li class="pagination-item"><a href="#" route-nav="weather/argentina" class="pagination-text">Argentina</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/austria" class="pagination-text">Austria</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/belarus" class="pagination-text">Belarus</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/belgium" class="pagination-text">Belgium</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/bosnia" class="pagination-text">Bosnia</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/brazil" class="pagination-text">Brazil</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/bulgaria" class="pagination-text">Bulgaria</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/canada" class="pagination-text">Canada</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/china" class="pagination-text">China</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/costa-rica" class="pagination-text">Costa Rica</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/croatia" class="pagination-text">Croatia</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/cyprus" class="pagination-text">Cyprus</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/czech-republic" class="pagination-text">Czech Republic</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/denmark" class="pagination-text">Denmark</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/estonia" class="pagination-text">Estonia</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/france" class="pagination-text">France</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/georgia" class="pagination-text">Georgia</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/germany" class="pagination-text">Germany</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/greece" class="pagination-text">Greece</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/hungary" class="pagination-text">Hungary</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/ireland" class="pagination-text">Ireland</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/italy" class="pagination-text">Italy</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/japan" class="pagination-text">Japan</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/kosovo" class="pagination-text">Kosovo</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/latvia" class="pagination-text">Latvia</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/liechtenstein" class="pagination-text">Liechtenstein</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/lithuania" class="pagination-text">Lithuania</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/luxembourg" class="pagination-text">Luxembourg</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/mexico" class="pagination-text">Mexico</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/moldova" class="pagination-text">Moldova</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/monaco" class="pagination-text">Monaco</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/netherlands" class="pagination-text">Netherlands</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/norway" class="pagination-text">Norway</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/panama" class="pagination-text">Panama</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/poland" class="pagination-text">Poland</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/portugal" class="pagination-text">Portugal</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/romania" class="pagination-text">Romania</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/russia" class="pagination-text">Russia</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/serbia" class="pagination-text">Serbia</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/slovakia" class="pagination-text">Slovakia</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/slovenia" class="pagination-text">Slovenia</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/spain" class="pagination-text">Spain</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/sweden" class="pagination-text">Sweden</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/switzerland" class="pagination-text">Switzerland</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/thailand" class="pagination-text">Thailand</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/turkey" class="pagination-text">Turkey</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/ukraine" class="pagination-text">Ukraine</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/united-kingdom" class="pagination-text">United Kingdom</a></li>
        <li class="pagination-item"><a href="#" route-nav="weather/united-states" class="pagination-text">United States</a></li>
      </ul>
    </div>
  </div>

</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CountryMenu',
  data: () => ({
    drawer: null,
    countries: []
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#countries-menu {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 400px;
    z-index: 100;
    -webkit-transition: -webkit-transform 0.4s;
    transition: -webkit-transform 0.4s;
    transition: transform 0.4s;
    transition: transform 0.4s, -webkit-transform 0.4s;
    &:before {
        background-color: rgba(0,0,0,.15);
        width: 30px;
        position: absolute;
        right: 20px;
        top: 0;
        bottom: 0;
        -webkit-transition: opacity 0.4s;
        transition: opacity 0.4s;
        z-index: 15;
    }
    &:after {
        -webkit-transition: opacity 0.4s;
        transition: opacity 0.4s;
        position: fixed;
        bottom: -10%;
        top: -10%;
        right: -240px;
        width: 600px;
        z-index: 1;
        -webkit-transform: rotate(-7deg);
        transform: rotate(-7deg);
        background: -webkit-linear-gradient(top,rgba(1,1,1,.5) 0,rgba(29,29,28,.5) 28%,rgba(60,61,60,.43) 50%,rgba(28,19,11,.35) 75%,rgba(1,1,1,.35) 100%);
        background: linear-gradient(to bottom,rgba(1,1,1,.5) 0,rgba(29,29,28,.5) 28%,rgba(60,61,60,.43) 50%,rgba(28,19,11,.35) 75%,rgba(1,1,1,.35) 100%);
    }
    .countries-menu-inner {
        position: relative;
        z-index: 20;
        overflow: hidden;
        -webkit-transition: -webkit-transform 0.5s ease;
        transition: -webkit-transform 0.5s ease;
        transition: transform 0.5s ease;
        transition: transform 0.5s ease,-webkit-transform 0.5s ease;
        -webkit-transform: translate(0,0);
        transform: translate(0,0);
        .pagination-list {
            padding-top: 30px;
            padding-bottom: 30px;
            height: 100%;
            height: 100vh;
            margin-right: -20px;
            padding-right: 25px;
            overflow-y: scroll;
            .pagination-item {
                line-height: 60px;
                display: inline-block;
                width: 100%;
                text-align: right;
                padding-right: 0;
                position: relative;
                &:after {
                    content: '';
                    width: 10px;
                    height: 10px;
                    display: inline-block;
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    border-radius: 50%;
                    background-color: #fff;
                    -webkit-transition: all 0.4s;
                    transition: all 0.4s;
                    -webkit-transform: translate(0,-50%);
                    transform: translate(0,-50%);
                    vertical-align: top;
                    opacity: 0.7;
                    z-index: 1;
                }
                .pagination-text {
                    text-decoration: none;
                    display: inline-block;
                    padding: 0 100px 12px 0;
                    vertical-align: top;
                    font: 400 14px/30px "Source Sans Pro",arial,sans-serif;
                    color: #fff;
                    position: relative;
                    text-transform: uppercase;
                    margin-right: 0;
                    opacity: 0.7;
                    -webkit-transition: 0.4s;
                    transition: 0.4s;
                    z-index: 2;
                    &:before {
                        content: '';
                        height: 1px;
                        position: absolute;
                        background: rgba(255,255,255,.7);
                        bottom: 10px;
                        left: 0;
                        right: 50px;
                    }
                    &:after {
                        content: '';
                        height: 3px;
                        position: absolute;
                        background: rgba(255,255,255,.7);
                        bottom: 11px;
                        left: 0;
                        right: 100%;
                        -webkit-transition: right 0.4s ease-out;
                        transition: right 0.4s ease-out;
                    }
                    &:hover {
                        opacity: 0.95;
                    }
                    &:hover:after {
                        right: 50px;
                    }
                }
            }
        }
    }
}
#countries-menu:after,
#countries-menu:before,
#menu-trigger span:after,
#menu-trigger span:before {
    content: '';
}
#menu-trigger {
    z-index: 200;
    position: absolute;
    right: 30px;
    top: 20px;
    width: 32px;
    height: 32px;
    display: none;
    will-change: transform;
    -webkit-transition: -webkit-transform 0.35s;
    transition: -webkit-transform 0.35s;
    transition: transform 0.35s;
    transition: transform 0.35s,-webkit-transform 0.35s;
    span {
        top: 50%;
    }
}
#menu-trigger span,
#menu-trigger span:after,
#menu-trigger span:before {
    position: absolute;
    display: block;
    background-color: #fff;
    width: 100%;
    height: 1px;
    -webkit-transition: all 0.35s;
    transition: all 0.35s;
}
#menu-trigger span:before {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
}
#menu-trigger span:after {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
}
@media screen and (max-width:1000px) {
    #menu-trigger {
        display: block;
    }
    #countries-menu {
        width: 100%;
        -webkit-transform: translate(100%,0);
        transform: translate(100%,0);
        &:before {
            right: 0;
            width: 40px;
        }
        &:after {
            width: auto;
            left: 70px;
            -webkit-transform: rotate(0);
            transform: rotate(0);
            background: rgba(0,0,0,.5);
        }
        .countries-menu-inner .pagination-list {
            padding-right: 25px;
        }
    }
}
</style>
