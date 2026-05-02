export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-purple-50 dark:from-black dark:via-gray-900 dark:to-black flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-600">Diário inteligente que entende você</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Escreva seus pensamentos, receba reflexões e perguntas geradas pela IA e personalize o comportamento através de personas.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/register" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg transform hover:-translate-y-0.5 transition">Criar conta</a>
                <a href="/login" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-transparent bg-white/60 hover:bg-white/70 text-indigo-700">Entrar</a>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 bg-white/80 dark:bg-white/5 rounded-xl shadow-sm backdrop-blur">Escreva com liberdade</div>
                <div className="p-4 bg-white/80 dark:bg-white/5 rounded-xl shadow-sm backdrop-blur">Sugestões inteligentes</div>
                <div className="p-4 bg-white/80 dark:bg-white/5 rounded-xl shadow-sm backdrop-blur">Personas personalizáveis</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-2xl ring-1 ring-black/5">
              <div className="p-4 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white mb-4">
                <h3 className="text-lg font-semibold">Comece seu primeiro registro</h3>
                <p className="text-sm opacity-90">As entradas são privadas — só você tem acesso.</p>
              </div>
              <div className="space-y-3">
                <div className="h-24 rounded-lg bg-white/60 dark:bg-gray-700/40 p-3"> 
                  <p className="text-sm text-gray-600 dark:text-gray-300">Quer ajuda para começar? Experimente escrever sobre como foi seu dia ou uma conquista recente.</p>
                </div>
                <div className="flex gap-2">
                  <a href="/register" className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg text-center">Criar conta</a>
                  <a href="/login" className="flex-1 px-4 py-2 border rounded-lg text-center">Entrar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
