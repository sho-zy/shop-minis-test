import {StyleSheet} from 'react-native'
import {Box} from '@shopify/shop-minis-platform-sdk'

import AdvancedIcon from '../assets/skill-level-icon-advanced.svg'
import BeginnerIcon from '../assets/skill-level-icon-beginner.svg'
import IntermediateIcon from '../assets/skill-level-icon-intermediate.svg'
import {SkillLevel} from '../types'

interface LevelIconProps {
  level: SkillLevel
}
export const SkillLevelIcon = ({level}: LevelIconProps) => {
  let Icon

  switch (level) {
    case 'Beginner':
      Icon = BeginnerIcon
      break
    case 'Intermediate':
      Icon = IntermediateIcon
      break
    case 'Advanced':
      Icon = AdvancedIcon
      break
    default:
      Icon = null
      break
  }

  return (
    <Box style={styles.iconWrapper}>
      <Icon />
    </Box>
  )
}

const styles = StyleSheet.create({
  iconWrapper: {
    position: 'absolute',
    left: 14,
    width: 16,
    height: 16,
  },
})
