import style from "./SecFour.module.scss";
// Images
import imageA from "../Assets/Images/imageA.webp";
import imageB from "../Assets/Images/imageB.webp";
import imageC from "../Assets/Images/imageC.jpg";
import imageD from "../Assets/Images/imageD.webp";

export default function SecFour() {
  return (
    <div className={style.container}>
      <h1>خدماتنا</h1>

      <div dir="rtl" className={style.box}>
        <div className={style.card}>
          <div>
            <img src={imageA} alt="card" />
          </div>
          <div className={style.text_box}>
            <h3>فرط الحركة</h3>
            <p>
              فرط الحركة هو اضطراب سلوكي يتميز بزيادة النشاط، صعوبة التركيز،
              والاندفاع. يؤثر على الأداء الدراسي والاجتماعي. يحتاج إلى دعم.
            </p>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <img src={imageB} alt="card" />
          </div>
          <div className={style.text_box}>
            <h3>تعديل سلوك</h3>
            <p>
              تعديل السلوك هو عملية تهدف إلى تغيير سلوكيات معينة من خلال تقنيات
              مثل التعزيز الإيجابي، العقاب، والتكرار. يُستخدم في التعليم
              والعلاج.
            </p>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <img src={imageC} alt="card" />
          </div>
          <div className={style.text_box}>
            <h3>تنمية مهارات</h3>
            <p>
              تحسين القدرات الفردية من خلال التدريب والممارسة. تشمل المهارات
              الاجتماعية، الفنية، والمعرفية، وتحقيق النجاح الشخصي والمهني
            </p>
          </div>
        </div>

        <div className={style.card}>
          <div>
            <img src={imageD} alt="card" />
          </div>
          <div className={style.text_box}>
            <h3>صعوبات التعلم</h3>
            <p>
              مجموعة من التحديات التي تواجه الأفراد في اكتساب المهارات. تشمل
              مشاكل في القراءة، الكتابة، وتتطلب استراتيجيات تعليمية خاصة
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
