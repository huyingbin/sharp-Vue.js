import Vue from 'vue'
import vueRouter from 'vue-router'

import about from './components/about.vue'
// 1.结合Vue的异步组件和webpack的代码分析  
// const foo = resolve => {
//     require.ensure(['./components/foo.vue'], () => { resolve(require('./components/foo.vue')) })
// };

// 2.AMD写法
// const foo = resolve => require(['./components/foo.vue'], resolve);

// 3. ES6写法
const foo = () =>
    import ('./components/foo.vue')

const user = () =>
    import ('./components/user.vue')

const about_new = () =>
    import ('./components/about/new.vue')
const about_message = () =>
    import ('./components/about/message.vue')

Vue.use(vueRouter);

// 配置路由表
const routes = [{
        path: '/',
        redirect: '/about'
    },
    {
        path: '/about',
        component: about,
        meta: {
            title: '关于'
        },
        children: [{
                path: '',
                redirect: 'new'

            },
            {
                path: 'new',
                component: about_new
            },
            {
                path: 'message',
                component: about_message
            }
        ]
    },
    {
        path: '/foo',
        component: foo,
        meta: {
            title: 'foo'
        },
    },
    {
        path: '/user:id',
        component: user,
        meta: {
            title: "用户"
        }

    }
]

const router = new vueRouter({
    routes,
    // 模式配置
    mode: 'history',
    // 修改激活路由的class
    linkActiveClass: 'active',
})

/**
 * 路由改变之前
 * to 即将进入的路由
 * from 即将离开的路由
 * next 调用这个方法，进入下一个钩子函数
 */
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
})

export default router;