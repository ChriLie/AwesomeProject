import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const AppPro = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <FlatCards/>
            <ElevatedCards/> 
            <ContactList/>          
            <FancyCards/>
            <FancyCards/>
            <FancyCards/>  
            <ActionCard/>                     
        </ScrollView>
        
        </SafeAreaView>
  )
}

export default AppPro