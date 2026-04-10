export default function ClientHeader({ cartCount, openCart, openProfile }) {
  return (
    <header className="h-16 bg-card flex justify-between items-center px-6 shadow">
      <h2 className="text-lg font-bold text-primary">Dashboard Cliente</h2>
      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer text-xl" onClick={openCart}>
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        </div>
        <div className="cursor-pointer" onClick={openProfile}>
          <img
            src="https://ui-avatars.com/api/?name=Cliente"
            alt="avatar"
            className="w-10 h-10 rounded-full border-2 border-primary"
          />
        </div>
      </div>
    </header>
  );
}
