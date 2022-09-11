import clsx from 'clsx'
import { ReactComponent as FacebookLogo } from './facebook-logo.svg'
import { ReactComponent as GithubLogo } from './github-logo.svg'

export interface Props {
  className?: string
}

const SocialMedia = ({ className }: Props) => {
  return (
    <ul className={clsx(className, 'flex gap-2 fill-current')}>
      <li className="w-8">
        <a href="https://www.facebook.com/astroraza">
          <FacebookLogo />
        </a>
      </li>
      <li className="w-8">
        <a href="https://www.github.com/mnrazamohamed">
          <GithubLogo />
        </a>
      </li>
    </ul>
  )
}

export default SocialMedia
