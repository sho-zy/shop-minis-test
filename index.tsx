// Note: This file is only used for the development mode. Changes made here will not be
// reflected in published/production mode mini apps
import 'intl'
import 'intl/locale-data/jsonp/en'
import {AppRegistry} from 'react-native'
import 'react-native-gesture-handler'
import {useNativeEventEmitterShopActions} from '@shopify/shop-minis-platform-sdk'
import {Wrapper} from '@shopify/shop-minis-platform-sdk/src/components/Wrapper'
import {ShopActionsProvider} from '@shopify/shop-minis-platform-sdk/actions'

import MiniAppRootComponent, {theme} from './src'

AppRegistry.registerComponent(
  'ShopMinis',
  () =>
    ({
      initialApiKeys,
      apiHeaders,
      params = {},
      entryPoint = null,
      entryPointParams = null,
      environment,
    }: any) => {
      const actions = useNativeEventEmitterShopActions()

      return (
        <ShopActionsProvider value={actions}>
          <Wrapper
            initialApiKeys={initialApiKeys}
            apiHeaders={apiHeaders}
            theme={theme}
            params={params}
            entryPoint={entryPoint}
            entryPointParams={entryPointParams}
            environment={environment}
            enableApiSandbox
          >
            <MiniAppRootComponent />
          </Wrapper>
        </ShopActionsProvider>
      )
    }
)
