import { View, Text, StyleSheet } from 'react-native';
import { stylesGlobal } from '@/const/styles';
import React from 'react';
import ModoEncabezado from '../../components/ModoEncabezado'; 

export default function HistoryMode() {
    return(
        <View style={styles.encabezado}>
        <ModoEncabezado
          icono={require('../../img/HistoriaIcon.png')} // ← agrega tu imagen
          titulo="Historia"
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
