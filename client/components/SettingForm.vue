<template>
  <v-card>
    <v-card-text>
      <v-flex class="mb-4">
        <v-avatar size="96" class="mr-4">
          <img :src="user.avatar" alt="Avatar">
        </v-avatar>
        <v-btn>
          Change Avatar
        </v-btn>
      </v-flex>
      <v-text-field
        v-model="user.name"
        label="Имя"
      />
      <v-text-field
        v-model="user.login"
        label="Логин"
      />
      <v-text-field
        v-model="user.password"
        label="Пароль"
        type="password"
      />
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary">
        Save Changes
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ProfileForm',

  data: () => ({
    user: {
      avatar: '',
      name: '',
      login: '',
      password: ''
    },
    error: {}
  }),

  mounted() {
    this.user = { ...this.$store.state.profile.user }
  },

  methods: {
    async handleSubmit() {
      try {
        await this.$http.$get('/users', {
          ...this.user
        })
      } catch {
        this.error = true
      }
    }
  }
}
</script>
