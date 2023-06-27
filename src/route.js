import { createRouter , createWebHistory} from 'vue-router'
// Import components
import Home     from './pages/Home.vue';
import Projects from './pages/Projects.vue';

const router = createRouter({

    history : createWebHistory(),

    routes: [
        {
            path :'/',
            name: 'home',
            component : Home
        },
        {
            path :'/progetti',
            name: 'projects',
            component : Projects
        },
    ]

})

export {router}