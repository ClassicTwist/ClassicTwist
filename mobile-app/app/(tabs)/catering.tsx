import AppHeader from "@/components/AppHeader";
import Footer from "@/components/Footer";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
    Image,
    Linking,
    Modal,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function CateringScreen() {
  const [navVisible, setNavVisible] = useState(false);
  const [eventType, setEventType] = useState("Wedding Catering");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    headcount: "",
    city: "",
    state: "",
    address: "",
    details: "",
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

  const scrollRef = useRef<ScrollView | null>(null);
  const [formY, setFormY] = useState(0);

  const scrollToForm = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({ y: formY, animated: true });
  };

  return (
    <ScrollView ref={scrollRef} style={styles.container}>
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
                router.push("/(tabs)/aboutus");
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
        title="Catering"
        onMenuPress={() => setNavVisible(true)}
        onLogoPress={() => router.replace("/(tabs)")}
      />

      {/* Hero */}
      <View style={styles.hero}>
        <View style={styles.heroGrid}>
          <Image
            source={require("@/assets/brunch/IMG_1145.jpeg")}
            style={styles.heroImg}
            resizeMode="cover"
          />
          <Image
            source={require("@/assets/wed/IMG_1170.jpeg")}
            style={styles.heroImg}
            resizeMode="cover"
          />
          <Image
            source={require("@/assets/grad/IMG_4958.jpeg")}
            style={styles.heroImg}
            resizeMode="cover"
          />
        </View>
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>Catering Made Easy</Text>
          <Text style={styles.heroSubtitle}>
            From family gatherings to full-service events — we bring the
            flavors, equipment, and hospitality.
          </Text>
          <TouchableOpacity style={styles.heroCta} onPress={scrollToForm}>
            <Text style={styles.heroCtaText}>Get a Quote</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* What We Offer */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Catering Packages</Text>
        <View style={styles.packageRow}>
          {[
            {
              title: "Full Service",
              description:
                "Staffed service with setup, breakdown, and plated plates.",
              icon: "🍽️",
            },
            {
              title: "Delivery + Setup",
              description:
                "We deliver, set up, and you enjoy — no cleanup required.",
              icon: "🚚",
            },
            {
              title: "Pickup",
              description: "Grab your order on the way and serve it your way.",
              icon: "🛍️",
            },
          ].map((pkg) => (
            <View key={pkg.title} style={styles.packageCard}>
              <Text style={styles.packageIcon}>{pkg.icon}</Text>
              <Text style={styles.packageTitle}>{pkg.title}</Text>
              <Text style={styles.packageText}>{pkg.description}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* How It Works */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>How It Works</Text>
        <View style={styles.stepsRow}>
          {[
            {
              step: 1,
              title: "Tell Us Your Event",
              detail: "Date, headcount, location & style.",
            },
            {
              step: 2,
              title: "Choose a Package",
              detail: "Select full service, delivery, or pickup.",
            },
            {
              step: 3,
              title: "Enjoy the Event",
              detail: "We handle the food so you can focus on the guests.",
            },
          ].map((item) => (
            <View key={item.step} style={styles.stepCard}>
              <View style={styles.stepCircle}>
                <Text style={styles.stepNumber}>{item.step}</Text>
              </View>
              <Text style={styles.stepTitle}>{item.title}</Text>
              <Text style={styles.stepText}>{item.detail}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Inquiry Form */}
      <View
        style={styles.section}
        onLayout={(event) => setFormY(event.nativeEvent.layout.y)}
      >
        <Text style={styles.sectionTitle}>Get A Quote</Text>
        <Text style={styles.sectionSubtitle}>
          Send us a few quick details and we’ll follow up with a custom
          proposal.
        </Text>
        <View style={styles.formSection}>
          <View style={styles.twoColumnRow}>
            <View style={styles.column}>
              <Text style={styles.formLabel}>First Name *</Text>
              <TextInput
                style={styles.input}
                value={form.firstName}
                onChangeText={(v) => handleFormChange("firstName", v)}
              />
            </View>
            <View style={styles.column}>
              <Text style={styles.formLabel}>Last Name *</Text>
              <TextInput
                style={styles.input}
                value={form.lastName}
                onChangeText={(v) => handleFormChange("lastName", v)}
              />
            </View>
          </View>

          <Text style={styles.formLabel}>Email *</Text>
          <TextInput
            style={styles.input}
            value={form.email}
            onChangeText={(v) => handleFormChange("email", v)}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View style={styles.twoColumnRow}>
            <View style={styles.column}>
              <Text style={styles.formLabel}>Phone *</Text>
              <TextInput
                style={styles.input}
                value={form.phone}
                onChangeText={(v) => handleFormChange("phone", v)}
                keyboardType="phone-pad"
              />
            </View>
            <View style={styles.column}>
              <Text style={styles.formLabel}>Date *</Text>
              <TextInput
                style={styles.input}
                value={form.date}
                onChangeText={(v) => handleFormChange("date", v)}
                placeholder="YYYY-MM-DD"
              />
            </View>
          </View>

          <Text style={styles.formLabel}>Estimated Headcount *</Text>
          <TextInput
            style={styles.input}
            value={form.headcount}
            onChangeText={(v) => handleFormChange("headcount", v)}
            keyboardType="numeric"
          />

          <Text style={styles.formLabel}>Event Type *</Text>
          <TextInput
            style={styles.input}
            value={eventType}
            onChangeText={setEventType}
          />

          <Text style={styles.formLabel}>Location (City, State) *</Text>
          <View style={styles.twoColumnRow}>
            <View style={styles.column}>
              <TextInput
                style={styles.input}
                value={form.city}
                onChangeText={(v) => handleFormChange("city", v)}
                placeholder="City"
              />
            </View>
            <View style={styles.column}>
              <TextInput
                style={styles.input}
                value={form.state}
                onChangeText={(v) => handleFormChange("state", v)}
                placeholder="State"
              />
            </View>
          </View>

          <Text style={styles.formLabel}>Delivery Address *</Text>
          <TextInput
            style={styles.input}
            value={form.address}
            onChangeText={(v) => handleFormChange("address", v)}
          />

          <Text style={styles.formLabel}>Event Details & Menu Requests *</Text>
          <TextInput
            style={[styles.input, { height: 100 }]}
            value={form.details}
            onChangeText={(v) => handleFormChange("details", v)}
            multiline
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>SEND REQUEST</Text>
          </TouchableOpacity>
        </View>
      </View>

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
  banner: {
    backgroundColor: "#e11d48",
    paddingVertical: 24,
    alignItems: "center",
    marginBottom: 24,
  },
  bannerText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  ceoSection: {
    alignItems: "center",
    marginBottom: 32,
    paddingHorizontal: 16,
  },
  ceoImage: {
    height: 220,
    borderRadius: 16,
    marginBottom: 16,
    backgroundColor: "#eee",
  },
  ceoSummary: {
    fontSize: 16,
    color: "#222",
    textAlign: "center",
    marginBottom: 8,
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
  formSection: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#f8fafc",
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  formLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: 6,
    marginTop: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === "ios" ? 12 : 10,
    backgroundColor: "#ffffff",
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#111",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  hero: {
    height: 320,
    position: "relative",
    marginBottom: 24,
  },
  heroBg: {
    ...StyleSheet.absoluteFillObject,
  },
  heroGrid: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  heroImg: {
    flex: 1,
    height: "100%",
    marginHorizontal: 6,
    borderRadius: 18,
    opacity: 0.92,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  heroTitle: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 12,
  },
  heroSubtitle: {
    color: "rgba(255,255,255,0.92)",
    fontSize: 17,
    textAlign: "center",
    marginBottom: 18,
    lineHeight: 24,
  },
  heroCta: {
    backgroundColor: "#f59e0b",
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 28,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  heroCtaText: {
    color: "#111",
    fontWeight: "800",
    fontSize: 16,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#111",
    marginBottom: 14,
  },
  sectionSubtitle: {
    fontSize: 15,
    color: "#444",
    marginBottom: 18,
    lineHeight: 22,
  },
  packageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
  },
  packageCard: {
    flex: 1,
    minWidth: 165,
    maxWidth: 220,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  packageIcon: {
    fontSize: 28,
    marginBottom: 10,
  },
  packageTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    color: "#111",
  },
  packageText: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
  },
  stepsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
  },
  stepCard: {
    flex: 1,
    minWidth: 170,
    maxWidth: 210,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  stepCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#f59e0b",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  stepNumber: {
    color: "#111",
    fontWeight: "800",
    fontSize: 16,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
    color: "#111",
  },
  stepText: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
  },
  twoColumnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  column: {
    flex: 1,
  },
});
