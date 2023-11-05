import * as React from 'react';
import { View,StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import { Card } from '@rneui/themed';
import { pb } from '../Plugins/pocketbase';
import ListBox from "../Components/ListBox"


import {  useFonts, ChakraPetch_400Regular,ChakraPetch_500Medium} from '@expo-google-fonts/chakra-petch';
import {Text,Button} from  'react-native-paper';
import { scoreContext } from "../App";
export function StartScreen({navigation}) {
    let [fontsLoaded] = useFonts({
        ChakraPetch_400Regular,ChakraPetch_500Medium
      })

      let ff = React.useContext(scoreContext);
      
    




    const [load,setLoad] = React.useState(false);
    const [board,setBoard] = React.useState([]);
    React.useEffect(() => {
        pb.collection('leaderboard').getFullList({
            sort: '-score',
        })
        .then(setBoard).finally( () =>setLoad(true));
    });

    if (load && fontsLoaded) {
    return (
        <ScrollView style={{  flex:1  }}>
            <Card containerStyle = {style.main}>
                
                    <Text style = {style.CardTitle}>Genema</Text>
                

                {buttonyes("PRESS TO START",() => navigation.navigate('GameScreen'))} 
                {buttonyes("ADMIN",() => navigation.navigate('AdminScreen'))} 

            </Card>


            <View style={{ position:"relative", width:'auto', height:60 }}>
                <Text style={style.textMain}>{'Leaderboard'}</Text>
            </View>

            <Card style = {style.Main}>
            
            <View style={style.centerAuto}>

            {/* {board.map((entry) => (<><Text>Name: {entry.name} </Text><Text>Score: {entry.score}</Text></>))} */}


            {board.map(({ id, name, score },index) => {
                return (
                    <ListBox id={id} name={name} score={score} place={index+1}/>
                )
            })}
        
        



            </View>
            </Card>
        </ScrollView>

    );
    }
    else {
        return (<Text>Loading</Text>)
    }
}



const style = StyleSheet.create({
    main:{
        position: "relative",
        borderRadius: 15,
        

        
    },

    CardTitle:{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15,
        margin:10,
    },

    Button: {
        backgroundColor: "#1111",
        borderRadius: 5,
        alignItems: "center",
        margin: 10,
        padding: 10    
    },textMain: {
        fontFamily:'ChakraPetch_400Regular',
        fontSize: 32,
        textAlign: "center",
        
    
        // fontFamily: "Chakra Petch",
      },


})




function buttonyes(text,func) {
    // return <TouchableOpacity style={style.Button}
    //     onPress={func}>
    //     <Text>{text}</Text>
    // </TouchableOpacity>;


    return <View style={{padding:5}}><Button mode="contained-tonal" onPress={func}>{text}</Button></View>
}
// export function StartScreen({navigation}) {
//     return (
//         <View style = {style.container}>

//             {/* <View style={style.container}> */}
//                 <Card>
//                     <Card.Title>Genius</Card.Title>
                    
//                     <TouchableOpacity style = {style.Button} 
//                         onPress={() => navigation.navigate('GameScreen')}>
//                         <Text>START</Text>
//                     </TouchableOpacity> 
//                 </Card>
//             {/* </View> */}
            
//         </View>

//     );
// }




// const style =StyleSheet.create({
//     Title:{
//         textAlign: "center",
//         fontSize: 70,
//         fontWeight: "bold",
//         marginBottom: 20,
//     },

//     container:{
//         alignContent: "center",
//         flex: 1,
        
//     },
    
//     Button:{
//         alignItems: "center",
//         backgroundColor: '#1111',
//         padding: 10,
//         borderRadius: 30,
//     },
   
// });
    