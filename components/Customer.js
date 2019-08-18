import React, { Component } from 'react';
import { View, StyleSheet,Text,Button } from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9
import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { Navigation } from 'react-native-navigation'


const Form = t.form.Form;

const User = t.struct({
  Name: t.String,
  price: t.String,
  Total:t.String
});

const options = {
    fields: {
      price: {
        label: 'Previous purchase price',
      },
    },
  };
  addProduct = () =>{

    alert("ADD PRODUCT");
  }

export default class Customer extends Component {

    // static get options() {
    //     return {
    //       topBar: {
    //         title: {
    //           text: 'Screen 2'
    //         },
    //       }
    //     };
    //   }
   
  render() {

    return (
      <View style={styles.container}>
       <Form 
          ref={c => this._form = c}
          type={User} 
          options={options} // pass the options via props
        />

         <View>
            <Text>Total</Text>
         </View>

         <View style={[{ width: "90%", margin: 10, backgroundColor: "#fc3842" }]} >
            <Button style={styles.button}
            onPress ={this.addProduct}
            title="ADD PRODUCT"
            color="#f7ebec"

            />

        </View>
        

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: 'white',
  },
  button: {
    padding: 20,
    fontSize: 15,
    fontFamily: "arial",
    width: 400,
    height: 40,
    textAlign: "center"
  }
  
});