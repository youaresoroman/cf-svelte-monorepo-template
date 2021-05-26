import router from "page";
//import * as animateScroll from "svelte-scrollto";

export const routeTo = (url)=>{
    window.scrollTo(0, 0);
    router.redirect(url);
}