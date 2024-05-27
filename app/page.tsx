import type { FC } from 'react'
import React from 'react'

import type { IMainProps } from '@/app/components'
import Main from '@/app/components'

const App: FC<IMainProps> = ({
  params,
}: any) => {
  return (
    <Main params={params} />
  )
}
export const metadata = {
  icons: {
    shortcut: ['/shortcut-icon.jpg'],
    apple: [
      { url: '/apple-icon.jpg' },
      { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default React.memo(App)
