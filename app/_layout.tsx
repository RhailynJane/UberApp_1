import { Tabs } from 'expo-router';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#111',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#888',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }: { color: string }) => (
            <Image source={require("../assets/images/home-icon.png")} style={[styles.navIcon, { tintColor: color }]} />
          ),
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: 'Services',
          tabBarIcon: ({ color }: { color: string }) => (
            <Image source={require("../assets/images/services-icon.png")} style={[styles.navIcon, { tintColor: color }]} />
          ),
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: 'Order',
          tabBarIcon: ({ color }: { color: string }) => (
            <Image source={require("../assets/images/activity-icon.png")} style={[styles.navIcon, { tintColor: color }]} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }: { color: string }) => (
            <Image source={require("../assets/images/account-icon.png")} style={[styles.navIcon, { tintColor: color }]} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  navIcon: {
    width: 24,
    height: 24,
  },
});