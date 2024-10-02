import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headlineText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text> Box 1 </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text> Box 2 </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text> Box 3 </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text> Box 4 </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headlineText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal:8
    },
    card: {
        alignItems:'center',
        justifyContent: 'center',
        flex:1,
        width:100,
        height:100,
        margin:8,
        borderRadius:8
    },
    container: {        
        //flex:1,
        //flexDirection: 'row',
        //alignItems: 'center',
        //justifyContent: 'center',
        padding:8
    },
    cardElevated: {
        elevation:4,
        backgroundColor: '#000FFF',
        shadowOffset: {
            width: 4,
            height:4
        },
        shadowOpacity:  0.4,
        shadowRadius: 2
    },
})