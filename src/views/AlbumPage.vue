<template>
  <div>
    <Header />
    
    <Main />
    
    <Footer />
    
  </div>
</template>

<script>
import Header from '@/components/album/Header.vue'
import Main from '@/components/album/Main.vue'
import Footer from '@/components/album/Footer.vue'

export default {
    components: {
        Header, Main, Footer
    }
}
</script>

<style>

</style>