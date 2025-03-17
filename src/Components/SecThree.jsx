import style from "./SecThree.module.scss";
// Images
import person from "../Assets/Images/person.jpg";

export default function SecThree() {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div dir="rtl" className={style.text_box}>
          <h1>الأخصائي صالح العجلان</h1>
          <h4>خبرة لأكثر من خمس سنوات</h4>

          <h5>متخصص في في اضطرابات:</h5>

          <ul>
            <li>النطق والتخاطب لدى الأطفال والكبار.</li>
            <li>
              التلعثم والتأتأة واضطرابات طلاقة الكلام لدى الأطفال والكبار.
            </li>
            <li>مهتم وباحث في التأخر اللغوي لدى الأطفال.</li>
            <li>
              الاضطرابات النمائية ( تطوير مهارات التواصل واللغة للأطفال المصابين
              بالتوحد وفرط الحركة وتشتت الانتباه وغيرها من الاضطرابات النمائية).
            </li>
            <li>
              علاج اضطرابات التواصل الاجتماعي واستخدام اللغة في سياقها الصحيح.{" "}
            </li>
          </ul>
        </div>

        <div className={style.img_box}>
          <img src={person} alt="person" />
        </div>
      </div>
    </div>
  );
}
