// @react-navigation/native-stack requires a `type` instead of an `interface`

import {QuickstartTestProductsQueryData} from './data/TestProducts.graphql'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type StackParamList = {
  'Quickstart.Home': undefined
}

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced'

export type SnowBoard = QuickstartTestProductsQueryData.ShopProductsByIds
