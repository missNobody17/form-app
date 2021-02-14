const ButtonRow = {
    template:
    `<div>
      <button @click="onButtonClick"
       name="button-hoodie"
       value="fullstack-hoddie"
       class="ui button">Hoodie</button>
      <button @click="onButtonClick"
       name="button-tee"
       value="fullstack-tee"
       class="ui button">Tee</button>
      <button @click="onButtonClick"
       name="button-fitted-cap"
       value="fullstack-fitted-cap"
       class="ui button">Fitted Cap</button>
      <button @click="onButtonClick"
       name="button-jacket"
       value="fullstack-jacket"
       class="ui button">Jacket</button>
     </div>`,
    methods: {
        onButtonClick(e){
            const button = e.target;
            console.log(`the user clicked ${button.name}: ${button.value}`);
        },

    }

}
Vue.createApp({
    components: {
        "button-row": ButtonRow,
    }
}).mount('#app');
