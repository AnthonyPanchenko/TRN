import createNextIntlPlugin from 'next-intl/plugin';

// https://nextjs.org/docs/app/building-your-application/styling/sass

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // async headers() {
  //   return [
  //     {
  //       source: "/about",
  //       headers: [
  //         {
  //           key: "X-About-Custom-Header",
  //           value: "about_header_value",
  //         },
  //       ],
  //     },
  //     {
  //       source: "/articles/:id",
  //       headers: [
  //         {
  //           key: "X-News-Custom-Header",
  //           value: "news_header_value",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default withNextIntl(nextConfig);