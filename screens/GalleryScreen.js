import React from 'react';
import ImageLayout from "react-native-image-layout";

_renderPageHeader = (image, index, onClose) => {
    // Individual image object data.
    console.log(image);
    return (
        <View style={styles.image}>
            <TouchableWithoutFeedback onPress={() => {onClose();}}>
                <Image
                    source={backIcon}
                    style={{marginLeft: 10, height: 30, width: 30}}
                />
            </TouchableWithoutFeedback>
            <Text>{image.filename}</Text>
        </View>
    );
}

function GalleryScreen() {
  return (
      <ImageLayout
          renderPageHeader={this._renderPageHeader}
          images={[
              // { source: require("images/beach.png"),
              //     // IMPORTANT: It is REQUIRED for LOCAL IMAGES
              //     // to include a dimensions field with the
              //     // actual width and height of the image or
              //     // it will throw an error.
              //     dimensions: { width: 1080, height: 1920 } },
              { URI: "https://images.unsplash.com/photo-1442530792250-81629236fe54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9631adb2d2f752e3a0734f393fef634b",
                  id: "1" },
              { URI: "https://images.unsplash.com/photo-1468851508491-4f854ec88aa0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=b1222b6a1d3694cac76d2a23c3a02254",
                  id: "2" },
          ]}
      />
  );
}

const styles = {
  image: {
    height: '77',
    width: '77'
  }
};

export default GalleryScreen;
