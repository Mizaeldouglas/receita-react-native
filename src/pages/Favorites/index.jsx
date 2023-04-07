import { View, Text, StyleSheet } from "react-native";

export function Favorites() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#759e38",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#fff",
  },
});
