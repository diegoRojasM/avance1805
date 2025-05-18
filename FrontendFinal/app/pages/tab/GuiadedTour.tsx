import { View, Text, StyleSheet } from 'react-native';
import { stylesGlobal } from '@/const/styles';
import React from 'react';
import ModoEncabezado from '../../components/ModoEncabezado'; 


export default function GuiadedTour() {
    return(
        <View style={styles.encabezado}>
        <ModoEncabezado
          icono={require('../../img/GuiadoIcon.png')} // ← agrega tu imagen
          titulo="Turista guiado"
        />
      </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  encabezado: {
    position: 'absolute',
    top: 50,
    left: 10,
    right: 10,
    zIndex: 999,
  },
});
