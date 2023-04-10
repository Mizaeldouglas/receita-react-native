import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
  Share,
} from "react-native";

import {
  isFavorites,
  saveFavorites,
  removeFavorites,
} from "../../util/storage";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import { Entypo, AntDesign, Feather } from "@expo/vector-icons";
import { Ingredients } from "../../components/Ingredients";
import { Instructions } from "../../components/Instructions";
import { Modal } from "react-native";
import { VideoView } from "../../components/VideoView";

export default function Details() {
  const route = useRoute();
  const navigation = useNavigation();

  const [showVideo, setShowVideo] = useState(false);
  const [favorite, setFavorite] = useState(false);

  useLayoutEffect(() => {
    async function getStatusFavorites() {
      const receipeFavorite = await isFavorites(route.params?.data);
      setFavorite(receipeFavorite);
    }

    getStatusFavorites();

    navigation.setOptions({
      title: route.params?.data
        ? route.params?.data.name
        : "Detalhes da receita",
      headerRight: () => (
        <Pressable onPress={() => handleFavoriteReceipe(route.params?.data)}>
          {favorite ? (
            <Entypo name="heart" size={28} color="red" />
          ) : (
            <Entypo name="heart-outlined" size={28} color="red" />
          )}
        </Pressable>
      ),
      headerBackTitleVisible: true,
    });
  }, [navigation, route.params?.data, favorite]);

  async function handleFavoriteReceipe(receipe) {
    if (favorite) {
      await removeFavorites(receipe.id);
      setFavorite(false);
    } else {
      await saveFavorites("@appreceitas", receipe);
      setFavorite(true);
    }
  }
  function handleOpenVideo() {
    setShowVideo(true);
  }

  async function handleShare() {
    try {
      await Share.share({
        url: "https://mizaeldouglas-developer.vercel.app",
        message: `Receita: ${route.params?.data.name}\nIgredientes ${route.params?.data.total_ingredients}\nVi la no app do receita Facil`,
      });
    } catch (error) {
      console.log("ERROR!!!!!");
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 34 }}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Pressable onPress={handleOpenVideo}>
        <View style={styles.playIcon}>
          <AntDesign name="playcircleo" size={48} color="#fafafa" />
        </View>
        <Image
          source={{ uri: route.params?.data.cover }}
          style={styles.cover}
        />
      </Pressable>
      <View style={styles.headerDetails}>
        <View>
          <Text style={styles.title}>{route.params?.data.name}</Text>
          <Text style={styles.ingredientsText}>
            ingredientes ({route.params?.data.total_ingredients})
          </Text>
        </View>
        <Pressable onPress={handleShare}>
          <Feather name="share-2" size={24} color="#121212" />
        </Pressable>
      </View>
      {route.params?.data.ingredients.map((item) => (
        <Ingredients data={item} key={item.id} />
      ))}
      <View style={styles.instructionsArea}>
        <Text style={styles.instructionsText}>Modo de preparo</Text>
        <Feather name="arrow-down" size={24} color="#fff" />
      </View>
      {route.params?.data.instructions.map((item, index) => (
        <Instructions data={item} key={item.id} index={index} />
      ))}

      <Modal visible={showVideo} animationType="slide">
        <VideoView
          handleCloseVideo={() => setShowVideo(false)}
          videoUrl={route.params?.data.video}
        />
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f9ff",
    paddingTop: 14,
    paddingEnd: 14,
    paddingStart: 14,
  },
  cover: {
    height: 200,
    width: "100%",
    borderRadius: 14,
  },
  playIcon: {
    position: "absolute",
    zIndex: 9,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    marginTop: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 4,
  },
  ingredientsText: {
    marginBottom: 14,
  },
  headerDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  instructionsArea: {
    marginTop: 20,
    backgroundColor: "#4cbe6c",
    flexDirection: "row",
    padding: 8,
    borderRadius: 4,
    marginBottom: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  instructionsText: {
    fontSize: 18,
    fontWeight: 500,
    color: "#FFFFFF",
    marginRight: 20,
  },
});
