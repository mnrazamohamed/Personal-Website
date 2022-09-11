import clsx from 'clsx'

export interface Props {
  className?: string
}

const Footer = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <span>Footer</span>
    </div>
  )
}

export default Footer
