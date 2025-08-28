import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking, Modal, Animated, Dimensions, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

// Carousel images
const carouselImages = [
  require('@/assets/IMG_9558.jpeg'),
  require('@/assets/IMG_9578.jpeg'),
  require('@/assets/images/icon.png'),
];

export default function Home() {
  const [navVisible, setNavVisible] = useState(false);
  const [slideAnim] = useState(new Animated.Value(-300)); // initial off-screen
  const [carouselIndex, setCarouselIndex] = useState(0);
  const router = useRouter();
  const width = Dimensions.get('window').width;

  // Carousel auto-advance (optional)
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Slide nav in/out
  React.useEffect(() => {
    if (navVisible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -300,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [navVisible]);

  return (
    <ScrollView style={styles.container}>
      {/* Collapsible Navigation Pane with slide and overlay close */}
      <Modal visible={navVisible} transparent animationType="none">
        <Pressable style={styles.modalOverlay} onPress={() => setNavVisible(false)}>
          <Animated.View style={[styles.navPane, { left: slideAnim }]}
            onStartShouldSetResponder={() => true}
            onTouchEnd={e => e.stopPropagation()} // Prevent overlay close when clicking inside
          >
            <View style={styles.navPaneHeader}>
              <TouchableOpacity onPress={() => setNavVisible(false)}>
                <Text style={styles.closeText}>×</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gearButton}>
                <Text style={styles.gearText}>⚙️</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => { setNavVisible(false); router.replace('/(tabs)'); }}>
              <Text style={styles.navButtonText}>Launch</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => { setNavVisible(false); router.push('/(tabs)/catering'); }}>
              <Text style={styles.navButtonText}>Catering</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => { setNavVisible(false); router.push('/(tabs)/aboutus'); }}>
              <Text style={styles.navButtonText}>About Us</Text>
            </TouchableOpacity>
          </Animated.View>
        </Pressable>
      </Modal>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.hamburger} onPress={() => setNavVisible(true)}>
          <View style={styles.bar} />
          <View style={styles.bar} />
          <View style={styles.bar} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Classic Twist</Text>
      </View>

      {/* Image Carousel */}
      <View style={styles.carouselContainer}>
        <Image
          source={carouselImages[carouselIndex]}
          style={[styles.carouselImage, { width: width - 32 }]}
          resizeMode="cover"
        />
        <View style={styles.carouselDots}>
          {carouselImages.map((_, idx) => (
            <View key={idx} style={[styles.dot, carouselIndex === idx && styles.activeDot]} />
          ))}
        </View>
      </View>


      {/* Catering Banner Section */}
      <View style={styles.cateringBannerContainer}>
        <Image
          source={require('@/assets/brunch/IMG_1145.jpeg')}
          style={styles.cateringBannerImage}
          resizeMode="cover"
        />
        <View style={styles.cateringBannerOverlay}>
          <Text style={styles.cateringBannerTitle}>WANT CATERING?</Text>
          <Text style={styles.cateringBannerSubtitle}>Tell us what and how many and we'll bring/provide the food</Text>
          <TouchableOpacity style={styles.cateringBannerButton} onPress={() => router.push('/(tabs)/catering')}>
            <Text style={styles.cateringBannerButtonText}>ASK US ABOUT CATERING</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Upcoming Events 
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Events</Text>
        <View style={styles.cateringRow}>
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={styles.cateringImage}
            resizeMode="cover"
          />
          <View style={styles.cateringTextContainer}>
            <Text style={styles.cateringText}>
              At Classic Twist, we specialize in creating unforgettable culinary experiences for your events. From elegant weddings to corporate gatherings, our catering services are tailored to your needs. Let us make your occasion truly special.
            </Text>
          </View>
        </View>
      </View>
      */}


      {/* Delivery Locations 
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery Locations</Text>
        <View style={styles.deliveryRow}>
          <Image
            source={{ uri: 'https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png' }}
            style={styles.mapImage}
            resizeMode="cover"
          />
          <Text style={styles.editMe}>...edit me...</Text>
        </View>
      </View> */}

      {/* Footer with contact info and vector icons */}
      <View style={styles.footerContainer}>
        <View style={styles.contactRow}>
          <Text style={styles.contactText}>
            Contact us at Email:
            <Text style={styles.email} onPress={() => Linking.openURL('mailto:classictwistllc@gmail.com')}> classictwistllc@gmail.com</Text>
          </Text>
          <Text style={styles.contactText}>Phone: 770-648-3886</Text>
        </View>
        <View style={styles.socialRow}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/theclassic_twist/?igsh=YjB2djBoMjBnMTZx')} style={styles.iconButton}>
            <InstagramIcon />
            <Text style={styles.socialRow}>Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://m.facebook.com/aclassic.twist.5/')} style={styles.iconButton}>
            <FacebookIcon />
            <Text style={styles.socialRow}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.tiktok.com/@aclassic_twist?_t=8qTrCMgI7oZ&_r=1')} style={styles.iconButton}>
            <TiktokIcon />
            <Text style={styles.socialRow}>TikTok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

// Expo-compatible vector icons for Instagram, Facebook, TikTok
function InstagramIcon() {
  return (
    <View style={{ width: 32, height: 32, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 28, color: '#E1306C' }}>📸</Text>
    </View>
  );
}
function FacebookIcon() {
  return (
    <View style={{ width: 32, height: 32, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 28, color: '#1877F3' }}>📘</Text>
    </View>
  );
}
function TiktokIcon() {
  return (
    <View style={{ width: 32, height: 32, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 28, color: '#000' }}>🎶</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#111',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    position: 'relative',
  },
  headerText: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  hamburger: {
    position: 'absolute',
    left: 16,
    top: 16,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  bar: {
    width: 28,
    height: 4,
    backgroundColor: '#fff',
    marginVertical: 2,
    borderRadius: 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  navPane: {
    width: 260,
    backgroundColor: '#fff',
    height: '100%',
    paddingTop: 32,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  navPaneHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  closeText: {
    fontSize: 32,
    color: '#222',
    fontWeight: 'bold',
  },
  gearButton: {
    padding: 4,
  },
  gearText: {
    fontSize: 28,
  },
  navButton: {
    backgroundColor: '#e5e7eb',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: 14,
  },
  navButtonText: {
    fontSize: 18,
    color: '#1e293b',
    fontWeight: 'bold',
  },
  carouselContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  carouselImage: {
    height: 500,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: '#eee',
  },
  carouselDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#cbd5e1',
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#1d4ed8',
  },
  section: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 12,
  },
  cateringBannerContainer: {
    width: '100%',
    aspectRatio: 2.5,
    marginTop: 32,
    marginBottom: 24,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cateringBannerImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    borderRadius: 0,
  },
  cateringBannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.35)',
    paddingHorizontal: 16,
  },
  cateringBannerTitle: {
    color: '#fff',
    fontSize: 38,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
    marginBottom: 12,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  cateringBannerSubtitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 18,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  cateringBannerButton: {
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 28,
    paddingVertical: 12,
    marginTop: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  cateringBannerButtonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1,
  },
  deliveryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mapImage: {
    width: 160,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#eee',
    marginRight: 12,
  },
  editMe: {
    color: '#888',
    fontStyle: 'italic',
  },
  footerContainer: {
    marginTop: 40,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    flexWrap: 'wrap',
    gap: 16,
  },
  contactText: {
    color: '#000000ff',
    fontSize: 15,
    marginHorizontal: 8,
    textAlign: 'center',
  },
  email: {
    color: '#2563eb',
    textDecorationLine: 'underline',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
  iconButton: {
    marginHorizontal: 12,
  },
});
