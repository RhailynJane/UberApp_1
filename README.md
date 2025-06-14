# Uber Clone App 🚗

This is a React Native Uber clone app built with [Expo](https://expo.dev), featuring a modern dark theme interface that mimics the Uber mobile experience.

## Members

-Rhailyn Jane Cona
-Komalpreet Kaur
-Abel Fekadu

## Features

- **🏠 Home Screen**: Complete Uber-style home interface
- **🔍 Search Bar**: Location search with "Later" scheduling option
- **📍 Recent Locations**: Quick access to frequently visited places
- **🍔 Uber Eats Integration**: Restaurant listings with delivery times and fees
- **🎯 Service Suggestions**: Quick access to Ride, Food, Grocery, and Alcohol services
- **✈️ Trip Planning**: Car rental and booking options
- **🎁 Promotions**: Dynamic promotional cards with discounts
- **🚙 Additional Services**: Courier and luxury ride options
- **📱 Bottom Navigation**: Multi-tab navigation system

## Tech Stack

- **React Native** - Mobile app framework
- **Expo** - Development platform
- **StyleSheet** - Custom styling system
- **React Native Components**: ScrollView, TouchableOpacity, Image, Alert

## Get Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npx expo start
   ```

3. **Run the app**

   In the output, you'll find options to open the app in a:

   - [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
   - [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
   - [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
   - [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Project Structure

```
├── assets/
│   └── images/           # App icons and images
├── components/
│   └── MainPage.js       # Main screen component
└── README.md
```

## Key Components

### 🏠 MainPage Component

The main screen featuring:

- **Header Tabs**: Switch between Rides and Eats
- **Search Interface**: Location search with scheduling
- **Recent Locations**: Calgary-based sample locations
- **Service Grid**: 4 main service categories
- **Restaurant Carousel**: Horizontal scrolling restaurant list
- **Trip Cards**: Travel and booking options
- **Promotional Cards**: Dynamic discount offers
- **Bottom Navigation**: 4-tab navigation system

### 📱 UI Features

- **Dark Theme**: Sleek black and gray color scheme
- **Responsive Design**: Optimized for mobile devices
- **Interactive Elements**: Touchable buttons and cards
- **Smooth Scrolling**: Horizontal and vertical scroll views
- **Visual Hierarchy**: Clear typography and spacing

## Sample Data

The app includes sample data for:

- **Recent Locations**: Costco and St Bonaventure Parish (Calgary)
- **Restaurants**: Jollibee, Viet Thai Bistro, McDonald's, Popeyes, Subway
- **Services**: Ride, Food, Grocery, Alcohol delivery
- **Promotions**: 50% off Uber Eats, 20% off Rides, 35% off Grocery

## Styling

The app uses a comprehensive StyleSheet with:

- **Container Layouts**: Flexbox-based responsive design
- **Color Scheme**: Dark theme with accent colors
- **Typography**: Multiple font weights and sizes
- **Interactive States**: Button and card styling
- **Navigation**: Bottom tab bar styling

## Development

You can start customizing by:

- Editing the `MainPage` component
- Modifying the sample data arrays
- Updating the styling in the StyleSheet
- Adding new screens and navigation

## Get a Fresh Project

When you're ready to create your own Expo app:

```bash
npx create-expo-app@latest
```

This will give you a clean starting point for your next React Native project.

---

**Note**: This is a UI clone for educational purposes. All brand names and logos are property of their respective owners.
