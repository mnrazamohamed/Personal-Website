import clsx from 'clsx'
import Avatar from './Avatar'
import Title from './Title'

export interface Props {
  className?: string
}

const Hero = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <span>Hero</span>
    </div>
  )
}

export default Hero
