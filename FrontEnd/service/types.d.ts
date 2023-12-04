import type { ApiRoutes, IApiRoutes as IApiRoutesModel } from '../../BackEnd/routers/types'
import type { ITableModel } from '../../DataBase/models/types'
import * as routes from './routes'

export type ApiRoutes = ApiRoutes
type _IApiRoutes = { [P in ApiRoutes]: ITableModel[IApiRoutesModel[P]['tableName']] }
export interface IApiRoutes extends _IApiRoutes {}
export type ApiRoutesData = { [P in keyof IApiRoutes]: IApiRoutes[P] }[keyof IApiRoutes]

export type UserRoute = InstanceType<typeof routes.UserRoute>
export type FoodRoute = InstanceType<typeof routes.FoodRoute>
export type FoodCategoryRoute = InstanceType<typeof routes.FoodCategoryRoute>
export type OrderRoute = InstanceType<typeof routes.OrderRoute>
export type InvoiceRoute = InstanceType<typeof routes.InvoiceRoute>

export type InstanceApiRoutes = UserRoute | FoodRoute | FoodCategoryRoute | OrderRoute | InvoiceRoute
type _InstanceApiRoutes = { [T in InstanceApiRoutes['route']]: T }
