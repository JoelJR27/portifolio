import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function scrollToElement(id: string) {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: `#${id}`,
      offsetY: 300
    },
    ease: 'power2.out'
  });
}