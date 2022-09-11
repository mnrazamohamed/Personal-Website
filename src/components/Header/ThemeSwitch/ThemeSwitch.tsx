import clsx from 'clsx'

export interface Props {
  className?: string
}

const ThemeSwitch = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <span>ThemeSwitch</span>
    </div>
  )
}

export default ThemeSwitch
