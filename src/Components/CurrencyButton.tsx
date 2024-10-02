import { StyleSheet, Text, View } from 'react-native'
import {PropsWithChildren} from 'react'

type CurrencyButtonProps = PropsWithChildren<{
  name: string,
  flag: string
}>


const CurrencyButton = (props:CurrencyButtonProps):JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.flagtext}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  flagtext: {
    fontSize: 14,
  },
  flag: {
    fontSize: 28,
    color:'#FFFFFF',
    marginBottom:8
  }
      
    })

export default CurrencyButton