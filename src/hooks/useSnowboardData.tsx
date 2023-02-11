import {useMinisQuery} from '@shopify/shop-minis-platform-sdk'

import TestProductsQuery from '../data/TestProducts.graphql'

const SHOP_GID = 'gid://shopify/Shop/68822335510'
const PRODUCT_GIDS = [
  'gid://shopify/Product/7982542651414',
  'gid://shopify/Product/7982528397334',
  'gid://shopify/Product/7982535704598',
  'gid://shopify/Product/7982577352726',
  'gid://shopify/Product/7982564245526',
  'gid://shopify/Product/7982547763222',
  'gid://shopify/Product/7982499495958',
  'gid://shopify/Product/7982540521494',
  'gid://shopify/Product/7982554710038',
  'gid://shopify/Product/7982557200406',
  'gid://shopify/Product/7982571257878',
  'gid://shopify/Product/7982372388886',
]

export const useSnowboardData = () => {
  const {loading, data, error} = useMinisQuery(TestProductsQuery, {
    variables: {
      shopId: SHOP_GID,
      productIds: PRODUCT_GIDS,
    },
    fetchPolicy: 'cache-and-network',
  })

  const snowboards = data?.shop?.productsByIds ?? []

  return {
    snowboards,
    loading,
    error,
  }
}
