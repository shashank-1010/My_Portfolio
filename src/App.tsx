import { lazy, Suspense, useEffect, useRef } from "react";
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
  // smoother ko store karne ke liye ref use karo (instead of window)
  const smootherRef = useRef<any>(null);

  useEffect(() => {
    // Thoda delay do taaki saare components load ho jayein
    const timer = setTimeout(() => {
      try {
        // smoother ko ref mein store karo
        smootherRef.current = ScrollSmoother.create({
          smooth: 1,
          effects: true,
          normalizeScroll: true
        });

        console.log("ScrollSmoother initialized successfully!");
      } catch (error) {
        console.error("ScrollSmoother error:", error);
      }
    }, 1000);

    // Cleanup function - ref se smoother kill karo
    return () => {
      clearTimeout(timer);
      if (smootherRef.current) {
        smootherRef.current.kill();
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
