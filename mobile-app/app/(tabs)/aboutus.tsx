import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Dimensions, ScrollView, Linking } from 'react-native';
import { useRouter } from 'expo-router';

const ceoImage = require('@/assets/IMG_9582.jpeg'); // Replace with actual CEO image path

export default function AboutUsScreen() {
  const [navVisible, setNavVisible] = useState(false);
  const router = useRouter();
  const width = Dimensions.get('window').width;

  return (
    <ScrollView style={styles.container}>
      {/* Collapsible Navigation Pane */}
      <Modal visible={navVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.navPane}>
            <View style={styles.navPaneHeader}>
              <TouchableOpacity onPress={() => setNavVisible(false)}>
                <Text style={styles.closeText}>×</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gearButton}>
                <Text style={styles.gearText}>⚙️</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.navButton} onPress={() => { setNavVisible(false); router.replace('/(tabs)'); }}>
              <Text style={styles.navButtonText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => { setNavVisible(false); router.push('/(tabs)/catering'); }}>
              <Text style={styles.navButtonText}>Catering</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Nav Bar */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.hamburger} onPress={() => setNavVisible(true)}>
          <View style={styles.bar} />
          <View style={styles.bar} />
          <View style={styles.bar} />
        </TouchableOpacity>
        <Text style={styles.headerText}>About Us</Text>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>AClassic Crew</Text>
      </View>

      {/* CEO Picture & Summary */}
      <View style={styles.ceoSection}>
        <Image source={ceoImage} style={[styles.ceoImage, { width: width - 64 }]} resizeMode="contain" />
        <Text style={styles.ceoSummary}>
A Classic Twist began in 2020 with a simple but powerful vision: to bring people together through great food, great vibes, and unforgettable experiences. What started as a passion project has grown into a signature event brand in Georgia — known for its mixers, pop‑up shops, catered experiences, and elevated social gatherings.

Founded and led by CEO Keisha Rolland, A Classic Twist was built with a bigger dream in mind:
to evolve into a full Southern‑style restaurant that blends comfort, culture, and community.

Every event — from catered dinners to mixer nights — is a stepping stone toward that future. The brand’s signature style of hospitality, soulful menus, and warm atmosphere reflects the restaurant experience Keisha is working toward.

Meet the Visionary: Keisha Rolland

Keisha Rolland is the creative force behind A Classic Twist. Her passion for food, community, and connection drives every detail of the brand. She curates events that feel intentional, welcoming, and full of flavor — the same qualities she plans to bring into her future restaurant.

Her leadership blends creativity, precision, and heart. Under her direction, A Classic Twist has become a trusted name for adults seeking elevated social experiences with a warm, Southern twist.

What We Do

A Classic Twist hosts and curates:

• Catering experiences inspired by Southern comfort and hospitality
• Mixer events that bring grown folks together in a classy, relaxed atmosphere
• Pop‑up shops & specialty events that showcase food, culture, and community
• Curated dining experiences with appetizers, dinner, dessert, and signature non‑alcoholic beverages
• Live entertainment & DJs that set the perfect mood
• Beautifully themed environments designed for mingling, dancing, and celebrating


Every event is crafted with intention — a preview of the restaurant experience to come.

Our Mission

To create elevated, inclusive, and unforgettable experiences rooted in Southern hospitality, great food, and community connection.

Our Promise

✨ Professionalism
✨ Creativity
✨ Comfort
✨ Class
✨ Community

A Classic Twist isn’t just an event — it’s the beginning of a Southern‑style legacy.
        </Text>
      </View>

      {/* Footer */}
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
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://m.facebook.com/aclassic.twist.5/')} style={styles.iconButton}>
            <FacebookIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.tiktok.com/@aclassic_twist?_t=8qTrCMgI7oZ&_r=1')} style={styles.iconButton}>
            <TiktokIcon />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

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
    fontSize: 32,
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
  banner: {
    backgroundColor: '#e11d48',
    paddingVertical: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  bannerText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  ceoSection: {
    alignItems: 'center',
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  ceoImage: {
    height: 220,
    borderRadius: 16,
    marginBottom: 16,
    backgroundColor: '#eee',
  },
  ceoSummary: {
    fontSize: 16,
    color: '#222',
    textAlign: 'center',
    marginBottom: 8,
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
