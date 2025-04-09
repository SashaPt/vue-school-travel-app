<template>
   <section>
      <h1>{{ experience.name }}</h1>
      <img :src="`${url}images/${experience.image}`" :alt="experience.name">
      <p>{{ experience.description }}</p>
   </section>
</template>
<script>
import sourceData from '@/data.json';

export default {
   data() {
      return {
         url: import.meta.env.BASE_URL
      }
   },
   props: {
      id: { type: Number, required: true },
      experienceSlug: { type: String, required: true }
   },
   computed: {
      destination() {
         return sourceData.destinations.find(d => d.id === this.id)
      },
      experience() {
         return this.destination.experiences.find(e => e.slug === this.experienceSlug)
      }
   }
}
</script>