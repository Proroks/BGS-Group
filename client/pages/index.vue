<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <LoginForm @handler="success" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoginPage',

  layout: 'auth',

  middleware: 'auth-redirect',

  methods: {
    success() {
      this.$router.push({ name: 'profile-setting' })
    }
  }

}
</script>
