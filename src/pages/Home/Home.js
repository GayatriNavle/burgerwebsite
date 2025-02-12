import React from 'react';
import Layout from "../../Component/Layouts/Layouts.js";
import "/Users/gayatrinavle/Desktop/burgerwebsite/src/styles/HomeStyles.css";
import Section1 from './Section1.js';
import Section2 from './Section2.js';
import Section3 from './Section3.js';
function Home() {
  return (
    <>
    <Layout>
      {/* Home Section Hero Banner */}
      <Section1 />

      {/* Home Section About */}
      <Section2/>

      {/* Home Section Menu */}
      <Section3/>
    </Layout>
    </>

  )
}

export default Home;
