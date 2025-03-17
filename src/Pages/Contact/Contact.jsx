// Sass
import style from "./Contact.module.scss";
// Image
import thankyou from "../../Assets/Images/thankyou.png";
//
import useWindowDimensions from "../../Utils/useWindowDimensions";
// React
import { useEffect, useState } from "react";
// Components
import Banner from "../../Components/Banner";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  const { width } = useWindowDimensions();

  // const form = document.forms["submit-to-google-sheet"];

  function clickBtn(e) {
    if (name && email && message) {
      setLoading(true);

      e.target.form.submit(); // This submits the form
    }
  }

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
        <div className={style.contact_box}>
          <div className={style.form_box}>
            <h1>تواصل معنا</h1>

            <form
              action="https://formsubmit.co/zxc"
              method="POST"
            >
              {/* الاسم */}
              <div className="mb-3">
                <label htmlFor="exampleInputEmail2" className="form-label">
                  الاسم:
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {/*  البريد الالكتروني */}
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  البريد الالكتروني:
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* رقم الهاتف */}
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  رقم الهاتف (اختياري):
                </label>
                <input
                  type="number"
                  name="phone"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* الرسالة */}
              <div className="form-group mb-3">
                <label
                  className="form-label"
                  htmlFor="exampleFormControlTextarea1"
                >
                  الرسالة:
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <input type="hidden" name="_captcha" value="false" />

              <button
                type="submit"
                className="btn btn-primary w-100 special"
                disabled={loading}
                onClick={clickBtn}
              >
                {loading ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                ) : (
                  "إرسال"
                )}
              </button>

              <div
                className={style.form_overlay}
                style={submitted ? { height: "100%" } : null}
              >
                <div>
                  <img src={thankyou} alt="thank you" />
                </div>
                <h3>شكرا</h3>
                <h3>تم ارسال طلبك بنجاح</h3>
              </div>
            </form>
          </div>

          <div className={style.map_box}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14484.907945295721!2d46.729715!3d24.82191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd4c785c1d8f%3A0xb9e7876b8b71d475!2z2LnZitin2K_Yp9iqINi12KfZhNitINin2YTYudis2YTYp9mGINmE2YTYqtiu2KfYt9ioINmC2YjYqSDYp9mE2K3YsdmD2Kk!5e0!3m2!1sar!2sus!4v1742134530253!5m2!1sar!2sus"
              width={width > 575 ? width / 2 : 350}
              height={width > 575 ? width / 2.6 : 350}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
