import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";

// Form validation
import * as Yup from 'yup'
import { Formik } from 'formik';

let passwortSchema = Yup.object().shape({
  passwortLength: Yup.number().max(16, 'Max16').min(4,'Min4').required('Required')
});
export default function AppPW() {

  const [passwort, setpasswort] = useState('')
  const [isPasswordGenerate, setisPassworsGenerate] = useState(false)
  const [lowerCase, setlowerCase] = useState(true)
  const [upperCase, setupperCase] = useState(false)
  const [symbol, setsymbol] = useState(false)
  const [numbers, setnumber] = useState(false)

  const generatePasswordString = (passwortLength: number)=> {
    const upperCaseChar ='ASDFGHJKLÖÄMNBVCXYQWERTZUIOPÜ';
    const lowerCaseChar ='asdfghjklöäüpoiuztrewqyxcvbnm';
    const specialChar ='.,-#+!"§$%&/()=?';
    const digiChar ='1234567890';
    
    let characterList ='';
    
    if (lowerCase){
      characterList += lowerCaseChar;
    }
    if (upperCase){
      characterList += upperCaseChar;
    }

    if (numbers){
      characterList += digiChar;
    }
    if (symbol){
      characterList += specialChar;
    }
    
    const passwortResult= createPassword(characterList, passwortLength)
    setpasswort(passwortResult)
    setisPassworsGenerate(true)
  }

  const createPassword = (characters: string, passwortLength: number)=> {
    let result =''
    for (let i=0; i<passwortLength; i++){
      let charactersIndex = Math.round(Math.random()*characters.length)
      result += characters.charAt(charactersIndex)
    }
    return result
  }

  const resetPassword = ()=> {
    setpasswort('')
    setisPassworsGenerate(false)
    setlowerCase(true)
    setupperCase(false)
    setsymbol(false)
    setnumber(false)
  }
  return (
  <ScrollView keyboardShouldPersistTaps='handled'>
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.title}> Passwort Generator</Text>
        <Formik
       initialValues={{ passwortLength:'' }}
       validationSchema={passwortSchema}
       onSubmit={(values) => { console.log(values);
        generatePasswordString(+values.passwortLength)
      }} //DoTo
     >
       {({
         values,
         errors,
         touched,
         handleReset,
         handleChange,  
         handleSubmit,
         isValid,
         /* and other goodies */
       }) => (
         
         <>
         <View style={styles.inputWrapper}>
          <View style={styles.inputColumn}>
            <Text style={styles.heading}>Password lenght</Text>
            {touched.passwortLength && errors.passwortLength && (
              <Text style={styles.errorText}>{errors.passwortLength}</Text>
            )}

          </View>
          <TextInput style={styles.inputStyle}
            onChangeText={handleChange('passwortLength')}
            value={values.passwortLength}
            placeholder='Ex.4'
            keyboardType= 'numeric'  />
         </View>
         <View style={styles.inputWrapper}>
          <Text style={styles.heading}> Lower case</Text>
          <BouncyCheckbox
          isChecked={lowerCase}
          onPress={()=>setlowerCase(!lowerCase)}
          />
         </View>
         <View style={styles.inputWrapper}>
         <Text style={styles.heading}> Upper case</Text>
          <BouncyCheckbox
          isChecked={upperCase}
          onPress={()=>setupperCase(!upperCase)}
          />
         </View>
         <View style={styles.inputWrapper}>
         <Text style={styles.heading}> Symbols</Text>
          <BouncyCheckbox
          isChecked={symbol}
          onPress={()=>setsymbol(!symbol)}
          />
         </View>
         <View style={styles.inputWrapper}>
         <Text style={styles.heading}>Numbers</Text>
          <BouncyCheckbox
          isChecked={numbers}
          onPress={()=>setnumber(!numbers)}
          />
         </View>
         <View style={styles.inputWrapper}>
          <TouchableOpacity
          disabled={!isValid}
          onPress={handleSubmit}> 
            <Text>Generate Password</Text>
            </TouchableOpacity>
            
          <TouchableOpacity
          onPress={()=>{ resetPassword(); handleReset();}}> 
            <Text>Reset</Text>
            </TouchableOpacity>
            <View>
              <Text>{passwort}</Text>
            </View>
         </View>
         </>
       )}
     </Formik>

      </View>
    </SafeAreaView>
  </ScrollView>

  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color:'#000'
  },
});