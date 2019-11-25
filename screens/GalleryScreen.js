import React from 'react';
import { View, Alert } from 'react-native';
import ImageLayout from 'react-native-image-layout';

import ProgressHeader from '../components/ProgressHeader';
import DrawButton from '../components/DrawButton';

//??: is there a way to populate the uri from stickers folder?

masterImageArray=[
  { URI: "https://images.unsplash.com/photo-https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80-81629236fe54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9631adb2d2f752e3a0734f393fef634b",
      id: "1",
      open: false},
  { URI: "https://images.unsplash.com/photo-1468851508491-https://images.unsplash.com/photo-1509670161296-18d69c8f2ffd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=b1222b6a1d3694cac76d2a23c3a02254",
      id: "2",
      open: false},
  { URI: "https://images.https://images.unsplash.com/photo-1448698314110-8c1b903e0717?ixlib=rb-1.2.1&auto=format&fit=crop&w=713&q=80.com/photo-1454991727061-be514eae86f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=3c55430f01fe9ac9a9ccb3383d1416ff",
      id: "3",
      open: false },
  { URI: "https://images.unsplash.https://images.unsplash.com/photo-1496890666403-e6cf521841e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80/photo-1467890947394-8171244e5410?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9396f0adf263b51b44626228225684d0",
      id: "4",
      open: false },
  { URI: "https://images.https://images.unsplash.com/photo-1503492362437-648839a90ee4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80.com/photo-1443302382600-0bfacc473376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=0c0f26518c1001f67b6c2e4480a8d3e0",
      id: "5",
      open: false },
  { URI: "https://images.https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80.com/photo-1429091443922-e7d9ae79a837?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=e81cb6a60c53788559edb9bec21b80fc",
      id: "6",
      open: false },
      { URI: "https://https://images.unsplash.com/photo-1560970664-8d9800c49285?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80.https://images.unsplash.com/photo-1455970022149-a8f26b6902dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60.com/photo-1442530792250-81629236fe54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9631adb2d2f752e3a0734f393fef634b",
      id: "7",
      open: false},
  { URI: "https://images.https://images.unsplash.com/photo-1550256519-4125643edab6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60.com/photo-1468851508491-4f854ec88aa0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=b1222b6a1d3694cac76d2a23c3a02254",
      id: "8", 
      open: false},
  { URI: "https://images.unsplash.https://images.unsplash.com/photo-1496661269814-a841e78df103?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80/photo-1454991727061-be514eae86f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=3c55430f01fe9ac9a9ccb3383d1416ff",
      id: "9",
      open: false },
  { URI: "https://images.https://images.unsplash.com/photo-1509123779391-4a82c1c0264f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80.com/photo-1467890947394-8171244e5410?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9396f0adf263b51b44626228225684d0",
      id: "10",
      open: false },
  { URI: "https://images.unsplash.https://images.unsplash.com/photo-1531040630173-7cfb894c8eaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=649&q=80/photo-1443302382600-0bfacc473376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=0c0f26518c1001f67b6c2e4480a8d3e0",
      id: "11",
      open: false },
  { URI: "https://images.https://images.unsplash.com/photo-1551534595-2ee7b4ef1b63?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80.com/photo-1429091443922-e7d9ae79a837?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=e81cb6a60c53788559edb9bec21b80fc",
      id: "12",
      open: false },
];

function transformArray(masterImageArray) {
  imageArray = masterImageArray.map(image => {
      if (image.open == false) {
        return { source: require('../assets/stickers/sleepy_cat.jpg'), dimensions: { width: 300, height: 300}, id: image.id}
      }
      return image;
  });
  return imageArray
}

function openSticker(sticker) {
  if(sticker.open == false) {
    sticker.open = true;
    <ImageLayout
      rerender = {true}
      images = {transformArray(masterImageArray)}
    />
  } else {
    Alert.alert("You got a sticker you already have!")
  }
}

// fish -= 500;
// rarity = Math.random();
// if (rarity < .01) {
//   sticker = masterImageArray[Math.floor(Math.random()*masterImageArray.slice(0, 2))]; //2
//   openSticker(sticker);
// } else if (rarity < .05) {
//   sticker = masterImageArray[Math.floor(Math.random()*masterImageArray.slice(3, 6))]; //4
//   openSticker(sticker);

// } else if (rarity < .15) {
//   sticker = masterImageArray[Math.floor(Math.random()*masterImageArray.slice(7, 9))]; //6
//   openSticker(sticker);

// } else {
//   sticker =masterImageArray[Math.floor(Math.random()*masterImageArray.slice(10, 12))]; //8
//   openSticker(sticker);
// }

function drawButtonPress() {
  var fish = 500;
  if(fish < 500) {
    Alert.alert("Try again later", "You don't have enough fish to draw in any cats!");
  } else {
    sticker = masterImageArray[0];
    openSticker(sticker);

  }
}

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
            numCompleted={0}
            numTotal={0}
            numHearts={500}
          />
        </View>
    );
}


function GalleryScreen({ screenProps: { fish } }) {
  const _renderMainHeader = () => {
    return (
      <View style= {{padding: 20}}>
        <DrawButton onDrawPress={drawButtonPress} />
      </View>
    );
  };
  
  const _renderMainFooter = () => {
    return <DrawButton onDrawPress={drawButtonPress} />;
  };

  const imageArray = masterImageArray.map(image => {
    if (!image.open) {
      return {
        source: require('../assets/stickers/sleepy_cat.jpg'),
        dimensions: { width: 300, height: 300 },
        id: image.id
      };
    }
    return image;
  });


  return (
      <ImageLayout
          // renderPageHeader={this._renderPageHeader}
          renderMainHeader={this._renderMainHeader}
          renderMainFooter={this._renderMainFooter}
          images = {transformArray(masterImageArray)}
          columns={3}
          spacing={5}
          
      />

  );
}

export default GalleryScreen;
