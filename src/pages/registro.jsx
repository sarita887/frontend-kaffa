import { useState } from "react";

function Registro() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombre = e.target.nombre.value;
    const usuario = e.target.usuario.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmar = e.target.confirmar.value;

    if (password !== confirmar) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Guardar en localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuariosApp")) || [];
    const existe = usuarios.find((u) => u.usuario === usuario || u.email === email);

    if (existe) {
      alert("El usuario o correo ya existe");
      return;
    }

    usuarios.push({ nombre, usuario, email, password });
    localStorage.setItem("usuariosApp", JSON.stringify(usuarios));

    alert("Registro exitoso. Redirigiendo al login...");
    window.location.href = "/login";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-[url('../imagenes/cafe-fondo.jpg')] bg-cover">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="flex justify-center mb-4">
          <img
            src="../imagenes/WhatsApp Image 2025-10-28 at 20.04.12.jpeg"
            alt="logo"
            className="h-16"
          />
        </h1>
        <h2 className="text-2xl font-bold text-center mb-6">Registrarse</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre completo */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
              Nombre Completo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre completo"
              required
              className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Usuario */}
          <div>
            <label htmlFor="usuario" className="block text-sm font-medium text-gray-700">
              Nombre de Usuario
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Elige un nombre de usuario"
              required
              className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ejemplo@correo.com"
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
                placeholder="Crea una contraseña"
                required
                className="mt-1 w-full border rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <i
                className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </div>
          </div>

          {/* Confirmar contraseña */}
          <div>
            <label htmlFor="confirmar" className="block text-sm font-medium text-gray-700">
              Confirmar Contraseña
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                id="confirmar"
                name="confirmar"
                placeholder="Repite la contraseña"
                required
                className="mt-1 w-full border rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <i
                className={`fa-solid ${showConfirm ? "fa-eye-slash" : "fa-eye"} absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500`}
                onClick={() => setShowConfirm(!showConfirm)}
              ></i>
            </div>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Registrarme
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          ¿Ya tienes una cuenta?{" "}
          <a href="/login" className="text-green-700 hover:underline">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
}

export default Registro;