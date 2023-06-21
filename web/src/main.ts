import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import { createPinia } from "pinia";
import { VDataTable } from "vuetify/labs/VDataTable";

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "@/assets/scss/main.scss";

// Create the app
const app = createApp(App);

// Create the plugins
const vuetify = createVuetify({
  components: {
    VDataTable,
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#1867C0",
          secondary: "#5CBBF6",
        },
      },
    },
  },
});
const pinia = createPinia();

// Register the plugins
app.use(vuetify);
app.use(pinia);
app.use(router);

// Load the fonts.
const webFontLoader = await import("webfontloader");
webFontLoader.load({
  google: {
    families: ["Roboto:100,300,400,500,700,900&display=swap"],
  },
});

// Mount the app
app.mount("#app");
