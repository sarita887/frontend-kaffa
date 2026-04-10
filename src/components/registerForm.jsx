import { useState } from "react";

export default function RegisterForm() {
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmar, setShowConfirmar] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    if (password !== confirmar) {
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log("Nombre:", nombre, "Usuario:", usuario, "Email:", email, "Contraseña:", password);
    // Aquí puedes implementar la lógica de registro
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Logo */}
        <h1 className="text-center mb-4">
          <img
            src="../imagenes/WhatsApp Image 2025-10-28 at 20.04.12.jpeg"
            alt="logo"
            className="mx-auto h-20 object-contain"
          />
        </h1>
        <h2 className="text-2xl font-bold text-center mb-6">Registrarse</h2>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre completo */}
          <div>
            <label className="block text-gray-700 mb-2">Nombre Completo</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre completo"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-600"
            />
          </div>

          {/* Usuario */}
          <div>
            <label className="block text-gray-700 mb-2">Nombre de Usuario</label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              placeholder="Elige un nombre de usuario"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-600"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2">Correo Electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@correo.com"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-600"
            />
          </div>

          {/* Contraseña con ojito */}
          <div>
            <label className="block text-gray-700 mb-2">Contraseña</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Crea una contraseña"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-yellow-600"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-800"
              >
                <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
              </span>
            </div>
          </div>

          {/* Confirmar contraseña con ojito */}
          <div>
            <label className="block text-gray-700 mb-2">Confirmar Contraseña</label>
            <div className="relative">
              <input
                type={showConfirmar ? "text" : "password"}
                value={confirmar}
                onChange={(e) => setConfirmar(e.target.value)}
                placeholder="Repite la contraseña"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-yellow-600"
              />
              <span
                onClick={() => setShowConfirmar(!showConfirmar)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-800"
              >
                <i className={`fa-solid ${showConfirmar ? "fa-eye-slash" : "fa-eye"}`}></i>
              </span>
            </div>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Registrarme
          </button>
        </form>

        {/* Enlace a login */}
        <p className="text-center text-gray-600 mt-4">
          ¿Ya tienes una cuenta?{" "}
          <a href="/login" className="text-yellow-600 hover:underline">
            Inicia sesión
          </a>
        </p>
      </div>
    </section>
  );
}
