const homeShell = () => import(/*webpackChunkName: login*/ "./home/home-shell");
const home = () => import (/*webpackChunkName*: home*/ "./home/home");
const regPage = () => import (/*webpackChunkName: regPage*/ "./home/registration");

const mainPage = () => import(/*webpackChunkName: main*/ "./main/main.vue");

const newsfeedComponent = () => import(/*webpackChunkName: newsfeed*/ "./main/newsfeed/newsfeed");
const profileComponent = () => import(/*webpackChunkName: profile*/ "./main/profile/profile");

export const routes = [
    {   
        path: '/', 
        component: homeShell,
        children: [
           {
               path: "/",
               component: home
           },
           {
               path:"/registration",
               component: regPage,
           }
        ]
    },
    {
        path: '/main', 
        component: mainPage,
        children:[
            {path: '/', component: newsfeedComponent},
            {path: '/main/profile', component: profileComponent}
        ],
    },
];