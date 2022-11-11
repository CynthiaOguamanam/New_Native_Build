import {View,Image, FlatList, Text} from 'react-native'
import React from 'react'

const myData = [
    {
        "id": 1,
        "image":"",
        "contact": "08121883475",
        "name": "Gideon Ekeke"
    },
    {
        "id": 2,
        "image":"",
        "contact": "09014443277",
        "name": "Cynthia Oguamanam"
    },
    {
        "id": 3,
        "image":"",
        "contact": "08077337485",
        "name": "Edwin Ndidi"
    },
    {
        "id": 4,
        "image":"",
        "contact": "09144524377",
        "name": "Samuel Olorunda"
    },

]


export default function Home(){
    return(
        <View>
            
            <FlatList  data={myData}
            renderItem={({Item}) =>{
                <View style={{
                    width: "100%",
                }} >
                    <Image source={Item.image} style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor:"orange",
                        borderRadius: "100%",
                    }} />
                    <View>
                        <Text>Home</Text>
                        <Text>About</Text>
                        <Text>Contact</Text>
                    </View>
                </View>
            }} />
        </View>
    )
}



