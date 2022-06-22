import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView, Pressable, Linking } from 'react-native';


const colorFOntDarkGithub = '#4F565E';
const colorFontGithub = '#C9D1D9';
const colorGithub = '#010409';
const imageProfileGithub = "https://avatars.githubusercontent.com/u/96511741?v=4"
const urlToMyGithub = 'https://github.com/GILDOBERNARDES';

export default function App() {

  const handlePressGoToGithub = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if(res){
      console.log('Link aprovado');
      console.log('Abrindo link...');
    await  Linking.openURL(urlToMyGithub);
    }
  }
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" backgroundColor={colorGithub} barStyle="light-content" />

      <View style={styles.content}>
        <Image accessibilityLabel='Gildo no quarto' style={styles.avatar} source={{uri: imageProfileGithub}} />
        <Text 
        accessibilityLabel='Nome Gildo Bernardes'
        style={[styles.defaultText, styles.name]}>Gildo Bernardes</Text>

        <Text 
        accessibilityLabel='nickname gildobernardes'
        style={[styles.defaultText, styles.nickname]}>gildobernardes</Text>

        <Text 
        accessibilityLabel='description Front-end web Development'
        style={[styles.defaultText, styles.description]}>Front-end web Development</Text>

        <Pressable onPress={handlePressGoToGithub}>

          <View style={styles.button}>
            <Text style={[styles.defaultText, styles.textButton]}>Open in Github</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorGithub,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
      color:'white',
  },
  name: {
    color: colorFontGithub,
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 20,
  },
  nickname: {
    color: colorFOntDarkGithub,
    fontSize: 18,
  },
  description: {
    color: colorFontGithub,
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorFOntDarkGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    color: colorFontGithub,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
