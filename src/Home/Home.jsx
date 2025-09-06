import "./Home.css";
import UpdateBanner from "../Header/UpdateBanner";

/**
 * @param {null} nothing - This takes in nothing
 * @returns {JSX.Element} Page - This returns the page
 * @description The Home page
 * @author Brock <darkicewolf50@gmail.com>
 */
export default function Home() {
  return (
    <>
      <UpdateBanner
        updatedTitleText="UCalgary Baja"
        updatedSubtitleText=""
        updatedImgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1754170619/DSC_0766-min-2_j7sxoz.jpg"
        updatetdImgAlt="Lorem Picsum"
      />
      <div className="HomePageLayout">
        <div>
          <img
            src="https://res.cloudinary.com/dpgrgsh7g/image/upload/c_fill,w_400,h_400/v1754168551/PXL_20250501_043345191-min_avprss.jpg"
            alt="the team?"
          />
          <div>
            <h2>What We Do</h2>
            <p>
              UCalgary Baja is a student organization which designs, builds, and
              races an off-road vehicle in the Baja SAE competition organized by
              the Society of Automotive Engineers (SAE) every year.
            </p>
            <p>
              In UCalgary Baja, we gain practical experience in design and
              manufacturing by constructing various car components. Our work
              combines mechanical design, project management, and hands-on
              manufacturing experience. This involves using CAD technology like
              SolidWorks and FEA simulations.
            </p>
            <a href={"/AboutUs"}>Learn More</a>
          </div>
        </div>
        <div>
          <div>
            <h2>Who We Are</h2>
            <p>
              We are a team of engineering and business students who strive to
              expand our horizons by getting real world, hands-on experience.
              Our members achieve this by being a part of one of our 10
              sub-teams: Suspension, Chassis, Ergonomics, Steering, Powertrain,
              Final Drive, Telemetry, Data Acquisition, Software, and Business.
            </p>
            <p>
              Each subteam handles a specific component, working with other
              members through the design process. After building the vehicle, we
              attend competitions in the United States, where our hard work is
              put to the test against the teams from all across the world.
            </p>
            <a href={"/"}>Learn More</a>
            {/* Replace with Join later*/}
          </div>
          <img
            src="https://res.cloudinary.com/dpgrgsh7g/image/upload/c_fill,w_400,h_400/v1754168541/DSC_0004-min_irsgkt.jpg"
            alt="possibly a montage mainly showcasing team members working"
          />
        </div>
        <div id="HomeSponsors">
          <h2>Current Sponsors</h2>
          <div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj9L3ZGK6WtOmJbzxmCzRxwLXYKGC5SDcAKHb0ScfbUmbtG0IujQt6eQDaI_Pm9g4DZvc&usqp=CAU"
                alt="Schulich logo"
              />
              <h3>Schulich School of Engineering</h3>
            </div>
            <div>
              <img
                src="https://darkicewolf50.dev/favicon.ico"
                alt="darkicewolf50 logo"
              />
              <h3>darkicewolf50</h3>
            </div>
            <div>
              <img
                src="https://www.3ds.com/assets/3ds-navigation/3DS_corporate-logo_solidworks.svg"
                alt="Solidworks logo"
              />
              <h3>Solidworks</h3>
            </div>
          </div>
          <div id="HomeSponsorLinks">
            <a href={"/OurSponsors"}>See All</a>
            <a href={"/OurSponsors"}>Support Us</a>
          </div>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dpgrgsh7g/image/upload/c_fill,w_400,h_400/v1755376324/PXL_20250503_154645931-min_gi8qlf.jpg"
            alt="something to do with sponsors"
          />
          <div>
            <h2>Sponsor Us</h2>
            <p>
              We appreciate all the help we get from sponsors, as it helps fund
              our Baja team with essential parts, materials, manufacturing
              support, and ability to go to competitions. From donated
              components to financial backing, our sponsors are a key part of
              what drives our team forward.
            </p>
            <a href={"/OurSponsors"}>Learn More</a>
          </div>
        </div>
        <div id="HomeBottomGallery">
          <img
            src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1756589650/DSC_0970-min_telnpf_c_fill_w_780_h_400_o4vqdc.jpg"
            alt="(If we do a rotating images thing for the top, and still want to keep this on the bottom, maybe we can change it to a more collage type thing for this box)"
          />
        </div>
      </div>
    </>
  );
}
