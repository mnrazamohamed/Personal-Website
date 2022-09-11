import clsx from 'clsx'

export interface Props {
  className?: string
}

const Biography = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <span>Biography</span>
    </div>
  )
}

export default Biography
