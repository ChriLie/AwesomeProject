import { View, Text,Pressable, StyleSheet, FlatList, TextInput} from 'react-native'
import {useState} from 'react'
import CurrencyButton from './Components/CurrencyButton'
import { CurrencyByRupee } from './Constants'
import Snackbar from 'react-native-snackbar';



const AppCurrency = ():JSX.Element => {
    const [inputValue, setinputValue] = useState('')
    const [result, setresult] = useState('')
    const [targetCurrency, settargetCurrency] = useState('')
    
    const buttonPressed = (exchangerate:Currency)=>{
        if(!inputValue){
            return Snackbar.show({
                text: "Enter a value to convert",
                backgroundColor: "#EA7773",
                textColor: "#000000"
              })

        }
        const inputAmount = parseFloat(inputValue)
        if(!isNaN(inputAmount)){
           const resultvalue = inputAmount*exchangerate.value
           const result_string = `${exchangerate.symbol} ${resultvalue.toFixed(2)  }` 
           setresult(result_string) 
           settargetCurrency(exchangerate.name)
        }
        else{
            return Snackbar.show({
                text: "NOt a valid number to convert",
                backgroundColor: "#F4BE2C",
                textColor: "#000000"
                })
        }
    }


  return (
    <View>
      <Text>Currency {result}</Text>
   
      <TextInput 
      value={inputValue}
      onChangeText={setinputValue}
      keyboardType='number-pad'
      placeholder='Enter amount in Rupees'
      />
      

      <FlatList
      data={CurrencyByRupee}
      numColumns={3}
      keyExtractor={item => item.name}
      renderItem={({item}) => (
        <Pressable
        style={[
          styles.button, 
          targetCurrency === item.name && styles.selected
        ]}
        onPress={() => buttonPressed(item)}
        >
          <CurrencyButton {...item} />
        </Pressable>
      )}
      />
        

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#515151',
    },
    topContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    resultTxt: {
      fontSize: 32,
      color: '#000000',
      fontWeight: '800',
    },
    rupee: {
      marginRight: 8,
  
      fontSize: 22,
      color: '#000000',
      fontWeight: '800',
    },
    rupeesContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputAmountField: {
      height: 40,
      width: 200,
      padding: 8,
      borderWidth: 1,
      borderRadius: 4,
      backgroundColor: '#FFFFFF',
    },
    bottomContainer: {
      flex: 3,
    },
    button: {
      flex: 1,
  
      margin: 12,
      height: 60,
  
      borderRadius: 12,
      backgroundColor: '#fff',
      elevation: 2,
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowColor: '#333',
      shadowOpacity: 0.1,
      shadowRadius: 1,
    },
    selected: {
      backgroundColor: '#ffeaa7',
    },
  });
  
export default AppCurrency