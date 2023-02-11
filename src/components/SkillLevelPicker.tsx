import {Box, Button, Text, useTheme} from '@shopify/shop-minis-platform-sdk'
import {ScrollView} from 'react-native-gesture-handler'

import {SkillLevel} from '../types'

import {SkillLevelIcon} from './SkillLevelIcon'

const skillLevels: SkillLevel[] = ['Beginner', 'Intermediate', 'Advanced']

interface SkillLevelButtonProps {
  onPress: () => void
  text: string
  selected?: boolean
}
const SkillLevelButton = ({onPress, text, selected}: SkillLevelButtonProps) => {
  const theme = useTheme()

  const hasIcon = text !== 'All'

  if (!hasIcon) {
    return (
      <Box>
        <Button
          size="m"
          variant={selected ? 'primary' : 'tertiary'}
          style={{
            alignSelf: 'baseline',
            marginRight: theme.spacing.xs,
            paddingHorizontal: theme.spacing.s,
          }}
          text={text}
          onPress={onPress}
        />
      </Box>
    )
  }
  return (
    <Box justifyContent="center">
      <Button
        size="m"
        variant={selected ? 'primary' : 'tertiary'}
        style={{
          alignSelf: 'baseline',
          marginRight: theme.spacing.xs,
          paddingRight: theme.spacing.s,
          paddingLeft: theme.spacing.xl,
        }}
        text={text}
        onPress={onPress}
      />
      <SkillLevelIcon level={text as SkillLevel} />
    </Box>
  )
}

interface SkillLevelPickerProps {
  handleSelectedSkillLevel: (
    handleSelectedSkillLevel: SkillLevel | null
  ) => void
  selectedSkillLevel: SkillLevel | null
}
export const SkillLevelPicker = ({
  handleSelectedSkillLevel,
  selectedSkillLevel,
}: SkillLevelPickerProps) => {
  return (
    <>
      <Text marginBottom="xs">Select skill level</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <SkillLevelButton
          selected={!selectedSkillLevel}
          text="All"
          onPress={() => handleSelectedSkillLevel(null)}
        />
        {skillLevels.map(skillLevel => (
          <SkillLevelButton
            selected={selectedSkillLevel === skillLevel}
            key={skillLevel}
            text={skillLevel}
            onPress={() => handleSelectedSkillLevel(skillLevel)}
          />
        ))}
      </ScrollView>
    </>
  )
}
