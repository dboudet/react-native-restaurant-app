import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"

import styles from "../styles"

export default function RestaurantItem({ item, navigation }) {
  const { name, address, photoUrl } = item
  const ratingRounded =
    item.rating >= 0 ? Math.round(item.rating * 10) / 10 + "★" : ""

  return (
    <View style={styles.box}>
      {/* <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetails', {restaurant:item})}> */}
      <Image source={{ uri: photoUrl }} style={styles.restImage} />
      {/* </TouchableOpacity> */}
      <View style={styles.restNameCont}>
        <Text style={styles.restName}>{name}</Text>
        <Text style={styles.restName}>{ratingRounded}</Text>
      </View>
      <Text style={styles.restAddress}>{address}</Text>
    </View>
  )
}
