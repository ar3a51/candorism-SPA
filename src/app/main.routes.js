const homeShell = () => import(/*webpackChunkName: login*/ "./home/views/home-shell");
const { homeRoutesChildren } = require("./home/home.routes");


const mainPage = () => import(/*webpackChunkName: main*/ "./main/main.vue");

const newsfeedComponent = () => import(/*webpackChunkName: newsfeed*/ "./main/newsfeed/newsfeed");
const profileComponent = () => import(/*webpackChunkName: profile*/ "./main/profile/profile");

export const routes = [
    {   
        path: '/', 
        component: homeShell,
        children: [
          ...homeRoutesChildren
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