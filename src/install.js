import HelloWarld from "./components/HelloWarld.vue";

const HelloWarldInstall = {
    install(Vue, options) {
        Vue.component("hello-warld", HelloWarld);
    }
};

if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use(HelloWarldInstall);
}

export default HelloWarldInstall;
