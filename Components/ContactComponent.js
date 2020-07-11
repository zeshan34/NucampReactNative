import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import {Text, ScrollView} from 'react-native';

class Contact extends Component{
    static navigationOptions = {
        title:"Contant us"
    }


    render(){
        return (
            <ScrollView wrapperStyle={{margin: 20}}>
                <Card>
                    <Text> 
                            1 Nucamp Way {"\n"} 
                            Seattle, WA 98001 {"\n"}
                            U.S.A {"\n"}
                    </Text>
                    <Text>
                    </Text>
                    <Text style={{marginBottom :10}}>
                    Phone: 1-206-555-1234{"\n"}
                    Email: campsites@nucamp.co
                    </Text>

                </Card>

            </ScrollView>
        )
    }
}

export default Contact;