<template lang="html">
  <div id="show-auth" />
</template>

<script>
export default {
  mounted() {
    console.log(this);
    this.$auth0.showLock("show-auth");
  }
};
</script>

<style lang="css">
</style>
