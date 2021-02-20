
import React, {useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import * as Font from 'expo-font';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';

function InicioScreen( { navigation}){
  return (
    <View style={styles.container}>
      
      <SafeAreaView>
        <ScrollView>  
          
         <View style={{width: "100%", flex:1, alignItems: "center",paddingTop:100, paddingBottom:30}}>
         <View>
          <Text style={styles.titulos}>Whitney Still Life</Text>
          </View>
           <Image source={require('./assets/houston/Whitney_19.jpg')} />
          </View>
          <View style={{flex:2, alignItems:"center"}}>
            <Text style={styles.contenido}>La dramática vida (y el trágico fin) de Whitney Elizabeth Houston empezaron en Newark, Nueva Jersey, el 9 de agosto de 1963. A los 11 años ya canta en el coro góspel infantil de la iglesia New Hope Baptist de su barrio. A los 16, su excelsa voz de mezzosoprano anticipa la estrella que será, llamada The Voice (La Voz): versión femenina del apodo que acompañó a Frank Sinatra hasta el final…, y todavía.

El canto le llega por vías directas: Cissy Houston, su madre, canta, y también sus famosas primas Warwick (Dionne y Dee). Y por si poco fuera, tiene una madrina reverencial: Aretha Franklin.

¿Primer disco simple?: Life´s a Party, 1978, banda de Michael Zaguer. La piedra fundacional de una carrera colosal: dos Emmy, seis Grammy, treinta Billboard Music Awards, veintidós American Music Awards…: ¡415 en total entre 1977 y 2012!, y 170 millones vendidos de discos simples, álbums, videos.

La banda sonora del inolvidable film El Guardaespaldas, 1992, con Kevin Costner –el partner perfecto–, cincuenta semanas en el primer lugar de las listas, y su tema I Will Always Love You –nadie olvidará esa despedida en el aeropuerto–, es aún el simple más vendido por una mujer en la historia de la música…</Text>
<Text style={styles.subtitulos}>Secciones de la aplicación</Text>

        <TouchableOpacity style={styles.boton} onPress={() => {
          navigation.navigate("Discografia"); 
        }}>
          <Text styles={{color:"#FFF"}}>
            Ir Biografía
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={() => {
          navigation.navigate("Galeria"); 
        }}>
          <Text styles={{color:"#FFF"}}>
           Ir a Galeria
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={() => {
          navigation.navigate("Premios"); 
        }}>
          <Text styles={{color:"#FFF"}}>
           Ir a Premios
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={() => {
          navigation.navigate("Curiosidades"); 
        }}>
          <Text styles={{color:"#FFF"}}>
          Ir a  Curiosidades
          </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function GaleriaScreen( {navigation}){
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
      <View style={{width: "100%", flex:2, alignItems: "center",paddingTop:100, paddingBottom:30}}>
      <View>
          <Text style={styles.titulos}>Una bellísima y amigable persona en cada fotografía</Text>
          </View>
          <Text style={styles.subtitulos}>Los fanáticos la amaban</Text>
       <Image source={require('./assets/houston/dibujo_lapiz.jpg')}/>
      </View >
      <View>
        <Text style={styles.subtitulos}>Sus amistades</Text>
       <Image  style={{ width: 600, height: 400,flex:1}} source={require('./assets/houston/celebrites.jpg')}/>
      </View >
      <View>
      <Text style={styles.subtitulos}>Su más exitosa canción</Text>
       <Image  style={{ width: 360, height: 400,flex:1}} source={require('./assets/houston/i_wanna.jpg')}/>
      </View >
      <View>
          </View>
          <Text style={styles.subtitulos}>Whitney y su juventud</Text>
       <Image style={{ width: 360, height: 400,flex:1}} source={require('./assets/houston/whitney-houston-chic.jpg')}/>
      <View style={{flex:2, alignItems:"center"}}>
        <Text style={styles.subtitulos}></Text>

        <TouchableOpacity style={styles.boton} onPress={() => {
          navigation.navigate("Inicio"); 
        }}>
          <Text styles={{color:"#FFF"}}>
            Ir a inicio
          </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function BiografiaScreen( {navigation}){
  return (
    <SafeAreaView>
        <ScrollView>
    <View style={styles.container}>
      <View style={{width: "100%", flex:2, alignItems: "center",paddingTop:100, paddingBottom:30}}>
      <View>
          <Text style={styles.titulos}>El nacimiento de una grandiosa voz femenina</Text>
          </View>
       <Image source={require('./assets/houston/i_wanna.jpg')}/>
      </View >
      <View style={{flex:2, alignItems:"center"}}>
        <Text style={styles.subtitulos}>Biografía</Text>
        <Text style={styles.contenido}>(Newark, 1963 - Beverly Hills, 2012) Cantante de pop y actriz estadounidense. La extraordinaria voz de esta bella cantante cautivó siempre a todo el mundo cada vez que aparecía en público. Tras unos inicios no muy prometedores, sus productores, que confiaban en su gran talento, decidieron esperar un momento propicio para lanzarla, preparando concienzudamente un disco que acabaría siendo número uno en EE.UU., llamado Whitney Houston. A partir de ese momento el éxito la acompañó en todo lo que emprendió, incluido su debut cinematográfico en la película El guardaespaldas, cuya banda sonora, interpretada por la propia Whitney Houston, fue un récord de ventas en 1992.</Text>
        <Text style={styles.contenido}>Hija de la cantante de Soul Cissy Houston (integrante en su día de The Sweet Inspiration, grupo habitual de las actuaciones o grabaciones de Elvis Presley o Aretha Franklin) y sobrina de la estrella Dionne Warwick, Whitney Houston comenzó a cantar en un grupo de gospel a los once años. Tras iniciar una prometedora carrera como modelo, su vocación de cantante fue poco a poco imponiéndose, pues colaboró en los coros y segundas voces de las grabaciones de importantes artistas de la talla de Lou Rawls y Chaka Khan cuando apenas contaba quince años y, poco después en las de los Neville Brothers.

Después de intervenir en álbumes de Jermaine Jackson y Teddy Pendergrass, en 1983 firmó un contrato con el sello Arista. Su primer álbum salió al mercado en 1985, con un impresionante éxito (a finales de 1986 había superado ya los diez millones de copias vendidas, cifra jamás alcanzada por el álbum de debut de ninguna estrella).

De ahí en adelante la carrera de Whitney Houston la llevó a convertirse rápidamente en la intérprete de color más importante del mundo. En 1987 volvió al primer puesto de las listas norteamericanas con el tema I Wanna Dance With Somebody, perteneciente a su segundo larga duración. Antes de comenzar la década de los noventa, la joven Whitney ya había superado un nuevo récord: vender más de 25 millones de copias de sus dos primeros álbumes.
</Text>
          <TouchableOpacity style={styles.boton} onPress={() => {
            navigation.navigate("Inicio"); 
          }}>
                <Text styles={{color:"#FFF"}}>
                Ir a inicio
              </Text>
           </TouchableOpacity>
         </View>
       </View>
      </ScrollView>
  </SafeAreaView>
  );
}

function PremiosScreen( {navigation}){
  return (
    <SafeAreaView>
        <ScrollView>
    <View style={styles.container}>
      <View style={{width: "100%", flex:2, alignItems: "center",paddingTop:100, paddingBottom:30}}>
      <View>
          <Text style={styles.titulos}>Whitney obtuvo premios muy poco conocidos</Text>
          </View>
       <Image source={require('./assets/houston/i_have_nothing.jpg')}/>
      </View >
      <View>
          <Text style={styles.subtitulos}>La cantante más premiada</Text>
          </View>
       <Image style={{width: 400, height: 400}} source={{uri:'https://los40es00.epimg.net/los40/imagenes/2019/02/08/album/1549639988_529269_1549640404_album_normal.jpg'}}/>
        <Text style={styles.contenido}>1 de 8 El de Whitney Houston fue un fenómeno sin precedentes, una artista con una voz prodigiosa capaz de superar el récord de The Beatles y Bee Gees en Estados Unidos y lograr que siete singles alcanzaran el número 1 de las listas de forma consecutiva, de alcanzar ventas millonarias y de ser la cantante más premiada de la historia, según acreditó el Libro Guinness de los Récords. Consiguió más de 600 premios, y es la artista que más ha vendido de todos los tiempos: 140 millones de copias.</Text>
      </View >
      <View>
          <Text style={styles.subtitulos}>Una motivación para jóvenes</Text>
          </View>
       <Image style={{width: 400, height: 400}} source={{uri:'https://los40es00.epimg.net/los40/imagenes/2019/02/08/album/1549639988_529269_1549640927_album_normal.jpg'}}/>
      <Text style={styles.contenido}>Una estrella en la Superbowl
4 de 8 En enero de 1991, cantó el himno nacional de Estados Unidos en el Superbowl XXV. Esta interpretación fue grabada como sencillo debido a la demanda popular, alcanzando el número 20 en los Estados Unidos, siendo la única versión del himno estadounidense que consigue ser un éxito de ventas, obteniendo el disco de platino.</Text>
      <View style={{flex:2, alignItems:"center"}}>
        <Text style={styles.subtitulos}></Text>

          <TouchableOpacity style={styles.boton} onPress={() => {
            navigation.navigate("Inicio"); 
          }}>
                <Text styles={{}}>
                Ir a inicio
              </Text>
           </TouchableOpacity>
         </View>
      </ScrollView>
  </SafeAreaView>
  );
}


function CuriosidadesScreen( {navigation}){
  return (
    <SafeAreaView>
        <ScrollView>
    <View style={styles.container}>
      <View style={{width: "100%", flex:2, alignItems: "center",paddingTop:100, paddingBottom:30}}>
      <View>
          <Text style={styles.titulos}>Las peculiaridades de un artista</Text>
          </View>
          <Text style={styles.subtitulos}>Su firma</Text>
       <Image  style={{ width: 360, height: 400,flex:1}} source={require('./assets/houston/firma.png')}/>
      </View >
      <View>
          </View>
          <Text style={styles.subtitulos}>Su mayor impulso</Text>
       <Image  style={{ width: 350, height: 300,flex:1}} source={{uri:'https://los40es00.epimg.net/los40/imagenes/2019/02/08/album/1549639988_529269_1549641143_album_normal.jpg'}}/>
      <Text style={styles.contenido}>'El Guardaespaldas', su trampolín definitivo
5 de 8 Los 90 fueron su década. En 1993, con El Guardaespaldas, hacía su primera incursión en el cine interpretando a Rachel Marron, una diva del pop acosada por un psicópata y que enamora de su guardaespaldas, interpretado por Kevin Costner. Recaudó más de 400 millones de dólares en el cine. Houston regresó después a la gran pantalla con Waiting to Exhale (1995) y The Preacher’s Wife (1996).</Text>
      </View >
      <View style={{flex:2, alignItems:"center"}}>
        <Text style={styles.subtitulos}></Text>

          <TouchableOpacity style={styles.boton} onPress={() => {
            navigation.navigate("Inicio"); 
          }}>
                <Text styles={{}}>
                Ir a inicio
              </Text>
           </TouchableOpacity>
         </View>
      </ScrollView>
  </SafeAreaView>
  );
}

const Main = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Main.Navigator>
        <Main.Screen name="Inicio" component={InicioScreen} />
        <Main.Screen name="Discografia" component={BiografiaScreen} />
        <Main.Screen name="Galeria" component={GaleriaScreen} />
        <Main.Screen name="Premios" component={PremiosScreen} />
        <Main.Screen name="Curiosidades" component={CuriosidadesScreen} />
      </Main.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7EAE5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen:{
    width: 600,
    height: 400,
    flex:1
  },
  colorEncabezado:{
    color: '#E75118'
  },
  titulos:{
    fontSize: 40,
    color: '#5788CD',
    fontWeight: 'bold',
    marginBottom:20,
    justifyContent: 'center'
  },
  subtitulos:{
    fontSize: 30,
    color: '#9C2912',
    fontWeight: 'bold',
    marginBottom:15,
    justifyContent: 'center'
  },
  contenido:{
    backgroundColor: '#E8F2A7',
    fontSize: 18,
    justifyContent: 'center',
    marginBottom:5,
    margin:13
  },
  boton:{
    backgroundColor: '#BF8FA9',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius:15,
    width: 200,
    alignItems : "center",
    marginBottom:20
  },
  boton2:{
    backgroundColor: '#E75118',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius:15,
    width: 200,
    alignItems : "center",
    borderStyle: "solid",
    borderColor: '#BF8FA9',
    borderWidth: 1,
    marginBottom:20
  }
});
