import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>  

    <View style={styles.titles}>
      <Text style={{fontSize: 30, marginBottom: 10, fontWeight: 'bold'}}>Bem-vindo de volta!</Text>
      <Text style={{fontSize: 14}}>Acesse sua conta para continuar</Text>
    </View>


    <View style={styles.container_inputs}>

        <View style={styles.field_email}>
            <Text>E-mail</Text>
            <TextInput placeholder='seuemail@exemplo.com' style={styles.input_login}></TextInput>
        </View>

        <View style={styles.field_password}>
            <Text>Senha</Text>
            <TextInput placeholder='Digite sua senha' style={styles.input_login}></TextInput>
        </View>

    </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titles: {
        alignItems: 'center',
        marginBottom: 35
    },
    input_login: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'grey',
        width: 250,
        height: 40,
        paddingStart: 10,
        marginBottom: 15
    }
})