import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import "../../global.css";
import { images } from "../../constants";
import FormField from "../../components/FormField";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <View className="items-center justify-center flex-1 bg-white">
      {/* Logo */}
      <View className="items-center justify-center mb-6">
        <Image source={images.logoProkerKu} resizeMethod="contain" className="h-[165px] w-[350px] translate-x-20" />
      </View>

      <FormField title="Email" value={form.email} handleChangeText={(e) => setForm({ ...form, email: e })} otherStyles="mt-5 mb-2" keyboardType="email-address" />

      <FormField title="Password" value={form.password} handleChangeText={(e) => setForm({ ...form, password: e })} otherStyles="mb-5" />

      {/* Login Button */}
      <TouchableOpacity className="items-center w-4/5 p-4 mb-6 bg-green-400 rounded-lg" onPress={() => router.push("/home")}>
        <Text className="font-bold text-white">Login</Text>
      </TouchableOpacity>

      {/* Divider */}
      <Text className="my-4 text-black">-OR-</Text>

    </View>
  );
};

export default SignIn;

export const config = {
  headerShown: false,
};
