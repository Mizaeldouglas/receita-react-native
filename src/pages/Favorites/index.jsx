import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { getFavorites } from "../../util/storage";
import { FoodList } from "../../components/FoodList";

import { useIsFocused } from "@react-navigation/native";

export function Favorites() {
  const [receipes, setReceipes] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    let isActive = true;

    async function getReceipes() {
      const result = await getFavorites("@appreceitas");
      if (isActive) {
        setReceipes(result);
      }
    }
    if (isActive) {
      getReceipes();
    }

    return () => {
      isActive = false;
    };
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Receitas Favoritas</Text>
      {receipes.length === 0 && <Text>Voce não tem nenuma receita salva</Text>}
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 14 }}
        data={receipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f9ff",
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#000",
  },
});
