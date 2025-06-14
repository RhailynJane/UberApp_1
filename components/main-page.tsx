import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Recent Locations
const recentLocations = [
  {
    id: 1,
    name: "Costco",
    address: "99 Heritage Gate SE, Calgary, AB T2H 3A7",
  },
  {
    id: 2,
    name: "St Bonaventure Parish",
    address: "1600 Acadia Dr SE, Calgary, Alberta T2J 3B3",
  },
];

// Suggestions
const suggestions = [
  {
    id: 1,
    icon: require("../assets/images/uber-ride.png"),
    text: "Ride",
  },
  {
    id: 2,
    icon: require("../assets/images/uber-eats.png"),
    text: "Food",
  },
  {
    id: 3,
    icon: require("../assets/images/grocery-icon.png"),
    text: "Grocery",
  },
  {
    id: 4,
    icon: require("../assets/images/alcohol-icon.png"),
    text: "Alcohol",
  },
];

// Restaurants
const restaurants = [
  {
    id: 1,
    name: "Jollibee",
    time: "15 min",
    deliveryFee: "$0 Delivery Fee",
    logo: require("../assets/images/jollibee-logo.jpeg"),
  },
  {
    id: 2,
    name: "Viet Thai Bistro",
    time: "30 min",
    deliveryFee: "$1.49 Delivery Fee",
    logo: require("../assets/images/viet-thai-logo.jpeg"),
  },
  {
    id: 3,
    name: "McDonald's",
    time: "25 min",
    deliveryFee: "$0.99 Delivery Fee",
    logo: require("../assets/images/mcdonalds-logo.png"),
  },
  {
    id: 4,
    name: "Popeyes Louis Kitchen",
    time: "40 min",
    deliveryFee: "$2.49 Delivery Fee",
    logo: require("../assets/images/popeyes-logo.png"),
  },
  {
    id: 5,
    name: "Subway",
    time: "20 min",
    deliveryFee: "$1.29 Delivery Fee",
    logo: require("../assets/images/subway-logo.jpeg"),
  },
];

// Trip Cards
const tripCards = [
  {
    id: 1,
    title: "Easy car rentals →",
    subtitle: "Take the wheel and get going",
    icon: require("../assets/images/car-keys.png"),
  },
  {
    id: 2,
    title: "Reserve and relax →",
    subtitle: "Book up to 90 days ahead",
    icon: require("../assets/images/plant-icon.png"),
  },
  {
    id: 3,
    title: "For XL groups →",
    subtitle: "Room for the whole crew",
    icon: require("../assets/images/red-car.png"),
  },
];

// More Ways To Use Uber
const moreWays = [
  {
    id: 1,
    title: "Try Courier →",
    subtitle: "For the things you need done now",
    icon: require("../assets/images/package-icon.png"),
    backgroundColor: "#4488ff",
  },
  {
    id: 2,
    title: "Go in luxury →",
    subtitle: "Elevated service, high-end",
    icon: require("../assets/images/luxury-car.png"),
    backgroundColor: "#ff4488",
  },
];

// Bottom Navigation Array
const bottomNavItems = [
  {
    id: 1,
    icon: require("../assets/images/home-icon.png"),
    text: "Home",
  },
  {
    id: 2,
    icon: require("../assets/images/services-icon.png"),
    text: "Services",
  },
  {
    id: 3,
    icon: require("../assets/images/activity-icon.png"),
    text: "Activity",
  },
  {
    id: 4,
    icon: require("../assets/images/account-icon.png"),
    text: "Account",
  },
];

const MainPage = () => {
  const showAlert = () => {
    Alert.alert("Alert", "Alert Button pressed");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.tabContainer}>
          {/* Active Tab */}
          <View style={styles.tab}>
            <View style={styles.tabContent}>
              <Image
                source={require("../assets/images/uber-ride.png")}
                style={styles.carIcon}
                resizeMode="contain"
              />
              <Text style={styles.activeTabText}>Rides</Text>
            </View>
            <View style={styles.activeUnderline} />
          </View>

          {/* Inactive Tab */}
          <View style={styles.tab}>
            <View style={styles.tabContent}>
              <Image
                source={require("../assets/images/uber-eats.png")}
                style={styles.carIcon}
                resizeMode="contain"
              />
              <Text style={styles.inactiveTabText}>Eats</Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/*Search Bar*/}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Image
              source={require("../assets/images/search-icon.png")}
              style={styles.searchIcon}
              resizeMode="contain"
            />
            <Text style={styles.searchText}>Where to?</Text>

            {/* Later button inside search bar */}
            <View style={styles.laterButton}>
              <Image
                source={require("../assets/images/calendar-icon.png")}
                style={styles.laterIcon}
                resizeMode="contain"
              />
              <Text style={styles.laterText}>Later</Text>
            </View>
          </View>
        </View>

        {/* Recent Locations */}
        <View style={styles.section}>
          {recentLocations.map((location) => (
            <View key={location.id} style={styles.locationItem}>
              <Image
                source={require("../assets/images/clock-icon.png")}
                style={styles.clockIcon}
                resizeMode="contain"
              />
              <View>
                <Text style={styles.locationName}>{location.name}</Text>
                <Text style={styles.locationAddress}>{location.address}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Suggestions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Suggestions</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>

          <View style={styles.suggestionsGrid}>
            {suggestions.map((suggestion) => (
              <View key={suggestion.id} style={styles.suggestionItem}>
                <Image
                  source={suggestion.icon}
                  style={styles.suggestionIcon}
                  resizeMode="contain"
                />
                <Text style={styles.suggestionText}>{suggestion.text}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Order Uber Eats again */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Order Uber Eats again</Text>
            <Text style={styles.arrow}>→</Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            {restaurants.map((restaurant) => (
              <View key={restaurant.id} style={styles.restaurantCard}>
                <View style={styles.restaurantImage}>
                  <Image
                    source={restaurant.logo}
                    style={styles.restaurantLogo}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.restaurantInfo}>
                  <Text style={styles.restaurantName}>{restaurant.name}</Text>
                  <Text style={styles.restaurantTime}>{restaurant.time}</Text>
                  <Text style={styles.deliveryFee}>
                    {restaurant.deliveryFee}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Plan your next trip */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Plan your next trip</Text>

          <ScrollView horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}>
          <View style={styles.tripCards}>
            {tripCards.map((card) => (
              <View
                key={card.id}
                style={styles.tripCard}
              >
                <Image
                  source={card.icon}
                  style={styles.tripIcon} 
                /> 
                <Text style={styles.tripTitle}>{card.title}</Text>
                <Text style={styles.tripSubtitle}>{card.subtitle}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        </View>

        {/* More ways to use Uber */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>More ways to use Uber</Text>

          <View style={styles.moreWaysGrid}>
            {moreWays.map((way) => (
              <View
                key={way.id}
                style={[
                  styles.moreWayCard,
                  { backgroundColor: way.backgroundColor },
                ]}
              >
                <Image
                  source={way.icon}
                  style={styles.moreWayIcon}
                  resizeMode="contain"
                />
                <Text style={styles.moreWayTitle}>{way.title}</Text>
                <Text style={styles.moreWaySubtitle}>{way.subtitle}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Score a GPC */}
        <View style={styles.section}>
          <View style={[styles.promoCard, styles.burgerCard]}>
            <View style={styles.promoContent}>
              <Text style={styles.promoTitle}>Score a GPC®</Text>
              <TouchableOpacity style={styles.orderButton} onPress={showAlert}>
                <Text style={styles.orderButtonText}>Order now</Text>
              </TouchableOpacity>
            </View>
            <Image
              source={require("../assets/images/burger.png")}
              style={styles.burgerImage}
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {bottomNavItems.map((item) => (
          <View key={item.id} style={styles.navItem}>
            <Image
              source={item.icon}
              style={styles.navIcon}
              resizeMode="contain"
            />
            <Text style={styles.navText}>{item.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  //   Style for Header
  header: {
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: "#000",
    width: "100%",
  },
  tabContainer: {
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#666",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    position: "relative",
  },
  tabContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  activeTabText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  inactiveTabText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  activeUnderline: {
    position: "absolute",
    bottom: -2,
    height: 2,
    width: "100%",
    backgroundColor: "#fff",
  },
  carIcon: {
    width: 50,
    height: 50,
    marginRight: 8,
  },

  //Style for ScrollView
  scrollView: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  //Style for Search Bar
  searchContainer: {
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    justifyContent: "space-between",
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  searchText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
  },
  laterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  laterIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  laterText: {
    color: "#fff",
    fontSize: 14,
  },

  //Style for Recent Locations Section
  section: {
    marginBottom: 25,
  },
  locationItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  clockIcon: {
    width: 16,
    height: 16,
    marginRight: 15,
  },
  locationInfo: {
    flex: 1,
  },
  locationName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  locationAddress: {
    color: "#888",
    fontSize: 14,
  },

  //Style for Suggestions Section
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    color: "#888",
    fontSize: 14,
  },
  arrow: {
    color: "#888",
    fontSize: 16,
  },
  suggestionsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  suggestionItem: {
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 15,
    width: "22%",
  },
  suggestionIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  suggestionText: {
    color: "#fff",
    fontSize: 12,
  },
  horizontalScroll: {
    marginTop: 10,
  },

  //Style for Restaurants Section
  restaurantCard: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor:"grey",
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    width: 280,
  },
  restaurantImage: {
    width: 45,
    height: 45,
    borderRadius: 35,
    backgroundColor: "#555",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  restaurantLogo: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
  },
  restaurantInfo: {
    flex: 1,
  },
  restaurantName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "semibold",
    marginBottom: 5,
  },
  restaurantTime: {
    color: "#888",
    fontSize: 14,
    marginBottom: 5,
  },
  deliveryFee: {
    color: "#ffa500",
    fontSize: 14,
  },

  //Style for Trip Cards Section
  tripCards: {
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  tripCard: {
    width: 350,
    borderRadius: 15,
    padding: 10,
    height: 250,
    overflow:"hidden",
  },
  tripIcon: {
    width: "100%",
    height: "80%",
    resizeMode: "cover",
     borderRadius: 5,
  },
  tripTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "semibold",
    marginBottom: 5,
    marginLeft: 5,
  },
  tripSubtitle: {
    color: "#fff",
    fontSize: 12,
    opacity: 0.9,
    marginLeft: 5,
  },



  //Style for More Ways to Use Uber Section
  moreWaysGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  moreWayCard: {
    width: "48%",
    borderRadius: 15,
    padding: 20,
    minHeight: 120,
  },
  moreWayIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  moreWayTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  moreWaySubtitle: {
    color: "#fff",
    fontSize: 12,
    opacity: 0.9,
  },

  //Style for Promo Card
  promoCard: {
    borderRadius: 15,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  burgerCard: {
    backgroundColor: "#ffcc44",
  },
  promoContent: {
    flex: 1,
  },
  promoTitle: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  orderButton: {
    backgroundColor: "#000",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: "flex-start",
  },
  orderButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  burgerImage: {
    width: 60,
    height: 60,
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#111",
    paddingVertical: 10,
    paddingBottom: 30,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
  },
  navIcon: {
    width: 20,
    height: 20,
    marginBottom: 5,
  },
  navText: {
    color: "#888",
    fontSize: 12,
  },
});
