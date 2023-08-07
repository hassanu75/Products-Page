import { useDeferredValue } from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CompanyData=()=>{
    return(
      <View style={styless.container3}>
        <Text style={[styless.text3]}>Name : K2X</Text>
        <Text style={[styless.text3]}>Total Emp : 50</Text>
        <Text style={[styless.text3]}>Product : XYZ Product</Text>
      </View>
    )
}
  
const styless = StyleSheet.create({
    container3: {
      backgroundColor: "steelblue",
      paddingHorizontal:'5%',
      paddingVertical:20,
      borderRadius:20,
      marginTop:30
    },
    text3:{
        fontSize: 20
    }
})
  export default CompanyData;