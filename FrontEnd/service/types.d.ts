import type { ApiRoutes, IApiRoutes as IApiRoutesModel } from '../../BackEnd/routers/types'
import type { ITableModel } from '../../DataBase/models/types'

export type ApiRoutes = ApiRoutes
declare type _IApiRoutes = { [P in ApiRoutes]: ITableModel[IApiRoutesModel[P]['tableName']] }
export interface IApiRoutes extends _IApiRoutes {}
