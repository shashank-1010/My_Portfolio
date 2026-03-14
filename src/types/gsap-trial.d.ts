// src/types/gsap-trial.d.ts
declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(element: string | string[] | HTMLElement | HTMLElement[], vars?: any);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
    split(vars?: any): void;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  const ScrollSmoother: any;
  export { ScrollSmoother };
}

// You can add other GSAP trial modules here if needed
declare module 'gsap-trial' {
  const gsap: any;
  export default gsap;
}
