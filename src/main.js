import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@sencha/ext-web-components/dist/ext-titlebar.component';
import '@sencha/ext-web-components/dist/ext-button.component';
import '@sencha/ext-web-components/dist/ext-menu.component';
import '@sencha/ext-web-components/dist/ext-menuitem.component';
import '@sencha/ext-web-components/dist/ext-searchfield.component';
import '@sencha/ext-web-components/dist/ext-column.component';
import '@sencha/ext-web-components/dist/ext-grid.component';
import '@sencha/ext-web-components/dist/ext-container.component';
import '@sencha/ext-web-components/dist/ext-cartesian.component';
import '@sencha/ext-web-components/dist/ext-toolbar.component';
import '@sencha/ext-web-components/dist/ext-chart.component';
import '@sencha/ext-web-components/dist/ext-rownumberercell.component';

Vue.config.productionTip = false

Ext.onReady(() => {
  new Vue({
    router,
    render: function (h) { return h(App) }
  }).$mount('#app')
})
