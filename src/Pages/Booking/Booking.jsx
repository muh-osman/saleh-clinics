import style from "./Booking.module.scss";
import React, { useEffect } from "react";
// Components
import Banner from "../../Components/Banner";
import Navbar from "../../Components/Navbar";

export default function Booking() {
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

        <div className={style.text_container}>
          <div>
            <h1>احجز الان</h1>
          </div>
        </div>
      </div>
      {/* End Hero */}

      <div className={style.container}>
        {/* Google Calendar Appointment Scheduling begin */}
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2CdOodn6UrDTHtm1nG5YtpfIa0D9Y9y3lPMLkW-7u5L0Rm01QG7m8yHi4EmIF9LHXefYvAK4hl?gv=true"
          style={{ border: 0 }}
          width="100%"
          frameBorder={0}
          className={style.zxc}
        />
        {/* end Google Calendar Appointment Scheduling */}
      </div>
    </>
  );
}
