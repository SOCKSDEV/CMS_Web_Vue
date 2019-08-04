import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/Layout/layout.vue'
import create from '@/components/createLobby/lobby.vue'
Vue.use(Router)
const routes = [
    {
        path: '',
        component: layout,
        name:"home",
        children:[{
            path:'/create',
            component:create,
            name:'create'
        }]
    }
]
export default new Router({
    routes
})