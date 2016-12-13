// @flow
import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

function CardView(props: { children?: ReactElement<*> }) {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      style={style.scrollView}>
      {props.children}
    </ScrollView>
  )
}

function Page(props: { children?: ReactElement<*> }) {
  return (
    <View style={style.scrollPage}>
      {props.children}
    </View>
  )
}

function Card(props: { text: string }) {
  return (
    <View style={style.card}>
      <Text>{props.text}</Text>
    </View>
  );
}

export default function App() {
  return (
    <CardView>
      <Page>
        <Card text="Card 1"/>
      </Page>
      <Page>
        <Card text="Card 2"/>
      </Page>
      <Page>
        <Card text="Card 3"/>
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