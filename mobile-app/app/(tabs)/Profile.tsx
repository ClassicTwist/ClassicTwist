import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const navigation = useNavigation();

    const handleThemeChange = () => {
        // Implement theme change logic here
        alert('Theme change coming soon!');
    };

    const handleAccountProfile = () => {
        // Navigate to Account Profile screen
        navigation.navigate('AccountProfile' as never);
    };

    const handleRewards = () => {
        // Navigate to Rewards screen
        navigation.navigate('Rewards' as never);
    };

    const handleOrderHistory = () => {
        // Navigate to Order History screen
        navigation.navigate('OrderHistory' as never);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Profile</Text>
            <TouchableOpacity style={styles.item} onPress={handleThemeChange}>
                <Text style={styles.itemText}>Change Theme</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={handleAccountProfile}>
                <Text style={styles.itemText}>Account Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={handleRewards}>
                <Text style={styles.itemText}>Rewards</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={handleOrderHistory}>
                <Text style={styles.itemText}>Order History</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#fff',
        flexGrow: 1,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 32,
        textAlign: 'center',
    },
    item: {
        padding: 18,
        borderRadius: 8,
        backgroundColor: '#f2f2f2',
        marginBottom: 16,
    },
    itemText: {
        fontSize: 18,
    },
});

export default Profile;