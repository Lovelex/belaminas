import vue from 'vue'
import moment from 'moment'
moment.locale('pt-br');

vue.mixin({
  data: () => ({
    mask: {
      cellPhone: '(##) #####-####',
      tellPhone: '(##) ####-####',
    }
  }),
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xs
    },
    isSmall() {
      return this.$vuetify.breakpoint.sm
    },
  },
  methods: {
    time(timestamp, mode) {
      const modes = {
        1: moment(timestamp).format('L'),
        2: moment(timestamp).format('LLL'),
      }
      return modes[mode]
    }
  }
})