import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { WebView } from "react-native-webview";

export function VideoView({ handleCloseVideo, videoUrl }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleCloseVideo} style={styles.backButton}>
        <Feather name="arrow-left" size={24} color="#fff" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
      <WebView style={styles.contentView} source={{ uri: videoUrl }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  backButton: {
    width: "100%",
    backgroundColor: "#4cbe6c",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingStart: 14,
  },
  backText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: 500,
    marginLeft: 14,
  },
  contentView: {
    flex: 1,
    width: "100%",
  },
});
