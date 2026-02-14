import React, { Component } from 'react';
import './Shop.css';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true,
      error: null,
      searchTerm: '',
      selectedCategory: 'all',
      categories: [],
      cart: [],
      sortBy: 'default'
    };
  }

  componentDidMount() {
    this.fetchProducts();
    this.fetchCategories();
  }

  fetchProducts = async () => {
    try {
      this.setState({ loading: true, error: null });
      const response = await fetch('https://dummyjson.com/products?limit=100');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      this.setState({ 
        products: data.products, 
        loading: false 
      });
    } catch (error) {
      this.setState({ 
        error: error.message, 
        loading: false 
      });
    }
  };

  fetchCategories = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/categories');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      this.setState({ categories: data });
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleCategoryChange = (event) => {
    this.setState({ selectedCategory: event.target.value });
  };

  handleSortChange = (event) => {
    this.setState({ sortBy: event.target.value });
  };

  addToCart = (product) => {
    const { cart } = this.state;
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      this.setState({
        cart: cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      });
    } else {
      this.setState({
        cart: [...cart, { ...product, quantity: 1 }]
      });
    }
  };

  removeFromCart = (productId) => {
    this.setState({
      cart: this.state.cart.filter(item => item.id !== productId)
    });
  };

  getFilteredAndSortedProducts = () => {
    let filtered = this.state.products;

    if (this.state.searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      );
    }

    if (this.state.selectedCategory !== 'all') {
      filtered = filtered.filter(product =>
        product.category === this.state.selectedCategory
      );
    }

    switch (this.state.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    return filtered;
  };

  getTotalCartItems = () => {
    return this.state.cart.reduce((total, item) => total + item.quantity, 0);
  };

  getTotalCartPrice = () => {
    return this.state.cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  render() {
    const { loading, error, categories, cart } = this.state;
    const filteredProducts = this.getFilteredAndSortedProducts();

    if (loading) {
      return (
        <div className="shop-container">
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading products...</p>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="shop-container">
          <div className="error">
            <h2>⚠️ Error Loading Products</h2>
            <p>{error}</p>
            <button onClick={this.fetchProducts} className="retry-btn">
              Retry
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="shop-container">
        <header className="shop-header">
          <h1>🛍️ Product Shop</h1>
          <div className="cart-summary">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{this.getTotalCartItems()}</span>
            <span className="cart-total">${this.getTotalCartPrice()}</span>
          </div>
        </header>

        <div className="filters-section">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search products..."
              value={this.state.searchTerm}
              onChange={this.handleSearch}
              className="search-input"
            />
          </div>

          <div className="filter-controls">
            <select
              value={this.state.selectedCategory}
              onChange={this.handleCategoryChange}
              className="category-select"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category.slug} value={category.slug}>
                  {category.name}
                </option>
              ))}
            </select>

            <select
              value={this.state.sortBy}
              onChange={this.handleSortChange}
              className="sort-select"
            >
              <option value="default">Sort By</option>
              <option value="name">Name (A-Z)</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="products-info">
          <p>Showing {filteredProducts.length} products</p>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="product-image"
                />
                {product.discountPercentage > 0 && (
                  <span className="discount-badge">
                    -{product.discountPercentage.toFixed(0)}%
                  </span>
                )}
              </div>

              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">
                  {product.description.substring(0, 80)}...
                </p>

                <div className="product-rating">
                  <span className="stars">{'⭐'.repeat(Math.round(product.rating))}</span>
                  <span className="rating-value">{product.rating}</span>
                </div>

                <div className="product-footer">
                  <div className="price-section">
                    <span className="product-price">${product.price}</span>
                    {product.discountPercentage > 0 && (
                      <span className="original-price">
                        ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => this.addToCart(product)}
                    className="add-to-cart-btn"
                  >
                    Add to Cart
                  </button>
                </div>

                <div className="product-meta">
                  <span className="stock-info">
                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                  </span>
                  <span className="brand-info">{product.brand}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>No products found matching your criteria.</p>
          </div>
        )}

        {cart.length > 0 && (
          <div className="cart-sidebar">
            <h3>Shopping Cart</h3>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.thumbnail} alt={item.title} />
                  <div className="cart-item-info">
                    <p className="cart-item-title">{item.title}</p>
                    <p className="cart-item-price">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => this.removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <strong>Total: ${this.getTotalCartPrice()}</strong>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Shop;
