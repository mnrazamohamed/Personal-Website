import clsx from 'clsx'

export interface Props {
  className?: string
}

const Avatar = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <span>Avatar</span>
    </div>
  )
}

export default Avatar
