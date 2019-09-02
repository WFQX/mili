import 'iview/dist/styles/iview.css';
import '~/styles/admin.scss';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '~/js/pages/admin/layout.vue';

import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Form,
    FormItem,
    Icon,
    Input,
    InputNumber,
    Menu,
    MenuGroup,
    MenuItem,
    Message,
    Modal,
    Submenu,
    Table,
} from 'iview';

Message.config({
    duration: 5
});

Vue.prototype.$Message = Message;

Vue.component('Breadcrumb', Breadcrumb);
Vue.component('BreadcrumbItem', BreadcrumbItem);
Vue.component('Button', Button);
Vue.component('Form', Form);
Vue.component('FormItem', FormItem);
Vue.component('Icon', Icon);
Vue.component('Input', Input);
Vue.component('InputNumber', InputNumber);
Vue.component('Menu', Menu);
Vue.component('MenuGroup', MenuGroup);
Vue.component('MenuItem', MenuItem);
Vue.component('Modal', Modal);
Vue.component('Submenu', Submenu);
Vue.component('Table', Table);

Vue.use(VueRouter);

const routes = [
    { path: '/', component: () => import('~/js/pages/admin/index.vue') },
    { path: '/boilingpoint/topic', component: () => import('~/js/pages/admin/boilingpoint/Topic.vue') },
    { path: '*', component: () => import('~/js/pages/admin/404.vue') }
];

const router = new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});

router.beforeEach((to, from, next) => {
    // 未登录的话，跳转到登录页
    next();
});

const app = new Vue({
    router,
    render: h => h(App),
}).$mount('#app');