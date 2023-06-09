import FooterV1 from "../../components/FooterV1/FooterV1";
import LinearLine from "../../components/LinearLine/LinearLine";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import SectionV1 from "../../components/SectionV1/SectionV1";
import LocationIcon from "../../assets/icons/LocationIcon";
import PartnerIcon from "../../assets/icons/PartnerIcon";
import MemberIcon from "../../assets/icons/MemberIcon";
import EventIcon from "../../assets/icons/EventIcon";
import MissionIcon from "../../assets/icons/MissionIcon";
import VisionIcon from "../../assets/icons/VisionIcon";
import alsut from "../../assets/images/alsut.png";
import kemanggisan from "../../assets/images/kemanggisan.png";
import bekasi from "../../assets/images/bekasi.png";
import senayan from "../../assets/images/senayan.png";
import BoardOfManagement from "../../assets/images/BoardOfManagement";
import WhatsappIcon from "../../assets/icons/WhatsappIcon";
import EmailIcon from "../../assets/icons/EmailIcon";
import bgImg1 from "../../assets/images/Group 83.png";
import bgImg2 from "../../assets/images/Group 85.png";
import { Carousel } from "flowbite-react";
import { useEffect } from "react";
import { initCarousels } from "flowbite";
import OM1 from "../../assets/images/OM1.jpg";
import OM2 from "../../assets/images/OM2.jpg";
import OM3 from "../../assets/images/OM3.jpg";
import OM4 from "../../assets/images/OM4.jpg";
import OM5 from "../../assets/images/OM5.jpg";
import OM6 from "../../assets/images/OM6.JPG";
import OM7 from "../../assets/images/OM7.JPG";
import OM8 from "../../assets/images/OM8.jpg";
import OM9 from "../../assets/images/OM9.JPG";
import img1 from "../../assets/Logo Perusahaan/AC.png";
import img2 from "../../assets/Logo Perusahaan/Adiwana.png";
import img3 from "../../assets/Logo Perusahaan/Aice.png";
import img4 from "../../assets/Logo Perusahaan/Ardan.png";
import img5 from "../../assets/Logo Perusahaan/Bhumi.png";
import img6 from "../../assets/Logo Perusahaan/BinusTv.png";
import img7 from "../../assets/Logo Perusahaan/BNCC.png";
import img8 from "../../assets/Logo Perusahaan/BNEC.png";
import img9 from "../../assets/Logo Perusahaan/BPreneur.png";
import img10 from "../../assets/Logo Perusahaan/BRI.png";
import img11 from "../../assets/Logo Perusahaan/Bvoice.png";
import img12 from "../../assets/Logo Perusahaan/Dana.png";
import img13 from "../../assets/Logo Perusahaan/Fisherman.png";
import img14 from "../../assets/Logo Perusahaan/FlazzCoffee.png";
import img15 from "../../assets/Logo Perusahaan/FreshBox.png";
import img16 from "../../assets/Logo Perusahaan/IDNMedia.png";
import img17 from "../../assets/Logo Perusahaan/Iflix.png";
import img18 from "../../assets/Logo Perusahaan/Iqiyi.png";
import img19 from "../../assets/Logo Perusahaan/Jaan.png";
import img20 from "../../assets/Logo Perusahaan/JWM.png";
import img21 from "../../assets/Logo Perusahaan/Kompas.png";
import img22 from "../../assets/Logo Perusahaan/LParis.png";
import img23 from "../../assets/Logo Perusahaan/McD.png";
import img24 from "../../assets/Logo Perusahaan/McKinsey.png";
import img25 from "../../assets/Logo Perusahaan/OCBC.png";
import img26 from "../../assets/Logo Perusahaan/ON.png";
import img27 from "../../assets/Logo Perusahaan/Paragon.png";
import img28 from "../../assets/Logo Perusahaan/Permitha.png";
import img29 from "../../assets/Logo Perusahaan/PPIH.png";
import img30 from "../../assets/Logo Perusahaan/PPIL.png";
import img31 from "../../assets/Logo Perusahaan/Samsung.png";
import img32 from "../../assets/Logo Perusahaan/Sanidata.png";
import img33 from "../../assets/Logo Perusahaan/Sasa.png";
import img34 from "../../assets/Logo Perusahaan/Sirclo.png";
import img35 from "../../assets/Logo Perusahaan/Stockbibit.png";
import img36 from "../../assets/Logo Perusahaan/Sucor.png";
import img37 from "../../assets/Logo Perusahaan/SxC.png";
import img38 from "../../assets/Logo Perusahaan/Tanihub.png";
import img39 from "../../assets/Logo Perusahaan/Tehbotol.png";
import img40 from "../../assets/Logo Perusahaan/TheExecutive.png";
import img41 from "../../assets/Logo Perusahaan/TIA.png";
import img42 from "../../assets/Logo Perusahaan/Tiktok.png";
import img43 from "../../assets/Logo Perusahaan/Viu.png";
import img44 from "../../assets/Logo Perusahaan/Walts.png";
import img45 from "../../assets/Logo Perusahaan/Zomato.png";

const Home = () => {
  useEffect(() => initCarousels(), []);
  return (
    <>
      {/* NAVBAR */}
      <NavigationBar />
      {/* View */}
      <SectionV1
        className={"flex flex-col items-center py-16 lg:flex-row lg:py-28"}
      >
        <div className="content mb-3 text-center lg:pr-10 lg:text-left">
          <div className="inline-block mb-6 text-center">
            <h1 className="font-semibold text-3xl lg:text-4xl">About HIMME</h1>
            <LinearLine />
          </div>
          <p className="font-medium text-xl mb-8 lg:text-justify">
            HIMME (BINUS Business School Student Association), founded by Fu Sin
            Fu on 24th January 1998. The main reason of establishment of HIMME
            at that time was due to the absence of an organization that could
            accommodate the aspirations of students majoring in management
            (which is now developing into BINUS Business School). Established
            under the auspices of BINUS Business School, BINUS University and
            under the supervision of the Student Club and Activity Center
            (SCAC), and BINUS University
          </p>
        </div>
        <div className="flex-1 w-full rounded-xl">
          <iframe
            className="mx-auto w-full h-80 lg:w-100 lg:h-100 rounded-xl"
            src="https://www.youtube.com/embed/lK7QA5S-kKk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            frameborder="0"
          ></iframe>
        </div>
        <img
          src={bgImg1}
          className="absolute w-97 h-97 bottom-0 right-0 -z-50"
        />
      </SectionV1>
      {/* 4 */}
      <SectionV1>
        <div className="flex flex-col justify-between gap-5 lg:flex-row">
          <div className="flex flex-col bg-white shadow-md rounded-md p-5 flex-1 items-center text-center lg:items-start lg:text-start">
            <div className="flex items-center">
              <LocationIcon />
              <p className="text-6xl ml-3 font-semibold">4</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold my-3">Region</h2>
              <p>
                HIMME accommodates all of BINUS Business School students
                aspirations which spread across 4 regions.
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-white shadow-md rounded-md p-5 flex-1 items-center text-center lg:items-start lg:text-start">
            <div className="flex items-center">
              <PartnerIcon />
              <p className="text-6xl ml-3 font-semibold">50+</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold my-3 ">
                Previous Partners
              </h2>
              <p>
                We successfully collaborate with more than 50 partners national
                and international companies on our various events and work
                programs.
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-white shadow-md rounded-md p-5 flex-1 items-center text-center lg:items-start lg:text-start">
            <div className="flex items-center">
              <MemberIcon />
              <p className="text-6xl ml-3 font-semibold">100+</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold my-3 ">Members</h2>
              <p>
                Each year, HIMME has more than 100 activists for one batch with
                more than 20 members in the board of management.
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-white shadow-md rounded-md p-5 flex-1 items-center text-center lg:items-start lg:text-start">
            <div className="flex items-center">
              <EventIcon />
              <p className="text-6xl ml-3 font-semibold">10+</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold my-3 ">Events</h2>
              <p>
                HIMME has more than 10 events annually consists of international
                seminar, competitions and so much more.
              </p>
            </div>
          </div>
        </div>
      </SectionV1>
      {/* Tagline */}
      <SectionV1 className={"mt-10"}>
        <div className="flex flex-col items-center bg-white shadow-md rounded-md p-8 text-center">
          <h2 className="text-2xl font-medium lg:text-3xl">Our Tagline</h2>
          <div className="mb-4">
            <h1 className="text-primary text-2xl font-semibold mt-3 mb-2 lg:text-4xl">
              “UnravelTheRemarkable”
            </h1>
            <LinearLine />
          </div>
          <p>
            HIMME is committed to becoming an organization that always brings
            various quality human resources to develop together, as well as
            discloses various HIMME programs to the public to enhance HIMME's
            existence and image
          </p>
        </div>
      </SectionV1>
      {/* Vision Mission */}
      <SectionV1 className={"mt-10"}>
        <div className="flex gap-5 flex-col lg:flex-row items-center">
          <div className="flex flex-col items-center h-100 bg-white shadow-md rounded-md p-8 flex-1">
            <div className="inline-block mb-6">
              <h2 className="font-semibold text-3xl lg:text-4xl">Vision</h2>
              <LinearLine />
            </div>
            <div className="flex flex-col items-center lg:flex-row">
              <VisionIcon />
              <p className="text-2xl flex-1 ml-5 text-center lg:text-left">
                "Sinergi nyata untuk gelora karya keharmonisan HIMME BINUS
                University"
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center h-100 bg-white shadow-md rounded-md p-8 flex-1">
            <div className="inline-block mb-6">
              <h2 className="font-semibold text-3xl lg:text-4xl">Mission</h2>
              <LinearLine />
            </div>
            <div className="flex flex-col items-center lg:flex-row">
              <MissionIcon />
              <ul className="list-disc flex-1 ml-5 text-sm font-medium lg:text-left">
                <li>
                  Menabur kebermanfaatan melalui kontribusi aktif mahasiswa/i
                  BBS melalui pengabdian yang tepat sasaran dan berkelanjutan.
                </li>
                <li>
                  Harmonisasi setiap elemen guna menciptakan kolaborasi karya
                  terintegrasi yang maksimal.
                </li>
                <li>
                  Menghadirkan pergerakan mahasiswa berlandaskan nilai
                  intelektual yang berdampak secara langsung.
                </li>
                <li>
                  Menjadikan HIMME sebagai wadah advokasi mahasiswa/i yang
                  responsif.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionV1>
      {/* Region */}
      <SectionV1 className={"mt-10"}>
        <div className="flex flex-col items-center">
          <div className="inline-block mb-6">
            <h2 className="font-semibold text-3xl lg:text-4xl">Our Region</h2>
            <LinearLine />
          </div>
          <div className="flex flex-col lg:flex-row gap-10 justify-center items-center w-full">
            <div className="w-72 h-72">
              <a
                className="flex flex-col items-center"
                href="https://bbs.binus.ac.id/binus-kemanggisan/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  src={kemanggisan}
                  alt="Kemanggisan"
                  className="rounded-full w-70 h-70"
                />
                <p className="text-2xl text-center">Kemanggisan</p>
              </a>
            </div>
            <div className="w-72 h-72">
              <a
                href="https://binus.ac.id/alam-sutera-campus/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  src={alsut}
                  alt="Alam Sutera"
                  className="rounded-full w-70 h-70 mx-auto"
                />
                <p className="text-2xl text-center">Alam Sutera</p>
              </a>
            </div>
            <div className="w-72 h-72">
              <a
                href="https://binus.ac.id/bekasi/contact-us/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  src={bekasi}
                  alt="Bekasi"
                  className="rounded-full w-70 h-70 mx-auto"
                />
                <p className="text-2xl text-center">Bekasi</p>
              </a>
            </div>
            <div className="w-72 h-72">
              <a
                href="https://binus.ac.id/jwc-campus/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  src={senayan}
                  alt="Senayan"
                  className="rounded-full w-70 h-70 mx-auto"
                />
                <p className="text-2xl text-center">Senayan</p>
              </a>
            </div>
          </div>
        </div>
      </SectionV1>
      {/* BOM */}
      <SectionV1 className={"mt-10"}>
        <div className="flex flex-col items-center justify-center">
          <div className="inline-block mb-6">
            <h2 className="font-semibold text-3xl lg:text-4xl text-center">
              Board of Management
            </h2>
            <LinearLine />
          </div>
        </div>

        <div className="flex justify-center w-full">
          <BoardOfManagement />
        </div>
      </SectionV1>
      {/* Memories */}
      <SectionV1 className="mt-10">
        <div className="mb-6">
          <h2 className="font-semibold text-3xl text-center lg:text-4xl">
            Our Memories
          </h2>
          <LinearLine />
        </div>
        <div className="h-56 sm:h-64 xl:h-200 2xl:h-200">
          <Carousel>
            <img src={OM1} alt="..." />
            <img src={OM2} alt="..." />
            <img src={OM3} alt="..." />
            <img src={OM4} alt="..." />
            <img src={OM5} alt="..." />
            <img src={OM6} alt="..." />
            <img src={OM7} alt="..." />
            <img src={OM8} alt="..." />
            <img src={OM9} alt="..." />
          </Carousel>
        </div>
      </SectionV1>
      {/* Partnership */}
      <SectionV1 className="mt-10">
        <div className="relative">
          <div className="backdrop-blur-sm bg-opacity-20 rounded drop-shadow-lg">
            <div className="inline-block mb-6">
              <h2 className="font-semibold text-4xl lg:text-5xl">
                Let’s work together!
              </h2>
              <LinearLine />
            </div>
            {/* Mengkuda 1 1 */}
            <div className="w-full h-auto mx-auto mt-5 mb-5 p-1 grad rounded-md">
              <div className="bg-white rounded-md">
                <div className="">
                  <h2 className="font-semibold text-2xl p-3 text-center">
                    Previous Partners
                    <LinearLine />
                  </h2>
                </div>
                <div className="grid grid-cols-3 p-5 md:grid-cols-6 lg:grid-cols-12 gap-1">
                  <img src={img1} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img2} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img3} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img4} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img5} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img6} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img7} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img8} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img9} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img10} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img11} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img12} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img13} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img14} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img15} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img16} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img17} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img18} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img19} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img20} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img21} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img22} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img23} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img24} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img25} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img26} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img27} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img28} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img29} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img30} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img31} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img32} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img33} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img34} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img35} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img36} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img37} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img38} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img39} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img40} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img41} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img42} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img43} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img44} alt="" className="w-20 h-20 mx-auto" />
                  <img src={img45} alt="" className="w-20 h-20 mx-auto" />
                </div>
                <p className="w-full text-center">And Many More</p>
              </div>
            </div>
          </div>
          <div className="border-2 px-10 rounded-md flex flex-col gap-4 mt-10 mb-20 py-5">
            <p className="font-normal">
              For partnership, please contact our team below. We look forward to
              hearing from you!
            </p>
            <div className="flex flex-col lg:flex-row gap-x-5">
              <div className="flex gap-x-3 py-2 items-center">
                <WhatsappIcon />
                <div>
                  <p>Amira (Sponsorship)</p>
                  <a
                    href="https://wa.me/+6281384380747"
                    className="font-medium"
                  >
                    (+62) 813-8438-0747
                  </a>
                </div>
              </div>
              <div className="flex gap-x-3 py-2 items-center">
                <WhatsappIcon />
                <div>
                  <p>Nazira (Media Partner)</p>
                  <a
                    href="https://wa.me/+6281253484432"
                    className="font-medium"
                  >
                    (+62) 812-5348-4432
                  </a>
                </div>
              </div>
              <div className="flex gap-x-3 py-2 items-center">
                <EmailIcon />
                <div>
                  <a
                    href="mailto:himme.relational@gmail.com"
                    className="font-medium"
                  >
                    himme.relation@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <p className="text-serious text-lg italic">
              **Text only. Not accepting calls.
            </p>
          </div>
          <img
            src={bgImg2}
            className="absolute w-97 h-97 top-10 -left-40 -z-50"
          />
        </div>
      </SectionV1>
      <FooterV1 />
    </>
  );
};
export default Home;
