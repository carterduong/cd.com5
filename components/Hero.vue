<template>
  <div class="hero-container">
    <div class="rectangle rectangle-1">
      Carter Duong
    </div>

    <div class="rectangle">
      <!-- <div class="rectangle-outline rectangle-2"></div> -->
      <canvas id="canvas-1" resize="true"></canvas>
      <div class="desktop-container">
        <span>Frontend Web Development</span>
        <span>&</span>
      </div>
    </div>

    <div class="rectangle">
      <!-- <div class="rectangle-outline rectangle-3"></div> -->
      <canvas id="canvas-2" resize="true"></canvas>
      <!-- Needed to change markup on mobile -->
      <div class="mobile-container">
        <div>Carter Duong</div>
        <div>Frontend Web Development & Design</div>
      </div>
      <div class="desktop-container">
        <span>Design</span>
        <span>(other things, too)</span>
      </div>
    </div>
  </div>
</template>

<script>
import * as paper from 'paper/dist/paper-full.min.js'

export default {
  name: 'Hero',
  mounted() {
    paper.install(window)
    paper.setup('canvas-1')
    const h = document.getElementById('canvas-1').offsetHeight
    const w = document.getElementById('canvas-1').offsetWidth
    // let path = new paper.Path()
    // path.strokeColor = 'white'
    // let start = new paper.Point(100, 100)
    // path.moveTo(start)
    // path.lineTo(start.add([200, -50]))
    // paper.view.draw()

    // const circle = new paper.Path.Ellipse({
    //   // point: [h / 4, w / 4],
    //   point: [0, 0],
    //   size: [w, h],
    //   // size: [200, 200],
    //   strokeColor: 'white',
    //   blendMode: 'exclusion'
    // })
    // circle.smooth()

    let path = new paper.Path.Rectangle({
      topLeft: [0, 0],
      bottomRight: [w, h],
      fillColor: {
        gradient: {
          // stops: ['transparent', 'transparent', 'grey'],
          stops: [
            ['green', 0.05],
            ['red', 0.9],
            ['blue', 1]
          ],
          radial: true
        },
        origin: [w / 2, h / 2],
        destination: [w, h]
      }
    })

    paper.setup('canvas-2')

    path = new paper.Path.Rectangle({
      topLeft: [0, 0],
      bottomRight: [w, h],
      fillColor: {
        gradient: {
          // stops: ['transparent', 'transparent', 'grey'],
          stops: [
            ['yellow', 0.05],
            ['magenta', 0.9],
            ['cyan', 1]
          ],
          radial: true
        },
        origin: [w / 2, h / 2],
        destination: [w, h]
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/_variables.scss';

canvas[resize] {
  width: 100%;
  height: 100%;
}

.hero-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  @media only screen and (min-device-width: $tablet-portrait) {
    flex-direction: row;
    width: calc(100vw - 2em);
    padding: 1em;
  }
}

.rectangle {
  margin: 1em 1em 0 1em;
  height: calc(40% - 2em);
  width: calc(100% - 2em);

  @media only screen and (min-device-width: $tablet-portrait) {
    margin: 1em;
    height: calc(80% - 2em);
    width: calc(33.333% - 2em);
  }
}

.rectangle-outline {
  width: 100%;
  border: 4px solid white;
  box-sizing: border-box;
}

.rectangle-1 {
  display: none;

  @media only screen and (min-device-width: $tablet-portrait) {
    height: calc(100% - 2em);
    display: flex;
    align-items: center;
  }
}

.rectangle-2,
.rectangle-3 {
  height: 100%;
}

.rectangle-3 {
  border-radius: 5em;
}

.mobile-container {
  display: flex;
  margin-top: 2em;
  height: calc(20vh - 2em);
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-device-width: $tablet-portrait) {
    display: none;
  }
}

.desktop-container {
  display: none;
  margin-top: 1em;

  @media only screen and (min-device-width: $tablet-portrait) {
    display: flex;
    justify-content: space-between;
  }
}
</style>
