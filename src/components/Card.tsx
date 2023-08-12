import Image from 'next/image'
export interface Props {
  title: string
  body: string
  image: string
  href: string
  languages: Array<programmingLanguages>
}

type programmingLanguages =
  | 'HTML'
  | 'CSS'
  | 'JavaScript'
  | 'TypeScript'
  | 'NodeJS'
  | 'React'
  | 'NextJS'
  | 'Tailwind'
  | 'Deno'
  | 'MongoDB'
  | 'Supabase'
// | 'Astro'

export default function Card({ title, body, image, href, languages }: Props) {
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <div className='relative w-[500px] h-[300px]'>
        <div id='hoverContainer' className='tiles w-full h-full rounded-xl'>
          <a className='tile' href={href} target='_blank' rel='noreferrer'>
            <Image
              src={image}
              alt={title}
              width={500}
              height={500}
              className='w-[500px] h-72 object-cover rounded-xl'
            />

            <div className='details rounded-xl'>
              <span className='title'>Visitar</span>
            </div>
          </a>
        </div>
      </div>

      <div
        className={`relative w-full max-w-[500px] bg-white rounded-xl`}
        id='triangleContainer'
      >
        <div className='absolute w-full h-full -top-6 flex justify-center items-start -z-20s'>
          <div id='triangle' className='w-14 h-6 bg-[#FAFAFA]'></div>
        </div>

        <div className='flex flex-row justify-between items-center p-5 '>
          <h3 className='text-lg'>{title}</h3>

          <div className='flex flex-row justify-center items-center gap-7 z-10'>
            {languages.map((language: string, i: number) => {
              return (
                <Image
                  key={i}
                  src={`/programmingLanguages/${language}.svg`}
                  className='w-7 h-7'
                  width={100}
                  height={100}
                  alt={language}
                  title={language}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
