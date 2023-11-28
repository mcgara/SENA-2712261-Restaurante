import axios from 'axios'
import { Router } from './router'

export const API_URL = process.env['EXPO_PUBLIC_API_URL'] ?? null
export const API_ROUTES = {
  USER: '/user',
  FOOD: '/food',
  FOOD_CATEGORY: '/food_category',
  ORDER: '/order',
  INVOICE: '/invoice',
}

export const routes = {
  user: Router(API_ROUTES.USER),
  food: Router(API_ROUTES.FOOD),
  foodCategory: Router(API_ROUTES.FOOD_CATEGORY),
  order: Router(API_ROUTES.ORDER),
  invoice: Router(API_ROUTES.INVOICE)
}

export const api = !API_URL ? null : axios.create({ baseURL: API_URL })
export default {
  API_URL,
  API_ROUTES,
  api,
  routes
}
