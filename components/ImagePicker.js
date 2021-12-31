import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Colors from '../constants/Colors';

const ImgPicker = ({ selectedImage, onImageTaken }) => {
  const [pickedImage, setPickedImage] = useState(selectedImage);

  const verifyPermissions = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (result.status !== 'granted') {
      Alert.alert(
        'Cảnh báo cấp quyền!',
        'Bạn cần cấp quyền cho máy ảnh để sử dụng ứng dụng này.',
        [{ text: 'OK' }]
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });

    setPickedImage(image.uri);
    onImageTaken(image.uri);
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!pickedImage ? (
          <Text>Chưa có hình ảnh nào được chọn.</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedImage }} />
        )}
      </View>
      <Button
        title="Chụp ảnh"
        color={Colors.primary}
        onPress={takeImageHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center',
    marginBottom: 15
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default ImgPicker;
