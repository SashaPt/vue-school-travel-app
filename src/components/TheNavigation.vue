<template>
   <div id="nav">
      <AppLink id="logo" to="/">Vue School Travell App</AppLink>
      <AppLink v-for="destionation in destinations" :key="destionation.id"
         :to="{ name: 'destination.show', params: { id: destionation.id, slug: destionation.slug } }">
         {{ destionation.name }}
      </AppLink>
      <AppLink :to="{ name: 'protected' }">Dashboard</AppLink>
      <AppLink to="https://vueschool.io/">Vue School</AppLink>
   </div>
</template>
<script>
import sourceData from '@/data.json';
export default {
   data() {
      return {
         destinations: sourceData.destinations
      }
   }
}
</script>