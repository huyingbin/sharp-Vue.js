<template>
    <div>
        <h2>这是uesr组件</h2>

        <!-- 获取动态路由参数 -->
        <h2>{{$route.params.id}}</h2>
    </div>
</template>

<script>
export default {
    name: 'user'
}
</script>