import { Video } from "expo-av";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import ProfilVideoPhoto from "../modules/ProfilVideoPhoto_Button.js";
import NewsButton from "../modules/News_Button.js";
import RankingButton from "../modules/Ranking_Button.js";
import VideoBlackButton from "../modules/VideoBlack_Button.js";
import NotificationsButton from "../modules/Notifications_Button.js";
import ShareButton from "../modules/Share_Button.js";
import AccountButton from "../modules/Account_Button.js";
import LikeButton from "../modules/Like_Button.js";
import FavoriteButton from "../modules/Favorite_Button.js";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import { styles } from "../assets/css/style.js";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withTiming,
  Easing,
  runOnJS,
} from "react-native-reanimated";
import { GestureHandLerRootView } from "react-native-gesture-handler";

export default function VideoScreen({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [shouldShow, setShouldShow] = useState(false);
  const y = useSharedValue(0);
  const { height } = useWindowDimensions();
  const hideRemarkGesture = useAnimatedGestureHandler({
    onStart: () => {},
    onActive: (event) => {
      y.value = event.translationY;
    },
    onEnd: (event) => {
      if (y.value > height / 2 || event.velocityY > 500) {
        y.value = withTiming(height, { easing: Easing.linear });
      } else {
        y.value = withTiming(0, { easing: Easing.linear });
      }
    },
  });
  const AnimatedRemarkStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withTiming(y.value, {
          duration: 100,
          easing: Easing.linear,
        }),
      },
    ],
  }));
  return (
    <View style={styles.container}>
      <View style={styles.VideoContainer}>
        <FavoriteButton />
        <Text style={styles.InfoFavorite}>100</Text>
        <LikeButton />
        <Text style={styles.InfoLike}>100</Text>

        <TouchableOpacity
          style={styles.remarkButton}
          activeOpacity={1}
          onPress={() => setShouldShow(true, (y.value = 0))}
        >
          <Image source={require("../assets/images/svg/Remark.png")} />
        </TouchableOpacity>
        <Text style={styles.InfoRemark}>100</Text>
        <ShareButton />
        <Text style={styles.InfoShare}>100</Text>
        <ProfilVideoPhoto />
        {shouldShow ? (
          <Animated.View style={[styles.remark, AnimatedRemarkStyle]}>
            <Text style={styles.titleRemark}>Commentaires</Text>
            <PanGestureHandler onGestureEvent={hideRemarkGesture}>
              <Animated.View style={styles.buttonSlideRemark} />
            </PanGestureHandler>
          </Animated.View>
        ) : null}
        <Video
          ref={video}
          style={styles.video}
          source={require("../assets/videos/dog.mp4")}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <View style={styles.description}>
          <Text style={styles.descriptionTexteBold}>Eymen_Chouckette : </Text>
          <Text style={styles.descriptionTexte}>
            Avec mon meilleur ami @CHOUKETTE c’est la fête du slibare ! #Amis
            #Poulet ...
          </Text>
        </View>
      </View>
      <View style={styles.nav}>
        <NewsButton parentToChild={navigation} />
        <RankingButton parentToChild={navigation} />
        <VideoBlackButton parentToChild={navigation} />
        <NotificationsButton parentToChild={navigation} />
        <AccountButton parentToChild={navigation} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
