// Define the base URL
const BASE_URL = "https://tonmoyrana.github.io/Video-Streaming-Website/";

// Dynamically add the <base> tag to the <head> section
const baseTag = document.createElement("base");
baseTag.href = BASE_URL;
document.head.prepend(baseTag);