const home = () => import (/*webpackChunkName*: home*/ "./views/home/home");
const regPage = () => import (/*webpackChunkName: regPage*/ "./views/registration/registration");

export const homeRoutesChildren = [
    {
        path: "/",
        component: home
    },
    {
        path:"/registration",
        component: regPage,
    }
]

