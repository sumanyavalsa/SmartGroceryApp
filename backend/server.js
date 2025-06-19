const express = require('express');
const cors = require('cors');
const app = express();

// Mock data
const products = [
  {
    _id: '1',
    name: 'Fresh Tomatoes',
    category: 'vegetables',
    price: 30,
    description: 'Ripe, juicy tomatoes perfect for salads and cooking.',
    imageUrl: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    stock: 50
  },
  {
    _id: '2',
    name: 'Organic Bananas',
    category: 'fruits',
    price: 1.99,
    description: 'Sweet, organic bananas rich in potassium.',
    imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    stock: 100
  },
  {
    _id: '3',
    name: 'Dark Chocolate',
    category: 'chocolates',
    price: 4.99,
    description: 'Rich, dark chocolate with 70% cocoa content.',
    imageUrl: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    stock: 30
  },
  {
    _id: '4',
    name: 'Eggs',
    category: 'eggs',
    price: 3.99,
    description: 'Farm-fresh eggs from free-range chickens.',
    imageUrl: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    stock: 40
  },
  {
    _id: '5',
    name: 'Potato Chips',
    category: 'snacks',
    price: 2.99,
    description: 'Crispy potato chips with sea salt.',
    imageUrl: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    stock: 75
  },
  {
    _id: '6',
    name: 'Mixed Nuts',
    category: 'snacks',
    price: 5.99,
    description: 'Premium mixed nuts with almonds, cashews, and walnuts.',
    imageUrl: 'https://images.unsplash.com/photo-1536591375667-f93058e2b935?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    stock: 45
  },
  {
    _id: '7',
    name: 'Granola Bars',
    category: 'snacks',
    price: 3.49,
    description: 'Healthy granola bars with oats and honey.',
    imageUrl: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    stock: 60
  },
  {
    _id: '8',
    name: 'Trail Mix',
    category: 'snacks',
    price: 4.99,
    description: 'Energy-packed trail mix with dried fruits and nuts.',
    imageUrl: 'https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    stock: 40
  },
  {
    _id: '9',
    name: 'Popcorn',
    category: 'snacks',
    price: 1.99,
    description: 'Light and fluffy popcorn, perfect for movie nights.',
    imageUrl: 'https://images.unsplash.com/photo-1578849278002-014ad4757e5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    stock: 100
  }
];

// Mock users for authentication
const users = [
  {
    email: 'test@example.com',
    password: 'password123'
  }
];

app.use(cors());
app.use(express.json());

// Auth routes
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Product routes
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:category', (req, res) => {
  const category = req.params.category;
  const filteredProducts = products.filter(p => p.category === category);
  res.json(filteredProducts);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
}); 