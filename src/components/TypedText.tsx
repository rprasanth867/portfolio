"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";

export default function TypedText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalInfo.roles[index];
    const isRoleComplete = text === currentRole;
    const delay = isDeleting ? 50 : isRoleComplete ? 1500 : 100;

    const timeout = window.setTimeout(() => {
      if (isDeleting) {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setIsDeleting(false);
          setIndex((currentIndex) => (currentIndex + 1) % personalInfo.roles.length);
        }
      } else if (isRoleComplete) {
        setIsDeleting(true);
      } else {
        setText(currentRole.slice(0, text.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return <span className="typed grad">{text}</span>;
}
