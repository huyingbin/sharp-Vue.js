<template>
    <div>
        <h2>我是foo组件</h2>

        <ul>
            <li v-for="i in 100">{{i}}---{{message}}</li>
        </ul>
    </div>
</template>  

<script>
export default {
    name: 'foo',
    data() {
        return{
            message:'keep-alive遇见vue-router'
        }
    },
    mounted() {
        window.document.title="foo";
    }
}
</script>

<style scoped>

</style>
    