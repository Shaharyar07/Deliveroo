import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView
      style={{ marginVertical: 40, backgroundColor: "white", paddingTop: 10 }}
    >
      {/* Header */}
      <View className='relative flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={{
            uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450",
          }}
          className='w-7 h-7 bg-gray-300 p-5 rounded-full'
        />
        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-xl'>
            Current location
            <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>

        <UserIcon size={35} color='#00CCBB' />
      </View>
      {/* Search */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
          <SearchIcon color='gray' size={20} />
          <TextInput
            placeholder='Restaurants and cuisines'
            keyboardType='default'
          />
        </View>
        <AdjustmentsIcon color='#00CCBB' />
      </View>

      <ScrollView>
        {/* Categories */}
        <Categories />

        {/* Featured */}
        <FeaturedRow
          id='1'
          title='Featured'
          description='Paid placements from our partners'
        />
        <FeaturedRow
          id='2'
          title='Tasty Discounts'
          description="Everyone's favorite food is on sale"
        />
        <FeaturedRow
          id='3'
          title='Offers near you'
          description='Find the best deals near you'
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
