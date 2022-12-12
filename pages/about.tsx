import Head from "next/head";
import Layout from "../pages/core/layout/layout";


interface Ivalue {
    value:string
}



const About = ({value}:Ivalue) => {

    return (
        <Layout>
        <Head>
        <title>about - huhu</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Lenodev" />
        <meta
          name="description"
          content="description about "
        />
        <meta
          property="og:image"
          content="https://cdn.dribbble.com/userupload/3772457/file/original-aba22003bdf9b02fa070c8e123c7a8c2.jpg?compress=1&resize=1024x768"
        />
      </Head>
        <h1>about</h1>
        </Layout>
    )
}

export default About;