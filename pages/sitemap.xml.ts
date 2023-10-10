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
     ${posts?.data?.map((item:any) => {
         return `
       <url>
           <loc>${`${EXTERNAL_BASE_URL}/${item?.slug}`}</loc>
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
  try {
    const request = await fetch(EXTERNAL_DATA_URL);
    
    if (request.ok) {
      const posts = await request.json();
      // Generate the sitemap using the posts data
      const sitemap = generateSiteMap(posts);
      // Set headers and send the sitemap
      res.setHeader('Content-Type', 'text/xml');
      res.write(sitemap);
      res.end();
    } else {
      // Handle API response error here
      console.error('Error fetching data from the API');
      // Return an error response if needed
    }
  } catch (error) {
    console.error('An error occurred while fetching data:', error);
    // Handle the error and return an error response if needed
  }
  
  return {
    props: {},
  };
}

export default SiteMap;