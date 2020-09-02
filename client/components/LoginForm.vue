<template>
  <v-card class="elevation-12">
    <v-form
      v-model="valid"
      @submit.prevent="submit"
    >
      <v-snackbar
        v-model="error"
        :top="true"
        :right="true"
        color="red"
      >
        Неверный логин или пароль
      </v-snackbar>
      <v-toolbar
        color="primary"
        dark
        flat
      >
        <v-toolbar-title>Login form</v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <v-text-field
          v-model="login"
          required
          label="Login"
          name="login"
          :rules="loginRules"
          prepend-icon="mdi-account"
          type="text"
          hide-details="auto"
        />

        <v-text-field
          v-model="password"
          required
          label="Password"
          name="password"
          :rules="passwordRules"
          prepend-icon="mdi-lock"
          type="password"
          hide-details="auto"
        />
      </v-card-text>

      <v-card-actions>
        <v-btn
          type="submit"
          color="primary"
          large
          block
          :loading="loading"
        >
          Login
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'LoginForm',

  data: () => ({
    valid: false,
    login: '',
    loading: false,
    loginRules: [
      text => !!text || 'Логин обязателен',
      text => text.length > 2 || 'Логин должен быть больше 2 символов'
    ],
    password: '',
    passwordRules: [
      text => !!text || 'Пароль обязателен',
      text => text.length > 2 || 'Пароль  должен быть больше 2 символов'
    ],
    error: false
  }),

  methods: {
    async submit() {
      this.loading = true

      try {
        await this.$store.dispatch('auth/login', {
          login: this.login,
          password: this.password
        })

        this.$emit('handler')
      } catch (err) {
        this.error = true
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
