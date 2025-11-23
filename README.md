## Mental Health App

A modern web application designed to help individuals manage their mental health by providing a platform for booking appointments with psychologists. The app allows users to view a list of available psychologists, search for doctors, book appointments, and track the status of their appointments. This application offers a beautiful, user-friendly interface with modern UI/UX features aimed at improving access to mental health support.

## Demo

![Project Demo](./public/mental-health-app.gif)

## Features

- **Doctor Search:** Real-time search functionality to quickly find psychologists by name
- **Appointment Booking:** Select a doctor, choose an appointment date and time, and book a session
- **Doctor-Specific Appointments:** Filter and view appointments for a specific doctor
- **Appointment Management:**
  - Toggle appointment status (completed/pending) with double-click
  - Delete appointments with a single click
  - Visual status indicators with badges
- **Modern UI/UX:**
  - Beautiful card-based design for appointments
  - Responsive grid layout
  - Smooth animations and transitions
  - Empty state messages
  - Interactive elements with hover effects
- **Promo Code:** Copy discount code with one click
- **Responsive Design:** Works seamlessly on desktop, tablet, and mobile devices
- **Alert Notifications:** Confirmation messages after booking appointments

## Technologies Used

- **React.js 19.0:** Front-end JavaScript library for building the user interface
- **React Hooks:** Custom hooks (`useApp`) and built-in hooks for state management
- **Context API:** Global state management using React Context
- **React Icons:** Comprehensive icon library (FaTimesCircle, FaCheckCircle, FaClock, FaUserMd, FaCalendarAlt, FaCopy, FaTag, etc.)
- **Bootstrap 5.3:** CSS framework for responsive design and components
- **UUID (react-uuid):** Generating unique identifiers for appointments
- **CSS3:** Custom styling with modern features:
  - CSS Grid and Flexbox for layouts
  - Gradient backgrounds
  - Smooth animations and transitions
  - Responsive design with media queries
- **JavaScript (ES6+):** Modern JavaScript features including arrow functions, destructuring, and async/await

## Project Structure

```plaintext
📦src
 ┣ 📂assets
 ┃ ┗ 📂images
 ┃   ┣ 📜logo.png
 ┃   ┣ 📜image1.png - image7.png (doctor images)
 ┃   ┗ 📜image_patient1.png - image_patient6.png (patient images)
 ┣ 📂components
 ┃ ┣ 📜AddPatient.jsx      # Form for adding new appointments
 ┃ ┣ 📜Doctors.jsx         # Doctor list with selection
 ┃ ┣ 📜Header.jsx          # Navigation header with search and promo code
 ┃ ┗ 📜PatientList.jsx     # Modern appointment cards display
 ┣ 📂context
 ┃ ┗ 📜AppContext.jsx      # Global state management with Context API
 ┣ 📂hooks
 ┃ ┗ 📜useApp.jsx          # Custom hook for application state and logic
 ┣ 📂helper
 ┃ ┗ 📜data.js             # Initial data (doctors and patients)
 ┣ 📂pages
 ┃ ┗ 📜Home.jsx            # Main page component
 ┣ 📜App.css               # Global styles and component styles
 ┣ 📜App.js                # Root component with Context Provider
 ┣ 📜index.css             # Base styles
 ┗ 📜index.js              # Application entry point
```

## Architecture

The application uses a modern React architecture:

- **Context API + Custom Hooks:** Centralized state management

  - `AppContext` provides global state to all components
  - `useApp` custom hook encapsulates all business logic
  - No prop drilling - components access state directly from context

- **Component Structure:**

  - **Header:** Search functionality, logo, promo code with copy feature
  - **Doctors:** Displays doctor list, handles doctor selection
  - **AddPatient:** Form for creating new appointments
  - **PatientList:** Modern card-based appointment display with status management

- **State Management:**
  - Doctors list and filtering
  - Patients/appointments list
  - Search functionality
  - Appointment status (pending/completed)

### Live Page

Click the link below to view the live version of the app:
[Live Page](https://zbaharyilmaz.github.io/mental-health-app/)

## Installation Instructions

To get started with the Mental Health App project, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- pnpm (or npm/yarn)

### Setup

1. **Clone this repository to your local machine:**

```bash
git clone https://github.com/zbaharyilmaz/mental-health-app.git
```

2. **Navigate into the project directory:**

```bash
cd mental-health-app
```

3. **Install the required dependencies:**

```bash
pnpm install
# or
npm install
```

4. **Run the development server:**

```bash
pnpm start
# or
npm start
```

5. **Open the application in your browser:**
   The app will automatically open at `http://localhost:3000`

### Build for Production

```bash
pnpm build
# or
npm run build
```

## Usage

1. **Search for Doctors:** Use the search bar in the header to filter doctors by name
2. **Select a Doctor:** Click on a doctor's image to view their appointments
3. **Book Appointment:** Fill out the form that appears after selecting a doctor
4. **Manage Appointments:**
   - Double-click an appointment card to toggle its status (pending/completed)
   - Click the × button to delete an appointment
5. **Copy Promo Code:** Click the copy button next to the promo code to copy it to clipboard
6. **Return to Home:** Click the logo or "Ana Sayfaya Dön" button to reset filters

## Key Features Explained

### Search Functionality

- Real-time search as you type
- Filters doctors by name (case-insensitive)
- Automatically resets when search is cleared

### Appointment Status Management

- **Pending:** Yellow badge with clock icon
- **Completed:** Green badge with checkmark icon
- Toggle between statuses by double-clicking the card

### Modern UI Components

- **Card-based Design:** Each appointment is displayed in a beautiful card
- **Status Badges:** Visual indicators for appointment status
- **Empty States:** Helpful messages when no data is available
- **Animations:** Smooth transitions and hover effects
- **Responsive Grid:** Automatically adjusts to screen size

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT license
