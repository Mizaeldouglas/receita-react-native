import { StyleSheet, Text, View } from "react-native";

export function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Receita Facil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4CBE6C",
    alignSelf: "flex-start",
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 32,
    borderBottomLeftRadius: 8,
    marginBottom: 8,
  },
  logo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
