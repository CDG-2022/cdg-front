import axios from "axios"

export default {
    getCards() {
        return axios.get('/api/album/cards')
            .then(response => {
                return response.data
            })
    },
    modifyCard(card) {
        return axios.put(`/api/album/cards/${card.id}`, card)
            .then(response => response.data)
    }
}