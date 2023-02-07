import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <View style={styles.navbar}>
                <Text>Navbar</Text>
            </View>
        </>
    )
}

export default Navbar

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: 'blue',
        width: '100%',
        height: '10%',
    }
})