import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/const/color';
import { stylesGlobal } from '@/const/styles';
import ButtonComponent from '../components/buttonComponent';

export default function InterestsScreen() {
  const [op1, setOp1] = useState(false);
  const [op2, setOp2] = useState(false);
  const [op3, setOp3] = useState(false);
  const [op4, setOp4] = useState(false);
  const [op5, setOp5] = useState(false);
  const [op6, setOp6] = useState(false);

  return (
    <View style={stylesGlobal.container}>
      <Text style={stl.title}>¿Qué tipo de lugares históricos te gustaría conocer en Santa Cruz?</Text>
      <Text style={stl.subtitle}>Selecciona tus intereses turísticos:</Text>

      <View style={stl.div}>
        <Pressable style={stl.option} onPress={() => setOp1(!op1)}>
            <MaterialIcons name={op1 ? 'check-box' : 'check-box-outline-blank'} size={30} color={colors.verdeOscuro} />
            <Text style={stl.label}>Monumentos históricos</Text>
        </Pressable>

        <Pressable style={stl.option} onPress={() => setOp2(!op2)}>
            <MaterialIcons name={op2 ? 'check-box' : 'check-box-outline-blank'} size={30} color={colors.verdeOscuro} />
            <Text style={stl.label}>Plazas</Text>
        </Pressable>

        <Pressable style={stl.option} onPress={() => setOp3(!op3)}>
            <MaterialIcons name={op3 ? 'check-box' : 'check-box-outline-blank'} size={30} color={colors.verdeOscuro} />
            <Text style={stl.label}>Iglesias</Text>
        </Pressable>

        <Pressable style={stl.option} onPress={() => setOp4(!op4)}>
            <MaterialIcons name={op4 ? 'check-box' : 'check-box-outline-blank'} size={30} color={colors.verdeOscuro} />
            <Text style={stl.label}>Lugares emblemáticos</Text>
        </Pressable>

        <Pressable style={stl.option} onPress={() => setOp5(!op5)}>
            <MaterialIcons name={op5 ? 'check-box' : 'check-box-outline-blank'} size={30} color={colors.verdeOscuro} />
            <Text style={stl.label}>Museos</Text>
        </Pressable>

        <Pressable style={stl.option} onPress={() => setOp6(!op6)}>
            <MaterialIcons name={op6 ? 'check-box' : 'check-box-outline-blank'} size={30} color={colors.verdeOscuro} />
            <Text style={stl.label}>Miradores o parques</Text>
        </Pressable>

        <View style={{ marginTop: 30 }}>
            <ButtonComponent label="Registrar" route="pages/ConfirmationScreen" />
        </View>
      </View>

    </View>
  );
}
const stl = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'InterBold',
    textAlign: 'center',
    marginBottom: 20,
    color: colors.textoPrincipal,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Inter',
    color: colors.textoSecundario,
    marginBottom: 20,
  },
  div: {
    width: '95%',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  label: {
    fontSize: 18,
    fontFamily: 'Inter',
    marginLeft: 10,
    color: colors.textoPrincipal,
  },
});
