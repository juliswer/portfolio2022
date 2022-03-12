import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'

export default function Home() {

  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div>
      <h1>hello world</h1>
    </div>
  )
}
