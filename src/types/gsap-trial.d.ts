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
    static create(options: any): any;
    paused(state?: boolean): any;
    scrollTrigger: any;
  }
}

declare module 'gsap/ScrollTrigger' {
  const ScrollTrigger: any;
  export default ScrollTrigger;
  export const config: any;
  export const addEventListener: any;
}

declare module 'gsap' {
  const gsap: any;
  export default gsap;
  export const registerPlugin: any;
  export const to: any;
  export const fromTo: any;
  export const timeline: any;
}
