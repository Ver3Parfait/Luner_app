import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  View,
} from "react-native";
import { styles } from "../assets/css/style.js";
import  NewsButton  from "../modules/News_Button.js";
import  RankingBlackButton  from "../modules/RankingBlack_Button.js";
import  VideoButton  from "../modules/Video_Button.js";
import  NotificationsButton  from "../modules/Notifications_Button.js";
import  AccountButton  from "../modules/Account_Button.js";

export default function RankingScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <ImageBackground style={styles.commingSoon} source={require('../assets/images/images/CommingSoon.png')}/>
      <View style={styles.nav}>
      <NewsButton parentToChild={navigation}/>
      <RankingBlackButton parentToChild={navigation}/>
      <VideoButton parentToChild={navigation}/>
      <NotificationsButton parentToChild={navigation}/>
      <AccountButton parentToChild={navigation}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}