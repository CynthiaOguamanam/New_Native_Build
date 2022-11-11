import {View,StyleSheet, Text, TextInput, Image, Dimensions} from 'react-native'
import React from 'react'
import pix from '../assets/icon.png'

const {width, height} = Dimensions.get("window")

let SIZE = width*0.8;
let WIDTH_SIZE = width;
let H_SIZE = height*0.35;

const styled = StyleSheet.create({
    image:{
        width: WIDTH_SIZE,
        height: H_SIZE,
        resizeMode: "cover",
        backgroundColor: "orange"
    },
    textInput:{
        width: SIZE,
        height: 45,
        outline: none,
        marginTop: 5,
        padding: 10,
        borderWidth: "1px",
        borderColor: "silver",
        borderRadius: 3
    },
    text:{
        fontFamily: "Poppins"
    },
    container:{
        flex: 1,
        alignItems: "center"
    }
})

const Register = () => {
    return(
        <View style={styled.container}>
            <Image style={styled.image} source={pix} />

            <View>
                <View>
                    <Text style={styled.text}>UserName</Text>
                    <TextInput style={styled.textInput} placeholder='User Name'/>
                </View>
            </View>
        </View>
    )
}

export default Register;