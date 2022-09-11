import clsx from 'clsx'
import razapic from './raza-profile.png'

export interface Props {
  className?: string
}

const Avatar = ({ className }: Props) => {
  return (
    <div
    className={clsx('mx-auto flex justify-center w-60 lg:w-70', className)}
  >
    <img alt="Profile avatar" src={razapic} />
  </div>
  )
}

export default Avatar
