import React from "react";
import Layout from "./components/Layout";

const Owner = () => {
  return (
    <div>
      <Layout>
        <div className="biography">
          <h1>JSD#5-14_Kamontodsapon (Nut/นัท)</h1>
          <img
            className="bio-img"
            src={"./src/assets/1662377790417.jpg"}
            alt=""
          />{" "}
          {/*"https://legacy.reactjs.org/logo-og.png"*/}
          <h5>Short Biography</h5>
        </div>
        <div>
          <p>Name: NUT</p>

          <p>Profession: Aspiring Junior Software Developer</p>

          <p>Education: Diploma of Computer Technique</p>

          <p>
            Interests: Listening to music, watching movies, and exploring new
            places through travel.
          </p>

          <p>Notable Accomplishments:</p>
          <ul>
            <li>
              Proficient in Microsoft Excel in the past, though skills may need
              a refresh.
            </li>
            <li>
              Previously studied Chinese language, albeit needing a refresher.
            </li>
            <li>
              Currently in the process of learning the Russian language, with
              basic knowledge.
            </li>
            <li>
              Pursuing a career in software development through Generation
              Thailand's Junior Software Developer Bootcamp.
            </li>
          </ul>
        </div>
      </Layout>
    </div>
  );
};

export default Owner;
