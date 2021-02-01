<template>
  <div id="app">
    <Container direction="vertical" class="all-container">
      <Header>
        header
      </Header>
      <Container class="h-container">
        <Aside>Aside</Aside>
        <Main>
          <router-view></router-view>
        </Main>
      </Container>
    </Container>
  </div>
</template>

<script lang="ts">
import { Component, Vue , Watch} from 'vue-property-decorator';
import { Loading } from 'element-ui';

@Component
export default class App extends Vue {
  private loading: any = null;

  get loadingNum() {
    return this.$store.state.num.num;
  }

  get excludePage() {
    return this.$store.state.num.includePage;
  }

  @Watch('loadingNum')
  public loadingNumChange(newVal: any, oldVal: any) {
    if (newVal > 0 && oldVal === 0) {
      this.loading = Loading.service({
        fullscreen: true,
        lock: true,
        text: '拼命加载中',
        spinner: 'el-icon-loading',
      });
    } else if (newVal <= 0 && this.loading) {
      this.loading.close();
    }
  }
}

</script>

<style lang="scss">
  html {
    margin: 0;
    padding: 0;
    height: 100%;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333333;
    font-size: 14px;
    height: 100%;
  }
  * {
    box-sizing: inherit;
  }
  *::before {
    box-sizing: inherit;
  }
  *::after {
    box-sizing: inherit;
  }
  p {
    margin: 0;
  }
  input {
    border: 0px;
    outline: none;
  }
  img {
    content: normal !important;
  }
  .all-container {
    height: 100%;
    .h-container {
      height: calc(100% - 60px);
    }
  }
</style>
