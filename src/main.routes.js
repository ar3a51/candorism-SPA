const loginPage = () => import(/*webpackChunkName: login*/ "./app/home/home.vue");
const mainPage = () => import(/*webpackChunkName: main*/ "./app/main/main.vue");

const newsfeedComponent = () => import(/*webpackChunkName: newsfeed*/ "./app/main/newsfeed/newsfeed.vue");
const profileComponent = () => import(/*webpackChunkName: profile*/ "./app/main/profile/profile.vue");

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