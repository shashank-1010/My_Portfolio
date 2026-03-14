// src/types/gsap-trial.d.ts
// Complete type declarations for GSAP trial modules

declare module 'gsap-trial' {
  export const gsap: any;
  export const ScrollTrigger: any;
  export const ScrollSmoother: any;
  export const SplitText: any;
  export default gsap;
}

declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(
      element: string | string[] | HTMLElement | HTMLElement[], 
      vars?: {
        type?: string;
        linesClass?: string;
        charsClass?: string;
        wordsClass?: string;
        [key: string]: any;
      }
    );
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
    split(vars?: any): void;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(options: {
      wrapper?: string;
      content?: string;
      smooth?: number;
      speed?: number;
      effects?: boolean;
      autoResize?: boolean;
      ignoreMobileResize?: boolean;
      [key: string]: any;
    }): ScrollSmoother;
    
    scrollTop(value?: number): number | void;
    scrollTo(target: string | number | HTMLElement, smooth?: boolean, position?: string): void;
    paused(state?: boolean): boolean | ScrollSmoother;
    refresh(): void;
    scrollTrigger: any;
    progress?: number;
    offset?: number;
    vars?: any;
  }
  
  export function refresh(soft?: boolean): void;
}

declare module 'gsap/ScrollTrigger' {
  const ScrollTrigger: any;
  export default ScrollTrigger;
  export const config: any;
  export const addEventListener: any;
  export function refresh(soft?: boolean): void;
}

declare module 'gsap' {
  const gsap: any;
  export default gsap;
  export const registerPlugin: any;
  export const to: any;
  export const fromTo: any;
  export const timeline: any;
}
