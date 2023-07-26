
import { SafeAreaView, Text, FlatList, ActivityIndicator } from "react-native";
import Config from "../../config";
import ProductCard from "../../components/ProductCard";
import useFetch from "../../Hooks/useFetch";

const Products = ({navigation}) => {
 const {error, loading, data} = useFetch(Config.API_URL);

    const handleProductSelect = id => {
        navigation.navigate('DetailPage', {id})
    };

    const renderProduct= ({item}) => (
    <ProductCard product={item}onSelect={() =>handleProductSelect(item.id)}/> 
    );
    
    if(loading){
        return <ActivityIndicator size="large"/>
    }

    if(error){
        return <Text>Bir Hata oluştu</Text>
    }
    return(
        <SafeAreaView>
            <FlatList data={data} renderItem={renderProduct}/>
        </SafeAreaView>
    );
};


export default Products;