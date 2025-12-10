"use client";

import { useState, useEffect } from "react";

export function UseIntersectionObserver<T extends HTMLElement>(
  ref: React.RefObject<T>,
  options: IntersectionObserverInit = {}
) {
  const [IsVisible, SetIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        SetIsVisible(true);
        observer.unobserve(element); // osserva una volta sola
      }
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, options]);

  return IsVisible;
}
