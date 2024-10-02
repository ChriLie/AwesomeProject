import { View,Image,
   Text,  StatusBar, TouchableOpacity, StyleSheet, ImageSourcePropType, Pressable, } from 'react-native'
import React, { useState, PropsWithChildren } from 'react';

import one from '../assets/One.png'
import two from '../assets/Two.png'
import three from '../assets/Three.png'
import four from '../assets/Four.png'
import five from '../assets/Five.png'
import six from '../assets/Six.png'

type PicProp = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>


const AppRollDice = () => {
const [picpath, setpicpath] = useState<ImageSourcePropType> (one)

const randomNumberPic =() =>{
  let randNum = Math.floor(Math.random()*6+1)
  console.log(randNum)
 switch(randNum)
 {
  case 1:
  setpicpath(one)
  break;
  case 2:
    setpicpath(two)
    break;
  case 3:
  setpicpath(three)
  break;

  case 4:
  setpicpath(four)
  break;
  case 5:
  setpicpath(five)
  break;
  case 6:
  setpicpath(six)
  break;
  default:
  setpicpath(two)
  break;
 } 
 
}



const RollDice = ({imageUrl}:PicProp) : JSX.Element =>
  {
    return(
    <>
    <Image style={styles.imageprop} source={imageUrl}/>
    <Pressable onPress={randomNumberPic}>
    <Text style={styles.rollDiceBtnText}> roll the dice</Text>
    </Pressable>
    </>
    )
  }

  return(

    <View style={styles.container}>
      <RollDice imageUrl={picpath} />
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  imageprop:{
    height:300
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
})
export default AppRollDice
