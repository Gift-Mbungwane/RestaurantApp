import React, { useState, useEffect } from "react";
import { Button, View, StyleSheet, Platform, Text } from "react-native";
//import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native-gesture-handler";

const DatePickers = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  useEffect(() => {
    showDatepicker();
  }, []);

  return (
    <View>
      <View>
        {/*<Button onPress={showDatepicker} title="Choose Date" />*/}
        <TouchableOpacity
          onPress={showDatepicker}
          style={{
            width: 100,
            height: 34,
            marginHorizontal: 5,
            backgroundColor: "#FFFFFF",
            borderRadius: 6,
          }}
        >
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </TouchableOpacity>
      </View>
      {/*} <View>
        <Button onPress={showTimepicker} title="Choose Time" />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={() => onChange}
            on
          />
        )}
      </View>
        */}
    </View>
  );
};

export default DatePickers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});