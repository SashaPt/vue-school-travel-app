<template>
   <a :href="to" target="_blank" ref="noopener" class="external-link" v-if="isExternal">
      <slot></slot>
   </a>
   <router-link v-bind="$props" class="internal-link" v-else>
      <slot></slot>
   </router-link>
</template>
<script>
import { RouterLink } from 'vue-router';
export default {
   props: {
      ...RouterLink.props
   },
   computed: {
      isExternal() {
         return typeof this.to === 'string' && this.to.startsWith('http')
      }
   }
}
</script>