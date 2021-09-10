import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/styles.scss";
import "materialize-css/dist/js/materialize.min.js";

const app = createApp(App);

// фильтры
app.config.globalProperties.$filters = {
  date(value) {
    const options = {};
    options.day = "2-digit";
    options.month = "long";
    options.year = "numeric";
    options.hour = "2-digit";
    options.minute = "2-digit";
    options.second = "2-digit";
    return new Intl.DateTimeFormat("ru-RU", options).format(new Date(value));
  },
};

app.use(router);
app.mount("#app");
