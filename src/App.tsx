import { lazy, Suspense, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

// GSAP plugins register karo
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  // GSAP ScrollSmoother initialize karo
  useEffect(() => {
    // Thoda delay do taaki saare components load ho jayein
    const timer = setTimeout(() => {
      try {
        const smoother = ScrollSmoother.create({
          smooth: 1,
          effects: true,
          normalizeScroll: true
        });

        console.log("ScrollSmoother initialized successfully!");
      } catch (error) {
        console.error("ScrollSmoother error:", error);
      }
    }, 1000);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      // Agar smoother variable access ho toh kill karo
      if (window.smoother) {
        window.smoother.kill();
      }
    };
  }, []);

  return (
    <>
      <LoadingProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <MainContainer>
            <Suspense fallback={<div>Loading Character...</div>}>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
