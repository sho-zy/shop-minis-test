import {Box, Text} from '@shopify/shop-minis-platform-sdk'
import {StyleSheet, TouchableOpacity} from 'react-native'

import CircleGreen from '../assets/circle-green.svg'
import CirclePurple from '../assets/circle-purple.svg'
import CircleYellow from '../assets/circle-yellow.svg'
import CircleBlue from '../assets/circle-blue.svg'
import CircleRed from '../assets/circle-red.svg'
import CircleRainbow from '../assets/circle-rainbow.svg'

const colorMap = {
  green: CircleGreen,
  purple: CirclePurple,
  yellow: CircleYellow,
  blue: CircleBlue,
  red: CircleRed,
}

interface Props {
  onPress: () => void
  color: string
  selected?: boolean
  isResetButton?: boolean
}
export const ColorButton = ({
  onPress,
  color,
  selected,
  isResetButton,
}: Props) => {
  const ColoredCircle = colorMap[color as keyof typeof colorMap]

  if (isResetButton) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Box style={[styles.circleContainer]}>
          {selected ? null : (
            <Text
              variant="bodySmall"
              color="foregrounds-primary"
              style={styles.resetText}
            >
              Reset
            </Text>
          )}
          <CircleRainbow />
        </Box>
      </TouchableOpacity>
    )
  }

  if (!ColoredCircle) return null

  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <Box style={[styles.circleContainer, selected && styles.selected]}>
          <ColoredCircle />
        </Box>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  circleContainer: {
    padding: 2,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: 'transparent',
  },
  selected: {
    borderColor: 'black',
  },
  resetText: {
    position: 'absolute',
    top: -24,
  },
})
