import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="/logo.jpg"
              alt="Logo"
              width="40"
              height="30"
              className="d-inline-block align-text-top"
            />
          </Link>
          <ul className="nav nav-tabs">
            <li className="nav-item me-4">
              <Link className="nav-link" to="/notifications">
                Latest Notifications
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link" to="/mock-tests">
                Mock Tests
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link" to="/previous-papers">
                Previous Year Papers
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link" to="/resources">
                Resources
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link" to="/apply">
                Apply Here
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link" to="/results">
                Results
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link" to="/signin">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div
        style={{
          backgroundImage: `url("/background2.jpg")`,
          // minHeight: "100vh",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          overflow: "hidden",
        }}
      >
        <br />
        <br />
        {/* Search Bar (Below Navbar) */}
        <div id="searchbar-background">
          <input
            type="text"
            id="searchInput"
            placeholder="Search for your goal"
            className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart MuiOutlinedInput-inputAdornedStart"
          />
        </div>
        <br />
        <div className="combine">
          <div className="scrollable-div ">
            <p color="blue">
              <b>Government Exams</b>
            </p>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <p>
                  <a href="#upsc">UPSC</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#jee">IIT,JEE,NEET UG and Foundation</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#gate">Gate,ESE and IIT-JAM</a>
                </p>
                <p>
                  <a href="#ca">CA,CS and CMA</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#judiciary">Judiciary Exams</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#net">NET Exams</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#cat">CAT &amp; Other MBA Entrance Tests</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#bank">Bank,SSC and Railway Exams</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#defence">Defence Exams</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#law">CLAT &amp; Other Law Entrance Exams</a>
                </p>
              </li>
            </ul>
            <p>
              <b> Private exams</b>
            </p>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <p>
                  <a href="#eng">Engineering Entrance Exams</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#manage">Management &amp; Business</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#abroad">Exams for Study Abroad Studies</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#health">
                    Private Healthcare &amp; Paramedical Exams
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#fashion">Fashion,Design &amp;Creative Arts Exams</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#hotel">Hotel Management</a>
                </p>
              </li>
              <li>
                <p>
                  <a href="#journal">
                    {" "}
                    Journalism &amp; Mass Communication Exams
                  </a>
                </p>
              </li>
              <br />
            </ul>
            <br />
            <br />
            <br />
          </div>
          <div className="right">
            <p className="margin" id="upsc">
              <Link to="/upsc">&nbsp;&nbsp;&nbsp;&nbsp;UPSC</Link>
            </p>
            <div className="right-divs">
              <div className="div">
                <img src="ssc.png" />
                <br />
                <br />
                <p>UPSC CSE -Optional</p>
              </div>
              <div className="div">
                <img src="upsc.png" />
                <br />
                <br />
                <p>IFOS</p>
              </div>
              <div className="div">
                <img src="ssc.png" />
                <br />
                <br />
                <p>ESE/IES</p>
              </div>
            </div>
            <br />
            <br />
            <p className="margin" id="jee">
              <Link to="/iit">
                &nbsp;&nbsp;&nbsp;&nbsp;IIT,JEE,NEET UG and Foundation
              </Link>
            </p>
            <div className="right-divs">
              <div className="div">
                <img src="iit.png" />
                <br />
                <br />
                <p>IIT JEE</p>
              </div>
              <div className="div">
                <img src="neet.png" />
                <br />
                <br />
                <p>NEET UG</p>
              </div>
              <div className="div">
                <img src="ssc.png" />
                <br />
                <br />
                <p>SRG</p>
              </div>
            </div>
            <div className="right-divs">
              <div className="div">
                <img src="foundation.png" />
                <br />
                <br />
                <p>IIT JEE</p>
              </div>
            </div>
            <br />
            <br />
            <p className="margin" id="gate">
              <Link to="/gate">
                &nbsp;&nbsp;&nbsp;&nbsp;GATE,ESE and IIT-JAM
              </Link>
            </p>
            <div className="right-divs">
              <div className="div">
                <img src="ssc.png" />
                <br />
                <br />
                <p>Gate - CSIT,DSAI & Interview Preparation</p>
              </div>
              <div className="div">
                <img src="ssc.png" />
                <br />
                <br />
                <p>GATE & ESE - ME & CH</p>
              </div>
              <div className="div">
                <img src="ssc.png" />
                <br />
                <br />
                <p>GATE & ESE -Civil</p>
              </div>
            </div>
            <div className="right-divs">
              <div className="div">
                <img src="ssc.png" />
                <br />
                <br />
                <p>Gate & ESE -EE, EC</p>
              </div>
              <div className="div">
                <img src="ssc.png" />
                <br />
                <br />
                <p>IIT - JAM</p>
              </div>
            </div>
            <br />
            <br />
            <p className="margin" id="ca">
              <Link to="/ca">&nbsp;&nbsp;&nbsp;&nbsp;CA, CS, and CMA</Link>
            </p>
            <div className="right-divs">
              <div className="div">
                <img src="ssc.png" />
                <br />
                <br />
                <p>CA Final Group 1</p>
              </div>
              <div className="div">
                <img src="ssc.png" />
                <br />
                <br />
                <p>CA Final Group 2</p>
              </div>
              <div className="div">
                <img src="ssc.png" />
                <br />
                <br />
                <p>CA Intermediate</p>
              </div>
            </div>
            <div className="right-divs">
              <div className="div">
                <img src="csexecutive.png" />
                <br />
                <br />
                <p>CSEET</p>
              </div>
            </div>
            <br />
            <br />
            <p className="margin" id="judiciary">
              <Link to="/judiciary">
                &nbsp;&nbsp;&nbsp;&nbsp;Judiciary Exams
              </Link>
            </p>
            <div className="right-divs">
              <div className="div">
                <img src="upsc.png" />
                <br />
                <br />
                <p>Judiciary - PCS(J)</p>
              </div>
              <div className="div">
                <img src="ssc.png" />
                <br />
                <br />
                <p>Judiciary HJS</p>
              </div>
            </div>
            <br />
            <p className="margin" id="net">
              <Link to="/net">&nbsp;&nbsp;&nbsp;&nbsp;NET Exams</Link>
            </p>
            <div className="right-divs">
              <div className="div">
                <img src="csir.png" />
                <br />
                <br />
                <p>CSIR-UGC NET</p>
              </div>
              <div className="div">
                <img src="nta.png" />
                <br />
                <br />
                <p>NTA-UGC-NET & SET Exams</p>
              </div>
            </div>
            <br />
            <p className="margin" id="cat">
              <Link to="/cat">
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;CAT & Other MBA Entrance Tests
              </Link>
            </p>
            <div className="right-divs">
              <div className="div">
                <img src="cat.png" />
                <br />
                <br />
                <p>CAT & Other MBA Entrance Tests</p>
              </div>
              <div className="div">
                <img src="ssc.png" />
                <br />
                <br />
                <p>GD, PI & WAT for CAT & OMETs</p>
              </div>
            </div>
            <br />
            <p className="margin" id="bank">
              <Link to="/bank">
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;Bank, SSC & Railway Exams
              </Link>
            </p>
            <div className="right-divs">
              <div className="div">
                <img src="bank.png" />
                <br />
                <br />
                <p>Bank Exams</p>
              </div>
              <div className="div">
                <img src="ssc.png" />
                <br />
                <br />
                <p>CAIIB Exams</p>
              </div>
              <div className="div">
                <img src="sssc.png" />
                <br />
                <br />
                <p>SSC Exams(Non Technical)/Railway Exams</p>
              </div>
            </div>
            <div className="right-divs">
              <div className="div">
                <img src="ssc.png" />
                <br />
                <br />
                <p>JAIIB Exams</p>
              </div>
            </div>
            <br />
            <p className="margin" id="defence">
              <Link to="/defence"> &nbsp;&nbsp;&nbsp;&nbsp;Defence Exams</Link>
            </p>
            <div className="right-divs">
              <div className="div">
                <img src="bank.png" />
                <br />
                <br />
                <p>CDS</p>
              </div>
              <div className="div">
                <img src="nda.png" />
                <br />
                <br />
                <p>NDA</p>
              </div>
              <div className="div">
                <img src="ssc.png" />
                <br />
                <br />
                <p>Agnipath exams</p>
              </div>
            </div>
            <div className="right-divs">
              <div className="div">
                <img src="cds.png" />
                <br />
                <br />
                <p>CAPF</p>
              </div>
            </div>
            <br />
            <p className="margin" id="law">
              <Link to="/clat">
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;CLAT & Other 5-year LLB Exams
              </Link>
            </p>
            <div className="right-divs">
              <div className="div">
                <img src="clat.png" />
                <br />
                <br />
                <p>CLAT </p>
              </div>
              <div className="div">
                <img src="nda.png" />
                <br />
                <br />
                <p>AILET</p>
              </div>
              <div className="div">
                <img src="ssc.png" />
                <br />
                <br />
                <p>LSAT</p>
              </div>
            </div>
            <div className="right-divs">
              <div className="div">
                <img src="nda.png" />
                <br />
                <br />
                <p>MH CET</p>
              </div>
              <div className="div">
                <img src="ssc.png" />
                <br />
                <br />
                <p>SLAT</p>
              </div>
            </div>
            <br />
            <br />
            <p className="margin" id="eng">
              <Link to="/engineer">
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;Engineering Entrance Exams
              </Link>
            </p>
            <div className="right-divs">
              <div className="div">
                <img src="sssc.png" />
                <br />
                <br />
                <p>BITSAT</p>
              </div>
              <div className="div">
                <img src="cat.png" />
                <br />
                <br />
                <p>VITEEE</p>
              </div>
              <div className="div">
                <img src="cbse.png" />
                <br />
                <br />
                <p>UPESEAT</p>
              </div>
            </div>
            <br />
            <p className="margin" id="manage">
              <Link to="/manage">
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;Management &amp; Business
              </Link>
            </p>
            <div className="right-divs">
              <div className="div">
                <img src="business.png" />
                <br />
                <br />
                <p>CAT</p>
              </div>
              <div className="div">
                <img src="business2.png" />
                <br />
                <br />
                <p>3-year LLB Entrance Exams</p>
              </div>
              <div className="div">
                <img src="ssc.png" />
                <br />
                <br />
                <p>CLAT PG &amp; Other Entrance Exams</p>
              </div>
            </div>
            <div className="right-divs">
              <div className="div">
                <img src="ca.png" />
                <br />
                <br />
                <p>NMAT</p>
              </div>
              <div className="div">
                <img src="gate.png" />
                <br />
                <br />
                <p>XAT</p>
              </div>
            </div>
            <br />
            <p className="margin" id="abroad">
              <Link to="/abroad">
                &nbsp;&nbsp;&nbsp;&nbsp;Exams for Abroad Studies
              </Link>
            </p>
            <div className="right-divs">
              <div className="div">
                <img src="business.png" />
                <br />
                <br />
                <p>GMAT</p>
              </div>
              <div className="div">
                <img src="business2.png" />
                <br />
                <br />
                <p>GRE</p>
              </div>
              <div className="div">
                <img src="ssc.png" />
                <br />
                <br />
                <p>SAT</p>
              </div>
            </div>
            <br />
            <p className="margin" id="health">
              <Link to="/health">
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;Private Healthcare and Paramedical Exams
              </Link>
            </p>
            <div className="right-divs">
              <div className="div">
                <img src="business.png" />
                <br />
                <br />
                <p>Apollo Medskills Exams</p>
              </div>
              <div className="div">
                <img src="business.png" />
                <br />
                <br />
                <p>AIIMS Paramedical Exams</p>
              </div>
              <div className="div">
                <img src="business.png" />
                <br />
                <br />
                <p>Max Healthcare skill Development Exams</p>
              </div>
            </div>
            <br />
            <p className="margin" id="fashion">
              <Link to="/fashion">
                &nbsp;&nbsp;&nbsp;&nbsp;Fashion,Design &amp; Creative Arts Exams
              </Link>
            </p>
            <div className="right-divs">
              <div className="div">
                <img src="business.png" />
                <br />
                <br />
                <p>NID-DAT</p>
              </div>
              <div className="div">
                <img src="business.png" />
                <br />
                <br />
                <p>MITID DAT</p>
              </div>
            </div>
            <br />
            <p className="margin" id="hotel">
              <Link to="/hotel">&nbsp;&nbsp;&nbsp;&nbsp;Hotel Management</Link>
            </p>
            <div className="right-divs">
              <div className="div">
                <img src="business.png" />
                <br />
                <br />
                <p>Oberoi STEP</p>
              </div>
              <div className="div">
                <img src="business.png" />
                <br />
                <br />
                <p>IHM Aurangabad Admission Test</p>
              </div>
            </div>
            <br />
            <p className="margin" id="journal">
              <Link to="/journal">
                {" "}
                &nbsp;&nbsp;&nbsp;&nbsp;Journalism &amp;Mass Communication Exams
              </Link>
            </p>
            <div className="right-divs">
              <div className="div">
                <img src="business.png" />
                <br />
                <br />
                <p>IIMC Entrance Exam</p>
              </div>
              <div className="div">
                <img src="business.png" />
                <br />
                <br />
                <p>ACJ Entrance Exam</p>
              </div>
              <div className="div">
                <img src="business.png" />
                <br />
                <br />
                <p>Symbiosis SET</p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
