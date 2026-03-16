import React from "react";
import {
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/theclassic_twist/?igsh=YjB2djBoMjBnMTZx",
    icon: "📸",
    color: "#E1306C",
  },
  {
    label: "Facebook",
    url: "https://m.facebook.com/aclassic.twist.5/",
    icon: "📘",
    color: "#1877F3",
  },
  {
    label: "TikTok",
    url: "https://www.tiktok.com/@aclassic_twist?_t=8qTrCMgI7oZ&_r=1",
    icon: "🎶",
    color: "#000",
  },
];

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.contactRow}>
        <Text style={styles.contactText}>
          Contact us at Email:
          <Text
            style={styles.email}
            onPress={() => Linking.openURL("mailto:classictwistllc@gmail.com")}
          >
            {" "}
            classictwistllc@gmail.com
          </Text>
        </Text>
        <Text style={styles.contactText}>Phone: 770-648-3886</Text>
      </View>

      <View style={styles.socialRow}>
        {SOCIAL_LINKS.map((link) => (
          <TouchableOpacity
            key={link.label}
            onPress={() => Linking.openURL(link.url)}
            style={styles.socialLink}
            activeOpacity={0.7}
          >
            <Text style={[styles.socialIcon, { color: link.color }]}>
              {link.icon}
            </Text>
            <Text style={styles.socialLabel}>{link.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: "#000",
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
    gap: 10,
  },
  contactText: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    marginHorizontal: 8,
  },
  email: {
    color: "#7ca9ff",
    textDecorationLine: "underline",
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 16,
  },
  socialLink: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 12,
  },
  socialIcon: {
    fontSize: 24,
    marginRight: 8,
  },
  socialLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
  },
});
