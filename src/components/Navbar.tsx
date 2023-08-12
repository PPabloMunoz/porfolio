import Image from 'next/image'
import { useThemeStore } from '../store/ThemeStore'

export default function Navbar() {
  const themeStore = useThemeStore()

  return (
    <nav className='px-10 py-1 border-b border-black flex flex-row justify-around items-center'>
      <Image
        src='/pablo-logo.svg'
        alt='Pablo Muñoz'
        className='h-auto w-20 dark:invert'
        width={500}
        height={500}
        draggable={false}
      />

      <button onClick={themeStore.changeTheme} className='text-3xl'>
        {themeStore.theme === 'light' ? '🌙' : '🌞'}
      </button>
    </nav>
  )
}
