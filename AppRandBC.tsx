import { View, Text,  StatusBar, TouchableOpacity, StyleSheet} from 'react-native'
import React, { useState } from 'react';



const AppRandBC = () => {

  const [randomBackgroundColor, setBackgroundColor] = useState('#000000')
  const generateColor = () => {

    let digit='1234567890ABCDEF'
 
    let newcolor ='#'
     for(let i=0; i<6; i++){
 
         let index= Math.floor(Math.random()*16)
         newcolor+=digit.charAt(index)
         
     }
     console.log(newcolor)
     setBackgroundColor(newcolor)
 }

  return (
    <>   

    <StatusBar backgroundColor={randomBackgroundColor} hidden={true} />
    <View style={[styles.container, {backgroundColor: randomBackgroundColor}]}>
        <TouchableOpacity
        style={styles.actionBtn}
        onPress={generateColor}>
            <Text style={styles.actionBtnTxt}> Change Color</Text>
        </TouchableOpacity>            
    </View>
    </>   
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    justifyContent: "center"
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnTxt: {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "uppercase"
  }
});

export default AppRandBC
