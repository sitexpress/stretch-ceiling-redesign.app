"use client"
import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
export const ReviewsWidget = () => {
  useEffect(() => {
    const myReviewsInit = () => {
      // @ts-expect-error-123
      if (window.myReviews?.BlockWidget) {
        // @ts-expect-error-123
        new window.myReviews.BlockWidget({
          uuid: "7968bd73-cf4c-4f34-9b20-cf427623b021",
          name: "g5594143",
          additionalFrame: "none",
          lang: "ru",
          widgetId: "0"
        }).init();
      }
    };
// @ts-expect-error-123
    // If script is already loaded
    if (window.myReviews) {
      myReviewsInit();
    } else {
      // Fallback in case the script loads after our component
      window.addEventListener('myReviewsLoaded', myReviewsInit);
    }

    return () => {
      window.removeEventListener('myReviewsLoaded', myReviewsInit);
    };
  }, []);

  return (
    <>
      <Head>
        {/* Preload the script if important */}
        <link rel="preload" href="https://myreviews.dev/widget/dist/index.js" as="script" />
      </Head>

      {/* Load the script with Next.js Script component */}
      <Script
        src="https://myreviews.dev/widget/dist/index.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Trigger custom event when script is loaded
          window.dispatchEvent(new Event('myReviewsLoaded'));
        }}
      />

      {/* Widget container */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
        borderRadius: '20px'
      }}>
        <iframe
          style={{
            width: '100%',
            height: '100%',
            maxWidth: '1170px',
            border: 'none',
            outline: 'none',
            padding: '0',
            margin: '0'
          }}
          id="myReviews__block-widget"
          title="Customer Reviews"
        />
      </div>
    </>
  );
};

export default ReviewsWidget;