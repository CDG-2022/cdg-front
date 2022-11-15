import albumApi from '@/api/album-api';

const album = {
    namespaced: true,
    state: () => ({ 
        cards: []
    }),
    getters: {  },
    mutations: { 
        setCards(state, payload) {
            state.cards = payload;
        },
        setCard(state, payload) {
            var card = findCardById(state, payload.id);
            card.content = payload.content;
        }
    },
    actions: {
        async getCards({ commit }) {
            var cards = await albumApi.getCards()
            commit('setCards', cards);
        },
        async modifyCard({ commit }, card) {
            await albumApi.modifyCard(card);
            commit('setCard', card);
        }
    },
};

function findCardById(state, id) {
    return state.cards.find(card => card.id === id);
  }

export default album;