import { StyleSheet, Text,Image } from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({item}) => {
  return (
    <Card 
    >
        <Text style={styles.textCategory}>{item.title}</Text>
        <Image 
        resizeMode= 'cover'
        style= {styles.image}
        source={{uri: item.images[0]}}
        />
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
  // additionalStylesCard: {
  //   flexDirection: 'row',
  //   height: 120,
  //   justifyContent: 'space-between'
  // }
})

// additionalStyle={styles.additionalStylesCard}