import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import ImageLayout from 'react-native-image-layout';
import ProgressHeader from '../components/ProgressHeader';
import DrawButton from '../components/DrawButton';

//??: is there a way to populate the uri from stickers folder?

masterImageArray=[
  { URI: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      id: "1",
      open: false},
  { URI: "https://images.unsplash.com/photo-1455970022149-a8f26b6902dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=648&q=80",
      id: "2",
      open: false},
  { URI: "https://images.unsplash.com/photo-1448698314110-8c1b903e0717?ixlib=rb-1.2.1&auto=format&fit=crop&w=713&q=80",
      id: "3",
      open: false },
  { URI: "https://images.unsplash.com/photo-1524213216828-963a6a3cf9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      id: "4",
      open: false },
  { URI: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      id: "5",
      open: false },
  { URI: "https://images.unsplash.com/photo-1482066490729-6f26115b60dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1002&q=80",
      id: "6",
      open: false },
  { URI: "https://images.unsplash.com/photo-1487300001871-12053913095d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      id: "7",
      open: false},
  { URI: "https://images.unsplash.com/photo-1484329685472-7be8fb281ce2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      id: "8", 
      open: false},
  { URI: "https://images.unsplash.com/photo-1509670161296-18d69c8f2ffd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      id: "9",
      open: false },
  { URI: "https://images.unsplash.com/photo-1488740304459-45c4277e7daf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      id: "10",
      open: false },
  { URI: "https://images.unsplash.com/photo-1491485880348-85d48a9e5312?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      id: "11",
      open: false },
  { URI: "https://images.unsplash.com/photo-1548676924-48e71ceac151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      id: "12",
      open: false },
];



function GalleryScreen({ screenProps: { fish } }) { //decrementFish

  const [imageArray, setImageArray] = useState(masterImageArray);
  

  function transformArray(newImageArray) {
    const updatedArray = newImageArray.map(image => {
        if (image.open == false) {
          return { source: require('../assets/stickers/sleepy_cat.jpg'), dimensions: { width: 300, height: 300}, id: image.id}
        }
        return {...image, dimensions: { width: 300, height: 300}};
    });
    return updatedArray;
  }
  
  function openSticker(sticker) {
    if(sticker.open == false) {
      const updatedArray = imageArray.map(image => {
        if(image.id == sticker.id) {
          return {...image, open: true}
        }
        return image;
      })
      setImageArray(updatedArray);
    } else {
      Alert.alert("You got a sticker you already have!")
    }
  }
  
  function chooseSticker() {
    rarity = Math.random();
    urArray = imageArray.slice(0,1);
    ssrArray = imageArray.slice(2, 4);
    srArray = imageArray.slice(5, 7);
    rArray = imageArray.slice(8, 12);
    if (rarity < .01) {
      sticker = urArray[Math.floor(Math.random()*urArray.length)]; //2
    } else if (rarity < .05) {
      sticker = ssrArray[Math.floor(Math.random()*ssrArray.length)]; //4
    } else if (rarity < .15) {
      sticker = srArray[Math.floor(Math.random()*srArray.length)]; //6
    } else {
      sticker = rArray[Math.floor(Math.random()*rArray.length)]; //8
    }
    console.log(sticker);
    openSticker(sticker);
  }

  
  function drawButtonPress() {
    if(fish < 500) {
      Alert.alert("Try again later", "You don't have enough fish to draw in any cats!");
    } else {
      chooseSticker();
      // decrementFish();
    }
  }
  
  const _renderMainHeader = () => {
      return (
          <View>
            <ProgressHeader
              numCompleted={0}
              numTotal={0}
              numHearts={fish}
            />
          </View>
      );
  }
  
  
  const _renderMainFooter = () => {
    return <DrawButton onDrawPress={drawButtonPress} />;
  };

  //console.log(imageArray)
  return (
      <ImageLayout
          // renderPageHeader={this._renderPageHeader}
          renderMainHeader={_renderMainHeader}
          renderMainFooter={_renderMainFooter}
          images = {transformArray(imageArray)}
          rerender= {true}
          sorted= {true}
          columns={3}
          spacing={5}
          
      />

  );
}

export default GalleryScreen;
