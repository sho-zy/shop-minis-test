import {Box, Button, Text, theme} from '@shopify/shop-minis-platform-sdk'
import {useMemo} from 'react'

import {SkillLevel} from '../types'

interface Props {
  selectedColor: string | null
  selectedSkillLevel: SkillLevel | null
  handleFilterReset: () => void
}

export const EmptyResult = ({
  selectedColor,
  selectedSkillLevel,
  handleFilterReset,
}: Props) => {
  const feedback = useMemo(() => {
    if (selectedColor && selectedSkillLevel) {
      return `No ${selectedColor} boards for ${selectedSkillLevel.toLowerCase()} riders`
    }
    if (!selectedColor && selectedSkillLevel) {
      return `No boards for ${selectedSkillLevel.toLowerCase()} riders`
    }
    if (selectedColor && !selectedSkillLevel) {
      return `No ${selectedColor} boards`
    }
    if (!selectedColor && !selectedSkillLevel) {
      return 'No boards'
    }
  }, [selectedColor, selectedSkillLevel])

  const showResetButton = useMemo(() => {
    return selectedColor || selectedSkillLevel
  }, [selectedColor, selectedSkillLevel])

  return (
    <Box paddingVertical="l" justifyContent="center" alignContent="center">
      <Text variant="heroNormal" textAlign="center" marginBottom="m">
        {feedback} :&apos;-(
      </Text>
      {showResetButton ? (
        <Button
          style={{
            marginHorizontal: theme.spacing.gutter,
          }}
          text="Reset Filters"
          onPress={handleFilterReset}
        />
      ) : null}
    </Box>
  )
}
