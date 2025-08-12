"use client"

import StoryBook from "./story-book"

interface StorySectionProps {
  language: "vi" | "en"
}

export default function StorySection({ language }: StorySectionProps) {
  return <StoryBook />
}
