import { Slot } from "expo-router";
import { Text, View, TouchableOpacity, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function Layout() {
    const router = useRouter(); // ✅ Add this line inside the component

    const handleTabPress = (tab: string) => {
        if (tab === "Home") {
            router.push("/");
        } else if (tab === "Contact") {
            router.push("/contact");
        } else if (tab === "Enquire") {
            router.push("/enquire");
        }
        };
      

  return (
    <View style={{ flex: 1, backgroundColor: "#0a0a0a" }}>
      {/* Top Navigation Bar */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 14,
          paddingHorizontal: 20,
          backgroundColor: "#1a1a1a",
          borderBottomWidth: 1,
          borderBottomColor: "#333",
          elevation: 5,
        }}
      >
        {/* Left - Logo / Name */}
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#ffffff",
          }}
        >
          Mehul Kumawat
        </Text>

        {/* Right - Menu Items */}
        <View style={{ flexDirection: "row", gap: 24 }}>
          {["Home", "Contact", "Enquire"].map((label) => (
            <Pressable
              key={label}
              onPress={() => handleTabPress(label)}
              style={({ pressed }) => ({
                paddingVertical: 6,
                paddingHorizontal: 10,
                borderRadius: 6,
                backgroundColor: pressed ? "#333" : "transparent",
              })}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#cccccc",
                  fontWeight: "500",
                }}
              >
                {label}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Main Page Content */}
      <Slot />
    </View>
  );
}
