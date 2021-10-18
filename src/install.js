import HelloWarld from "./components/HelloWarld.vue";

const installer = {
    install(Vue) {
        Vue.component("hello-warld", HelloWarld);
    }
};

if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use(installer);
}

export default installer;
