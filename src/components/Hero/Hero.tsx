import clsx from 'clsx'

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
