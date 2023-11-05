import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ButtonsChoice } from "../Components/Buttons";
import { pb } from "../Plugins/pocketbase";
import { DeviceEventEmitter } from "react-native";
import { scoreContext } from "../App";

export function GameScreen({ route, navigation }) {
  let ff = React.useContext(scoreContext);
  /**
   * @type {name:string,content:{choices:string[4],correct:number}}
   */
  const [questions, setquestions] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [currentQuestionNo, setcurrentQuestionNo] = React.useState(0);
  const [choice, setChoice] = React.useState(-1);
  const [a, seta] = React.useState(false);
  console.log("scoressss",ff.score);
  React.useEffect(() => {
    pb.collection("question")
      .getFullList()
      .then((record) => {
        setquestions(record);
        console.log("record:", record);
        return record;
      })
      .then((record) => {
        setTitle(record[currentQuestionNo].title);
        setChoice(record[currentQuestionNo].content);
        console.log("sdad", record[currentQuestionNo]);
      })
      .catch((e) => console.error("err", e))
      .finally(() => {
        seta(true);
      });
  }, []);
  DeviceEventEmitter.addListener("event.scored", (eventData) => {
  });
  const [selectedChoice, setselectedChoice] = React.useState(-1);

  function onPress(choice, correct) {
    // setTitle(questions[currentQuestionNo].title);
    // setselectedChoice(choice);
    console.log(choice);
    if (choice === correct) {
      console.log("correct");

      DeviceEventEmitter.emit("event.scored", {});
      // ff.setScore(ff+1);
      if (currentQuestionNo + 1 < questions.length) {
        
        setChoice(questions[currentQuestionNo + 1].content);
        setTitle(questions[currentQuestionNo + 1].title);
        setcurrentQuestionNo(currentQuestionNo + 1);
      } else {
        console.log("game done");
        //finish game

        navigation.navigate("ScoreUploadScreen");
        //         setChoice(-1);
        // setcurrentQuestionNo(-1);
      }
    } else {
      if (currentQuestionNo + 1 < questions.length) {
      setChoice(questions[currentQuestionNo + 1].content);
      setTitle(questions[currentQuestionNo + 1].title);
      setcurrentQuestionNo(currentQuestionNo + 1);
      }
      else{
        console.log("game done");
        //finish game

        navigation.navigate("ScoreUploadScreen");
      }
    }
  }

  function changequestion() {
    setTitle(questions[currentQuestionNo].title);
  }
  console.log("aaaaa", a === true && questions);
  if (a === true && questions) {
    // console.log("dadadaddad",questions[0].content)
    return (
      <View>
        <Text>current choice :{selectedChoice}</Text>

        <Text>q no :{currentQuestionNo}</Text>
        <Text>score:{ff}</Text>

        <Text>{title}</Text>

        <ButtonsChoice choices={choice} press={onPress}></ButtonsChoice>
      </View>
    );
  } else {
    <View>
      <text>Loading</text>
    </View>;
  }
}

const style = StyleSheet.create({
  gridContainer: {
    flex: 2,
    marginHorizontal: "auto",
    width: 400,
  },
  row: {
    flexDirection: "row",
  },
});
