import React, { FC, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { s, vs } from "react-native-size-matters";
import AntDesign from "@expo/vector-icons/AntDesign";

// Type representing a single image (with optional best flag)
interface MomentImage {
  uri?: string;
  isBest?: boolean;
  [key: string]: any; // allow additional props for flexibility
}

// Type for HomeCard data prop
interface HomeCardData {
  date: string;
  feeling: string;
  location: string;
  summary: string;
  images: MomentImage[]; // All normal moments
  bestMoment: MomentImage; // Special best moment
}

// Component Props
interface HomeCardProps {
  data: HomeCardData;
}

const HomeCard: FC<HomeCardProps> = ({ data }) => {
  const [showAll, setShowAll] = useState(false);

  // Insert the best moment at 3rd position
  const allImages = [...data.images];
  allImages.splice(2, 0, { ...data.bestMoment, isBest: true });

  // Show only first 6 unless expanded
  const visibleImages = showAll ? allImages : allImages.slice(0, 6);

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.date}>{data.date}</Text>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.emoji}>{data.feeling}</Text>
          <Text style={{ fontSize: s(8), textAlign: "center" }}>
            Feeling of the Day
          </Text>
        </View>
        <Entypo name="dots-three-vertical" size={24} color="#575757" />
      </View>

      {/* Location */}
      <View style={styles.locationRow}>
        <Entypo name="location-pin" size={16} color="#E53935" />
        <Text style={styles.location}>{data.location}</Text>
      </View>

      <View style={styles.bottomBorder} />
      <Text style={styles.summary}>{data.summary}</Text>

      {/* Images */}
      <View style={styles.imageGrid}>
        {visibleImages.map((img, index) => (
          <View
            key={index}
            style={[
              styles.imageWrapper,
              // Make best image taller
            ]}
          >
            <Image source={img as ImageSourcePropType} style={styles.image} />
            {img.isBest && (
              <View>
                <Text style={styles.bestMomentText}>
                  Best Moment Of{"\n"}The Day
                </Text>
              </View>
            )}
          </View>
        ))}
      </View>

      {/* Expand/Collapse Buttons */}
      {!showAll && allImages.length > 6 && (
        <TouchableOpacity onPress={() => setShowAll(true)}>
          <Text style={styles.more}>
            {allImages.length - 6} More Moment
            {allImages.length - 6 > 1 ? "s" : ""} ⌄
          </Text>
        </TouchableOpacity>
      )}
      {showAll && (
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => setShowAll(false)}
        >
          <AntDesign name="up" size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    elevation: 5,
    marginTop: s(10),
    borderWidth: s(0.2),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    fontWeight: "bold",
    fontSize: s(14),
  },
  emoji: {
    fontSize: s(22),
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  location: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
  },
  summary: {
    marginVertical: 8,
    fontSize: 14,
    color: "#333",
    fontFamily: "Poppins-Regular",
    textAlign: "center",
  },
  more: {
    textAlign: "center",
    marginTop: 10,
    fontSize: s(12),
    fontFamily: "Poppins-Regular",
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageWrapper: {
    width: "32%",
    height: 90,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  bestMomentText: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    textAlign: "center",
    fontSize: s(10),
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    color: "white",
    paddingVertical: 2,
  },
  bottomBorder: {
    height: vs(0.5),
    borderBottomWidth: s(0.5),
  },
});

export default HomeCard;
