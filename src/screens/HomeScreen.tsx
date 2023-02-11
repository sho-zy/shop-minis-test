import {
  Box,
  ProductCard,
  ProductCardGrid,
  Spinner,
  Text,
  TouchableProduct,
  useTheme,
} from '@shopify/shop-minis-platform-sdk'
import {useCallback, useState, useMemo} from 'react'
import {SafeAreaView} from 'react-native'

import {ColorPicker} from '../components/ColorPicker'
import {EmptyResult} from '../components/EmptyResult'
import {SkillLevelPicker} from '../components/SkillLevelPicker'
import {useSnowboardData} from '../hooks/useSnowboardData'
import {SkillLevel, SnowBoard} from '../types'
import {getSnowboardColors, getTagForColor, getTagForSkillLevel} from '../utils'

export const HomeScreen = () => {
  const theme = useTheme()

  const {snowboards, loading} = useSnowboardData()

  const [selectedSkillLevel, setSelectedSkillLevel] =
    useState<SkillLevel | null>(null)

  const handleSelectedSkillLevel = useCallback(
    (newSkillLevel: SkillLevel | null) => {
      setSelectedSkillLevel(newSkillLevel)
    },
    []
  )

  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const handleSelectedColor = useCallback((newColor: string | null) => {
    setSelectedColor(newColor)
  }, [])

  const handleFilterReset = useCallback(() => {
    setSelectedColor(null)
    setSelectedSkillLevel(null)
  }, [])

  const snowBoardsToDisplay = useMemo(() => {
    let filteredSnowboards = [...snowboards] as SnowBoard[]

    if (selectedSkillLevel) {
      filteredSnowboards = filteredSnowboards.filter(({tags}) =>
        tags.includes(getTagForSkillLevel(selectedSkillLevel))
      )
    }

    if (selectedColor) {
      filteredSnowboards = filteredSnowboards.filter(({tags}) =>
        tags.includes(getTagForColor(selectedColor))
      )
    }

    return filteredSnowboards
  }, [selectedColor, selectedSkillLevel, snowboards])

  const listFooter = useMemo(() => {
    if (loading) {
      return (
        <Box flex={1} justifyContent="center" alignItems="center">
          <Spinner />
        </Box>
      )
    }
    if (snowBoardsToDisplay.length === 0) {
      return (
        <EmptyResult
          selectedColor={selectedColor}
          selectedSkillLevel={selectedSkillLevel}
          handleFilterReset={handleFilterReset}
        />
      )
    }
    return null
  }, [
    handleFilterReset,
    loading,
    selectedColor,
    selectedSkillLevel,
    snowBoardsToDisplay.length,
  ])

  return (
    <SafeAreaView style={{flex: 1}}>
      <Box flex={1} backgroundColor="backgrounds-regular">
        <ProductCardGrid
          ListHeaderComponent={
            <Box paddingBottom="m">
              <Text variant="heroNormal" marginBottom="m">
                Find your board
              </Text>
              <Box marginBottom="s">
                <SkillLevelPicker
                  handleSelectedSkillLevel={handleSelectedSkillLevel}
                  selectedSkillLevel={selectedSkillLevel}
                />
              </Box>
              <ColorPicker
                handleSelectedColor={handleSelectedColor}
                selectedColor={selectedColor}
                snowboardColors={getSnowboardColors(snowboards as SnowBoard[])}
              />
            </Box>
          }
          products={snowBoardsToDisplay}
          renderItem={({product}) => (
            <TouchableProduct product={product} key={product.id}>
              <ProductCard shopId="12" product={product} />
            </TouchableProduct>
          )}
          contentContainerStyle={{
            padding: theme.spacing.m,
            marginBottom: theme.spacing.xxl,
          }}
          ListFooterComponent={listFooter}
        />
      </Box>
    </SafeAreaView>
  )
}
