import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import songs from '../music/SongData.js';

const SongInfo = () => {

    const renderSongs = ({item, index}) => {
        return(
            <View style={styles.container}>
                <Image style={styles.visual} source={item.SongImage}/>
            </View>
        )
    }
    return (
        <>
            <View style={styles.container}>
                <FlatList renderItem={renderSongs}
                    data={songs}
                    keyExtractor={item => item.id}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator = {false}
                    scrollEventThrottle={16}
                    onScroll={() => {}}
                    

                />
                
                <View>
                    <Text style={styles.text}>songs</Text>
                    <Text>Artista</Text>
                </View>
            </View>
        </>
    )
}

export default SongInfo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',


    },
    visual: {
        width: '80%',
        height: '70%',
        backgroundColor: 'red',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    text: {
        fontSize: 25,
        marginTop: '2%',
    }
})