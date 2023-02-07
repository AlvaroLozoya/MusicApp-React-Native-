import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';

const SliderComp = () => {
    return (
        <>

            <View style={styles.container}>
                <Slider 
                    value={10}
                    minimumValue={0}
                    maximumValue={100}
                    thumbTintColor = '#FFD369'
                    minimumTrackTintColor='#FFD369'
                    maximumTrackTintColor='#fff'
                    onSlidingComplete = {() => {}}
                />
            </View>

        </>
    )
}

export default Slider

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    
})