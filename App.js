import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput, SafeAreaView, VirtualizedList, FlatList } from 'react-native';
import React, { Component } from 'react';






export default function App() {

  const [contact, setContacto] = React.useState('');
  const [lista_contactos, setListaContactos] = React.useState([]);

  //* Renderiza cada item de la lista
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.nombre}</Text>
    </View>
  );

  //*Función para añadir contactos a la lista de contactos
  const añadir_contacto = () => {
    //* Verifica si se ingresó un contacto y lo agrega a la lista
    if (contact) {
      const newContact = { nombre: contact };
      setListaContactos([...lista_contactos, newContact]);
      setContacto("");
    }
  };
  


  return (
    //*View de la app
    <SafeAreaView style={styles.container}>

      <View style={styles.input_container}>
        <Text>Contacto</Text>
        <TextInput
          style={styles.input}
          placeholder='Ingresar Contacto'
          onChangeText={(contacto) => setContacto(contacto)}
          value={contact}
        />
        <Button
          title="Agregar Contacto"
          onPress={añadir_contacto}
        />

      </View>
      <View style= {styles.contacts_container}>
        <Text> Lista de Contactos</Text>


        <FlatList
          data={lista_contactos}
          renderItem={renderItem}
          keyExtractor={(contacto, index) => index.toString()}
        />
      </View>




      <StatusBar style="auto" />

    </SafeAreaView>
  );
}


//* Estilos para la app
const styles = StyleSheet.create({
  text_contacto:{
    paddingBottom: 30
  },
  input: {
    height: 40,
    width: 190,
    margin: 12,
    borderWidth: 1,
    padding: 10
    
  },
  button: {
    height: 30,
    color: "#fff",
  },
  input_container: {
    flex: 1,
    flexDirection: "column",
    width: '100%',
    backgroundColor: "#8CAE68",
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 50,
    padding: 0
  },
  contacts_container: {
    flex: 2,
    marginTop: 20,
    width: '100%',
    justifyContent: "center",
    alignItems: 'center',
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#DFE0E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});