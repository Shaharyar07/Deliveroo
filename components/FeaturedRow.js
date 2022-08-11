import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, id }) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color='#00CCBB' />
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {/* Restaurants card */}
        <RestaurantCard
          id='1'
          title='Restaurant 1'
          imgUrl='https://links.papareact.com/gn7'
          rating='4.5'
          genre='Italian'
          short_description='Lorem ipsum dolor sit amet,'
          dishes={["Dish 1", "Dish 2", "Dish 3"]}
          address='Lorem ipsum dolor'
          log='-33.865'
          lat='33.865'
        />
        <RestaurantCard
          id='1'
          title='Restaurant 1'
          imgUrl='https://links.papareact.com/gn7'
          rating='4.5'
          genre='Italian'
          short_description='Lorem ipsum dolor sit amet,'
          dishes={["Dish 1", "Dish 2", "Dish 3"]}
          address='Lorem ipsum dolor'
          log='-33.865'
          lat='33.865'
        />
        <RestaurantCard
          id='1'
          title='Restaurant 1'
          imgUrl='https://links.papareact.com/gn7'
          rating='4.5'
          genre='Italian'
          short_description='Lorem ipsum dolor sit amet,'
          dishes={["Dish 1", "Dish 2", "Dish 3"]}
          address='Lorem ipsum dolor'
          log='-33.865'
          lat='33.865'
        />
        <RestaurantCard
          id='1'
          title='Restaurant 1'
          imgUrl='https://links.papareact.com/gn7'
          rating='4.5'
          genre='Italian'
          short_description='Lorem ipsum dolor sit amet,'
          dishes={["Dish 1", "Dish 2", "Dish 3"]}
          address='Lorem ipsum dolor'
          log='-33.865'
          lat='33.865'
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
