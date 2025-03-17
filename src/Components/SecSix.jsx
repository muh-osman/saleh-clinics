import style from "./SecSix.module.scss";
// React Bootstrp Carousel
import Carousel from "react-bootstrap/Carousel";
// Images
import logoA from "../Assets/Images/logoA.webp";
import logoB from "../Assets/Images/logoB.webp";
import logoC from "../Assets/Images/logoC.webp";
import logoD from "../Assets/Images/logoD.webp";
import logoE from "../Assets/Images/logoE.webp";
import logoF from "../Assets/Images/logoF.webp";
import logoG from "../Assets/Images/logoG.webp";
import logoH from "../Assets/Images/logoH.webp";

export default function SecSix() {
  return (
    <>
      <div className={style.container}>
        <h1>شهادتنا</h1>

        <Carousel
          className={style.carousel}
          data-bs-theme="dark"
          indicators={false}
        >
          <Carousel.Item className={style.carousel_box}>
            <h3 dir="rtl">
              اول شي المكان مرتب ونظيف وهدوء ودقه في المواعيد مع الأخصائيات
              وخصوصاً مع الأخصائية سارة الله يسعدها كانت دقيقه في مواعيدها ،
              وتعاملها رائع مع طفلي
            </h3>
            <p>Deema Saad</p>
          </Carousel.Item>

          <Carousel.Item className={style.carousel_box}>
            <h3 dir="rtl">
              تجربتي مع الاخصائية ريم الخليفه الله يسعدها ويوفقها اخصائية عارفه
              شغلها كويس ومتمكنه جدا بنتي تبارك الله تحسنت الحمدالله بعد الله
              سبحانه ثم هي تتكلم تكون جمل تسرد احداث توظف الكلمات بمكانها الله
              يارب يوفقها ويسعدها
            </h3>
            <p>Mareyah Al Musawi</p>
          </Carousel.Item>

          <Carousel.Item className={style.carousel_box}>
            <h3 dir="rtl">
              عيادة تعمل بجودة وتطور اسلوب العلاج الإكلينيكي والسلوكي اعجبني ذلك
              واوصي المرضى المصابين بالتخاطب وصعوب الحركة 👍👍👍
            </h3>
            <p>Sultan Almutawa</p>
          </Carousel.Item>

          <Carousel.Item className={style.carousel_box}>
            <h3>
              تجربتي مع الإخصائية افنان وساره كانت رائعه جيت وبنتي عمرها اللغوي
              اقل من عمرها كأنها عمر سنه ونص وهي عمرها ٤ اخذت معها ٤ شهور رائعه
              بمعنى الكلمه من اول شهر تغيرت بنتي مية وثمانين درجه
            </h3>
            <p>مريم</p>
          </Carousel.Item>

          <Carousel.Item className={style.carousel_box}>
            <h3 dir="rtl">
              اشكر الدكتور صالح العجلان اللي نصحني بالمركز انصح الناس بالمركز
              مره مهتمين وحريصين ومتابعين الحالات اول بأول واسعارهم حلوه انصحكم
              فيهم ناس قمه بلاخلاق والتعامل الطيب جزاهم ربي كل خير
            </h3>
            <p>Hessa Alshammari</p>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className={style.logos_container}>
        <div className={style.logo_card}>
          <img src={logoA} alt="logo" />
        </div>

        <div className={style.logo_card}>
          <img src={logoB} alt="logo" />
        </div>

        <div className={style.logo_card}>
          <img src={logoC} alt="logo" />
        </div>

        <div className={style.logo_card}>
          <img src={logoD} alt="logo" />
        </div>
      </div>

      <div className={style.logos_container}>
        <div className={style.logo_card}>
          <img src={logoE} alt="logo" />
        </div>

        <div className={style.logo_card}>
          <img src={logoF} alt="logo" />
        </div>

        <div className={style.logo_card}>
          <img src={logoG} alt="logo" />
        </div>

        <div className={style.logo_card}>
          <img src={logoH} alt="logo" />
        </div>
      </div>
    </>
  );
}
