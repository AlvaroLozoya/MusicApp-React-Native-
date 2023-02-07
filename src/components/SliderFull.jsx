import { Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {React, useEffect, useState } from 'react'
import SliderComp from './SliderComp'
import MusicDuration from './MusicDuration';
import songs from '../music/SongData.js';
import TrackPlayer, {AppKilledPlaybackBehavior, Capability, RepeatMode, Event, State, usePlaybackState} from 'react-native-track-player';


export async function setupPlayer() {
    let isSetup = false;
    try {
      await TrackPlayer.getCurrentTrack();
      isSetup = true;
    }
    catch {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        android: {
          appKilledPlaybackBehavior:
            AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
        },
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.SeekTo,
        ],
        compactCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
        ],
        progressUpdateEventInterval: 2,
      });
  
      isSetup = true;
    }
    finally {
      return isSetup;
    }
  }
  
  export async function addTracks() {
    await TrackPlayer.add([
        {
            id: 1,
            title: 'OOOOOOOOOOOOOO',
            artist: 'JOTARO',
            artwork: require('../img/PreviusButton.png'),
            url: require('../music/SMATC.mp3'),
        },
        {
          id: 2,
          title: 'FORNITE RAP 2',
          artist: 'pepepe',
          artwork: require('../img/PreviusButton.png'),
          url: require('../music/FORNITE RAP 2.mp3'),
      }

    ]);
    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
  }

  
  export async function playbackService() {
    // TODO: Attach remote event handlers
  }
const SliderFull = () => {  
    const [isPlayerReady, setIsPlayerReady] = useState(false);
    const trackState = usePlaybackState();

  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();

      const queue = await TrackPlayer.getQueue();
      if(isSetup && queue.length <= 0) {
        await addTracks();
      }

      setIsPlayerReady(isSetup);
    }

    setup();
  }, []);

  
    return (
        <>
            <View style={[styles.component]}>
                <View style={[styles.container, styles.slider]}>
                    <View style={styles.progressBar}>
                        <SliderComp />
                    </View>
                    <MusicDuration />
                    <View style={styles.slideButtons}>
                        <TouchableOpacity onPress={() => TrackPlayer.previus()} style={styles.prueba}>
                            <Image style={styles.img} source={require('../img/PreviusButton.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => TrackPlayer.play()} >
                            <Image style={styles.img} source={ TrackPlayer === State.Playing 
                                ?
                                require('../img/PauseButton.png')
                                :
                                require('../img/PlayButton.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => TrackPlayer.next()} >
                            <Image style={styles.img} source={require('../img/NextButton.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default SliderFull

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    component: {
        backgroundColor: 'green',
        width: '100%',
        height: '18%',
    },
    slideButtons: {
        flexDirection: 'row',

    },
    slider: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    progressBar: {
        width: '90%',
        height: '20%',
        marginTop: '1%',

    },
    img: {
        width: 50,
        height: 50,
        marginHorizontal: '10%',
        marginBottom: '2%',
    },
    prueba: {
        marginLeft: '15%',
    }
})