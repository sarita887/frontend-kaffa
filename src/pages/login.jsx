import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <img
          src="../imagenes/WhatsApp Image 2025-10-28 at 20.04.12.jpeg"
          alt="logo"
          className="mx-auto mb-4 h-16"
        />
        <h2 className="text-2xl font-bold text-center mb-6">Inicia Sesión</h2>

        <form id="loginForm" className="space-y-4">
          {/* Usuario */}
          <div>
            <label htmlFor="user" className="block text-sm font-medium text-gray-700">
              Usuario
            </label>
            <input
              type="text"
              id="user"
              name="user"
              placeholder="Tu nombre de usuario"
              required
              className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Contraseña */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="********"
                required
                className="mt-1 w-full border rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <i
                className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Ingresar
          </button>
        </form>

        {/* Links */}
        <p className="mt-4 text-sm text-center">
          ¿No tienes cuenta?{" "}
          <a href="registro.html" className="text-green-700 hover:underline">
            Regístrate aquí
          </a>
        </p>
        <a href="#" className="block mt-2 text-sm text-center text-gray-600 hover:underline">
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </div>
  );
}

export default Login;