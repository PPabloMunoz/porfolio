import Card from '@/components/Card'
import { useThemeStore } from '../store/ThemeStore'
import Image from 'next/image'

export default function Home() {
  const theme = useThemeStore()

  return (
    <>
      <div className='flex justify-center items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100 dark:bg-[#1a1919] dark:text-red-400 font-bold'>
        <span className='font-medium pr-2'>🚨</span> Página en construcción
      </div>

      <header className='p-5 my-14 w-full h-full flex flex-col lg:flex-row gap-16 justify-center items-center'>
        <div className='w-2/3 flex justify-center items-center'>
          <Image
            src={
              theme.theme === 'dark'
                ? '/dark-illustration.svg'
                : '/illustration.svg'
            }
            alt='SVG Illustration'
            className='h-[500px] w-full'
            width={1000}
            height={1000}
          />
        </div>

        <div className='w-full lg:w-3/6 flex flex-col justify-center items-center lg:items-start'>
          <p className='text-xl font-bold'>Hola, soy</p>
          <h1 className='text-8xl font-extrabold'>Pablo Muñoz</h1>
          <div className='mt-12 text-[#F69074] flex flex-row justify-start gap-5 font-semibold'>
            <p>UI UX Designer</p>
            <p className='text-black dark:text-white'>|</p>
            <p>Web Developer</p>
            <p className='text-black dark:text-white'>|</p>
            <p>Mobile App Developer</p>
          </div>
        </div>
      </header>

      <main className='p-5 w-screen flex flex-col justify-center items-center pb-20'>
        <section className='w-full flex flex-col justify-center items-center gap-10'>
          <header className='text-center'>
            <h2 className='text-5xl font-bold mb-5'>Proyectos</h2>
            {/* <p>Proyectos que he desarrollado</p> */}
          </header>

          <main className='w-full grid grid-cols-2 justify-center items-center gap-10 text-black'>
            <Card
              title='La Jerarquia RP'
              body='La Jerarquia RP es un servidor de RP serio y realista que ofrece a los jugadores la oportunidad de sumergirse en la ciudad de Los Santos.'
              image='/projects/jerarquia-home.jpeg'
              href='https://lajerarquiarp.es'
              languages={['React', 'TypeScript', 'Tailwind']}
            />
            <Card
              title='PokeApi'
              body='¡Encuentra Pokémon cerca de ti con esta herramienta fácil de usar!'
              image='/projects/pokeapi.png'
              href='https://pokeapisearch.vercel.app'
              languages={['React', 'JavaScript', 'Tailwind']}
            />
          </main>
        </section>
      </main>
    </>
  )
}
