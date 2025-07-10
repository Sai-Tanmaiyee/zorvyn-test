import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomePageDark } from "./screens/HomePageDark";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HomePageDark />
  </StrictMode>,
);
