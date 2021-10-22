import React, { useState } from "react";

// import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

//import DatePicker from the package we installed
import DatePicker from "react-native-datepicker";

const DatePickers = () => {
  const [date, setDate] = useState(new Anima());

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <DatePicker
          style={styles.datePickerStyle}
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="10-10-2021"
          maxDate="21-10-2021"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>
    </SafeAreaView>
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
