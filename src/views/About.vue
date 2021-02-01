<template>
  <div class="about">
    <h1>This is an Vuex Test page</h1>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Home extends Vue {

  public async created(): Promise<any> {
    // console.log(this.$route.params);
  }

}
</script>