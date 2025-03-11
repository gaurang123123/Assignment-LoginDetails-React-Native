import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {Button} from 'react-native-paper';
import DisplayField from '../Components/DisplayField';

const API_URL = 'https://random-data-api.com/api/users/random_user?size=80';

const LoginDetails = () => {
  const [users, setUsers] = useState([]); // Store all 80 users
  const [currentUserIndex, setCurrentUserIndex] = useState(0); // Track current user index
  const [loading, setLoading] = useState(true);

  // Fetch 80 users on mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setUsers(data); // Store all users
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Show loader while fetching users
  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  const profile = users[currentUserIndex]; // Get current user

  if (!profile) return null; // Prevent errors if profile is undefined

  const {id, uid, first_name, last_name, password, username, email, avatar} =
    profile;

  // Handle Next Button
  const handleNext = () => {
    if (currentUserIndex < users.length - 1) {
      setCurrentUserIndex(currentUserIndex + 1);
    }
  };

  // Handle Previous Button
  const handlePrevious = () => {
    if (currentUserIndex > 0) {
      setCurrentUserIndex(currentUserIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image source={{uri: avatar}} style={styles.profileImage} />
      <Text style={styles.profileName}>{username}</Text>

      {/* User Details */}
      <DisplayField upperLabel="ID" labelValue={id} />
      <DisplayField upperLabel="UID" labelValue={uid} />
      <DisplayField upperLabel="Password" labelValue={password} />
      <DisplayField upperLabel="First Name" labelValue={first_name} />
      <DisplayField upperLabel="Last Name" labelValue={last_name} />
      <DisplayField upperLabel="Email" labelValue={email} />

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={handlePrevious}
          style={styles.buttonLeft}
          disabled={currentUserIndex === 0}>
          Previous
        </Button>
        <Button
          mode="contained"
          onPress={handleNext}
          style={styles.button}
          disabled={currentUserIndex === users.length - 1}>
          Next
        </Button>
      </View>
      {/* Count Of User */}
      <Text style={styles.sizeText}>
        User {currentUserIndex + 1} of {users.length}
      </Text>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f1f1f1',
    marginTop: 25,
    // backgroundColor: '#2C3E50',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  profileName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    marginTop: '7%',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: 'black',
    padding: '2%',
    borderRadius: 80,
  },
  buttonLeft: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: 'grey',
    padding: '2%',
    color: 'black',
    borderRadius: 80,
  },
  sizeText: {
    marginTop: 15,
    fontSize: 14,
    color: '#666',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginDetails;
