<template>
  <div class="container">
    <div>
      <h1 class="title">Carter Duong</h1>
      <p>Design and Development</p>
      <br />
      <h2>ATM</h2>
      <ul>
        <li>
          {{ Math.ceil(weather.temperature.value * 1.8 + 32) }}°F
          {{ weather.textDescription }}
        </li>
        <li>SGV</li>
      </ul>
      <br />
      <h2>Recently</h2>
      <ul>
        <li>Bullet Journal</li>
        <li>elliottevan.com</li>
        <li>Sunset Spot Remix</li>
        <li>Fashion Quarterly</li>
        <li>HF.FM</li>
        <li>Resume</li>
        <li>Posters</li>
      </ul>
      <br />
      <h2>Elsewhere</h2>
      <ul>
        <li>Email</li>
        <li>
          <a target="_blank" href="https://www.are.na/carter-duong">Are.na</a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/carterduong">Github</a>
        </li>
        <li>SW-7361-6305-5428</li>
      </ul>
    </div>
    <div class="bottom-left">
      Last updated 03.29.20<br />
      This site is built with Nuxt.js and is hosted on ZEIT Now.
    </div>
    <div id="colophon">
      <img src="~/assets/1_bujo/screenshot.png" />
      <p>
        2020, LitElement, localStorage. Fork of Bastian Allgeier's Bulllet
        Journal.
      </p>
      <br />
      <p>
        With respect to work, I find weeks to be a much better indicator of time
        than months.
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData({ params }) {
    return axios
      .get('https://api.weather.gov/stations/WTHC1/observations/latest')
      .then((res) => {
        return { weather: res.data.properties }
      })
  }
}
</script>

<style>
a {
  color: black;
  text-decoration: none;
}

h1,
h2 {
  font-size: 16px;
  font-weight: 400;
  padding-left: 0.75rem;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.container {
  margin: 1rem;
}

.bottom-left {
  position: fixed;
  left: 1rem;
  bottom: 1rem;
}

.tabular-num {
  font-variant-numeric: tabular-nums;
}

#colophon {
  font-size: 0.8rem;
  color: darkgrey;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
}

img {
  height: auto;
  width: 50%;
  /* box-shadow: 0px 0px 10px grey; */
}
</style>
