import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SongInfo from './SongInfo'

const Song = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.visual}>
                    <SongInfo/>
                </View>
            </View>
        </>
    )
}

export default Song

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',


    },
    visual: {
        width: '90%',
        height: '90%',
        backgroundColor: 'lightblue',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    }
})