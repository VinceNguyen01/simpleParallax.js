declare module 'simple-parallax-js' {
    interface IParallaxSettings {
        orientation?: 'up' | 'down' | 'left' | 'right' | 'up left' | 'up right' | 'down left' | 'down right';
        scale?: number;
        overflow?: boolean;
        delay?: number;
        transition?: string;
        customContainer?: string | HTMLElement;
        customWrapper?: string;
        maxTransition?: number;
        speed?: number;
    }

    export default class SimpleParallax {
        constructor(images: Element | Element[] | HTMLCollectionOf<Element>, settings?: IParallaxSettings, {} ?: {clonedWindow: Window & typeof globalThis, clonedDocument: Document});
        public refresh: () => void;
        public destroy: () => void;
    }
}
