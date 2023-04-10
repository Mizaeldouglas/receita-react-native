import { StyleSheet, Text } from "react-native";
import { View } from "moti";
export function Logo() {
  return (
    <View
      from={{
        opacity: 0,
        translateX: -50,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
      }}
      transition={{
        type: "spring",
        duration: 800,
      }}
      style={styles.container}
    >
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
