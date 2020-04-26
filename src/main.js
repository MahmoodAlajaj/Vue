import Vue from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueResource from 'vue-resource';
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faUser} from "@fortawesome/free-solid-svg-icons";
import { faCartPlus} from "@fortawesome/free-solid-svg-icons";


library.add(faCartPlus);
library.add(faBullhorn);
library.add(faUser);
library.add(faCogs);
library.add(faSquare);
library.add(faTimes);
library.add(faCircle);

Vue.component("font-awesome-icon", FontAwesomeIcon);



Vue.use(VueResource);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
