import style from "./SecSeven.module.scss";

export default function SecSeven() {
  return (
    <div className={style.container}>
      <h1>الأسعار</h1>

      <section dir="rtl" className="services-section plans-container">
        <div className="container">
          <div className="row">


            <div
              className="col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              <div className="service-card">
                <div className="service-img">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5l0 39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9l0 39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7l0-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1L257 256c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                  </svg>
                </div>
                <h4>أسعار بكج الصباح:</h4>
                <hr />
                <ul>
                  <li>
                    <span>
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-119a5lz"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="VerifiedUserIcon"
                      >
                        <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
                      </svg>{" "}
                    </span>
                    تقييم التخاطب 250 ريال
                  </li>
                  <li>
                    <span>
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-119a5lz"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="VerifiedUserIcon"
                      >
                        <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
                      </svg>
                    </span>
                    بكج 8 جلسات تخاطب 1200 ريال
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              <div className="service-card">
                <div className="service-img">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0L109.6 0C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9c0 0 0 0-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3L448 384l-320 0 0-133.4c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3L64 384l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64 0-131.4c-4 1-8 1.8-12.3 2.3z" />
                  </svg>
                </div>
                <h4>أسعار البكجات:</h4>
                <hr />
                <ul>
                  <li>
                    <span>
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-119a5lz"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="VerifiedUserIcon"
                      >
                        <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
                      </svg>{" "}
                    </span>
                    بكج 6 جلسات تخاطب 1200 ريال
                  </li>
                  <li>
                    <span>
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-119a5lz"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="VerifiedUserIcon"
                      >
                        <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
                      </svg>
                    </span>
                    بكج 8 جلسات تخاطب 1440 ريال
                  </li>
                  <li>
                    <span>
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-119a5lz"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="VerifiedUserIcon"
                      >
                        <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
                      </svg>{" "}
                    </span>
                    بكج 6 جلسات تعديل سلوك 1380 ريال
                  </li>
                  <li>
                    <span>
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-119a5lz"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="VerifiedUserIcon"
                      >
                        <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
                      </svg>{" "}
                    </span>
                    بكج 8 جلسات تعديل سلوك 1600 ريال
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              <div className="service-card">
                <div className="service-img">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1l0 50.8c27.6 7.1 48 32.2 48 62l0 40c0 8.8-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l0-24c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 24c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0c-8.8 0-16-7.2-16-16l0-40c0-29.8 20.4-54.9 48-62l0-57.1c-6-.6-12.1-.9-18.3-.9l-91.4 0c-6.2 0-12.3 .3-18.3 .9l0 65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7l0-59.1zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
                  </svg>
                </div>
                <h4>أسعار الاستشارات:</h4>
                <hr />
                <ul>
                  <li>
                    <span>
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-119a5lz"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="VerifiedUserIcon"
                      >
                        <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
                      </svg>{" "}
                    </span>
                    جلسةاستشارة مع الخصائي صالح العجلان 220 ريال
                  </li>
                  <li>
                    <span>
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-119a5lz"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="VerifiedUserIcon"
                      >
                        <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
                      </svg>
                    </span>
                    تقييمات التخاطب 300 ريال
                  </li>
                  <li>
                    <span>
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-119a5lz"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="VerifiedUserIcon"
                      >
                        <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
                      </svg>
                    </span>
                    تقييمات السلوك,اختبار الذكاء والتوحد, جلستين 600 ريال
                  </li>
                  <li>
                    <span>
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-119a5lz"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="VerifiedUserIcon"
                      >
                        <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
                      </svg>
                    </span>
                    جلسة التخاطب الواحدة 230 ريال
                  </li>
                  <li>
                    <span>
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-119a5lz"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="VerifiedUserIcon"
                      >
                        <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
                      </svg>
                    </span>
                    جلسة السلوك الواحدة 250 ريال
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
