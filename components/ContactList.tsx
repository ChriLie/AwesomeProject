import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function contactList() {
    const contacts = [
        {
            uid: "1",
            name: "Bild 1",
            bildLink: "https://via.placeholder.com/150/0000FF/808080?text=Bild+1"
        },
        {
            uid: "2",
            name: "Bild 2",
            bildLink: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Bild+2"
        }
    ];
    
    return (
        
        
    <View>
        <Text>contactList</Text>
        <ScrollView scrollEnabled={false}>
            {contacts.map(({uid, bildLink,name})=>(
               
            <View style={styles.container} key={uid}>

                <View>
                    <Image  style={ styles.imagestyle} source={{uri:bildLink}}>
                    
                        </Image>             
                </View>
                <View>
                    <Text>{name}</Text>               
                    <Text>{uid}</Text>               
                </View>
 
            
            </View>
                
            ))}
          
        </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
    imagestyle:{
        height:60,
        width: 60,
        borderRadius:30
    },
     container: {
        flexDirection: 'row'

     },
})