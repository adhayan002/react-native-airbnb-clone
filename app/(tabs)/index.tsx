import { View, Text } from 'react-native'
import React, { useState,useMemo} from 'react'
import { Link,Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'
import listingsdata from '@/assets/data/airbnb-listings.json'
import listingsdatageo from '@/assets/data/airbnb-listings.geo.json'
import ListingsMap from '@/components/ListingsMap'
import ListingsBottomSheet from '@/components/ListingsBottomSheet'

const index = () => {
  const [category,setCategory]=useState('Tiny Homes')
  const items=useMemo(()=>listingsdata as any,[])
  const onDataChanged=(category:string)=>{
    console.log("CHANGED:",category)
    setCategory(category)
  }
  return (
    <View style={{flex:1}}>
       <Stack.Screen options={{header:()=>(<ExploreHeader onCategoryChanged={onDataChanged}/>)}}/>
       {/*<Listings listings={items} category={category}/>*/}
       <ListingsMap listings={listingsdatageo}/>
       <ListingsBottomSheet listings={items} category={category}/>
    </View>
    
  )
}

export default index