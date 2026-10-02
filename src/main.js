import { createApp } from "vue";
import "@/style/style.scss";
import App from "@/App.vue";
// 引入 pinia
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// swiper
import "swiper/css";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.mount("#app");

// PWA
navigator.serviceWorker.addEventListener("controllerchange", () => {
  // 弹出更新提醒
  console.log("站点已更新，刷新后生效");
  ElMessage("站点已更新，刷新后生效");
});

// 保留原站点的百度统计配置
const analyticsId = import.meta.env.VITE_SITE_BAIDUTONGJI;
if (analyticsId) {
  const script = document.createElement("script");
  script.src = `https://hm.baidu.com/hm.js?${encodeURIComponent(analyticsId)}`;
  script.async = true;
  document.head.appendChild(script);
}
