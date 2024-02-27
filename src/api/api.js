import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

export const sneakersAPI = {
  getAllSneakers: (searchQuery, sortBy, filters) => {
    const params = new URLSearchParams()
    if (searchQuery) params.append('title', '*' + filters.searchQuery)
    if (sortBy) params.append('sortBy', filters.sortBy)
    return instance.get(`/items?${params.toString()}`)
  },
  getAllFavorites: () => {
    return instance.get('/favorites')
  },
  addFavorite: (sneaker) => {
    const obj = { ...sneaker, item_id: sneaker.id }
    return instance.post('/favorites', obj)
  },
  deleteFavorite: (sneaker) => {
    return instance.delete(`/favorites/${sneaker.favoriteId}`)
  },
  getCart: () => {
    return instance.get('/cart')
  },
  addCartList: (sneaker) => {
    const obj = { ...sneaker, item_id: sneaker.id }
    return instance.post('/cart', obj)
  },
  deleteCartList: (sneaker) => {
    return instance.delete(`/cart/${sneaker.cartListId}`)
  },
  clearCart: () => {
    return instance.patch('/cart', [])
  },
  getOrders: () => {
    return instance.get('/orders')
  },
  addOrders: (sneaker) => {
    return instance.patch('/orders', sneaker)
  },
  deleteOrder: (sneaker) => {
    return instance.delete(`/orders/${sneaker.orderId}`)
  },
  clearOrdersHistory: () => {
    return instance.patch('/orders', [])
  }
}
