import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

// Declare smoother variable with proper type
export let smoother: InstanceType<typeof ScrollSmoother> | null = null;

const Navbar = () => {
  useEffect(() => {
    // Initialize ScrollSmoother only on client side
    if (typeof window === 'undefined') return;
    
    // Create smoother instance
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    // Check if smoother exists before calling methods
    if (smoother) {
      smoother.scrollTop(0);
      smoother.paused(true);
    }

    // Add click handlers to navigation links
    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          
          // Check if smoother exists and has scrollTo method
          if (smoother && typeof smoother.scrollTo === 'function') {
            smoother.scrollTo(section, true, "top top");
          } else {
            // Fallback to standard scroll
            if (section) {
              const targetElement = document.querySelector(section);
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
              }
            }
          }
        }
      });
    });

    // Handle window resize
    const handleResize = () => {
      try {
        // @ts-ignore - ScrollSmoother.refresh exists but TypeScript might not recognize it
        if (typeof ScrollSmoother.refresh === 'function') {
          // @ts-ignore
          ScrollSmoother.refresh(true);
        }
      } catch (error) {
        console.log("Error refreshing ScrollSmoother:", error);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      if (smoother) {
        smoother = null;
      }
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          SP
        </a>
        <a
          href="mailto:shashank.work247@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          shashank.work247@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
