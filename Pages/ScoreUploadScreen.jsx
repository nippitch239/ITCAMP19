import * as React from 'react';
import {  View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import { useTheme ,Button,TextInput} from 'react-native-paper';
import { scoreContext } from "../App";
import {pb} from "../Plugins/pocketbase"

export function ScoreUploadScreen({navigation}) {
    const theme = useTheme();
    const [name,setName] = React.useState("");
    let [score,setff] = React.useContext(scoreContext);
    async function uploadScore() {

        const data = {
            name,
            score
        };
        
        const record = await pb.collection('leaderboard').create(data);
        navigation.goBack();
        navigation.goBack();
        setff(0);
    }
    return (
        <View >
        <Text >Your Score: {score}</Text>
        <TextInput value={name} onChangeText={setName} placeholder="Your username">
        </TextInput>
        <Button title='Finish' mode="contained-tonal" onPress={uploadScore}>
        Finish
        </Button>
        </View>
    
    );
}
