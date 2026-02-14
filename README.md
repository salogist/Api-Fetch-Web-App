# 🛍️ E-Commerce Product Shop

A modern, responsive e-commerce product shop built with React Class Components and the DummyJSON API. This project demonstrates core React concepts, state management, and modern CSS design patterns.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=flat&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript)

## 🎯 Project Overview

This is a fully functional e-commerce product shop that fetches real product data from the DummyJSON API. It features a beautiful gradient UI, shopping cart functionality, advanced filtering and sorting options, and a fully responsive design that works seamlessly on all devices.

## ✨ Features

### Core Functionality
- **Product Listing** - Displays 100 products with images, prices, ratings, and descriptions
- **Shopping Cart** - Add/remove items with quantity tracking and real-time total calculation
- **Search** - Real-time search across product titles and descriptions
- **Category Filter** - Dynamic category filtering fetched from API
- **Sorting Options** - Sort by name, price (low/high), and rating
- **Responsive Design** - Optimized for mobile, tablet, and desktop devices

### UI/UX Features
- **Modern Gradient Design** - Beautiful purple/blue gradient theme
- **Glassmorphism Effects** - Frosted glass effects on UI elements
- **Smooth Animations** - Card hover effects, slide-in cart, pulsing badges
- **Loading States** - Elegant loading spinner with smooth transitions
- **Error Handling** - User-friendly error messages with retry functionality
- **Discount Badges** - Animated discount percentage indicators
- **Stock Information** - Real-time stock availability display

## 🛠️ Technical Stack

### Frontend Framework
- **React 19.2.0** - Using Class Components architecture
- **Vite 7.3.1** - Fast build tool and development server
- **Native Fetch API** - For all HTTP requests (no axios)

### Architecture Patterns
- **Class Components** - Traditional React class-based components
- **Component Lifecycle Methods** - `componentDidMount` for data fetching
- **State Management** - Local component state with `setState`
- **Event Handling** - Arrow functions to maintain `this` context
- **Conditional Rendering** - Dynamic UI based on state

### Styling
- **Pure CSS3** - No CSS frameworks, custom styling
- **CSS Grid** - Responsive product grid layout
- **Flexbox** - Flexible component layouts
- **CSS Animations** - Keyframe animations for smooth effects
- **Media Queries** - 5 responsive breakpoints
- **CSS Variables** - Via gradient backgrounds and consistent theming

## 📂 Project Structure

```
├── public/
├── src/
│   ├── assets/          # Static assets
│   ├── App.jsx          # Main app component
│   ├── Shop.jsx         # Shop class component (main logic)
│   ├── Shop.css         # Shop styling with modern design
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd fetch
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173/
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎨 Key Components Breakdown

### Shop Component (Class Component)

**State Management:**
```javascript
state = {
  products: [],           // Array of fetched products
  loading: true,          // Loading state
  error: null,           // Error messages
  searchTerm: '',        // Search input value
  selectedCategory: 'all', // Selected category filter
  categories: [],        // Available categories
  cart: [],              // Shopping cart items
  sortBy: 'default'      // Sort option
}
```

**Lifecycle Methods:**
- `componentDidMount()` - Fetches products and categories on mount
- `render()` - Renders UI based on current state

**Key Methods:**
- `fetchProducts()` - Async function to fetch products from API
- `fetchCategories()` - Fetches available product categories
- `handleSearch()` - Updates search term state
- `handleCategoryChange()` - Filters products by category
- `handleSortChange()` - Sorts products by selected criteria
- `addToCart()` - Adds or increments product in cart
- `removeFromCart()` - Removes product from cart
- `getFilteredAndSortedProducts()` - Combines filtering and sorting logic
- `getTotalCartItems()` - Calculates total cart quantity
- `getTotalCartPrice()` - Calculates total cart price

## 🌐 API Integration

### DummyJSON API Endpoints

```javascript
// Get all products (limit 100)
GET https://dummyjson.com/products?limit=100

// Get product categories
GET https://dummyjson.com/products/categories
```

**Response Structure:**
```javascript
{
  products: [
    {
      id: 1,
      title: "Product Name",
      description: "Product description",
      price: 99.99,
      discountPercentage: 10.5,
      rating: 4.5,
      stock: 100,
      brand: "Brand Name",
      category: "category-name",
      thumbnail: "image-url"
    }
  ]
}
```

## 🎯 React Concepts Demonstrated

### Class Components
- Constructor and super
- Binding methods with arrow functions
- Component state management
- Lifecycle methods

### State Management
- Local state with `this.state`
- Updating state with `this.setState()`
- Derived state (filtered/sorted products)
- State-based conditional rendering

### Event Handling
- Form inputs (controlled components)
- Button clicks
- Select dropdowns

### Array Methods
- `map()` - Rendering lists
- `filter()` - Filtering products
- `find()` - Finding cart items
- `reduce()` - Calculating totals
- `sort()` - Sorting products

### Conditional Rendering
- Loading states
- Error states
- Empty states
- Dynamic content rendering

## 📱 Responsive Breakpoints

```css
Desktop:        1024px and above
Tablet:         768px - 1024px
Mobile Large:   480px - 768px
Mobile:         360px - 480px
Mobile Small:   Below 360px
```

## 🚀 Performance Optimizations

- Efficient state updates with `setState()`
- Conditional rendering to avoid unnecessary DOM updates
- CSS transitions for smooth animations
- Optimized images from API
- Debounced search (can be added)

## 🎓 Learning Outcomes

This project helped me learn:

### React Fundamentals
✅ Class component architecture and lifecycle
✅ State management and setState patterns
✅ Props and component composition
✅ Event handling in React
✅ Conditional rendering techniques
✅ List rendering with keys

### JavaScript Skills
✅ ES6+ syntax (arrow functions, destructuring, spread operator)
✅ Async/await for API calls
✅ Array manipulation methods
✅ Error handling with try/catch
✅ Template literals and string manipulation

### CSS & Design
✅ Modern CSS3 features (Grid, Flexbox, Animations)
✅ Responsive design principles
✅ Gradient backgrounds and glassmorphism
✅ CSS animations and transitions
✅ Mobile-first design approach

### API Integration
✅ Fetch API for HTTP requests
✅ Handling async operations
✅ Error handling in API calls
✅ Working with JSON data
✅ RESTful API consumption

### Development Tools
✅ Vite build tool and HMR
✅ ESLint for code quality
✅ npm package management
✅ Modern development workflow

## 🔜 Future Enhancements

Potential features to add:
- [ ] Pagination for products
- [ ] Product detail modal/page
- [ ] Wishlist functionality
- [ ] Dark mode toggle
- [ ] Local storage for cart persistence
- [ ] Checkout process
- [ ] User authentication
- [ ] Product reviews and ratings
- [ ] Related products section
- [ ] Price range filter

## 📝 License

This project is open source and available for learning purposes.

---

## 💭 Personal Note

This project is part of my **React learning journey** and **frontend development path**. Through building this e-commerce shop, I've gained hands-on experience with:

- **Class Components** - Understanding the traditional React component model before diving into Hooks
- **State Management** - Managing complex application state and data flow
- **API Integration** - Working with real-world APIs and handling async operations
- **Modern CSS** - Creating beautiful, responsive interfaces without frameworks
- **User Experience** - Implementing intuitive interactions and smooth animations
- **Problem Solving** - Debugging issues and finding elegant solutions

I'm continuously learning and improving my skills in **React** and **frontend development**. This project represents a milestone in my journey, showcasing my ability to build complete, functional web applications.

**My Frontend Journey:**
- ✅ HTML5 & CSS3 fundamentals
- ✅ JavaScript ES6+
- ✅ React basics (Class Components)
- 🔄 Currently learning React Hooks and functional components
- 📚 Next: State management libraries (Redux, Zustand)
- 🎯 Goal: Become a proficient full-stack developer

Every project is a step forward in my journey to master modern web development! 🚀

---

**Built with ❤️ while learning React and frontend development**
