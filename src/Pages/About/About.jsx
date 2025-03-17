// Sass
import style from "./About.module.scss";
// Images
// import about from "../../Assets/Images/3.jpg";
// React
import { useEffect } from "react";
// Components
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banner";
import Navbar from "../../Components/Navbar";

export default function About() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <>
      {/* Start Hero */}
      <div className={style.hero_container}>
        <Banner />

        <div className={style.nav_container}>
          <Navbar />
        </div>
      </div>
      {/* End Hero */}

      <div dir="rtl" className={style.container}>
        <div className={style.long_text}>
          <div className={style.hero_text_box} dir="rtl">
            <h1>من نحن</h1>

            <p>
              لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,
              لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت
            </p>

            <p>
              لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,
              لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت
            </p>

            <p>
              لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,
              لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
