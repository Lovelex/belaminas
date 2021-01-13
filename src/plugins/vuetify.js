import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        bbl1: '#FAF5F6',
        bbl2: '#F5EBEE',
        bp: '#35363A',
        bs: '#7F5964',
        binfo: '#595D7F',
        berror: '#995C5C',
        bsuccess: '#597F5D',
        bwarning: '#7F7E59',
      }
    }
  }
});
