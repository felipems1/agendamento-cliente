'use client'

import Link from 'next/link'

export default function ErrorPage() {
  return (
    <div className="flex h-screen items-center justify-center px-5">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">Ocorreu um erro</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Parece que algo deu errado. Tente novamente mais tarde.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  )
}
