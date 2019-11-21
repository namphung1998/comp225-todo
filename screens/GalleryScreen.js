import React from 'react';
import { View, Alert } from 'react-native';
import ImageLayout from "react-native-image-layout";

import ProgressHeader from"../components/ProgressHeader";
import DrawButton from"../components/DrawButton";

//??: is there a way to populate the uri from stickers folder?

masterImageArray=[
  { URI: "https://images.unsplash.com/photo-1442530792250-81629236fe54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9631adb2d2f752e3a0734f393fef634b",
      id: "1",
      open: false},
  { URI: "https://images.unsplash.com/photo-1468851508491-4f854ec88aa0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=b1222b6a1d3694cac76d2a23c3a02254",
      id: "2",
      open: false},
  { URI: "https://images.unsplash.com/photo-1454991727061-be514eae86f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=3c55430f01fe9ac9a9ccb3383d1416ff",
      id: "3",
      open: false },
  { URI: "https://images.unsplash.com/photo-1467890947394-8171244e5410?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9396f0adf263b51b44626228225684d0",
      id: "4",
      open: true },
  { URI: "https://images.unsplash.com/photo-1443302382600-0bfacc473376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=0c0f26518c1001f67b6c2e4480a8d3e0",
      id: "5",
      open: true },
  { URI: "https://images.unsplash.com/photo-1429091443922-e7d9ae79a837?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=e81cb6a60c53788559edb9bec21b80fc",
      id: "6",
      open: true },
      { URI: "https://images.unsplash.com/photo-1442530792250-81629236fe54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9631adb2d2f752e3a0734f393fef634b",
      id: "7",
      open: false},
  { URI: "https://images.unsplash.com/photo-1468851508491-4f854ec88aa0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=b1222b6a1d3694cac76d2a23c3a02254",
      id: "8", 
      open: false},
  { URI: "https://images.unsplash.com/photo-1454991727061-be514eae86f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=3c55430f01fe9ac9a9ccb3383d1416ff",
      id: "9",
      open: false },
  { URI: "https://images.unsplash.com/photo-1467890947394-8171244e5410?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9396f0adf263b51b44626228225684d0",
      id: "10",
      open: true },
  { URI: "https://images.unsplash.com/photo-1443302382600-0bfacc473376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=0c0f26518c1001f67b6c2e4480a8d3e0",
      id: "11",
      open: true },
  { URI: "https://images.unsplash.com/photo-1429091443922-e7d9ae79a837?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=e81cb6a60c53788559edb9bec21b80fc",
      id: "12",
      open: true },
];

imageArray = masterImageArray.map(image => {
    if (image.open == false) {
      return { source: require('../assets/stickers/sleepy_cat.jpg'), dimensions: { width: 300, height: 300}, id: image.id}
    }
    return image;
  });

function drawButtonPress() {
  if(fish < 500) {
    Alert.alert("Try again later", "You don't have enough fish to draw in any cats!");
  } else {
    fish -= 500;
    rarity = Math.random();
    if (rarity < .01) {
      return urArray[Math.floor(Math.random()*urArray.length)];
    } else if (rarity < .05) {
      return ssrArray[Math.floor(Math.random()*ssrArray.length)];
    } else if (rarity < .15) {
      return srArray[Math.floor(Math.random()*srArray.length)]; 
    }
    return rArray[Math.floor(Math.random()*rArray.length)];
  }
};

  // access money to decrement 500
  // choosen random image
  //   random number generator decides from which array:
  //     80: rare (R)
  //     15: super rare (SR)
  //     4:  super super rare (SSR)
  //     1:  ultra rare (UR)
  //   randomly choose from within that array
  //     image boolean open == true
  //     replace URI with new one

_renderMainHeader = () => {
    return (
        <View>
          <ProgressHeader
            numHearts={500}
          />
        </View>
    );
}

_renderMainFooter = () => {
    return (
      <View style= {{padding: 20}}>
        <DrawButton onDrawPress={drawButtonPress} />
      </View>
    );
}



function GalleryScreen() {
  return (
      <ImageLayout
          // renderPageHeader={this._renderPageHeader}
          renderMainHeader={this._renderMainHeader}
          renderMainFooter={this._renderMainFooter}
          images = {imageArray}
          columns={3}
          spacing={5}
          
      />
  );
}

export default GalleryScreen;
