import AsyncStarage from "@react-native-async-storage/async-storage";

// Buscar os Favoritos

export async function getFavorites(key) {
  const favorites = await AsyncStarage.getItem(key);
  return JSON.parse(favorites) || [];
}

// Salvar um novo Favorito

export async function saveFavorites(key, newItem) {
  let myFavorites = await getFavorites(key);

  let hasItem = myFavorites.some((item) => item.id === newItem.id);

  if (hasItem) {
    console.log("ESSE ITEM JA ESTA SALVO NA SUA LISTA!!!");
    return;
  }

  myFavorites.push(newItem);

  await AsyncStarage.setItem(key, JSON.stringify(myFavorites));

  console.log("Salvo com Sucesso!!");
}

// Remover um Favorito da lista

export async function removeFavorites(id) {
  let receipes = await getFavorites("@appreceitas");

  let myFavorite = receipes.filter((item) => {
    return item.id !== id;
  });

  await AsyncStarage.setItem("@appreceitas", JSON.stringify(myFavorite));
  console.log("DELETADO COM SUCESSO!");

  return myFavorite;
}

export async function isFavorites(receipe) {
  let myReceipes = await getFavorites("@appreceitas");

  const favorites = myReceipes.find((item) => item.id === receipe.id);

  if (favorites) {
    return true;
  }
  return false;
}
