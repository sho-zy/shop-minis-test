import {Box, Text} from '@shopify/shop-minis-platform-sdk'

import {ColorButton} from './ColorButton'

interface ColorPickerProps {
  handleSelectedColor: (handleSelectedColor: string | null) => void
  selectedColor: string | null
  snowboardColors: string[]
}
export const ColorPicker = ({
  handleSelectedColor,
  selectedColor,
  snowboardColors,
}: ColorPickerProps) => {
  if (!snowboardColors || snowboardColors.length < 1) {
    return null
  }

  return (
    <>
      <Text marginBottom="xs">Select color</Text>
      <Box justifyContent="space-between" flexDirection="row">
        {snowboardColors.map(color => (
          <ColorButton
            selected={selectedColor === color}
            key={color}
            color={color}
            onPress={() => handleSelectedColor(color)}
          />
        ))}
        <ColorButton
          selected={!selectedColor}
          color="Reset"
          isResetButton
          onPress={() => handleSelectedColor(null)}
        />
      </Box>
    </>
  )
}
