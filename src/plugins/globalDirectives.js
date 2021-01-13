import Vue from 'vue'
import { mask } from 'vue-the-mask'
import { CurrencyDirective } from 'vue-currency-input'
import VueCurrencyInput from 'vue-currency-input'

const inputCurrencyOptions = {
  /* see config reference */
  globalOptions: {
    currency: 'BRL',
    distractionFree: false,
    // valueAsInteger: true,
    autoDecimalMode: true
  }
}

Vue.use(VueCurrencyInput, inputCurrencyOptions)
Vue.directive('mask', mask)
Vue.directive('currency', CurrencyDirective)