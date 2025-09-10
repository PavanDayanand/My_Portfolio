import React from "react";

/**
 * Creates animated background blobs for visual interest.
 * The blobs are positioned absolutely and animated with CSS animations.
 */
const BackgroundBlobs = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute top-[-20vh] left-[-25vw] w-[50vw] h-[50vh] bg-green-500/10 dark:bg-green-500/5 rounded-full blur-3xl animate-blob-1"></div>
      <div className="absolute bottom-[-10vh] right-[-15vw] w-[40vw] h-[40vh] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-blob-2"></div>
      <div className="absolute top-[30vh] right-[10vw] w-[30vw] h-[30vh] bg-pink-500/10 dark:bg-pink-500/5 rounded-full blur-3xl animate-blob-3"></div>
    </div>
  );
};

export default BackgroundBlobs;
