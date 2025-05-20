import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);
  const [mensagem, setMensagem] = useState('');

  const aumentar = () => {
    setContador(contador + 1);
    setMensagem('');
  };

  const diminuir = () => {
    setContador(contador - 1);
    setMensagem('');
  };

  const resetar = () => {
    setContador(0);
    setMensagem('Contador reiniciado!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador App</Text>

      <View style={styles.contadorContainer}>
        <Text style={styles.contador}>{contador}</Text>
      </View>

      <Text style={styles.mensagem}>{mensagem}</Text>

      <View style={styles.botoes}>
        <TouchableOpacity style={[styles.botao, styles.menos]} onPress={diminuir}>
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.reset]} onPress={resetar}>
          <Text style={styles.textoBotao}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao, styles.mais]} onPress={aumentar}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>Aprenda React Native com Expo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  contadorContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginBottom: 10,
  },
  contador: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  mensagem: {
    fontSize: 16,
    marginBottom: 30,
    color: '#666',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  botao: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  menos: {
    backgroundColor: '#ff6b6b',
  },
  reset: {
    backgroundColor: '#4dd0e1',
  },
  mais: {
    backgroundColor: '#81c784',
  },
  textoBotao: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    fontSize: 14,
    color: '#888',
  },
});