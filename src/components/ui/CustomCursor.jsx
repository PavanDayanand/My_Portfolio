import React, { useRef, useEffect } from "react";

/**
 * Creates a custom cursor that follows the mouse.
 * Hidden on mobile devices.
 */
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current && followerRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        followerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onHover = () => {
      if (followerRef.current) followerRef.current.classList.add("active");
    };

    const onLeave = () => {
      if (followerRef.current) followerRef.current.classList.remove("active");
    };

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.removeEventListener("mouseenter", onHover);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden md:block"></div>
      <div
        ref={followerRef}
        className="custom-cursor-follower hidden md:block"
      ></div>
    </>
  );
};

export default CustomCursor;
