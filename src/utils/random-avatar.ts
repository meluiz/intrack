import type {
  AvatarFullConfig,
  EarSize,
  EyeStyle,
  GlassesStyle,
  HairStyle,
  HatStyle,
  MouthStyle,
  NoseStyle,
  Sex,
  ShirtStyle,
} from 'react-nice-avatar'

function randomize(array: string[]) {
  return array[Math.floor(Math.random() * array.length)]
}

const randomAvatar = function (): AvatarFullConfig {
  const sexStyle = ['man', 'woman']
  const faceColorStyle = ['#AC6651', '#F9C9B6']
  const earSizeStule = ['small', 'big']
  const hairColorStyle = ['#000000', '#ffffff', '#FC909F', '#F48150', '#77311D']
  const hairStyleStyle = [
    'none',
    'normal',
    'thick',
    'mohawk',
    'womanLong',
    'womanShort',
  ]
  const hatColorStyle = ['#000', '#fff']
  const hatStyleStyle = ['beanie', 'turban', 'none']
  const eyeStyle = ['circle', 'oval', 'smile']
  const glassesStyleStyle = ['round', 'square', 'none']
  const noseStyleStyle = ['short', 'long', 'round']
  const mouthStyleStyle = ['laugh', 'smile', 'peace']
  const shirtStyleStyle = ['hoody', 'short', 'polo']
  const shirtCololorStyle = [
    '#77311D',
    '#FC909F',
    '#6BD9E9',
    '#F4D150',
    '#FFEDEF',
    '#9287FF',
  ]
  const bgColorStyle = [
    'linear-gradient(45deg, #176fff 0%, #68ffef 100%)',
    'linear-gradient(45deg, #FDC830 0%, #F37335 100%)',
    'linear-gradient(45deg, #3CA55C 0%, #B5AC49 100%)',
    'linear-gradient(45deg, #EB3349 0%, #F45C43 100%)',
    'linear-gradient(45deg, #4776E6 0%, #8E54E9 100%)',
    'linear-gradient(45deg, #ffb347 0%, #ffcc33 100%)',
    'linear-gradient(45deg, #F09819 0%, #EDDE5D 100%)',
    'linear-gradient(45deg, #0052D4 0%, #4364F7 100%)',
  ]

  return {
    sex: randomize(sexStyle) as Sex,
    faceColor: randomize(faceColorStyle),
    earSize: randomize(earSizeStule) as EarSize,
    hairColor: randomize(hairColorStyle) as Sex,
    hairStyle: randomize(hairStyleStyle) as HairStyle,
    hatColor: randomize(hatColorStyle),
    hatStyle: randomize(hatStyleStyle) as HatStyle,
    eyeStyle: randomize(eyeStyle) as EyeStyle,
    glassesStyle: randomize(glassesStyleStyle) as GlassesStyle,
    noseStyle: randomize(noseStyleStyle) as NoseStyle,
    mouthStyle: randomize(mouthStyleStyle) as MouthStyle,
    shirtStyle: randomize(shirtStyleStyle) as ShirtStyle,
    shirtColor: randomize(shirtCololorStyle),
    bgColor: randomize(bgColorStyle),
  }
}

export default randomAvatar
