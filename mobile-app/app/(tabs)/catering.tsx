import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, ScrollView, Linking, TextInput, Platform } from 'react-native';
import { useRouter } from 'expo-router';

export default function CateringScreen() {
  const [navVisible, setNavVisible] = useState(false);
  const [method, setMethod] = useState('Full Service');
  const [eventType, setEventType] = useState('Wedding Catering');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    headcount: '',
    city: '',
    state: '',
    address: '',
    details: '',
  });
  const router = useRouter();
  const today = new Date().toISOString().slice(0, 10);

  const handleFormChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    const subject = `${eventType} Inquiry – ${form.date || today}`;
    const body = `Dear Classic Twist,%0D%0A%0D%0AMy name is ${form.firstName} ${form.lastName}, and I’m reaching out to inquire about catering services for a ${eventType.toLowerCase()} event scheduled for ${form.date || today}. Below are the event details:%0D%0A%0D%0AName: ${form.firstName} ${form.lastName}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0AEvent Type: ${eventType}%0D%0AEstimated Headcount: ${form.headcount}%0D%0AEvent Location (City): ${form.city}%0D%0AEvent Location (State): ${form.state}%0D%0ADelivery Address: ${form.address}%0D%0AEvent Details & Requested Menu Items: ${form.details}%0D%0A%0D%0AI’d appreciate it if you could share your availability, sample menus, pricing, and any next steps to move forward. Looking forward to hearing from you soon.%0D%0A%0D%0ABest regards,%0D%0A${form.firstName} ${form.lastName}`;
    const mailto = `mailto:classictwistllc@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    Linking.openURL(mailto);
  };

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
        <Text style={styles.headerText}>Classic Twist</Text>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>INQUIRE BELOW FOR</Text>
        <Text style={styles.bannerTextBig}>BAR-B-Q CATERING</Text>
        <Text style={styles.bannerSubText}>Planning an event? We'd love to provide a quote!</Text>
        <Text style={styles.bannerSubTextSmall}>Fields marked with an * are required</Text>
      </View>

      {/* Methods */}
      <View style={styles.methodRow}>
        {['Full Service', 'Delivery & Setup', 'Pickup'].map((m) => (
          <TouchableOpacity
            key={m}
            style={[styles.methodButton, method === m && styles.methodButtonActive]}
            onPress={() => setMethod(m)}
          >
            <Text style={[styles.methodButtonText, method === m && styles.methodButtonTextActive]}>{m}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Event Sections */}
      <View style={styles.eventSectionRow}>
        <EventCard
          image={require('@/assets/wed/IMG_1170.jpeg')}
          title="Weddings"
          text="Elegant catering for your special day."
        />
        <EventCard
          image={require('@/assets/grad/IMG_4958.jpeg')}
          title="Graduations"
          text="Celebrate your achievement with great food."
        />
        <EventCard
          image={require('@/assets/brunch/IMG_1159.jpeg')}
          title="Birthdays & More"
          text="Perfect for birthdays, showers, and other events."
        />
      </View>

      {/* Inquiry Form */}
      <View style={styles.formSection}>
        <Text style={styles.formLabel}>First Name *</Text>
        <TextInput style={styles.input} value={form.firstName} onChangeText={v => handleFormChange('firstName', v)} />
        <Text style={styles.formLabel}>Last Name *</Text>
        <TextInput style={styles.input} value={form.lastName} onChangeText={v => handleFormChange('lastName', v)} />
        <Text style={styles.formLabel}>Email *</Text>
        <TextInput style={styles.input} value={form.email} onChangeText={v => handleFormChange('email', v)} keyboardType="email-address" autoCapitalize="none" />
        <Text style={styles.formLabel}>Phone *</Text>
        <TextInput style={styles.input} value={form.phone} onChangeText={v => handleFormChange('phone', v)} keyboardType="phone-pad" />
        <Text style={styles.formLabel}>Date of Event *</Text>
        <TextInput style={styles.input} value={form.date} onChangeText={v => handleFormChange('date', v)} placeholder="YYYY-MM-DD" />
        <Text style={styles.formLabel}>Estimated Headcount *</Text>
        <TextInput style={styles.input} value={form.headcount} onChangeText={v => handleFormChange('headcount', v)} keyboardType="numeric" />
        <Text style={styles.formLabel}>Event Type *</Text>
        <TextInput style={styles.input} value={eventType} onChangeText={setEventType} />
        <Text style={styles.formLabel}>Event Location (City) *</Text>
        <TextInput style={styles.input} value={form.city} onChangeText={v => handleFormChange('city', v)} />
        <Text style={styles.formLabel}>Event Location (State) *</Text>
        <TextInput style={styles.input} value={form.state} onChangeText={v => handleFormChange('state', v)} />
        <Text style={styles.formLabel}>Location Delivery Address *</Text>
        <TextInput style={styles.input} value={form.address} onChangeText={v => handleFormChange('address', v)} />
        <Text style={styles.formLabel}>Event Details & Requested Menu Items *</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          value={form.details}
          onChangeText={v => handleFormChange('details', v)}
          multiline
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>

      {/* Wedding */}
      <View style={styles.ceoSection}>
        <Text style={styles.ceoSummary}>
          Our CEO, Jane Doe, is passionate about delivering unforgettable culinary experiences. With years of expertise and a love for creative cuisine, she leads Classic Twist to new heights in catering excellence.
        </Text>
      </View>

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

// EventCard component
function EventCard({ image, title, text }) {
  return (
    <View style={styles.eventCard}>
      <Image source={image} style={styles.eventImage} resizeMode="cover" />
      <Text style={styles.eventTitle}>{title}</Text>
      <Text style={styles.eventText}>{text}</Text>
    </View>
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
