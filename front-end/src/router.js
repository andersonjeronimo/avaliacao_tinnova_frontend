import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Eleicoes from './views/Eleicoes.vue';
import Fatorial from './views/Fatorial.vue';
import Multiplos from './views/Multiplos.vue';
import Ordenacao from './views/Ordenacao.vue';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/eleicoes',
            name: 'eleicoes',
            component: Eleicoes
        },
        {
            path: '/fatorial',
            name: 'fatorial',
            component: Fatorial
        },
        {
            path: '/multiplos',
            name: 'multiplos',
            component: Multiplos
        },
        {
            path: '/ordenacao',
            name: 'ordenacao',
            component: Ordenacao
        }

    ]

});