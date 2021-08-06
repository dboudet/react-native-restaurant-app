import React, { useState, useEffect } from "react"
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button,
  TouchableOpacity,
} from "react-native"
import RestaurantItem from "../components/RestaurantItem"
import { StatusBar } from "expo-status-bar"
import styles from "../styles"

export default function Home({ navigation }) {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    fetch("https://bocacode-intranet-api.web.app/restaurants")
      .then((response) => response.json())
      .then((allRestaurants) => setRestaurants(allRestaurants))
      .catch((err) => console.error(err))
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <>
            <TouchableOpacity
              style={styles.touchableAddNew}
              onPress={() => navigation.navigate('AddNewRestaurant')}
            >
              <Text style={styles.touchableAddNewText}>Add Restaurant</Text>
            </TouchableOpacity>

            {restaurants.map((singleRestaurant) => {
              // console.log('single restaurant ---->', singleRestaurant)
              return (
                <>
                  <RestaurantItem
                    key={singleRestaurant.id}
                    item={singleRestaurant}
                  />
                  <TouchableOpacity
                    style={styles.touchableGreenButton}
                    onPress={() => {
                      navigation.navigate("RestaurantDetails", {
                        restaurant: singleRestaurant,
                      })
                    }}
                  >
                    <Text style={styles.touchableGreenButtonText}>Details</Text>
                  </TouchableOpacity>
                </>
              )
            })}
          </>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  )
}
