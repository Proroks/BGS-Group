export default function({ store, redirect }) {
  const hasSession = store.getters['auth/hasSession']

  !hasSession ? redirect('/') : redirect('/profile')
}
