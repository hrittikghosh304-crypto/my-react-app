# Digital Product Platform

A comprehensive digital product marketplace with user and admin features.

## 🚀 Features Overview

### 🧑‍💻 User Side Features
1. **Splash Screen**
   - Eye-catching splash screen with logo animation
   - Quick app initialization before login/register
   - Auto-redirect to login or home (if already logged in)

2. **Authentication System**
   - Login with email/username and password
   - Register new users with email verification
   - Forgot Password option with email reset
   - Remember Me option for quick login
   - Smooth form validation with live error feedback

3. **Home (Product List)**
   - Display all digital products (e.g., Ebooks, Apps, Templates)
   - Each product includes: Image / thumbnail, Name and price, Short description
   - Category filter & search bar
   - Add to favorites / wishlist feature
   - Responsive grid layout for desktop and mobile
   - Click any product to open Product Detail Page

4. **Product Detail Page**
   - Product preview with high-quality image and description
   - Display price, ratings, and reviews
   - Download or Purchase button (depending on access)
   - Related product suggestions

5. **Profile Section**
   - View and edit user profile information (name, email, photo)
   - View purchase history & transactions
   - Manage saved products / favorites
   - Option to log out
   - Profile picture upload and auto-save

6. **UPI Payment Gateway Integration**
   - Secure UPI payment system (Razorpay, Paytm, GPay, etc.)
   - Dynamic payment verification (success/failure callback)
   - Real-time update after payment completion
   - Auto-generate payment receipt / invoice
   - Store transaction data in database

7. **Notifications**
   - Show new product updates or offers
   - Telegram / in-app notifications for updates
   - Push notification support (optional future upgrade)

8. **Navigation & UI**
   - Smooth transitions between pages
   - Modern dark/light theme support
   - Mobile-friendly responsive design
   - Sticky navbar with quick access to home, profile, and cart

### 🧑‍💼 Admin Panel Features
1. **Authentication & Access**
   - Secure admin login system
   - Forgot password and change password options
   - Role-based access (Admin, Sub-Admin, Staff)

2. **Dashboard**
   - Overview of: Total users, Total sales, Total products, Recent transactions
   - Real-time analytics charts and graphs
   - Top-selling products and latest users

3. **Product Management**
   - Add, edit, or delete products
   - Upload product images, title, price, and description
   - Manage product categories and tags
   - Mark products as featured or new arrivals
   - Toggle visibility (Show / Hide on frontend)

4. **User Management**
   - View all registered users
   - Access individual user details and history
   - Ban / Unban or delete users
   - Send notifications or messages directly

5. **Payment & Transaction Management**
   - Track all UPI payments (Success / Pending / Failed)
   - View user payment history
   - Generate and download transaction reports
   - Integration with Razorpay / Paytm / PhonePe API

6. **Notifications & Communication**
   - Send broadcast notifications to all users
   - Manage Telegram / Email announcements
   - Display promotional banners or offers on homepage

7. **Order & Purchase Management**
   - View and manage all orders
   - Update order status (Pending, Completed, Refunded)
   - Auto-generate invoices for each order
   - Download or print invoice reports

8. **Settings & Customization**
   - Edit site title, logo, favicon, and colors
   - Manage footer links and contact info
   - Update payment gateway credentials (API keys)
   - Manage social media links

9. **Admin Profile**
   - Update name, photo, and password
   - Manage security settings
   - Two-factor authentication (optional future upgrade)

10. **Reports & Analytics**
    - View sales reports by day/week/month
    - Download CSV or PDF reports
    - Monitor user growth and traffic
    - See most-sold products and active users

## 🛠️ Tech Stack

- **Frontend**: React.js, React Router, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Integration**: Stripe API (with support for UPI gateways)
- **Deployment**: Docker, Nginx

## 📁 Project Structure

```
digital-product-platform/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── utils/
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── contexts/
│       ├── hooks/
│       └── utils/
├── uploads/
└── documentation/
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/digital-product-platform.git
   cd digital-product-platform
   ```

2. **Install backend dependencies:**
   ```bash
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Set up environment variables:**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

5. **Start the development server:**
   ```bash
   # Start backend server
   npm run dev
   
   # In a new terminal, start frontend
   cd client
   npm start
   ```

### Available Scripts

- `npm start` - Start the backend server
- `npm run dev` - Start the backend server with nodemon
- `npm run build` - Build the frontend for production
- `npm test` - Run tests

## 🧪 Testing

The application includes comprehensive testing for both frontend and backend components:

- Unit tests for React components
- Integration tests for API endpoints
- End-to-end tests for critical user flows

## 📦 Deployment

### Production Build

1. Build the frontend:
   ```bash
   cd client
   npm run build
   ```

2. Serve the built files with the backend server

### Docker Deployment

A Dockerfile is included for containerized deployment:

```bash
docker build -t digital-product-platform .
docker run -p 5000:5000 digital-product-platform
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email support@digitalproductplatform.com or join our Slack community.

## 🚀 Future Enhancements

- Dark mode toggle
- Coupon code & discount system
- Affiliate / referral program
- Multi-admin collaboration system
- Email marketing automation

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)