

import React from "react";
import Link from "next/link";
import useSWR from "swr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Socialicon from "./Socialicon"
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Header = () => {
  function toggleMenu() {
    let nav = document.querySelector(".nav");
    let toggle = document.querySelector(".toggle");
    nav.classList.toggle("active");
    toggle.classList.toggle("active");
    const x = document.getElementById("navigation");
    if (x.style.display === "none") {
      x.style.display = "block";
      // x.style.position = "absolute";
      x.style.background = "lightgray";
      x.style.zIndex = "100";
      // x.style.marginLeft = "74px";
      x.style.marginTop = "-44px";
      // x.style.width = "94%";
    } else {
      x.style.display = "none";
    }

    // document.getElementById("navbar").style.textAlign = "center";
  }

  // const url =
  //   "https://cms.schoolscoop.co.in/renaissance/items/config?fields=title,tagline,address,phone,email,mobile,logo.*";
  // const { data, error } = useSWR(url, fetcher);
  // if (error) {
  //   return <div></div>;
  // }
  // if (!data) {
  //   return <div></div>;
  // }

  return (
    <div className="p-0 pr-0 m-0  container-fluid">
      <div className="row m-0 p-0 bg_red w-100 flex_heder">
        <div className="col-lg-1 ">

        </div>
        <div className="mt-1 col-lg-4 col-md-6 col-sm-6 col-xs-12">
          <CallIcon className="mr-2" loading="lazy" />
          111111111,222222222
        </div>
        <div className="col-lg-3 "> </div>
        <div className="mt-1 col-lg-3 col-md-6 col-sm-6 col-xs-12" style={{ textAlign: "center" }}>
          <MailIcon className="mr-2" loading="lazy" />
          Maitretech@example.com
        </div>

      </div>

      <div className="p-0 m-0 row " style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }}>
        <div
          className="p-0 m-0 col-xl-2 col-lg-4 col-md-5 col-sm-5"
          style={{ textAlign: "center", }}
        >
          <img
            style={{ width: "120px" }}
            // src={data?.data[0]?.logo?.data?.full_url}
            src="/images/logo9.png"
            alt="logo"
            className="mt-1 mb-3"
          />
        </div>
        <div className="p-0 mt-4 col-xl-3 col-lg-4 col-md-6 col-sm-6 scl_name" style={{ textAlign: "center" }}>
          <span style={{
            color: "#d10000", fontSize: "25px", textAlign: "center",
            //  fontVariantCaps: "small-caps"
            fontFamily: "curveFont"

          }}>
            <Link href="/">
              <a>
                {/* {data?.data[0]?.title} */}
                Maitre  Divine Public School
              </a>
            </Link>
          </span>
          <div className="mt-2 col-lg-12 col-md-12 col-sm-12 toggle menuicon" onClick={toggleMenu}>
            &nbsp;
            <FontAwesomeIcon icon={faBars} />
            <span>&ensp;MENU</span>
          </div>
        </div>
        <div className="icons">
          <ul>
            <Socialicon />
          </ul>
        </div>

        <div className="p-0 m-0   col-xl-7 col-lg-12 col-md-8 col-sm-12 hader_menu1">
          <div className="nav navcolor" id="navbar" style={{ marginTop: "20px" }}>
            <ul id="navigation" className="lgmedia">
              <li className="mr-3 home_clr home_clrhvr">
                <Link href="/">Home</Link>
              </li>

              <li>
                <button className="mr-3 dropdownbtn">
                  About Us <FontAwesomeIcon icon={faCaretDown} />
                  <div className="dropdownmenu">
                    <li className="mr-3 home_clrhvr1" style={{ marginRight: "0px!important" }}>
                      <Link href="/About">
                        <a className="mr-3" style={{ margin: "19px!important" }}>About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/Chairman">
                        <a>Chairman Desk</a>
                      </Link>
                    </li>
                    <li style={{ marginBottom: "13px" }}>
                      <Link href="/Director">
                        <a>Director desk</a>
                      </Link>
                    </li>
                    <li style={{ marginBottom: "13px" }}>
                      <Link href="/Principal">
                        <a>principal's desk</a>
                      </Link>
                    </li>


                  </div>
                </button>

              </li>

              <li>
                <button className="mr-3 dropdownbtn">
                  Facilities <FontAwesomeIcon icon={faCaretDown} />
                  <div className="dropdownmenu">
                    <li className="home_clrhvr1" style={{ marginTop: "-4px", marginBottom: "10px" }}>
                      <Link href="/Facilities">
                        <a>Facilities</a>
                      </Link>
                    </li>

                  </div>
                </button>

              </li>
              <li>
                <button className="mr-3 dropdownbtn">
                  Academics <FontAwesomeIcon icon={faCaretDown} />
                  <div className="dropdownmenu">
                    <li className="home_clrhvr1">
                      <Link href="/AdmissionProcess">
                        <a>Admission Process</a>
                      </Link>
                    </li>

                    <li style={{ marginBottom: "13px" }}>
                      {/* <Link href="/TransferCertificate"> */}
                      <Link href="LatestUpdate">
                        <a>LatestUpdate</a>
                      </Link>
                    </li>
                  </div>
                </button>
              </li>
              <li className="mr-3 home_clr home_clrhvr">
                <Link href="/Gallery">Gallery</Link>
              </li>
              {/* <li>
                 <button className="ml-2 mr-3 dropdownbtn Mandatory_border">
                   <a href="/Mandatory-converted.pdf" target="_blank" rel="noopener noreferrer">Mandatory disclosure
                   </a>
                 </button>
               </li> */}
              <li className="mr-3 home_clr home_clrhvr">
                <Link href="/Contact">
                  <a> Contact Us  </a>

                </Link>

              </li>
              <li className=" login_btn" style={{ marginLeft: "15px" }}>
                <Link href="#">
                  <a className="text-light"> Login</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;


// import React from "react";
// import Link from "next/link";
// import useSWR from "swr";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import CallIcon from '@material-ui/icons/Call';
// import Socialicon from "./Socialicon"
// import MailIcon from '@material-ui/icons/Mail';

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// const Header = () => {
//   function toggleMenu() {
//     let nav = document.querySelector(".nav");
//     let toggle = document.querySelector(".toggle");
//     nav.classList.toggle("active");
//     toggle.classList.toggle("active");
//     const x = document.getElementById("navigation");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//       // x.style.position = "absolute";
//       x.style.background = "lightgray";
//       x.style.zIndex = "100";
//       x.style.marginLeft = "74px";
//       x.style.marginTop = "-44px";
//       // x.style.width = "94%";
//     } else {
//       x.style.display = "none";
//     }

//     document.getElementById("navbar").style.textAlign = "center";
//   }

//   const url =
//     "https://cms.schoolscoop.co.in/renaissance/items/config?fields=title,tagline,address,phone,email,mobile,logo.*";
//   const { data, error } = useSWR(url, fetcher);
//   if (error) {
//     return <div></div>;
//   }
//   if (!data) {
//     return <div></div>;
//   }

//   return (
//     <div className="p-0 pr-0 m-0 mr-0 container-fluid">
//       <div className="row bg_red">
//         <div className="col-lg-1 ">

//         </div>
//         <div className="mt-1 col-lg-3">  
//           <CallIcon />
//             9993675288 ,
//             9752204016 
//         </div>
//         <div className="col-lg-4 "> </div>
//         <div className="mt-1 col-lg-3 "> 
//             <MailIcon />
//             renaissancebpl@yahoo.in 
//         </div>

//       </div>
//       <div className="p-0 m-0 mt-1 row " style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }}>
//         <div
//           className="p-0 m-0 col-xl-4 col-lg-4 col-md-5 col-sm-5"
//           style={{ textAlign: "center", }}
//         >
//           <img
//             style={{ width: "100px" }}
//             // src="/images/schoollogo.png"
//             src={data?.data[0]?.logo?.data?.full_url}
//             alt="logo"
//             className="mb-3"
//           />
//         </div>
//         <div className="p-0 mt-4 col-xl-6 col-lg-4 col-md-6 col-sm-6 scl_name" style={{ textAlign: "center" }}>
//           <span style={{
//             color: "#000", fontSize: "29px", textAlign: "center",
//             // fontVariantCaps: "small-caps"
//           }}
//             className="school_family"
//           >
//             <Link href="/">
//               <a> {data?.data[0]?.title} </a>

//             </Link>
//             {/* {data?.data[0]?.title}  */}
//             {/* Renaissance Divine
//             Public School */}
//           </span>

//           <div className="mt-2 col-lg-12 col-md-12 col-sm-12 toggle menuicon" onClick={toggleMenu}>
//             &nbsp;
//             <FontAwesomeIcon icon={faBars} />
//             <span>&ensp;MENU</span>
//           </div>
//         </div>
//         <div className="icons">
//           <ul>
//             <Socialicon />
//           </ul>
//         </div>

//         <div className="p-0 m-0 mt-0 col-xl-12 col-lg-12 col-md-8 col-sm-12 hader_menu1 light_gray"
//           style={{ textAlign: "center" }}>
//           <div className="nav navcolor" id="navbar"
//             //  style={{ marginTop: "45px" }}
//             style={{ marginLeft: "250px" }}
//           >
//             <ul id="navigation" className="lgmedia">
//               <li className="mr-5 home_clr home_clrhvr">
//                 <Link href="/">Home</Link>
//               </li>

//               <li>
//                 <button className="mr-5 dropdownbtn">
//                   About Us <FontAwesomeIcon icon={faCaretDown} />
//                   <div className="dropdownmenu">
//                     <li className="mr-3" style={{ marginRight: "0px!important" }}>
//                       <Link href="/About">
//                         <a className="mr-3" style={{ margin: "19px!important" }}>About</a>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/Chairman">
//                         <a>Chairman Desk</a>
//                       </Link>
//                     </li>
//                     <li style={{ marginBottom: "13px" }}>
//                       <Link href="/Director">
//                         <a>Director desk</a>
//                       </Link>
//                     </li>
//                     <li style={{ marginBottom: "13px" }}>
//                       <Link href="/Principal">
//                         <a>principal's desk</a>
//                       </Link>
//                     </li>


//                   </div>
//                 </button>

//               </li>

//               <li>
//                 <button className="mr-5 dropdownbtn">
//                   Facilities <FontAwesomeIcon icon={faCaretDown} />
//                   <div className="dropdownmenu">
//                     <li style={{ marginTop: "-4px", marginBottom: "10px" }}>
//                       <Link href="/Facilities">
//                         <a>Facilities</a>
//                       </Link>
//                     </li>

//                   </div>
//                 </button>

//               </li>
//               <li>
//                 <button className="mr-5 dropdownbtn">
//                   Academics <FontAwesomeIcon icon={faCaretDown} />
//                   <div className="dropdownmenu">
//                     <li>
//                       <Link href="/AdmissionProcess">
//                         <a>Admission Process</a>
//                       </Link>
//                     </li>

//                     <li style={{ marginBottom: "13px" }}>
//                       <Link href="/TransferCertificate">
//                         <a>Transfer Certificate</a>
//                       </Link>
//                     </li>
//                   </div>
//                 </button>
//               </li>
//               <li className="mr-5 home_clr home_clrhvr">
//                 <Link href="/Gallery">Gallery</Link>
//               </li>
//               <li>
//                 <button className="ml-2 mr-5 dropdownbtn Mandatory_border">
//                   <a href="/Mandatory-converted.pdf" target="_blank" rel="noopener noreferrer">Mandatory disclosure
//                   </a>
//                 </button>
//               </li>
//               <li >
//                 <Link href="/Contact">
//                   <button className="contact_btn"><a> Contact Us  </a>
//                   </button>

//                 </Link>

//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Header;





// import React from "react";
// import Link from "next/link";
// import useSWR from "swr";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import Socialicon from "./Socialicon"

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// const Header = () => {
//   function toggleMenu() {
//     let nav = document.querySelector(".nav");
//     let toggle = document.querySelector(".toggle");
//     nav.classList.toggle("active");
//     toggle.classList.toggle("active");
//     const x = document.getElementById("navigation");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//       // x.style.position = "absolute";
//       x.style.background = "lightgray";
//       x.style.zIndex = "100";
//       x.style.marginLeft = "74px";
//       x.style.marginTop = "-44px";
//       // x.style.width = "94%";
//     } else {
//       x.style.display = "none";
//     }

//     document.getElementById("navbar").style.textAlign = "center";
//   }

//   const url =
//     "https://cms.schoolscoop.co.in/renaissance/items/config?fields=title,tagline,address,phone,email,mobile,logo.*";
//   const { data, error } = useSWR(url, fetcher);
//   if (error) {
//     return <div></div>;
//   }
//   if (!data) {
//     return <div></div>;
//   }

//   return (
//     <div className="p-0 pr-0 m-0 mr-0 container-fluid">

//       <div className="p-0 m-0 mt-3 row " style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }}>
//         <div
//           className="p-0 m-0 col-xl-2 col-lg-4 col-md-5 col-sm-5"
//           style={{ textAlign: "center", }}
//         >
//           <img
//             style={{ width: "150px" }}
//             // src="/images/schoollogo.png"
//             src={data?.data[0]?.logo?.data?.full_url}
//             alt="logo"
//             className="mb-3"
//           />
//         </div>
//         <div className="p-0 mt-4 col-xl-3 col-lg-4 col-md-6 col-sm-6 scl_name" style={{ textAlign: "center" }}>
//           <span style={{
//             color: "#d10000", fontSize: "29px", textAlign: "center",
//             fontVariantCaps: "small-caps"
//           }}>
//             <Link href="/">
//               <a> {data?.data[0]?.title} </a>

//             </Link>
//              {/* {data?.data[0]?.title}  */}
//             {/* Renaissance Divine
//             Public School */}
//           </span>

//           <div className="mt-2 col-lg-12 col-md-12 col-sm-12 toggle menuicon" onClick={toggleMenu}>
//             &nbsp;
//             <FontAwesomeIcon icon={faBars} />
//             <span>&ensp;MENU</span>
//           </div>
//         </div>
//         <div className="icons">
//           <ul>
//             <Socialicon />
//           </ul>
//         </div>
//         {/* <div className="mt-2 col-lg-4 col-md-12 col-sm-12 toggle menuicon" onClick={toggleMenu}>
//           &nbsp;
//                 <FontAwesomeIcon icon={faBars} />
//           <span>&ensp;MENU</span>
//         </div> */}
//         <div className="p-0 m-0 mt-2 col-xl-7 col-lg-12 col-md-8 col-sm-12 hader_menu1">
//           <div className="nav navcolor" id="navbar" style={{ marginTop: "45px" }}>
//             <ul id="navigation" className="lgmedia">
//               <li className="mr-3 home_clr home_clrhvr">
//                 <Link href="/">Home</Link>
//               </li>

//               <li>
//                 <button className="mr-3 dropdownbtn">
//                   About Us <FontAwesomeIcon icon={faCaretDown} />
//                   <div className="dropdownmenu">
//                     <li className="mr-3" style={{ marginRight: "0px!important" }}>
//                       <Link href="/About">
//                         <a className="mr-3" style={{ margin: "19px!important" }}>About</a>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/Chairman">
//                         <a>Chairman Desk</a>
//                       </Link>
//                     </li>
//                     <li style={{ marginBottom: "13px" }}>
//                       <Link href="/Director">
//                         <a>Director desk</a>
//                       </Link>
//                     </li>
//                     <li style={{ marginBottom: "13px" }}>
//                       <Link href="/Principal">
//                         <a>principal's desk</a>
//                       </Link>
//                     </li>


//                   </div>
//                 </button>

//               </li>

//               <li>
//                 <button className="mr-3 dropdownbtn">
//                   Facilities <FontAwesomeIcon icon={faCaretDown} />
//                   <div className="dropdownmenu">
//                     <li style={{ marginTop: "-4px", marginBottom: "10px" }}>
//                       <Link href="/Facilities">
//                         <a>Facilities</a>
//                       </Link>
//                     </li>

//                   </div>
//                 </button>

//               </li>
//               <li>
//                 <button className="mr-3 dropdownbtn">
//                   Academics <FontAwesomeIcon icon={faCaretDown} />
//                   <div className="dropdownmenu">
//                     <li>
//                       <Link href="/AdmissionProcess">
//                         <a>Admission Process</a>
//                       </Link>
//                     </li>

//                     <li style={{ marginBottom: "13px" }}>
//                       <Link href="/TransferCertificate">
//                         <a>Transfer Certificate</a>
//                       </Link>
//                     </li>
//                   </div>
//                 </button>
//               </li>
//               <li className="mr-3 home_clr home_clrhvr">
//                 <Link href="/Gallery">Gallery</Link>
//               </li>
//               <li>
//                 <button className="ml-2 mr-3 dropdownbtn Mandatory_border">
//                   <a href="/Mandatory-converted.pdf" target="_blank" rel="noopener noreferrer">Mandatory disclosure
//                   </a>
//                 </button>
//               </li>
//               <li >
//                 <Link href="/Contact">
//                   <button className="contact_btn"><a> Contact Us  </a>
//                   </button>

//                 </Link>

//               </li> 
//             </ul>
//           </div> 
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Header;

