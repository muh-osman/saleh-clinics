import style from "./SecFive.module.scss";
import { useState } from "react";
// MUI
import { Modal, Box, Typography } from "@mui/material";
// Images
import imageB from "../Assets/Images/2.jpg";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 360,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const teamMembers = [
  {
    name: "أفنان الديحاني",
    role: "اختصاصية النطق والتخاطب",
    description:
      "خبرة واسعة في تقييم وتشخيص وعلاج اضطرابات التواصل واللغة والنطق. تعمل الأخصائية على تقديم برامج علاجية مخصصة تناسب احتياجات كل مريض، منها التأتأة وعدم طلاقة الكلام لجميع الاعمار تأخر اللغة ومهارات التواصل اضطرابات اللغة والتواصل المصاحبة للاضطرابات النمائية (التوحد، فرط الحركة وتشتت الانتباه، تأخر نمائي، وغيرها) عدم وضوح الكلام ومخارج الاصوات لجميع الاعمار تصحيح أخطاء العمليات الفونولوجيةاضطرابات التواصل الاجتماعي للاطفال والمراهقين حيث تركز على تطوير مهارات النطق واللغة لدى الأطفال والبالغين على حد سواء. تستخدم مجموعة متنوعة من الاستراتيجيات والأساليب الحديثة لتحفيز التواصل الفعال، مما يساعد الأفراد على تحسين قدرتهم على التعبير عن أنفسهم وفهم الآخرين.بالإضافة إلى ذلك، تسعى الأخصائية أفنان الديحاني إلى توعية المجتمع حول أهمية الصحة اللغوية والتواصل الفعال، وتقديم الدعم للأهل والمعلمين لتسهيل عملية التعلم والنمو اللغوي.",
  },
  {
    name: "ريم الخليفة",
    role: "اختصاصية النطق والتخاطب",
    description:
      "حاصلة على شهادة بكالوريس في تخصص أمراض التخاطب والنطق. كما أن لديها خبرة في تقييم اللغة و النطق لدى المرضى وتصميم العلاج المناسب لهم ولأسرهم. خبرة في تقديم الرعاية المتخصصة لعلاج اضطرابات النطق والتعامل مع الأطفال المشخصين باضطرابات النمو كالتوحد وتشتت الانتباه ADHD,ASD). وذلك عن طريق تقديم الخدمات الذي يحتاجها الطفل من مهارات اللغة، مهارات الانتباه المشترك والتواصل ، مهارات اللعب و وبالأضافة إلى التعامل مع الأوكليليا ( تكرار الكلام /مصادة الكلام ) الأطفال التوحد. خبرة في التعامل مع المرضى الذين يعانون من التأتأة او عسر الكلام وعسر التلفظ بسبب مشاكل عصبية أو ضعف في عضلات النطق لجميع الفئات العمرية.",
  },
  {
    name: "سارة آل حسينه",
    role: "اختصاصية النطق والتخاطب",
    description:
      "حاصلة على ترخيص من هيئة التخصصات الصحية عملت مع العديد من حالات الاطفال التي تتضمن تأخر اللغة، واضطرابات النطق، ومشاكل التواصل لدى الأطفال. أسعى لتقديم الدعم اللازم للأطفال وأسرهم لتحسين تواصلهم اللفظي والاجتماعي بطريقة ممتعة وفعالة.",
  },
  {
    name: "حصة عبدالرحمن",
    role: "اختصاصية تعديل السلوك",
    description:
      "حاصلة على بكالوريوس علم نفس لديها خبرة عمل 4 سنوات ونصف في جلسات تعديل السلوك وتنمية المهارات الادراكية والمعرفية وزياده التركيز والانتباه لفئات تأخر النطق والتوحد و متلازمة داون وفرط الحركة وتشتت الانتباه . تقوم بعمل كلاً من اختبارات الذكاء والمقاييس النفسية مقياس ستافورد بينيه مقياس كارز لتقدير التوحد",
  },
];

export default function SecFive() {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleOpen = (member) => {
    setModalContent(member);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={style.container}>
      <h1>فريق يضع خبراته في خدمتكم</h1>
      <p className={style.subTitle}>
        يتكون فريقنا من نخبة من المختصين الحاصلين على درجات علمية متقدمة وخبرة
        واسعة في تقييم وتشخيص وعلاج اضطرابات التواصل واللغة والنطق
      </p>

      <div dir="rtl" className={style.box}>
        {teamMembers.map((member, index) => (
          <div
            className={style.card}
            key={index}
            onClick={() => handleOpen(member)}
          >
            <div>
              <img src={imageB} alt="card" />
            </div>
            <div className={style.text_box}>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box dir="rtl" sx={modalStyle}>
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontFamily: "Cairo, serif" }}
          >
            {modalContent.name}
          </Typography>
          <Typography
            sx={{ mt: 2, fontFamily: "Cairo, serif", color: "#757575" }}
          >
            {modalContent.description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
