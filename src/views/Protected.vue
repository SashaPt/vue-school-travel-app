<template>
   <div>
      <h1>Greetings, {{ username }}</h1>
      <button @click="logout">Logout</button><br>
      <router-link :to="{name:'invoices'}">Invoices</router-link>
   </div>
</template>
<script>
export default {
   data() {
      return {
         username: window.user
      }
   },
   methods: {
      logout() {
         window.user = null;
         this.$router.push({ name: 'Home' })
      }
   }
}
</script>