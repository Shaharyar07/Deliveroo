import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import client from "../sanity";

const FeaturedRow = ({ title, description, id }) => {
  const [restaurants, setRestaurants] = React.useState([]);
  React.useEffect(() => {
    client
      .fetch(
        `*[_type == "featured" && _id == $id] {
      ...,
      restaurants[]-> {
        ...,
        dishes[]->,
        type->{
          name
        }
      }
    }[0]
    `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, []);
  

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
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            title={restaurant.name}
            imgUrl={restaurant.image}
            rating={restaurant.rating}
            genre={restaurant.type.name}
            short_description={restaurant.short_description}
            address={restaurant.address}
            log={restaurant.log}
            lat={restaurant.lat}
          />
        ))}
    
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
