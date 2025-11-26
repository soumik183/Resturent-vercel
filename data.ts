
export interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  tag?: string;
}

const SIGNATURES: MenuItem[] = [
  {
    id: 1,
    name: "Kolkata Mutton Biryani",
    price: "₹550",
    description: "Long grain basmati, slow-cooked mutton, and the iconic potato. Served with raita.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600&auto=format&fit=crop",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Daab Chingri",
    price: "₹620",
    description: "Tiger prawns cooked inside a tender coconut with mustard and green chillies.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600&auto=format&fit=crop",
    tag: "Chef's Special"
  },
  {
    id: 3,
    name: "Galouti Kebab",
    price: "₹450",
    description: "Melt-in-mouth minced mutton kebabs, a heritage recipe from Lucknow, served on mini parathas.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Diamond Fish Fry",
    price: "₹380",
    description: "Pure Bhetki fillet coated in breadcrumbs, deep fried to golden perfection. Served with Kasundi.",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Railway Mutton Curry",
    price: "₹580",
    description: "A colonial-era spicy mutton curry with potatoes, once served in first-class railway cabins.",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Baked Rosogolla",
    price: "₹200",
    description: "Classic cottage cheese balls baked in thick jaggery milk. A sweet ending.",
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?q=80&w=600&auto=format&fit=crop"
  }
];

const STARTERS: MenuItem[] = [
  {
    id: 101,
    name: "Fish Kabiraji",
    price: "₹420",
    description: "Bhetki fillet coated in a fluffy, crispy egg net. A colonial club favorite.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600&auto=format&fit=crop",
    tag: "Classic"
  },
  {
    id: 102,
    name: "Mochar Chop",
    price: "₹250",
    description: "Spiced banana flower croquettes with peanuts and coconut, deep fried.",
    image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 103,
    name: "Gandharaj Chicken",
    price: "₹380",
    description: "Boneless chicken tossed with aromatic Gandharaj lime and green chillies.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=600&auto=format&fit=crop",
    tag: "Tangy"
  },
  {
    id: 104,
    name: "Mutton Shami Kebab",
    price: "₹480",
    description: "Finely minced mutton patties with chana dal and whole spices.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 105,
    name: "Posto Bora",
    price: "₹280",
    description: "Traditional poppy seed fritters, crispy on the outside and soft inside.",
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 106,
    name: "Chicken Cutlet",
    price: "₹320",
    description: "The diamond shaped Kolkata classic, served with mustard sauce and salad.",
    image: "https://www.hwcmagazine.com/wp-content/uploads/2024/06/Italian-chicken-cutlets-23-2.jpg"
  }
];

const MAINS: MenuItem[] = [
  {
    id: 201,
    name: "Kosha Mangsho",
    price: "₹600",
    description: "Velvety, slow-cooked mutton curry with rich spices and mustard oil.",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=600&auto=format&fit=crop",
    tag: "Must Try"
  },
  {
    id: 202,
    name: "Bhetki Paturi",
    price: "₹580",
    description: "Bhetki fish marinated in mustard and coconut, wrapped in banana leaf and steamed.",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 203,
    name: "Golda Chingri Malaikari",
    price: "₹750",
    description: "Jumbo prawns cooked in a creamy coconut milk gravy with mild spices.",
    image: "https://flavorquotient.com/wp-content/uploads/2023/07/Chingri-Malaikari-FQ-3-5751.jpg",
    tag: "Royal"
  },
  {
    id: 204,
    name: "Basanti Pulao",
    price: "₹300",
    description: "Sweet, yellow fragrant rice cooked with saffron, cashews, and raisins.",
    image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/Basanti_Pulao.webp"
  },
  {
    id: 205,
    name: "Dhokar Dalna",
    price: "₹350",
    description: "Spiced lentil cakes fried and simmered in a ginger-cumin gravy.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 206,
    name: "Chitol Muitha",
    price: "₹520",
    description: "De-boned Chitol fish dumplings cooked in a rich, spicy onion gravy.",
    image: "https://img-global.cpcdn.com/recipes/c7741c73f304fc45/680x781cq80/%E0%A6%9A%E0%A6%A4%E0%A6%B2-%E0%A6%AE%E0%A6%9B%E0%A6%B0-%E0%A6%AE%E0%A6%87%E0%A6%A0%E0%A6%AF-chital-macher-muitha-recipe-in-bengali-%E0%A6%B0%E0%A6%B8%E0%A6%AA%E0%A6%B0-%E0%A6%AA%E0%A6%B0%E0%A6%A7%E0%A6%A0-%E0%A6%9B%E0%A6%AC.jpg"
  }
];

const DESSERTS: MenuItem[] = [
  {
    id: 301,
    name: "Mishti Doi",
    price: "₹180",
    description: "The legendary sweet fermented yogurt set in an earthen pot.",
    image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=600&auto=format&fit=crop",
    tag: "Iconic"
  },
  {
    id: 302,
    name: "Nolen Gurer Ice Cream",
    price: "₹220",
    description: "Hand-churned ice cream infused with seasonal date palm jaggery.",
    image: "https://images.unsplash.com/photo-1560008581-09826d1de69e?q=80&w=600&auto=format&fit=crop",
    tag: "Seasonal"
  },
  {
    id: 303,
    name: "Sita Bhog",
    price: "₹200",
    description: "Sweet vermicelli-like dessert made from cottage cheese and rice flour.",
    image: "http://ganguram.com/cdn/shop/files/sitabhog.jpg?v=1738501625"
  },
  {
    id: 304,
    name: "Langcha",
    price: "₹150",
    description: "Elongated fried sweet dumplings soaked in sugar syrup, from Shaktigarh.",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/7/532382875/ZZ/EP/XS/75983101/chatgpt-image-jul-28-2025-01-58-06-pm-500x500.png"
  },
  {
    id: 305,
    name: "Mango Sandesh",
    price: "₹180",
    description: "Fresh cottage cheese fudge flavored with Alphonso mango pulp.",
    image: "https://sinfullyspicy.com/wp-content/uploads/2022/04/2-8.jpg"
  },
  {
    id: 306,
    name: "Kheer Kadam",
    price: "₹160",
    description: "A dual-layered sweet: dry Rosogolla encased in Khoya.",
    image: "https://www.balarammullick.in/_next/image?url=%2Fimages%2Flanding_gallery%2Fimg171.jpg&w=3840&q=75"
  }
];

export const MENU_CATEGORIES: Record<string, MenuItem[]> = {
  "Signatures": SIGNATURES,
  "Starters": STARTERS,
  "Main Course": MAINS,
  "Mishti (Dessert)": DESSERTS
};
