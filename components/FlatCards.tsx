import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style = {styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
   
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Bluee</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
            <Text>Green</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal:8
    
    },
    container: {
        flex:1,
        flexDirection: 'row',
        padding:8
    },
    card:{
        justifyContent: 'center',
        alignItems:'center',
        flex:1,
        width: 100,
        height: 100,
        borderRadius:8,
        margin:8
    },
    cardOne:{
        backgroundColor: '#EF5354'
    },
    cardTwo:{
        backgroundColor: '#4287f5'
    },
    cardThree:{
        backgroundColor: '#42f5aa'
    }
})