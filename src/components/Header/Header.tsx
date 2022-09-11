import clsx from 'clsx'

export interface Props {
  className?: string
}

const Header = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <span>Header</span>
    </div>
  )
}

export default Header
