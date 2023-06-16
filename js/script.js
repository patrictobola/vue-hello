console.log('JS OK', Vue)

// Estrapolo il metodo createApp 
const { createApp } = Vue;

// Starto l'app Vue 
const app = createApp({
    data() {
      return {
        message: 'Finalmente iniziamo la parte di Vue!',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png?20170919082558',
      }
    }
  })
  app.mount("#app");
