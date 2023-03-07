import { StatusBar } from "expo-status-bar";
import {
  View,
} from "react-native";
import { styles } from "../assets/css/style.js";
import  NewsBlackButton from "../modules/NewsBlack_Button.js";
import  RankingButton  from "../modules/Ranking_Button.js";
import  VideoButton  from "../modules/Video_Button.js";
import  NotificationsButton  from "../modules/Notifications_Button.js";
import  AccountButton  from "../modules/Account_Button.js";
import { ImageBackground } from "react-native";

export default function NewsScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground style={styles.commingSoon} source={require('../assets/images/images/CommingSoon.png')}/>
      <View style={styles.nav}>
      <NewsBlackButton parentToChild={navigation}/>
      <RankingButton parentToChild={navigation}/>
      <VideoButton parentToChild={navigation}/>
      <NotificationsButton parentToChild={navigation}/>
      <AccountButton parentToChild={navigation}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}