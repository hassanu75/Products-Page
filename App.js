import React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import { IMAGE } from './assets/image/images';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'Amos Chair',
      discription: 'A smart chair that is comfortable for working',
      price: '$680',
      image: IMAGE.chair,
      cartImage: IMAGE.cart
    },
    {
      id: 2,
      name: 'Sofa',
      discription: 'A sofa that is comfortable for sitting for long hours',
      price: '$950',
      image: IMAGE.sofa,
      cartImage: IMAGE.cart
    },
    {
      id: 3,
      name: "Sofa",
      discription: 'A sofa that is comfortable for sitting for long hours',
      price: '$450',
      image: IMAGE.sofa,
      cartImage: IMAGE.cart
    },
    {
      id: 4,
      name: "Chair",
      discription: 'A smart chair that is comfortable for working',
      price: '$980',
      image: IMAGE.chair,
      cartImage: IMAGE.cart
    },
    {
      id: 5,
      name: "Sofa",
      discription: 'A smart chair that is comfortable for working',
      price: '$240',
      image: IMAGE.sofa,
      cartImage: IMAGE.cart
    },
    {
      id: 6,
      name: "Chair",
      discription: 'A smart chair that is comfortable for working',
      price: '$640',
      image: IMAGE.chair,
      cartImage: IMAGE.cart
    },
    {
      id: 7,
      name: "Sofa",
      discription: 'A smart chair that is comfortable for working',
      price: '$870',
      image: IMAGE.sofa,
      cartImage: IMAGE.cart
    },
    {
      id: 8,
      name: "Chair",
      discription: 'A smart chair that is comfortable for working',
      price: '$290',
      image: IMAGE.chair,
      cartImage: IMAGE.cart
    },
  ]
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to Funiture House</Text>
      </View>

      <FlatList
        data={users}
        renderItem={({ item }) => <View style={styles.product}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.titleText}>{item.name}</Text>
          <Text style={styles.discriptionText}>{item.discription}</Text>
          <View style={styles.priceCart}>
            <Text style={styles.price}>{item.price}</Text>
            <Image source={item.cartImage} style={styles.cartImg} />
          </View>
        </View>}
        keyExtractor={item => item.id}
        //horizontal
        //inverted
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
      <View style={styles.footer}>
        <View>
          <Image source={IMAGE.cart} style={styles.footerTabImg} />
        </View>
        <View>
          <Image source={IMAGE.cart} style={styles.footerTabImg} />
        </View>
        <View>
          <Image source={IMAGE.cart} style={styles.footerTabImg} />
        </View>
        <View>
          <Image source={IMAGE.cart} style={styles.footerTabImg} />
        </View>
      </View>

    </View >




    // <View style={styles.container}>
    //   <View style={styles.container1}>
    //     <View style={styles.product}>
    //       <Image source={IMAGE.chair}
    //         style={styles.image} />
    //       <Text style={styles.titleText}>Amos Chair</Text>
    //       <Text style={styles.discriptionText}>A smart chair that is comfortable for working</Text>
    //       <View style={styles.priceCart}>
    //         <Text style={styles.price}>$680</Text>
    //         <Image source={IMAGE.cart}
    //           style={styles.cartImg} />
    //       </View>
    //     </View>
    //     <View style={styles.product}>
    //       <Image source={IMAGE.sofa}
    //         style={styles.image} />
    //       <Text style={styles.titleText}>Sofa</Text>
    //       <Text style={styles.discriptionText}>A sofa that is comfortable for sitting for long hours</Text>
    //       <View style={styles.priceCart}>
    //         <Text style={styles.price}>$880</Text>
    //         <Image source={IMAGE.cart}
    //           style={styles.cartImg} />
    //       </View>
    //     </View>
    //   </View>
    //   <View style={styles.container1}>
    //     <View style={styles.product}>
    //       <Image source={IMAGE.sofa}
    //         style={styles.image} />
    //       <Text style={styles.titleText}>Sofa</Text>
    //       <Text style={styles.discriptionText}>A sofa that is comfortable for sitting for long hours</Text>
    //       <View style={styles.priceCart}>
    //         <Text style={styles.price}>$880</Text>
    //         <Image source={IMAGE.cart}
    //           style={styles.cartImg} />
    //       </View>
    //     </View>
    //     <View style={styles.product}>
    //       <Image source={IMAGE.chair}
    //         style={styles.image} />
    //       <Text style={styles.titleText}>Amos Chair</Text>
    //       <Text style={styles.discriptionText}>A smart chair that is comfortable for working</Text>
    //       <View style={styles.priceCart}>
    //         <Text style={styles.price}>$680</Text>
    //         <Image source={IMAGE.cart}
    //           style={styles.cartImg} />
    //       </View>
    //     </View>
    //   </View>

    // </View >

  )
}

// const styles = StyleSheet.create({
//   textStyle: {
//     fontSize: 30,
//     padding: 30,
//     color: 'white',
//     backgroundColor: 'grey',
//     margin: 20
//   }
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "royalblue",
    paddingHorizontal: 18,
    paddingBottom: 10
  },
  header: {
    paddingBottom: 20,
    paddingHorizontal: 15,
    marginTop: 30
  },
  headerText: {
    fontSize: 25,
    color: 'white'
  },
  product: {
    width: 180,
    height: 250,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 15,
    margin: 4
  },
  image: {
    width: 100,
    height: 145,
    alignSelf: 'center'
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,

  },
  discriptionText: {
    fontSize: 10,
  },
  priceCart: {
    top: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    top: 1.5
  },
  cartImg: {
    width: 30,
    height: 30,
  },
  footer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  footerTabImg: {
    width: 50,
    height: 50
  },
})

export default App;