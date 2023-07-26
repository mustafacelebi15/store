import React from "react";
import { View, Text, Image, ActivityIndicator} from "react-native";
import styles from './Detail.style';
import useFetch from "../../Hooks/useFetch";
import Config from "../../config";

const Detail = ({route}) => {
    const {id} = route.params;
    const {error, loading, data} = useFetch(`${Config.API_URL}/${id}`);

    if(loading){
        return <ActivityIndicator size="large"/>
    }

    if(error){
        return <Text>Bir Hata oluştu</Text>
    }
    return(
        <View style={styles.container}>
            <Image source ={{uri: data.image}} style={styles.image}/>
            <View style={styles.body_container}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.desc}>{data.description}</Text>
            <Text style={styles.price}>{data.price}</Text>
            </View>
        </View>
    );
};


export default Detail;