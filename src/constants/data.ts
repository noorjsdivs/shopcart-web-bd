import { CreditCard, Gift, ShoppingBag, Truck } from "lucide-react";

const headerNavItems = [
  { title: "Home", href: "/" },
  { title: "Shop", href: "/shop" },
  { title: "Hot Deal", href: "/deal" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];
const signUpBenefits = [
  {
    icon: Gift,
    title: "Welcome Bonus",
    description: "Get 10% off on your first order when you sign up",
  },
  {
    icon: ShoppingBag,
    title: "Exclusive Deals",
    description: "Access member-only discounts and early sales",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Enjoy free shipping on orders over $50",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Multiple payment options with bank-level security",
  },
];

export { headerNavItems, signUpBenefits };
