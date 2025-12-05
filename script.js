// Product Data with HIGH QUALITY chocolate images
const products = [
  // Classic Chocolates
  { 
    id: 1, 
    name: "Dark Chocolate Bites", 
    price: 150, 
    category: "Classic Chocolates", 
    description: "Rich 70% dark chocolate pieces", 
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=90" 
  },
  { 
    id: 2, 
    name: "Milk Chocolate Truffles", 
    price: 180, 
    category: "Classic Chocolates", 
    description: "Creamy Belgian milk chocolate", 
    image: "https://images.unsplash.com/photo-1548848864-30259b9d4f19?w=800&q=90" 
  },
  { 
    id: 3, 
    name: "Almond Crunch Chocolates", 
    price: 220, 
    category: "Classic Chocolates", 
    description: "Roasted almonds in premium chocolate", 
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=800&q=90" 
  },
  
  // Celebration Boxes
  { 
    id: 4, 
    name: "Premium Assorted Box (12 pcs)", 
    price: 499, 
    category: "Celebration Boxes", 
    description: "Luxury chocolate collection", 
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&q=90" 
  },
  { 
    id: 5, 
    name: "Festive Gift Hamper", 
    price: 799, 
    category: "Celebration Boxes", 
    description: "Grand celebration chocolate hamper", 
    image: "https://images.unsplash.com/photo-1606312619070-d48b4dcd7c4f?w=800&q=90" 
  },
  { 
    id: 6, 
    name: "Couple Special Heart Box", 
    price: 650, 
    category: "Celebration Boxes", 
    description: "Romantic heart-shaped gift box", 
    image: "https://images.unsplash.com/photo-1518894781321-630e638d0742?w=800&q=90" 
  },
  
  // Kids Specials
  { 
    id: 7, 
    name: "Cartoon Shape Chocolates", 
    price: 120, 
    category: "Kids Specials", 
    description: "Fun animal & character shapes", 
    image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=800&q=90" 
  },
  { 
    id: 8, 
    name: "Choco Pops (Pack of 5)", 
    price: 160, 
    category: "Kids Specials", 
    description: "Colorful chocolate lollipops", 
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800&q=90" 
  },
  { 
    id: 9, 
    name: "Rainbow Sprinkle Bites", 
    price: 140, 
    category: "Kids Specials", 
    description: "Chocolate bites with rainbow toppings", 
    image: "https://images.unsplash.com/photo-1615870123253-cea1f7577e88?w=800&q=90" 
  },
  
  // Sugar-Free & Healthy
  { 
    id: 10, 
    name: "Sugar-Free Dark Chocolate", 
    price: 250, 
    category: "Sugar-Free & Healthy", 
    description: "Zero sugar, 100% taste", 
    image: "https://images.unsplash.com/photo-1610450949065-1f2841536c88?w=800&q=90" 
  },
  { 
    id: 11, 
    name: "Dates & Nuts Energy Bites", 
    price: 280, 
    category: "Sugar-Free & Healthy", 
    description: "Natural sweetness with protein power", 
    image: "https://images.unsplash.com/photo-1628773822990-202c917cd892?w=800&q=90" 
  },
  { 
    id: 12, 
    name: "Jaggery Almond Rocks", 
    price: 230, 
    category: "Sugar-Free & Healthy", 
    description: "Traditional healthy chocolate treats", 
    image: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=800&q=90" 
  }
];

// Update cart count in navigation
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
  }
}
