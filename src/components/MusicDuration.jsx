import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MusicDuration = () => {
    return (
        <>
            <View style={[styles.container, styles.progressOfSongs]}>
                <Text style={styles.text}>00:00</Text>
                <Text style={styles.text}>00:00</Text>
            </View>
        </>
    )
}

export default MusicDuration

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '85%',
        justifyContent: 'space-between',
        
    },
    progressOfSongs: {

    },
    text: {
        color: '#fff',
        fontSize: 15,
    }
})