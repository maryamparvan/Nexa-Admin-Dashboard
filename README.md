# Nexa Admin Dashboard

A modern and responsive admin dashboard built with **React, TypeScript, and REST APIs**.

Nexa provides a clean interface for managing users, products, orders, analytics, account settings, and notifications through a responsive dashboard designed for both desktop and mobile devices.

## ✨ Features

* 📊 **Dashboard Overview**

  * Revenue, orders, customers, and product statistics
  * Property price overview
  * Property type distribution
  * Recent properties

* 👥 **User Management**

  * User list with search and filtering
  * User details
  * User profile information

* 🏠 **Product & Property Management**

  * Property listing
  * Search and filtering
  * Property details
  * Real API data

* 📦 **Order Management**

  * Order listing
  * Price filtering
  * Order statistics
  * Order details and summaries

* 📈 **Analytics**

  * Revenue charts
  * Order and product statistics
  * Discount distribution
  * Data visualization with Recharts

* ⚙️ **Settings**

  * Account information
  * Password management
  * Appearance settings
  * Notification settings

* 🔔 **Notifications**

  * Low-stock notifications
  * Unread notification counter
  * Mark notification as read
  * Mark all notifications as read

* 🔐 **Authentication**

  * Login page
  * Protected routes
  * User session stored in LocalStorage

* 🌓 **Theme Support**

  * Light mode
  * Dark mode

* 📱 **Responsive Design**

  * Desktop
  * Tablet
  * Mobile
  * Responsive dashboard layout and components

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* React Router
* CSS
* Recharts
* React Icons

### Data & APIs

* REST APIs
* DummyJSON API
* Untera API
* Fetch API

### Development Tools

* Vite
* Git
* GitHub
* ESLint / Oxlint

## 📡 APIs

Nexa uses external REST APIs to provide dynamic data instead of relying entirely on static dashboard data.

### DummyJSON

Used for:

* Users
* Orders
* Product-related data

### Untera API

Used for property listing data, including:

* Property title
* Address
* Property type
* Transaction type
* Price
* Images
* Property size

> API keys are stored in environment variables and are not included in the repository.

## 📁 Project Structure

```text
src/
├── Components/
│   ├── Layout/
│   ├── Pages/
│   │   ├── Dashboard/
│   │   ├── Product/
│   │   ├── Users/
│   │   ├── Order/
│   │   ├── Analytics/
│   │   ├── Setting/
│   │   └── Login/
│   ├── Button/
│   └── ProtectedRoute/
│
├── Context/
│   ├── ThemeContext
│   └── ThemeContextBar
│
├── Service/
│   ├── UserService/
│   ├── OrderService/
│   └── ...
│
├── App.tsx
├── App.css
└── main.tsx
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/maryamparvan/Nexa-Admin-Dashboard.git
```

### 2. Navigate to the project

```bash
cd Nexa-Admin-Dashboard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
VITE_UNTERA_API_KEY=your_api_key_here
```

> Do not commit your `.env` file to GitHub.

### 5. Start the development server

```bash
npm run dev
```

The application will be available locally through the URL provided by Vite.

## 🎨 Design

Nexa focuses on:

* Clean and minimal UI
* Consistent spacing and typography
* Responsive layouts
* Reusable components
* Clear data visualization
* User-friendly navigation
* Light and dark themes

## 📱 Responsive Design

The dashboard is designed to adapt to different screen sizes.

On smaller screens:

* Sidebar navigation adapts to mobile
* Dashboard cards stack responsively
* Tables and charts adjust to available space
* Settings navigation becomes mobile-friendly
* Notification panels adapt to the viewport
* Forms and filters resize for smaller screens

## 🔒 Security Notes

Sensitive environment variables are stored in `.env` and excluded from Git using `.gitignore`.

The repository does not contain private API keys.

## 📌 Future Improvements

Possible future improvements include:

* Backend integration
* Database integration
* More advanced authentication
* Role-based access control
* Pagination improvements
* Advanced search and filtering
* More detailed analytics
* Improved notification management

## 👩‍💻 Author

**Maryam Parvan**

Frontend Developer

Built with React, TypeScript, and a focus on responsive UI development.

## 📄 License

This project is created for portfolio and educational purposes.
