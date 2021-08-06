import React from "react"
import { View, Text, Image } from "react-native"
import styles from "../styles"

export default function RestaurantDetails({ route }) {
  // console.log(route.params.restaurant)
  const { name, address, photoUrl } = route.params.restaurant
  const ratingRounded =
    route.params.restaurant.rating >= 0
      ? Math.round(route.params.restaurant.rating * 10) / 10 + "★"
      : ""

  return (
    <View>
      <Image source={{uri:photoUrl}} style={styles.restImage} />
      <View style={styles.restNameCont}>
        <Text style={styles.restName}>{name}</Text>
        <Text style={styles.restName}>{ratingRounded}</Text>
      </View>
      <Text style={styles.restAddress}>{address}</Text>
    </View>
  )
}
