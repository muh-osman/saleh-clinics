import style from "./HeroTextAndBtn.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function HeroTextAndBtn() {
  const buttonContainerRef = useRef(null); // Create a ref for the button container

  useEffect(() => {
    const loadSchedulingButton = () => {
      if (
        window.calendar &&
        window.calendar.schedulingButton &&
        buttonContainerRef.current
      ) {
        window.calendar.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2CdOodn6UrDTHtm1nG5YtpfIa0D9Y9y3lPMLkW-7u5L0Rm01QG7m8yHi4EmIF9LHXefYvAK4hl?gv=true",
          color: "#51ace6",
          label: "احجز الآن",
          target: buttonContainerRef.current, // Use the ref as the target
        });
      }
    };

    // Wait for the window to load before trying to load the scheduling button
    window.addEventListener("load", loadSchedulingButton);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("load", loadSchedulingButton);
    };
  }, []);

  return (
    <>
      <div className={style.container}>
        <div>
          <h1>عيادات صالح العجلان للنطق والتخاطب</h1>
          <h5>نؤمن بأن التواصل هو أساس الحياة</h5>
        </div>
        <div className={style.btn_container}>
          <Link to="/contact">تواصل معنا</Link>
          {/* <Link to="/booking">احجز الآن</Link> */}
          {/* This is where the scheduling button will be rendered */}
          <div ref={buttonContainerRef}></div>
        </div>
      </div>
    </>
  );
}
