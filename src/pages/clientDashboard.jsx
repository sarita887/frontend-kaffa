import { useState } from "react";
import clientSidebar from "../components/clientSidebar";
import clientHeader from "../components/clientHeader";
import productGrid from "../components/productGrid";
import productModal from "../components/productModal";
import cartModal from "../components/cartModal";
import PaymentModal from "../components/PaymentModal";
import ProfileModal from "../components/ProfileModal";
import OrdersSection from "../components/OrdersSection";
import ChatBox from "../components/ChatBox";

export default function ClientDashboard() {
  const [section, setSection] = useState("menu");
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modals, setModals] = useState({ product: false, cart: false, payment: false, profile: false });

  const products = [
    { id: 1, name: "Capuchino", price: 4.5, img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400" },
    { id: 2, name: "Latte", price: 5.0, img: "https://images.unsplash.com/photo-1570968992193-96ab7d43b3a0?w=400" },
    { id: 3, name: "Moca", price: 5.5, img: "https://images.unsplash.com/photo-1550679569-e6e57453873a?w=400" },
    { id: 4, name: "Croissant", price: 3.5, img: "https://images.unsplash.com/photo-1550679569-e6e57453873a?w=400" }
  ];};                