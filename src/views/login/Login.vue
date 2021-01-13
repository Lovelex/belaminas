<template>
  <div id="login">
    <v-container class="d-flex justify-center">
      <v-sheet class="mt-12" width="500">
        <div class="d-flex justify-center mb-8">
          <v-img max-width="112" src="@/assets/svg/logo-fire-stacks.svg" />
        </div>
        <v-card elevation="8">
          <div class="deep-orange pa-4 d-flex justify-center">
            <span class="white--text font-weight-bold text-h5">Login</span>
          </div>
          <div class="pa-8">
            <v-form @submit.prevent="handleSubmit">
              <div class="mb-12">
                <v-text-field
                  v-model="user.email"
                  label="E-mail"
                  prepend-inner-icon="mdi-email"
                />
                <v-text-field
                  v-model="user.password"
                  label="Senha"
                  :type="type"
                  @click:append="toggleType"
                  prepend-inner-icon="mdi-key"
                  :append-icon="type === 'password' ? 'mdi-eye-off' : 'mdi-eye'"
                />
              </div>
              <div>
                <v-btn
                  :loading="isLoginLoading"
                  type="submit"
                  dark
                  color="deep-orange"
                  block
                >
                  <span>Entrar</span>
                </v-btn>
              </div>
            </v-form>
          </div>
        </v-card>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
const namespace = "login";

export default {
  data: () => ({
    type: "password",
    user: {
      email: "teste@teste.com",
      password: "123456",
    },
  }),
  computed: {
    ...mapGetters({
      loginError: "getLoginError",
      isLoginLoading: "getIsLoginLoading",
    }),
  },
  methods: {
    ...mapActions({
      login: "login",
    }),
    handleSubmit() {
      this.login({ email: this.user.email, password: this.user.password }).then(
        () => {
          if (!this.loginError) {
            this.$router.push({ name: "Admin" });
          }
        }
      );
    },
    toggleType() {
      const password = "password";
      const text = "text";
      if (this.type === password) return (this.type = text);
      if (this.type === text) return (this.type = password);
    },
  },
};
</script>

<style>
#login {
  min-height: 100vh;
}
</style>