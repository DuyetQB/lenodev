import Layout from "../core/layout/layout";
import Meta from "../core/components/meta/meta";
import ThaiImage from "../core/images/thai-image.png";
import Image from "next/image";

const AboutUs = () => {
  return (
    <Layout>
      <Meta
        title="About Us - page"
        description="About Us"
        ogImage="https://cdn.dribbble.com/userupload/3772457/file/original-aba22003bdf9b02fa070c8e123c7a8c2.jpg?compress=1&resize=1024x768"
        ogDescription="Lenodev - About Us"
        ogTitle="About Us - page"
        keywords="About Us"
        twitterTitle="Lenodev - About Us"
        twitterDescription="About Us "
        twitterImage="https://cdn.dribbble.com/userupload/3772457/file/original-aba22003bdf9b02fa070c8e123c7a8c2.jpg?compress=1&resize=1024x768"
      />
      <div className="container">
        <div className="isolate bg-white px-6 py-2 sm:py-3 lg:px-8">
          {/*  */}
          <div className="container py-1 lg:py-2 space-y-1 lg:space-y-2">
            <div className="nc-SectionHero relative pb-4">
              <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left ">
                <div className="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
                  <h2 className="text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
                    👋 About Us.
                  </h2>
                  <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
                    Lenodev is a technology company operating in the field of
                    mobile applications and web applications, we also provide a
                    platform to publish articles about news and technology
                    knowledge.
                  </span>
                </div>
                <div className="flex-grow block w-full aspect-w-6 aspect-h-2">
                  <div className=" inset-0">
                    <img
                      alt="Home image"
                      loading="eager"
                      decoding="async"
                      data-nimg="fill"
                      className="object-contain w-full h-full"
                      sizes="(max-width: 380px) 90vm,(max-width: 768px) 50vw, (max-width: 1024px) 80vw, (max-width: 1200px) 30vw, 40vw"
                      srcSet="https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9hYm91dC1oZXJvLXJpZ2h0LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjU2LCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjkwfX0= 256w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9hYm91dC1oZXJvLXJpZ2h0LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mzg0LCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjkwfX0= 384w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9hYm91dC1oZXJvLXJpZ2h0LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTIwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjkwfX0= 520w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9hYm91dC1oZXJvLXJpZ2h0LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjQwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjkwfX0= 640w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9hYm91dC1oZXJvLXJpZ2h0LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NzUwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjkwfX0= 750w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9hYm91dC1oZXJvLXJpZ2h0LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4LCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjkwfX0= 828w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9hYm91dC1oZXJvLXJpZ2h0LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTA4MCwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo5MH19 1080w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9hYm91dC1oZXJvLXJpZ2h0LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTIwMCwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo5MH19 1200w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9hYm91dC1oZXJvLXJpZ2h0LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTkyMCwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo5MH19 1920w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9hYm91dC1oZXJvLXJpZ2h0LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjA0OCwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo5MH19 2048w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9hYm91dC1oZXJvLXJpZ2h0LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mzg0MCwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo5MH19 3840w"
                      src="https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9hYm91dC1oZXJvLXJpZ2h0LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mzg0MCwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo5MH19"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: 0,
                        color: "transparent",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div id="vision" className="relative py-16">
              <div className="absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-neutral-100 dark:bg-black dark:bg-opacity-20">
                <span className="sr-only hidden">bg</span>
              </div>
              <div className="nc-SectionStatistic relative">
                <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50">
                  <div className="max-w-2xl">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                      🚀 Vision &amp; Mission
                    </h2>
                    <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-700 dark:text-neutral-300">
                      Vision and mission are the guiding light for Lenodev and
                      the map so that the company can stay on the right track on
                      the journey named future.
                    </span>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-5 lg:grid-cols-3 xl:gap-8">
                  <div className="p-6 bg-white dark:bg-black/20 rounded-2xl dark:border-neutral-800">
                    <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-4xl dark:text-neutral-200">
                      Vision
                    </h3>
                    <span className="block text-sm text-neutral-600 mt-3 sm:text-base dark:text-neutral-400">
                      We love mobile and web application, and we want our
                      platform to bring a breath of fresh air to everyone who
                      uses it. In the period of 2023 -2028, we will strive to
                      become a well-known app development company in the region.
                    </span>
                  </div>
                  <div className="p-6 bg-white dark:bg-black/20 rounded-2xl dark:border-neutral-800">
                    <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-4xl dark:text-neutral-200">
                      Mission
                    </h3>
                    <span className="block text-sm text-neutral-600 mt-3 sm:text-base dark:text-neutral-400">
                      User-centric, we make products around the difficulties and
                      needs of users. It also leads to our products getting
                      better every day and promotes technology development in
                      the region
                    </span>
                  </div>
                  <div className="p-6 bg-white dark:bg-black/20 rounded-2xl dark:border-neutral-800">
                    <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-4xl dark:text-neutral-200">
                      People
                    </h3>
                    <span className="block text-sm text-neutral-600 mt-3 sm:text-base dark:text-neutral-400">
                      Building a professional, dynamic, creative, responsible
                      and humane working environment. We provide regular
                      training programs for our staff, helping them to improve
                      their professional knowledge.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="nc-SectionFounder relative py-6" id="team">
              <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50">
                <div className="max-w-2xl">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                    ⛱ Our Team
                  </h2>
                  <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-700 dark:text-neutral-300">
                    People who have been with the company since the very
                    beginning
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-5 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
                <div className="max-w ">
                  <div className="relative aspect-h-1 aspect-w-1 rounded-xl overflow-hidden z-0">
                    <img
                      alt="founder"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="absolute inset-0 object-cover"
                      sizes="(max-width: 630px) 100vw, (max-width: 1024px) 40vw, (max-width: 1200px) 30vw, 20vw"
                      srcSet="https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tci1kaW5oLWh1eS53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjgsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 128w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tci1kaW5oLWh1eS53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyNTYsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 256w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tci1kaW5oLWh1eS53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozODQsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 384w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tci1kaW5oLWh1eS53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MjAsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 520w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tci1kaW5oLWh1eS53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDAsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 640w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tci1kaW5oLWh1eS53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 750w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tci1kaW5oLWh1eS53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MjgsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 828w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tci1kaW5oLWh1eS53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDgwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 1080w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tci1kaW5oLWh1eS53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjAwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 1200w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tci1kaW5oLWh1eS53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxOTIwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 1920w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tci1kaW5oLWh1eS53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 2048w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tci1kaW5oLWh1eS53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozODQwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 3840w"
                      src="https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tci1kaW5oLWh1eS53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozODQwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0="
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: 0,
                        color: "transparent",
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
                    Mr. Thai Quang
                  </h3>
                  <span className="block text-sm text-neutral-600 sm:text-base dark:text-neutral-400">
                    Co-Founder
                  </span>
                </div>
                <div className="max-w ">
                  <div className="relative aspect-h-1 aspect-w-1 rounded-xl overflow-hidden z-0">
                    <Image
                      alt="founder"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="absolute inset-0 object-cover"
                      sizes="(max-width: 630px) 100vw, (max-width: 1024px) 40vw, (max-width: 1200px) 30vw, 20vw"
                      src={ThaiImage}
                      style={{
                        position: "absolute",
                        height: "464px",
                        width: "100%",
                        inset: 0,
                        color: "transparent",
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
                    Mr. Duyet Dinh
                  </h3>
                  <span className="block text-sm text-neutral-600 sm:text-base dark:text-neutral-400">
                    Founder
                  </span>
                </div>

                <div className="max-w ">
                  <div className="relative  aspect-h-1 aspect-w-1 rounded-xl overflow-hidden z-0">
                    <img
                      alt="founder"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="absolute inset-0 object-cover"
                      sizes="(max-width: 630px) 100vw, (max-width: 1024px) 40vw, (max-width: 1200px) 30vw, 20vw"
                      srcSet="https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tcy10aGllbi1raW0ud2VicCIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTI4LCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 128w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tcy10aGllbi1raW0ud2VicCIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjU2LCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 256w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tcy10aGllbi1raW0ud2VicCIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mzg0LCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 384w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tcy10aGllbi1raW0ud2VicCIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NTIwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 520w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tcy10aGllbi1raW0ud2VicCIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjQwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 640w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tcy10aGllbi1raW0ud2VicCIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NzUwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 750w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tcy10aGllbi1raW0ud2VicCIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4LCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 828w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tcy10aGllbi1raW0ud2VicCIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTA4MCwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 1080w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tcy10aGllbi1raW0ud2VicCIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTIwMCwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 1200w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tcy10aGllbi1raW0ud2VicCIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MTkyMCwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 1920w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tcy10aGllbi1raW0ud2VicCIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6MjA0OCwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 2048w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tcy10aGllbi1raW0ud2VicCIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mzg0MCwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 3840w"
                      src="https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiaW1hZ2VibG9nL2ltYWdlcy9tcy10aGllbi1raW0ud2VicCIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6Mzg0MCwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: 0,
                        color: "transparent",
                      }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl dark:text-neutral-200">
                    Ms. Sasha
                  </h3>
                  <span className="block text-sm text-neutral-600 sm:text-base dark:text-neutral-400">
                    UX/UI Designer
                  </span>
                </div>
              </div>
            </div>
            <div id="values" className="relative py-16">
              <div className="absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 bg-neutral-100 dark:bg-black dark:bg-opacity-20">
                <span className="sr-only hidden">bg</span>
              </div>
              <div className="nc-SectionStatistic relative">
                <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50">
                  <div className="max-w-2xl">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                      💎 Core values
                    </h2>
                    <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-700 dark:text-neutral-300">
                      Guided by 04 core values, we strive for the development of
                      ourselves and the community.
                    </span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-4 xl:gap-8">
                  <div className="p-6 bg-white dark:bg-black/20 rounded-2xl dark:border-neutral-800">
                    <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-4xl dark:text-neutral-200">
                      Creative
                    </h3>
                    <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
                      As a startup we prioritize creativity in our work, always
                      learning new things and creating something different,
                      because we believe that being different is the key to
                      success.
                    </span>
                  </div>
                  <div className="p-6 bg-white dark:bg-black/20 rounded-2xl dark:border-neutral-800">
                    <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-4xl dark:text-neutral-200">
                      Integrity
                    </h3>
                    <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
                      Keeping principles, ethics, openness and fairness is
                      Lenodev's commitment to customers, partners and all
                      members.
                    </span>
                  </div>
                  <div className="p-6 bg-white dark:bg-black/20 rounded-2xl dark:border-neutral-800">
                    <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-4xl dark:text-neutral-200">
                      User
                    </h3>
                    <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
                      User-centric, we strive to create applications according
                      to users' needs and requirements, besides, users are the
                      main motivation for us to strive and take on great
                      challenges.
                    </span>
                  </div>
                  <div className="p-6 bg-white dark:bg-black/20 rounded-2xl dark:border-neutral-800">
                    <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-4xl dark:text-neutral-200">
                      Learn
                    </h3>
                    <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
                      Listening, humbly looking at life through a lens full of
                      tolerance. No one succeeds forever and neither do we, we
                      will try our best while we live.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div id="partner" className="nc-SectionSliderNewCategories py-4">
              <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900 dark:text-neutral-50">
                <div className="max-w-2xl">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                    Partner
                  </h2>
                  <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-700 dark:text-neutral-300">
                    We are proud to be the trusted partner of global leaders
                  </span>
                </div>
              </div>
              <div className="nc-MySlider ">
                <div className="relative flow-root">
                  <div className="flow-root overflow-hidden rounded-xl">
                    <ul className="relative whitespace-nowrap -mx-2 xl:-mx-4 ">
                      <li
                        className="relative inline-block px-2 xl:px-4 whitespace-normal"
                        style={{
                          width: "calc(20%)",
                          transform: "translateX(0%) translateZ(0px)",
                        }}
                      >
                        <div className="nc-CardCategory3 flex flex-col ">
                          <div className="flex-shrink-0 relative w-full aspect-w-5 aspect-h-5 rounded-2xl overflow-hidden group">
                            <img
                              alt=""
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover w-full h-full rounded-2xl"
                              sizes="(max-width: 500px) 45rem, (max-width: 826px) 30rem,(max-width: 1024px) 25rem,(max-width: 1324px) 20rem ,15rem"
                              srcSet="https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YkpRcFYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4LCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 8w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YkpRcFYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxNiwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 16w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YkpRcFYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMiwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 32w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YkpRcFYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0OCwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 48w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YkpRcFYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NCwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 64w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YkpRcFYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5NiwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 96w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YkpRcFYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjgsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 128w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YkpRcFYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyNTYsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 256w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YkpRcFYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozODQsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 384w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YkpRcFYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MjAsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 520w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YkpRcFYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDAsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 640w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YkpRcFYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 750w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YkpRcFYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MjgsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 828w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YkpRcFYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDgwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 1080w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YkpRcFYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjAwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 1200w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YkpRcFYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxOTIwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 1920w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YkpRcFYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 2048w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YkpRcFYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozODQwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 3840w"
                              src="https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YkpRcFYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozODQwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0="
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                color: "transparent",
                              }}
                            />
                            <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity" />
                          </div>
                        </div>
                      </li>
                      <li
                        className="relative inline-block px-2 xl:px-4 whitespace-normal"
                        style={{
                          width: "calc(20%)",
                          transform: "translateX(0%) translateZ(0px)",
                        }}
                      >
                        <div className="nc-CardCategory3 flex flex-col ">
                          <div className="flex-shrink-0 relative w-full aspect-w-5 aspect-h-5 rounded-2xl overflow-hidden group">
                            <img
                              alt=""
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover w-full h-full rounded-2xl"
                              sizes="(max-width: 500px) 45rem, (max-width: 826px) 30rem,(max-width: 1024px) 25rem,(max-width: 1324px) 20rem ,15rem"
                              srcSet="https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YmQ4OHYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4LCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 8w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YmQ4OHYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxNiwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 16w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YmQ4OHYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMiwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 32w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YmQ4OHYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0OCwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 48w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YmQ4OHYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NCwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 64w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YmQ4OHYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5NiwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 96w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YmQ4OHYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjgsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 128w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YmQ4OHYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyNTYsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 256w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YmQ4OHYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozODQsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 384w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YmQ4OHYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MjAsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 520w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YmQ4OHYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDAsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 640w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YmQ4OHYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 750w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YmQ4OHYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MjgsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 828w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YmQ4OHYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDgwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 1080w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YmQ4OHYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjAwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 1200w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YmQ4OHYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxOTIwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 1920w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YmQ4OHYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 2048w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YmQ4OHYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozODQwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 3840w"
                              src="https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YmQ4OHYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozODQwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0="
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                color: "transparent",
                              }}
                            />
                            <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity" />
                          </div>
                        </div>
                      </li>
                      <li
                        className="relative inline-block px-2 xl:px-4 whitespace-normal"
                        style={{
                          width: "calc(20%)",
                          transform: "translateX(0%) translateZ(0px)",
                        }}
                      >
                        <div className="nc-CardCategory3 flex flex-col ">
                          <div className="flex-shrink-0 relative w-full aspect-w-5 aspect-h-5 rounded-2xl overflow-hidden group">
                            <img
                              alt=""
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover w-full h-full rounded-2xl"
                              sizes="(max-width: 500px) 45rem, (max-width: 826px) 30rem,(max-width: 1024px) 25rem,(max-width: 1324px) 20rem ,15rem"
                              srcSet="https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJ1S2cucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4LCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 8w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJ1S2cucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxNiwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 16w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJ1S2cucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMiwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 32w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJ1S2cucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0OCwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 48w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJ1S2cucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NCwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 64w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJ1S2cucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5NiwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 96w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJ1S2cucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjgsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 128w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJ1S2cucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyNTYsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 256w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJ1S2cucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozODQsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 384w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJ1S2cucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MjAsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 520w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJ1S2cucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDAsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 640w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJ1S2cucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 750w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJ1S2cucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MjgsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 828w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJ1S2cucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDgwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 1080w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJ1S2cucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjAwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 1200w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJ1S2cucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxOTIwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 1920w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJ1S2cucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 2048w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJ1S2cucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozODQwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 3840w"
                              src="https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJ1S2cucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozODQwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0="
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                color: "transparent",
                              }}
                            />
                            <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity" />
                          </div>
                        </div>
                      </li>

                      <li
                        className="relative inline-block px-2 xl:px-4 whitespace-normal"
                        style={{
                          width: "calc(20%)",
                          transform: "translateX(0%) translateZ(0px)",
                        }}
                      >
                        <div className="nc-CardCategory3 flex flex-col ">
                          <div className="flex-shrink-0 relative w-full aspect-w-5 aspect-h-5 rounded-2xl overflow-hidden group">
                            <img
                              alt=""
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="object-cover w-full h-full rounded-2xl"
                              sizes="(max-width: 500px) 45rem, (max-width: 826px) 30rem,(max-width: 1024px) 25rem,(max-width: 1324px) 20rem ,15rem"
                              srcSet="https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJEcUYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4LCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 8w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJEcUYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxNiwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 16w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJEcUYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozMiwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 32w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJEcUYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0OCwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 48w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJEcUYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NCwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 64w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJEcUYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5NiwiZml0Ijoib3V0c2lkZSJ9LCJxdWFsaXR5Ijo3NX19 96w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJEcUYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjgsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 128w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJEcUYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyNTYsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 256w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJEcUYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozODQsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 384w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJEcUYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MjAsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 520w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJEcUYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDAsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 640w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJEcUYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo3NTAsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 750w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJEcUYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4MjgsImZpdCI6Im91dHNpZGUifSwicXVhbGl0eSI6NzV9fQ== 828w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJEcUYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDgwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 1080w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJEcUYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMjAwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 1200w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJEcUYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxOTIwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 1920w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJEcUYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoyMDQ4LCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 2048w, https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJEcUYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozODQwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0= 3840w"
                              src="https://d3juulv5tt3rql.cloudfront.net//eyJidWNrZXQiOiJtaW5pYWltZXJibG9nIiwia2V5IjoiZml4L0h2YjJEcUYucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjozODQwLCJmaXQiOiJvdXRzaWRlIn0sInF1YWxpdHkiOjc1fX0="
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: 0,
                                color: "transparent",
                              }}
                            />
                            <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity" />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
