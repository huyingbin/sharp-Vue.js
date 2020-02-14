<template>
    <div>
        <h2>我是about组件</h2>  


        <router-link to="/about/message" class="routerLink">about/message</router-link>
        <router-link  to="/about/new" class="routerLink">about/new</router-link>

        <router-view></router-view>

    </div>
</template>

<script>
export default {
    name: 'about',
    mounted() {
        window.document.title = "关于";
    },
    data(){
        return{
            path: '/about/new'
        }
    },

    activated(){
      console.log("--activated-");
      this.$router.push(this.path);
 
    },

    // 组件守卫的方法
    beforeRouteLeave (to, from, next) {
        this.path = this.$route.path;
        next();
    }
    
}
</script>

<style scoped>
.routerLink {
  margin: 20px;
  font-size: 24px;
}

</style>