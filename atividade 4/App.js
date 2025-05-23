// App.js
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BarraItem from './componentes/barraiten.js';
import Card from './componentes/card.js';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
    
        <BarraItem
          texto="Texto"
          iconLeft={require('./assets/quadrado.png')}
          iconRight={require('./assets/trash-2 1.png')}
          bgLeft="#d07e0e"
          bgRight="#bc1108"
        />

        <BarraItem
          texto="Texto"
          iconLeft={require('./assets/quadradoconferi.png')}
          iconRight={require('./assets/trash-2 1.png')}
          bgLeft="#2ecc71"
          bgRight="#bc1108"
        />

      </View>

      <View style={styles.backcard}>
        <Card
          texto1="cadastradas:"
          texto2="4"
          cor_num="#000"
        />
        <Card
          texto1="Em aberto:"
          texto2="2"
          cor_num="#d07e0e"
        />
        <Card
          texto1="Finalizadas:"
          texto2="2"
          cor_num="#0f0"
        />
      </View>
      <StatusBar style="auto" />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00467c',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    paddingTop: 35,
  },
  backcard:{
    
  }
});
