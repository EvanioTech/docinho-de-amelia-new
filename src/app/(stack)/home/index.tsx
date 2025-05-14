import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
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
      <View style={{ width: 350, height: 350, backgroundColor: '#fff',  marginBottom: 10,borderRadius:15, justifyContent: 'center', alignItems: 'center' }} >
         <Link href="/signup" asChild >
        <TouchableOpacity style={{ width: 300, height: 70, backgroundColor: '#F8DEFF', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20 }} >
          <Text style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center' , color: '#EA25BF', fontSize: 40, fontStyle: 'italic',fontFamily: 'Georgia'}}>Cadastrar</Text>
        </TouchableOpacity>
        </Link>
       <Link href="/signin" asChild >
        <TouchableOpacity style={{ width: 300, height: 70,   marginTop:10  }} >
          <Text style={{   fontSize: 20, fontStyle: 'italic', fontFamily: 'Georgia',textAlign:'right'}}>Sou cliente!</Text>
        </TouchableOpacity>
        </Link>
        
        
       
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
