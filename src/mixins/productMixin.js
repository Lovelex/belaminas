export default {
  computed: {
    discount() {
      return ((1 - 0.01 * this.product.desconto) * this.product.preco).toFixed(
        2
      );
    },
    parcelas() {
      return (this.product.preco / (this.product.parcelas || 1)).toFixed(2);
    },
  },
}