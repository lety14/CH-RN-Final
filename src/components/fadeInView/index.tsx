import React, { useRef, useEffect, ReactNode } from "react";
import { Animated } from "react-native";

type FadeInProps = {
  children?: ReactNode;
  duration?: number;
  delay?: number;
};

export default function FadeIn({ children, duration = 2000, delay = 0 }: FadeInProps) {
  const fadeIn = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: duration,
      delay: delay,
      useNativeDriver: true,
    }).start();
  }, [fadeIn]);

  return (
    <Animated.View
      style={{
        opacity: fadeIn,
      }}>
      {children}
    </Animated.View>
  );
}
