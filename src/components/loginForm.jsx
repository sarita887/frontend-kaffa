import { useState } from "react";

export default function LoginForm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica de autenticación
    console.log("Usuario:", user, "Contraseña:", password);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        {/* Logo */}
        <img
          src="../imagenes/WhatsApp Image 2025-10-28 at 20.04.12.jpeg"
          alt="logo"
          className="mx-auto mb-4 h-20 object-contain"
        />

        <h2 className="text-2xl font-bold mb-6">Inicia Sesión</h2>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Usuario */}
          <div>
            <label htmlFor="user" className="block text-gray-700 mb-2">
              Usuario
            </label>
            <input
              type="text"
              id="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Tu nombre de usuario"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
          </div>

          {/* Contraseña con ojito */}
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-800"
              >
                <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
              </span>
            </div>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Ingresar
          </button>
        </form>

        {/* Links */}
        <p className="mt-4 text-gray-600">
          ¿No tienes cuenta?{" "}
          <a href="/registro" className="text-yellow-600 hover:underline">
            Regístrate aquí
          </a>
        </p>
        <a href="/recuperar" className="block mt-2 text-gray-600 hover:underline">
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </section>
  );
}
