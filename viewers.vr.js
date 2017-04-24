import React from 'react';
import {
  Sphere,
  View,
} from 'react-vr';

export default class Viewers extends React.Component {

  constructor(){
    super();
  }

  // https://github.com/ngokevin/kframe/blob/master/components/randomizer/index.js#L39
  getRandomPosition(){
    return [
      Math.random() * (10 - (-10)) + -10,
      Math.random() * (10 - (-10)) + -10,
      Math.random() * (10 - (-10)) + -10
    ];
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return (
      <View>
        {this.props.viewers.map((viewer) => (
          <Sphere key={viewer.id}
                  radius={0.5}
                  style={{
                    color: this.getRandomColor(),
                    transform: [{translate: this.getRandomPosition()}],
                  }}/>
        ))}
      </View>
    );
  }
};