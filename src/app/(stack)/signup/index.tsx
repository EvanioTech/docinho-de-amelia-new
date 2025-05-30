import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image , TextInput} from 'react-native';
import { Link } from 'expo-router';




export default function Home() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <View style={{ width: 400, height: 400,   }} >
        <Image
          source={require('../../../../assets/logo.png')}
          style={{ width: 350, height: 350, marginTop: 30}}
        />
        </View>
      <View style={{ width: 350, height: 350, backgroundColor: '#fff',  marginBottom: 10,borderRadius:15, justifyContent: 'center', alignItems: 'center' }}  >
        <View style={{  borderRadius: 10, justifyContent: 'center', alignItems: 'flex-start', marginBottom:10 } } >
        <TextInput
        placeholder='Digite Seu Email'
        style={{ width: 300, height: 50, backgroundColor: '#F8DEFF', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20, fontSize: 20 }}
        />
        <TextInput
        placeholder='Digite Seu Nome'
        style={{ width: 300, height: 50, backgroundColor: '#F8DEFF', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10, fontSize: 20, fontStyle: 'italic',fontFamily: 'Georgia' }}
        />
        <TextInput
        placeholder='Digite Sua Senha'
        style={{ width: 300, height: 50, backgroundColor: '#F8DEFF', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10, fontSize: 20, fontStyle: 'italic',fontFamily: 'Georgia' }}
        />
        <TextInput
        placeholder='Confirme Sua Senha'
        style={{ width: 300, height: 50, backgroundColor: '#F8DEFF', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10, fontSize: 20, fontStyle: 'italic',fontFamily: 'Georgia' }}
        />
        </View>
        <TouchableOpacity style={{ width: 300, height: 60, backgroundColor: '#F8DEFF', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 10, marginBottom:15 } } onPress={() => alert('Cadastrado com sucesso!')}> 
          <Text style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center' , color: '#EA25BF', fontSize: 40, fontStyle: 'italic',fontFamily: 'Georgia'}}>Finalizar</Text>
        </TouchableOpacity>
        
        
       
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA1E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
