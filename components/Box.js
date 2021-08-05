import { rest } from 'lodash'
import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from '../styles'

export default function Box({ restaurantInfo }) {
    const { name, address, photoUrl } = restaurantInfo
    const ratingRounded = restaurantInfo.rating >=0 ? Math.round(restaurantInfo.rating *10)/10 + '★' : ''
    return(
        <View style={styles.box}>
            <Image 
                source={{uri: photoUrl}}
                style={styles.restImage} />
            <View style={styles.restNameCont}>
                <Text style={styles.restName}>{name}</Text>
                <Text style={styles.restName}>{ratingRounded}</Text>
            </View>
            <Text style={styles.restAddress}>{address}</Text>
        </View>
    )
}