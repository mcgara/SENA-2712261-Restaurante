export interface TableNames {
  User: 'user'
  Food: 'food'
  FoodCategory: 'food_category'
  Order: 'order'
  Invoice: 'invoice'
}

export type UserID = number
export type FoodID = number
export type FoodCategoryID = number
export type OrderID = number
export type InvoiceID = number

export interface User {
  id: UserID
  name: string
  lastname: string | null
  username: string
  email: string
  password: string
  create_time: Date
}

export interface Food {
  id: FoodID
  name: string
  description: string
  price: number
  stock: number
  image: string | null
  food_category_id: FoodCategoryID
}

export interface FoodCategory {
  id: FoodCategoryID
  name: string
  description: string
}

export interface Order {
  id: OrderID
  user_id: UserID
  invoice_id: InvoiceID
  food_id: FoodID
}

export interface Invoice {
  id: InvoiceID
  details: string | null
  total: number
  create_time: Date
}
