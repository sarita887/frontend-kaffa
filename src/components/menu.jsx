import menuCategory from "./menuCategory";

export default function Menu() {
  const cafes = [
    { name: "Capuchino", price: "$8.000", img: "https://manualdecocina.com/wp-content/uploads/2024/03/Capuchino.jpg" },
    { name: "Latte", price: "$7.500", img: "https://www.homegrounds.co/wp-content/uploads/2019/09/latte-coffee-recipe.jpeg" },
    { name: "Mocha", price: "$9.000", img: "https://thegoldenlamb.com/wp-content/uploads/2023/07/what-is-a-mocha-1024x640.jpg" },
    { name: "Americano", price: "$6.000", img: "https://www.acouplecooks.com/wp-content/uploads/2021/03/Cafe-Americano-003.jpg" },
  ];

  const postres = [
    { name: "Brownie", price: "$6.000", img: "https://tse4.mm.bing.net/th/id/OIP.j25X47euW79mU8V5F_AXBgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Cheesecake", price: "$7.000", img: "https://stateofdinner.com/wp-content/uploads/2023/03/philadelphia-cheesecake-featured.jpg" },
    { name: "Tiramisú", price: "$7.500", img: "https://www.southernliving.com/thmb/x4dV3bVt7K_XYKhU8L1vLLGdN-Y=/1500x0/.../Extra_Easy_Tiramisu_006.jpg" },
  ];

  const snacks = [
    { name: "Sándwich Club", price: "$10.000", img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/.../classic-american-grilled-cheese.jpeg" },
    { name: "Croissant", price: "$5.500", img: "https://th.bing.com/th/id/R.3a99b6fbe46b472c0c2cb5101303def1?rik=Bbyy1DlDryATJg&pid=ImgRaw&r=0" },
    { name: "Bagel", price: "$6.500", img: "https://www.simplyrecipes.com/thmb/OCi-8YHGcx4BdvH9FBfD8vqWM3g=/1500x0/.../bagels-horiz-a-1600.jpg" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Nuestro Menú</h2>
        <MenuCategory title="Cafés" items={cafes} />
        <MenuCategory title="Postres" items={postres} />
        <MenuCategory title="Snacks" items={snacks} />
      </div>
    </section>
  );
}
