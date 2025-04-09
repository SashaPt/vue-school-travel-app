<template>
   <div class="card">
      <img :src="`${url}images/${experience.image}`" :alt="experience.name">
      <span class="card__text">{{ experience.name }}</span>
   </div>
</template>
<script>
export default {
   data() {
      return {
         url: import.meta.env.BASE_URL
      }
   },
   props: {
      experience: {
         type: Object, required: true
      }
   }
}</script>