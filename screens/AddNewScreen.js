import React, {useRef, useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native'
import styles from '../styles'

export default function AddNew({navigation}) {
const [restaurantName, setRestaurantName] = useState('')
const [address, setAddress] = useState('')
const [photoUrl, setPhotoUrl] = useState('')
const [rating, setRating] = useState('')

const newRestaurant = {
    address: address,
    name: restaurantName,
    photoUrl: photoUrl,
    rating: rating,
}

console.log(`New restaurant added:\n${newRestaurant}`)

const handleNewRestaurant = () => {
    fetch('https://bocacode-intranet-api.web.app/restaurants', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRestaurant),
    })
        .then(() => {
            Alert.alert('New restaurant added!')
            navigation.navigate('Home')
        })
        .catch(err => console.error(err))
}
const ref_input2 = useRef()
const ref_input3 = useRef()
const ref_input4 = useRef()

    return(
        <View>
            <Text style={styles.addNewHeader}>
                To add a new restaurant, submit the requested information below.
            </Text>
            <TextInput 
                placeholder='Restaurant Name' 
                style={styles.addNewInput}
                autoCorrect={false}
                autoCapitalize='words'
                returnKeyType='next'
                onSubmitEditing={() => ref_input2.current.focus()}
                onChangeText={ text => setRestaurantName(text)} 
                />
            <TextInput 
                placeholder='Address' 
                style={styles.addNewInput}
                autoCorrect={false}
                autoCapitalize='words'
                returnKeyType='next'
                ref={ref_input2}
                onSubmitEditing={() => ref_input3.current.focus()}
                onChangeText={ text => setAddress(text)} 
                />
            <TextInput 
                placeholder='Image URL' 
                style={styles.addNewInput}
                autoCorrect={false}
                autoCapitalize='none'
                keyboardType='url'
                returnKeyType='next'
                ref={ref_input3}
                onSubmitEditing={() => ref_input4.current.focus()}
                onChangeText={ text => setPhotoUrl(text)} 
                />
            <TextInput 
                placeholder='Rating' 
                style={styles.addNewInput}
                keyboardType='numeric'
                ref={ref_input4}
                onChangeText={ text => setRating(text)} 
            />
            <TouchableOpacity style={styles.touchableGreenButton} onPress={handleNewRestaurant}>
                <Text style={styles.touchableGreenButtonText}>Add Restaurant</Text>
            </TouchableOpacity>
        </View>
    )
}