import { Image, StyleSheet, Text, View,TouchableOpacity, Linking } from 'react-native'
import React from 'react'

export default function ActionCard() {
function OpenWebsite(myurl: string){
    Linking.openURL(myurl)
}
  return (
    <View>
      <Text style={styles.headlineText} >ActionCard</Text>
      <View >
        <Text style={styles.headline}> Headline</Text>
      </View>
      <View>
        <Image  source={
            {uri: 'https://im.chip.de/ii/5/6/7/6/2/8/4/8/056200bbab1f36f3.jpg?im=AspectCrop%2Csize%3D%2816%2C9%29%2Cgravity%3DCenter%3BResize%3D%28936%2C526%29%2Caspect%3Dfit%3BBackgroundColor%2Ccolor%3Dffffff&hash=891715f6162d038ce3c0aba315a2eb6633cd984195b7198cf67cf33b70c31709'}} 
            style={styles.cardImage}/>
        <View>
            <Text>Bla Bla Bla Body</Text>
        </View>
        <View>
        <Text>Bla Bla Footer</Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.boxbutton} onPress={()=>OpenWebsite('https://reactnative.dev/docs/flexbox')}>
                <Text> Button 1 </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxbutton} onPress={()=>OpenWebsite('https://reactnative.dev/docs/flexbox')}>
                <Text> Button 2 </Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    cardImage:{
        height: 100
        },
    headlineText:{
        fontSize: 24,
        fontWeight: 'bold'
    },
    headline:{
        fontSize: 12,
        fontWeight: 'bold'
    },
    buttonContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        flex:1,
    },
    boxbutton:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        width:100,
        height:100,
        margin:8,
        borderRadius:8,
    backgroundColor: '#900900'   }
})