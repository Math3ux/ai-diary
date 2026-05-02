"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Erro ao autenticar')
      } else {
        router.push('/diario')
      }
    } catch (err) {
      setError('Erro de rede')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-black">
      <div className="w-full max-w-md relative">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 opacity-20 blur-3xl" />
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
          <div className="mb-6">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-600">Bem-vindo de volta</h2>
            <p className="text-sm text-gray-500">Entre para acessar suas entradas e interações com a IA.</p>
          </div>

          {error && <div className="bg-red-50 text-red-700 p-2 rounded mb-4">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" required className="peer w-full border border-gray-200 dark:border-gray-700 rounded-md px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder=" " />
              <label className="absolute left-3 top-1 text-sm text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">Email</label>
            </div>

            <div className="relative">
              <input value={senha} onChange={e => setSenha(e.target.value)} type="password" required className="peer w-full border border-gray-200 dark:border-gray-700 rounded-md px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-300" placeholder=" " />
              <label className="absolute left-3 top-1 text-sm text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">Senha</label>
            </div>

            <button disabled={loading} type="submit" className="w-full py-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-lg">{loading ? 'Entrando...' : 'Entrar'}</button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-600">Ainda não tem conta? <a href="/register" className="text-indigo-600">Criar conta</a></div>
        </div>
      </div>
    </main>
  )
}
