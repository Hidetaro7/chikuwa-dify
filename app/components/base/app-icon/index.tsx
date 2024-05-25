import type { FC } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import Icon from '../../chat/icons/chikuwa.jpg'
import style from './style.module.css'

export type AppIconProps = {
  size?: 'xs' | 'tiny' | 'small' | 'medium' | 'large'
  rounded?: boolean
  icon?: string
  background?: string
  className?: string
}

const AppIcon: FC<AppIconProps> = ({
  size = 'medium',
  rounded = false,
  background,
  className,
}) => {
  return (

    <span
      className={classNames(
        style.appIcon,
        size !== 'medium' && style[size],
        rounded && style.rounded,
        className ?? '',
      )}
      style={{
        background,
      }}
    >
      <Image className='rounded-full' src={Icon} alt="ちくわ" />

    </span>
  )
}

export default AppIcon
