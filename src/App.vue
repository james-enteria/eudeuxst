<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row justify-content-center pt-5">

        <div class="col-md-3 offset-col-md-3">
          <appInput />
        </div>

        <div class="col-md-3">
          <appList />
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import Input from './components/ExpenseInput.vue'
  import List from './components/ExpenseList.vue'
  export default {
    data() {
      return {
      }
    },
    components: {
      appInput: Input,
      appList: List
    }
  }
</script>

<style lang="scss">

</style>
