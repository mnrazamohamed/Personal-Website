import clsx from 'clsx'
import SocialMedia from './SocialMedia'

export interface Props {
  className?: string
}

const Footer = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <span>Footer</span>
      <div>
          <SocialMedia />
        </div>
    </div>
  )
}

export default Footer
