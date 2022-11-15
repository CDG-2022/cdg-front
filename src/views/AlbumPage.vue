<template>
  <div>
    <Header />
    
    <Main />
    
    <Footer />
    
  </div>
</template>

<script>
import Header from '@/components/album/AlbumHeader.vue'
import Main from '@/components/album/AlbumMain.vue'
import Footer from '@/components/album/AlbumFooter.vue'

export default {
    components: {
        Header, Main, Footer
    }
}
</script>

<style>

</style>