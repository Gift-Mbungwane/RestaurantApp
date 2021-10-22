import React, { useState } from "react";
import { Modal, View } from "react-native";

const [modalVisible, setModalVisible] = useState(false);

const reviewModal = () => {
  const openModal = (placement) => {
    setOpen(true);
    setPlacement(placement);
  };

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export { reviewModal };
