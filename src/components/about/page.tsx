import React from 'react'

export default function About() {
  return (
    <section className='flex justify-center w-full '>
            <div className=' text-center'>
                <h1 className='text-5xl relative after:content-[] after:absolute after:w-10 after:h-[2px] after:bg-blue-500 after:-bottom-1 after:left-5'>Sobre</h1>
                <p className='text-2xl'>Esse projeto foi criado com o intuito de apresentar um catálogo de jogos indies para quem está cansado de jogar os mesmos jogos AAA e procura algum game que saia do comum e apresente mecânicas novas</p>
            </div>
    </section>
  )
}
