<template>
  <div id="app">
    <Menu></Menu>
    <div class="main-content">
      <router-view></router-view>
      <Footer></Footer>

    </div>
  </div>
</template>

<script>

import Menu from "./components/NavBar"
import Footer from "./components/Footer"
export default {
  name: 'app',
  components: {Footer, Menu},
}
</script>

<style lang="scss">
  @import 'assets/css/style.css';
  @font-face {
    font-family: serendity;
    src: url('./assets/fonts/serendity-script.woff'), url('./assets/fonts/serendity-script.woff') format('woff');
  }
  @font-face {
    font-family: Montserrat;
    src: url('./assets/fonts/Montserrat-ExtraLight.ttf'), url('./assets/fonts/Montserrat-ExtraLight.ttf') format('ttf');
  }
  @font-face {
    font-family: Charter;
    src: url('./assets/fonts/CHARI.ttf'), url('./assets/fonts/CHARI.ttf') format('ttf');
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0, -20%, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translate3d(0, 0%, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(0, -20%, 0);
    }
  }

  #app {
    font-family: Montserrat, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    background-color: whitesmoke;
    min-height: 100vh;
  }

  .main-content {
    margin-top: 45px;
    position: relative;
    min-height: calc(100vh - 45px - 90px);
    padding-bottom: 90px;
  }

  @media only screen and (min-width: 768px) {
    .main-content {
      margin-top: 55px;
      min-height: calc(100vh - 55px - 90px);
    }
  }

</style>
