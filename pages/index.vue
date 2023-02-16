<template>
  <div class="a">
    <Tutorial/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  mounted() {
    console.log('asdfasfasfasd');
    console.log(process)
    console.log(process.server, process.client)
  },
  methods: {
    test: function() {
      console.log('Pull Request test2444353333d');
    }

  }
})
</script>

<style scoped>
  .a {
    background-color: aquamarine;
    padding: 20px;
  }

  .b {
    background-color: bisque;
  }

  .a::v-deep .c {
    background-color: black;
  }
</style>