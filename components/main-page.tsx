import { Image, StyleSheet, Text, View } from "react-native";

const MainPage = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.tabContainer}>
          {/* Active Tab */}
          <View style={styles.tab}>
            <View style={styles.tabContent}>
              <Image
                source={require("../assets/images/uber-rides.png")}
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
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
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
    color: "#888",
    fontSize: 16,
  },
  activeUnderline: {
    position: "absolute",
    bottom: -2,
    height: 2,
    width: "100%",
    backgroundColor: "#fff",
  },
  carIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
});
