import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headlineText}>Fancy Cards</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={
            {uri: 'https://im.chip.de/ii/5/6/7/6/2/8/4/8/056200bbab1f36f3.jpg?im=AspectCrop%2Csize%3D%2816%2C9%29%2Cgravity%3DCenter%3BResize%3D%28936%2C526%29%2Caspect%3Dfit%3BBackgroundColor%2Ccolor%3Dffffff&hash=891715f6162d038ce3c0aba315a2eb6633cd984195b7198cf67cf33b70c31709'}} 
            style={styles.cardImage}
            >
            

        </Image>
        <View style={styles.cardBody}>
            <Text style={styles.cardTitel}>Card Titel</Text>
            <Text style={styles.cardLable}>Card lable </Text>
            <Text style={styles.cardDesciption}>Card Desciption
                bla bal bla bla </Text>
            <Text style={styles.cardFooter}>Card Footer </Text>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headlineText: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 8        
    },
    card:{
        width: 300,
        height: 300,
        borderRadius:8,
        marginHorizontal:32,
        marginVertical: 32, 
        justifyContent:'center',
        //alignItems:'center'
    },
    cardElevated:{
        elevation:12,
        backgroundColor: '#FFFFFF',
        color:'#000000',
        shadowOffset:{width:1, height:1}
    },
    cardImage:{
        height: 180,
    },
    cardBody:{
        color:'#000000',
        //marginHorizontal:8,
        margin:8,
        flex:1
    },
    cardTitel:{
        color:'#000000',
        fontSize: 24,
        fontWeight: 'bold'
    },
    cardFooter:{
        color:'#000000'
    },
    cardLable:{
        color:'#000000'
    },
    cardDesciption:{
        color:'#000000'
    },
})