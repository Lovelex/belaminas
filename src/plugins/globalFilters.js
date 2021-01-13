import vue from 'vue'
import moment from 'moment'
import VueCurrencyFilter from 'vue-currency-filter'
moment.locale('pt-br');

vue.filter('time', v => moment(v).format('L'))
vue.filter('yesOrNo', v => v ? 'Sim' : 'Não')

const filterCurrencyOptions = {
  symbol: 'R$',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true,
  avoidEmptyDecimals: undefined,
}

vue.use(VueCurrencyFilter, filterCurrencyOptions)