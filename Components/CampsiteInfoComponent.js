import React, {Component} from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { COMMENTS } from '../shared/comments';
import { CAMPSITES } from '../shared/campsites';


function RenderComment ({comments}){
    const renderCommentItem = ({item}) =>{
        return (
            <View style={{margin:10}}>
                <Text style={{fontSize: 14}}>{item.text}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{`-- ${item.author}, ${item.date}`}</Text>
            </View>    

        );
    };
    return (
        <Card title='Comments'>
            <FlatList
            data={Comment}
            renderItem={renderCommentItem}
            keyExtractor={item => item.id.toString()}
            />
            
        </Card>
    ); 
}


function RenderCampsite({campsite}) {   
    if (campsite) {
        return (
            <Card
                featuredTitle={campsite.name}
                image={require('./images/react-lake.jpg')}>
                <Text style={{margin: 10}}>
                    {campsite.description}
                </Text>
                <Icon
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => props.favorite ? 
                        console.log('Already set as a favorite') : props.markFavorite()}
                />
            </Card>
        );
    }
    return <View />;
}



class  CampsiteInfo extends Component {
    constructor(){
        super(props);
        this.state={
            campsite:CAMPSITES,
            comments:COMMENTS,
            favourite: false
        }
    }
    markFavorite(){
        this.setState({favorite: true}
        );
    }

        static NavigationOptions ={
            title:'Campsite Information'

        }
    render()
    {
        
       const campsiteId = this.props.Navigation.getParam('campsiteId');
       const  campsite = this.state.campsite.filter(campsite =>campsiteId === campsite.id )[0];
       const comment = this.state.comments.filter(comment =>comment.campsiteId === comment.id )[0];
       return(
           <ScrollView>
               <RenderCampsite campsite={campsite}
               favorite={this.state.favourite}
               markFavorite ={() =>this.markFavorite()} />
               <RenderComments comments={comments}/>


           </ScrollView>
       );
      
    

    } 
}

export default CampsiteInfo;