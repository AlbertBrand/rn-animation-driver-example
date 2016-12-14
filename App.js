// @flow
import React from 'react';
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const xOffset = new Animated.Value(0);

const onScroll = Animated.event(
  [{ nativeEvent: { contentOffset: { x: xOffset } } }],
  { useNativeDriver: true }
);

function CardView(props: { children?: ReactElement<*> }) {
  return (
    <Animated.ScrollView
      scrollEventThrottle={16}
      onScroll={onScroll}
      horizontal
      pagingEnabled
      style={style.scrollView}>
      {props.children}
    </Animated.ScrollView>
  )
}

function Page(props: { children?: ReactElement<*> }) {
  return (
    <View style={style.scrollPage}>
      {props.children}
    </View>
  )
}

function Card(props: { text: string, index: number }) {
  return (
    <Animated.View style={[style.card, rotateTransform(props.index)]}>
      <Text>{props.text}</Text>
    </Animated.View>
  );
}

function rotateTransform(index: number) {
  return {
    transform: [{
      rotate: xOffset.interpolate({
        inputRange: [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH],
        outputRange: ['30deg', '0deg', '-30deg'],
      })
    }]
  };
}

export default function App() {
  return (
    <CardView>
      <Page>
        <Card text="Card 1" index={0}/>
      </Page>
      <Page>
        <Card text="Card 2" index={1}/>
      </Page>
      <Page>
        <Card text="Card 3" index={2}/>
      </Page>
    </CardView>
  );
}

const style = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
  },
  scrollPage: {
    width: SCREEN_WIDTH,
    padding: 20,
  },
  card: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#F5FCFF',
  }
});