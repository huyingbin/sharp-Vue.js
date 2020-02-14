<template>
  <div id="app">
 
      <router-link to="/about" class="routerLink" tag='button'>about</router-link>
      <router-link to="/foo" class="routerLink" replace>foo</router-link>

      <!-- 动态路由 -->
      <router-link :to="'/user'+ID" class="routerLink">user</router-link>
      <button @click="jumpToFoo">跳转到foo</button>

    
    
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    

  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    jumpToFoo() {
      this.$router.push('/foo');
    }
  },
  data() {
    return {
      ID: '12345'
    }
  }
}
</script>

<style scoped>
.routerLink {
  margin: 20px;
  font-size: 24px;
}

.nav {
  position: fixed;
}
</style>
