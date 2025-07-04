import './App.css'
import 'tailwindcss'
import { FaCat } from "react-icons/fa";

function App() {
  const GETFORM_ENDPOINT = "https://getform.io/f/bejldrra"; 

  return (
    <div className="min-h-screen flex flex-col items-center bg-purple-200">
      
      <header className="w-full bg-white text-purple-800 text-3xl font-bold p-4 flex justify-center items-center shadow-md">
        <h1 className="flex items-center space-x-2">
          <FaCat />
          <span>DudaSys</span>
          <FaCat />
        </h1>
      </header>

      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Entrar na sua conta</h2>
          
          <form action={GETFORM_ENDPOINT} method="POST">
            <div className="mb-4">
              <input
                type="email"
                placeholder="Digite o e-mail"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Digite a senha"
                name="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App