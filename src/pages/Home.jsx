import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import SliderFull from '../components/SliderFull'
import Song from '../components/Song'

const Home = () => {
 
  return (
    <View style={[styles.background, styles.container]}>
        <Song/>
        <SliderFull/>
        <Navbar/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  background : { 
    backgroundColor: 'grey',
    width: '100%',
    height: '100%', 
  },
  
})