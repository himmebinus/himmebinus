import FooterV1 from "../../components/FooterV1/FooterV1";
import LinearLine from "../../components/LinearLine/LinearLine";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import SectionV1 from "../../components/SectionV1/SectionV1";
import classes from "./Home.module.css";
import LocationIcon from "../../assets/icons/LocationIcon";
import PartnerIcon from "../../assets/icons/PartnerIcon";
import MemberIcon from "../../assets/icons/MemberIcon";
import EventIcon from "../../assets/icons/EventIcon";
const Home = () => {
  return (
    <>
      <NavigationBar />
      <SectionV1 className={"flex pt-5"}>
        <div className={classes.ContentSection}>
          <div className="inline-block mb-6">
            <h1 className="font-semibold text-4xl">About HIMME</h1>
            <LinearLine />
          </div>

          <p className="font-medium">
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
        <div className={classes.VideoSection}>
          <iframe
            className={classes.MainVideo}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YTjAZs3D0qo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </SectionV1>
      <SectionV1>
        <div>
          <div>
            <LocationIcon />
            <p>4</p>
          </div>
          <div>
            <h2>Region</h2>
            <p>
              HIMME accommodates all of BINUS Business School students
              aspirations which spread across 4 regions
            </p>
            <a href="">See Details </a>
          </div>
        </div>

        <div>
          <div>
            <PartnerIcon />
            <p>4</p>
          </div>
          <div>
            <h2>Region</h2>
            <p>
              HIMME accommodates all of BINUS Business School students
              aspirations which spread across 4 regions
            </p>
            <a href="">See Details </a>
          </div>
        </div>

        <div>
          <div>
            <MemberIcon />
            <p>4</p>
          </div>
          <div>
            <h2>Region</h2>
            <p>
              HIMME accommodates all of BINUS Business School students
              aspirations which spread across 4 regions
            </p>
            <a href="">See Details </a>
          </div>
        </div>

        <div>
          <div>
            <EventIcon />
            <p>4</p>
          </div>
          <div>
            <h2>Region</h2>
            <p>
              HIMME accommodates all of BINUS Business School students
              aspirations which spread across 4 regions
            </p>
            <a href="">See Details </a>
          </div>
        </div>
      </SectionV1>
      <SectionV1>
        <div>
          <h2>Our Tagline</h2>
          <h1>“UnravelTheRemarkable”</h1>
          <p>
            HIMME is committed to becoming an organization that always brings
            various quality human resources to develop together, as well as
            discloses various HIMME programs to the public to enhance HIMME's
            existence and image
          </p>
        </div>
      </SectionV1>
      <SectionV1>
        <div>
          <div>
            <div className="inline-block mb-6">
              <h2>Vision</h2>
              <LinearLine />
            </div>
            <div>
              <img src="" alt="" />
              <p>
                “Sinergi nyata untuk gelora karya keharmonisan HIMME BINUS
                University”
              </p>
            </div>
          </div>
          <div>
            <div className="inline-block mb-6">
              <h2>Mission</h2>
              <LinearLine />
            </div>
            <div>
              <img src="" alt="" />
              <p>
                1. Menabur kebermanfaatan melalui kontribusi aktif mahasiswa/i
                BBS melalui pengabdian yang tepat sasaran dan berkelanjutan. 2.
                Harmonisasi setiap elemen guna menciptakan kolaborasi karya
                terintegrasi yang maksimal. 3.Menghadirkan pergerakan mahasiswa
                berlandaskan nilai intelektual yang berdampak secara langsung.
                4. Menjadikan HIMME sebagai wadah advokasi mahasiswa/i yang
                responsif.
              </p>
            </div>
          </div>
        </div>
      </SectionV1>
      <SectionV1>
        <div>
          <h2>Our Region</h2>
          <LinearLine />
        </div>
        <div>
          <a href="">
            <img src="" alt="" />
            <p>Kemanggisan</p>
          </a>
        </div>
      </SectionV1>
      <SectionV1>
        <div>
          <h2>Board of Management</h2>
          <LinearLine />
        </div>
        <div>
          <img src="" alt="" />
          <p>
            ** Every year, HIMME has more than 100 activists for one batch and
            more than 20 board of management{" "}
          </p>
        </div>
      </SectionV1>
      <SectionV1>
        <div>
          <h2>Our Memories</h2>
          <LinearLine />
        </div>
      </SectionV1>
      <SectionV1>
        <div>
          <div>
            <div>
              <h2>Let’s work together!</h2>
              <LinearLine />
            </div>
            <p>
              For sponsorship & media partnership, please fill out the form and
              let’s grow together. We look forward to hearing from you.
            </p>
            <img src="" alt="" />
          </div>
          <div></div>
        </div>
      </SectionV1>
      <FooterV1 />
    </>
  );
};
export default Home;
