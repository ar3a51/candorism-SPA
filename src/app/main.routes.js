const loginPage = () => import(/*webpackChunkName: login*/ "./home/home2.vue");
const mainPage = () => import(/*webpackChunkName: main*/ "./main/main.vue");

const newsfeedComponent = () => import(/*webpackChunkName: newsfeed*/ "./main/newsfeed/newsfeed.vue");
const profileComponent = () => import(/*webpackChunkName: profile*/ "./main/profile/profile.vue");

export const routes = [
    {path: '/', component: loginPage},
    {
        path: '/main', 
        component: mainPage,
        children:[
            {path: '/', component: newsfeedComponent},
            {path: '/main/profile', component: profileComponent}
        ],
    },
];