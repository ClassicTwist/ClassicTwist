import AppHeader from "@/components/AppHeader";
import Footer from "@/components/Footer";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

const ceoImage = require("@/assets/IMG_9582.jpeg"); // Replace with actual CEO image path

export default function AboutUsScreen() {
  const [navVisible, setNavVisible] = useState(false);
  const router = useRouter();
  const { width } = useWindowDimensions();

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
              <Image
                source={require("@/assets/cropclassic.png")}
                style={styles.navLogo}
                resizeMode="contain"
              />
              <TouchableOpacity style={styles.gearButton}>
                <Text style={styles.gearText}>⚙️</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => {
                setNavVisible(false);
                router.replace("/(tabs)");
              }}
            >
              <Text style={styles.navButtonText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => {
                setNavVisible(false);
                router.push("/(tabs)/catering");
              }}
            >
              <Text style={styles.navButtonText}>Catering</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => {
                setNavVisible(false);
                router.replace("/(tabs)/aboutus");
              }}
            >
              <Text style={styles.navButtonText}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.navButton}
              onPress={() => {
                setNavVisible(false);
              }}
            >
              <Text style={styles.navButtonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <AppHeader
        title="About Us"
        onMenuPress={() => setNavVisible(true)}
        onLogoPress={() => router.replace("/(tabs)")}
      />

      {/* Hero */}
      <View style={styles.hero}>
        <Image
          source={require("@/assets/brunch/IMG_1145.jpeg")}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>A Classic Twist</Text>
          <Text style={styles.heroSubtitle}>
            A modern take on Southern hospitality — built around delicious food,
            good vibes, and community connection.
          </Text>
        </View>
      </View>

      {/* Our Story */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Story</Text>
        <Text style={styles.paragraph}>
          What started in 2020 as a passion project has grown into an experience
          brand known for elevated socials, curated menus, and unforgettable
          moments. At the heart of every gathering is a belief that food brings
          people closer — and that every event should feel like a celebration.
        </Text>
        <Text style={styles.paragraph}>
          From pop‑up dinners and catering events to mixer nights and future
          restaurant plans, we’re building a space where community, comfort, and
          creativity meet.
        </Text>
      </View>

      {/* Values */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Values</Text>
        <View style={styles.bulletRow}>
          <View style={styles.bulletDot} />
          <Text style={styles.bulletText}>Warm Southern hospitality</Text>
        </View>
        <View style={styles.bulletRow}>
          <View style={styles.bulletDot} />
          <Text style={styles.bulletText}>Thoughtful menus made with care</Text>
        </View>
        <View style={styles.bulletRow}>
          <View style={styles.bulletDot} />
          <Text style={styles.bulletText}>
            Curated experiences that bring people together
          </Text>
        </View>
      </View>

      {/* Meet the Founder */}
      <View style={styles.founderSection}>
        <Image
          source={ceoImage}
          style={[styles.founderImage, { width: width - 64 }]}
          resizeMode="cover"
        />
        <Text style={styles.sectionTitle}>Meet Keisha</Text>
        <Text style={styles.paragraph}>
          Keisha Rolland is the founder and creative force behind A Classic
          Twist. She blends Southern comfort with modern flavor and brings a
          thoughtful, detail-driven approach to every event.
        </Text>
        <Text style={styles.paragraph}>
          Her mission is simple: create experiences where people feel seen,
          welcomed, and inspired — whether it’s a catered dinner, a mixer night,
          or the future restaurant she’s dreaming of.
        </Text>
      </View>

      {/* Footer */}
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#111",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    position: "relative",
  },
  headerText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  hamburger: {
    position: "absolute",
    left: 16,
    top: 16,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  bar: {
    width: 28,
    height: 4,
    backgroundColor: "#fff",
    marginVertical: 2,
    borderRadius: 2,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  navPane: {
    width: 260,
    backgroundColor: "#fff",
    height: "100%",
    paddingTop: 32,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  navPaneHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  navLogo: {
    width: 42,
    height: 42,
    borderRadius: 10,
  },
  closeText: {
    fontSize: 32,
    color: "#222",
    fontWeight: "bold",
  },
  gearButton: {
    padding: 4,
  },
  gearText: {
    fontSize: 28,
  },
  navButton: {
    backgroundColor: "#e5e7eb",
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: 14,
  },
  navButtonText: {
    fontSize: 18,
    color: "#1e293b",
    fontWeight: "bold",
  },
  hero: {
    height: 220,
    width: "100%",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: "hidden",
    marginBottom: 24,
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  heroTitle: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  heroSubtitle: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 22,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
    marginBottom: 12,
  },
  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  bulletDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#1e293b",
    marginTop: 6,
    marginRight: 10,
  },
  bulletText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
  },
  founderSection: {
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  founderImage: {
    height: 220,
    borderRadius: 16,
    marginBottom: 16,
    backgroundColor: "#eee",
  },
  footerContainer: {
    marginTop: 40,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    flexWrap: "wrap",
    gap: 16,
  },
  contactText: {
    color: "#000000ff",
    fontSize: 15,
    marginHorizontal: 8,
    textAlign: "center",
  },
  email: {
    color: "#2563eb",
    textDecorationLine: "underline",
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
  },
  iconButton: {
    marginHorizontal: 12,
  },
});
