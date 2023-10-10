const EXTERNAL_DATA_URL = 'https://traiga-api.vercel.app/api/public-getAllProduct';
const EXTERNAL_BASE_URL = 'https://lenodev.com/blog';

function generateSiteMap(posts:any) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://lenodev.com</loc>
     </url>
     <url>
       <loc>https://lenodev.com/about-us</loc>
     </url>
     <url>
       <loc>https://lenodev.com/product</loc>
     </url>
     <url>
       <loc>https://lenodev.com/blog</loc>
     </url>
     ${posts
       .map(({ slug }:any) => {
         return `
       <url>
           <loc>${`${EXTERNAL_BASE_URL}/${slug}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }:any) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;