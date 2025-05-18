// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import BackComponent from '../components/backComponent';
// import LogoComponent from '../components/logoComponent';
// import ButtonComponent from '../components/buttonComponent';
// import { stylesGlobal } from '@/const/styles';
// import { colors } from '@/const/color';
// import React from "react";

// export default function SignUpScreen() {
//     return (
//         <View style={stylesGlobal.container}>
//             <BackComponent />
//             <LogoComponent />

//             <View style={stylesGlobal.form}>
//                 <Text style={stl.h2}>Registrate</Text>
//                 <TextInput placeholder='Nombre' style={stl.input} />
//                 <TextInput placeholder='Apellido' style={stl.input} />
//                 <TextInput placeholder='Correo electrónico' style={stl.input} />
//                 <TextInput placeholder='Contraseña' style={stl.input} secureTextEntry />
//                 <TextInput placeholder='Confirmar contraseña' style={stl.input} secureTextEntry />
//                 <ButtonComponent label='Continuar' route='/pages/PreferencesScreen' />
//                 {/* link iniciar sesion */}
//             </View>

//         </View>
//     )
// }


// const stl = StyleSheet.create({
//     h2 :{
//         fontSize: 24,
//         fontFamily: 'InterBold',
//     },
//     input: {
//         paddingVertical: 12,
//         paddingHorizontal: 10,
//         fontFamily: 'Inter',
//         color: colors.textoSecundario,
//         fontSize: 18,
//         borderWidth: 1,
//         borderRadius: 10,
//     },    
// })



import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import BackComponent from '../components/backComponent';
import LogoComponent from '../components/logoComponent';
import ButtonComponent from '../components/buttonComponent';
import { stylesGlobal } from '@/const/styles';
import { colors } from '@/const/color';
import { registrarUsuario } from '../../api/auth';
import { useRouter } from 'expo-router';

export default function SignUpScreen() {
    const router = useRouter();

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmar, setConfirmar] = useState('');

    const handleRegistro = async () => {
        if (!nombre || !correo || !contrasena || !confirmar) {
            Alert.alert("Error", "Por favor completa todos los campos.");
            return;
        }

        if (contrasena !== confirmar) {
            Alert.alert("Error", "Las contraseñas no coinciden.");
            return;
        }

        try {
            await registrarUsuario({
                nombre: `${nombre} ${apellido}`,
                correo,
                contrasena
            });
            Alert.alert("✅ Registro exitoso");
            router.push('/pages/PreferencesScreen');
        } catch (error) {
            const errorMessage = (error as any)?.response?.data?.mensaje || "No se pudo registrar";
            Alert.alert("Error", errorMessage);
        }
    };

    return (
        <View style={stylesGlobal.container}>
            <BackComponent />
            <LogoComponent />

            <View style={stylesGlobal.form}>
                <Text style={stl.h2}>Registrate</Text>
                <TextInput placeholder='Nombre' style={stl.input} onChangeText={setNombre} />
                <TextInput placeholder='Apellido' style={stl.input} onChangeText={setApellido} />
                <TextInput placeholder='Correo electrónico' style={stl.input} onChangeText={setCorreo} />
                <TextInput placeholder='Contraseña' style={stl.input} secureTextEntry onChangeText={setContrasena} />
                <TextInput placeholder='Confirmar contraseña' style={stl.input} secureTextEntry onChangeText={setConfirmar} />
                <ButtonComponent label='Continuar' onPress={handleRegistro} />
            </View>
        </View>
    );
}

const stl = StyleSheet.create({
    h2: {
        fontSize: 24,
        fontFamily: 'InterBold',
    },
    input: {
        paddingVertical: 12,
        paddingHorizontal: 10,
        fontFamily: 'Inter',
        color: colors.textoSecundario,
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 10,
    },
});
