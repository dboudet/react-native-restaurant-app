import { StatusBar } from "expo-status-bar"
import React from "react"
import { Text, View, ScrollView, SafeAreaView } from "react-native"
import { useEffect, useState } from "react"
import Box from "./components/Box"
import styles from "./styles"

export default function App() {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch("https://bocacode-intranet-api.web.app/restaurants")
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((err) => console.error(err))
  }, [])
  // console.log(restaurants)

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Recommended Restaurants</Text>

          <View>
            {restaurants?.map((restaurant) => {
              return <Box restaurantInfo={restaurant} />
            })}
          </View>

          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
