import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import {
  DonationInformationItem,
  HeaderStatisticsProfile,
  ScreenContainer,
} from 'src/components';
import AuthContext from 'src/contexts/auth';
import { getDonations } from 'src/services/user';

function ProfileStatisticsScreen() {
  const { user } = useContext(AuthContext);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    getDonations().then((response) => {
      setDonations(response);
    });
  });

  return donations.length === 0 ? (
    <Text>Carregando...</Text>
  ) : (
    <ScreenContainer>
      <View className="flex-1 gap-8 pt-4">
        <View>
          <HeaderStatisticsProfile
            name={user.name}
            donationsQty={user.donations}
            followingQty={user.following}
            image={user.profileImage}
          />
        </View>

        <Text className="text-center font-_medium text-xl text-text_primary">
          Minhas doações
        </Text>

        <FlatList
          data={donations}
          renderItem={({ item }) => (
            <DonationInformationItem
              title={item.title}
              subtitle={item.subtitle}
              image="https://placehold.co/600x400/png"
            />
          )}
        />
      </View>
    </ScreenContainer>
  );
}

export default ProfileStatisticsScreen;