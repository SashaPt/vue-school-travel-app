<template>
   <div>
      <h1>Invoices</h1>
   </div>
</template>
<script setup>
import { onBeforeRouteLeave } from 'vue-router';
onBeforeRouteLeave((to, from) => {
   const answer = window.confirm('Are you sure want to leave?');
   if (!answer) return false;
});
</script>