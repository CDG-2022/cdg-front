<template>
  <main>
    
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">Album example</h1>
          <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
          <p>
            <a href="#" class="btn btn-primary my-2">Main call to action</a>
            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </div>
    </section>
  
    <div class="album py-5 bg-light">
      <div class="container">
  
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            <card v-for="card in cards" :key="card.id" :initCard="card" />

        </div>
      </div>
    </div>
  
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Card from '@/components/album/AlbumCard.vue'


export default {
    data() {
        return {

        }
    },
    computed: {
      ...mapState('album', {
        cards: state => state.cards
      })
    },
    created() { // 초기화
      this.getCards();
    },
    methods: {
      ...mapActions('album', ['getCards']), // vuex의 action 메서드와 매핑
      log(contents) {
        console.log(contents)
      }
    },
    components: {
        Card
    }
}
</script>

<style>

</style>