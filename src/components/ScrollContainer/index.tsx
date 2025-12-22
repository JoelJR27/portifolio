'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollSmoother from 'gsap/ScrollSmoother';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Footer from '../Footer';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

interface ScrollContainerProps {
  children: React.ReactNode;
}

export default function ScrollContainer({ children }: ScrollContainerProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return;

    ScrollTrigger.getAll().forEach((t) => t.kill());

    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 2,
      effects: true,
      normalizeScroll: true
    });

    ScrollTrigger.refresh();

    return () => {
      smoother.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <div ref={wrapperRef} id="smooth-wrapper">
        <div ref={contentRef} id="smooth-content">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
