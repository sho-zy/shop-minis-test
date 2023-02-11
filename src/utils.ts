import {SkillLevel, SnowBoard} from './types'

export const getTagForSkillLevel = (skillLevel: SkillLevel) =>
  `skill-level-${skillLevel.toLowerCase()}`

export const getTagForColor = (color: string) => `color-${color}`

const colorTagPrefix = 'color-'
export const getSnowboardColors = (snowboards: SnowBoard[]) => {
  const allTags = snowboards.map(({tags}) => tags).flat()
  const allColorsTags = allTags.filter(tag => tag.startsWith(colorTagPrefix))
  const uniqueColorTags = [...new Set(allColorsTags)]

  return uniqueColorTags.map(colorTag =>
    colorTag.substring(colorTagPrefix.length)
  )
}
