import { StyleSheet, ImageBackground, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Homepage from './screens/Homepage';
import InitCampeonato from './screens/InitCampeonato';
import { useState } from 'react';

export default function App() {

  const [totalTimes, setTotalTimes ] = useState();
  let content = <Homepage afterDefineTimes={initCampeonato}/>;

  function initCampeonato(value){
    setTotalTimes(value);
  }

  if(totalTimes){
     content = <InitCampeonato qtdTimes={totalTimes} />;
  }

  return (
    <LinearGradient colors={["#f5da44","#010f09"]} style={styles.root}>
       <ImageBackground
        source={require('./assets/images/background.jpg')}
        resizeMode="cover"
        style={styles.root}
        imageStyle={styles.backgroundImage}
      >
      <View>
        {content}
      </View>  
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1 ,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
