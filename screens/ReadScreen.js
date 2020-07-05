import React,{component} from 'react'
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Image,Alert } from 'react-native';
import db from '../config'
import firebase from 'firebase'
import { ScrollView } from 'react-native-gesture-handler';
export default class ReadScreen extends React.Component{
   constructor(props){
       super(
           this.state={
               allStories:[]
           }
       );
   }
   componentDidMount= async ()=>{
       const query = await db.collection("stories").get()
   query.docs.map((doc)=>{
this.setState({
    allStories:[...this.state.allStories, doc.data()]
})
   })
    }
    render(){
        return(
            <ScrollView>
               { this.state.allStories.map((stories)=>{
                    return(
                        <View><Text></Text></View>
                    )
                })
            }
            </ScrollView>
        );
        
    }
    render(){
        return(
            <ScrollView>
                  { this.state.allStories.map((stories,index)=>{
                                  return(
                                    <View key={index} style={{borderBottomWidth:2}}>
                    <Text>{author :" + stories.author"} </Text>
                    <Text>{date :" + stories.date"}  </Text>
                    <Text>{storyId :" + stories.storyId"}  </Text>
                    <Text> {storyText :" + stories.storyText"} </Text>
                    <Text> {title :" + stories.title"} </Text>
                                    </View>
                                );
                  })

    }
            </ScrollView>
        );
    }


render(){
    return(
        data={this.state.allStories
        renderItem={({item})=>(
            <View key={index} style={{borderBottomWidth:2}}>
            <Text>{author :" + stories.author"} </Text>
            <Text>{date :" + stories.date"}  </Text>
            <Text>{storyId :" + stories.storyId"}  </Text>
            <Text> {storyText :" + stories.storyText"} </Text>
            <Text> {title :" + stories.title"} </Text>
                            </View>
        )}
    )
}



}

