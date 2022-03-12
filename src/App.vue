<template>
  <Header />
  <div class="container pb-40">
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  components: {
    Header,
  },
};
</script>
