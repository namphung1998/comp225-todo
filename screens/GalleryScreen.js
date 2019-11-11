import React from 'react';
import { View } from 'react-native';
import ImageLayout from "react-native-image-layout";
import Icon from 'react-native-vector-icons/MaterialIcons';

import ProgressHeader from"../components/ProgressHeader";
import DrawButton from"../components/DrawButton";

function drawButtonPress() {

}

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
      <View
        // flex={1}
        alignItems= {'center'}
        marginBottom= {0}>
        <DrawButton
          onDrawPress={() => {
            drawButtonPress();
          }}
        />
      </View>
    );
}



function GalleryScreen() {
  return (
      <ImageLayout
          // renderPageHeader={this._renderPageHeader}
          renderMainHeader={this._renderMainHeader}
          renderMainFooter={this._renderMainFooter}
          images={[
              // { source: require("images/beach.png"),
              //     // IMPORTANT: It is REQUIRED for LOCAL IMAGES
              //     // to include a dimensions field with the
              //     // actual width and height of the image or
              //     // it will throw an error.
              //     dimensions: { width: 1080, height: 1920 } },
              { URI: "https://images.unsplash.com/photo-1442530792250-81629236fe54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9631adb2d2f752e3a0734f393fef634b",
                  id: "1"},
              { URI: "https://images.unsplash.com/photo-1468851508491-4f854ec88aa0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=b1222b6a1d3694cac76d2a23c3a02254",
                  id: "2" },
              { URI: "https://images.unsplash.com/photo-1454991727061-be514eae86f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=3c55430f01fe9ac9a9ccb3383d1416ff",
                  id: "3" },
              { URI: "https://images.unsplash.com/photo-1467890947394-8171244e5410?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9396f0adf263b51b44626228225684d0",
                  id: "4" },
              { URI: "https://images.unsplash.com/photo-1443302382600-0bfacc473376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=0c0f26518c1001f67b6c2e4480a8d3e0",
                  id: "5" },
              { URI: "https://images.unsplash.com/photo-1429091443922-e7d9ae79a837?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=e81cb6a60c53788559edb9bec21b80fc",
                  id: "6" },
          ]}
          columns={3}
          spacing={10}
      />
  );
}

export default GalleryScreen;
