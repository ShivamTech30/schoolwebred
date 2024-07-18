import Image from 'next/image';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const About = () => {
  return (
    <div className='mt-4 about'>
      <div className='container'>
        <Tabs>
          <div className='aboutnav'>
            <TabList>
              <Tab><button>ABOUT Us</button></Tab>
              <Tab><button>MEMORIES</button></Tab>
              <Tab><button>THEN AND NOW</button></Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className='aemptydiv'>
              <div className='info' id='Aboutus'>
                <h3>About Us</h3>
                <p className='p'>The feelings of the affinity, the comradeship, the togetherness and the brotherhood resulting from the House and School spirit, acquired by the experience of living, eating, sleeping and fighting together can only be really experienced in a residential school. The rivalry of peers and the pranks played on one another as children; few secrets hidden deep within and lots more can be relished when recollected, in the presence of old schoolmates. It is said, 'When the going gets tough, the tough get going' and with immense fondness one looks back to school days when everything seemed a tribulation whether it was PT, Drill, Gym, Games, Camps, Hobbies and even moral lectures.

                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className='aemptydiv'>
              <div className='info'>
                <h3>Memories</h3>
                <p className='p'>The feelings of the affinity, the comradeship, the togetherness and the brotherhood resulting from the House and School spirit, acquired by the experience of living, eating, sleeping and fighting together can only be really experienced in a residential school. The rivalry of peers and the pranks played on one another as children; few secrets hidden deep within and lots more can be relished when recollected, in the presence of old schoolmates. It is said, <b>'When the going gets tough, the tough get going'</b> and with immense fondness one looks back to school days when everything seemed a tribulation whether it was PT, Drill, Gym, Games, Camps, Hobbies and even moral lectures. It is to reminisce those precious and most memorable moments of childhood when so much was said and done in innocence that we have made the memories section of the school website.</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className='aemptydiv'>

              <div className='info'>
                <h3>THEN AND NOW</h3>
                <p className='p'>The feelings of the affinity, the comradeship, the togetherness and the brotherhood resulting from the House and School spirit, acquired by the experience of living, eating, sleeping and fighting together can only be really experienced in a residential school. The rivalry of peers and the pranks played on one another as children; few secrets hidden deep within and lots more can be relished when recollected, in the presence of old schoolmates. It is said, 'When the going gets tough, the tough get going' and with immense fondness one looks back to school days when everything seemed a tribulation whether it was PT, Drill, Gym, Games, Camps, Hobbies and even moral lectures.

                </p>
              </div>

            </div>
          </TabPanel>
          <TabPanel>
            <div className='aemptydiv'>
              <div className='info' >
                <h3>Our Founder</h3>

                <div className='thennow'>
                  <div className='grid'>
                    <div className='col8'>
                      <h4 style={{ float: 'left' }}><i>A Tribute to our founder Wg Cdr S.S.Gyani</i></h4><br /><br /><br /><br />
                      <p>Born on 19th February, 1919, Wing Commander S.S.Gyani, the Founder Director of St. Soldier Divine Public Schools at Panchkula and Banur (Patiala) and Pinegrove Schools at Dharampur and Subathu left for his heavenly abode on 30th Sept 2004.</p>
                      <p>One is always sad and disappointed to loose ones elders no matter what the age as we humans always believe that they will always be there for us no matter their age. But when the call comes from the Almighty, one must go and we can only help in the soul`s journey, with prayer. </p>
                      <p>On hearing the news there was a kind of stillness in the whole campus. It seemed as if every inch of the place was agonized at the loss of its creator, father and initiator. No words, no speech or consolation can feel this void. The whole place was desolate as the man who had envisioned these prestigious institutions had sailed away to unknown horizons leaving us stranded. Each one of us was shocked beyond comprehension at this irreparable loss. </p>

                    </div>
                    <div className='col4'><Image src='/images/Founder.jpg' height={400} width={250} alt='now' /></div>
                    <div className='para'>
                      <p>Wg Cdr Gyani knew no rest and worked relentlessly to build these institutions from which many hundreds have got their livelihood and many thousands have got educated. He worked his way up to success with determination and hard work. `By Toil he reached the Stars`. He never shied away from work and placed duty before self and even family, always and every time. Forever ready to take challenges and had a never-say-die attitude. His mind was alive while the body started giving way, about which he said: <a href="founder.aspx" >read more</a> </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default About;


// old//

// import Image from "next/image";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import { useState, ref } from "react";
// import "react-tabs/style/react-tabs.css";
// import useSWR from "swr";

// // const fetcher = (...args) => fetch(...args).then((res) => res.json());
// const About = () => {
//   const [textqqchnge, settextqqchnge] = useState("textqqchnge1")
//   const dataa = {
//     body: [
//       {
//         _uid: "BUY6Drn9e1",
//         component: "About",
//         headline: "Foo",
//       },
//       {
//         _uid: "gJZoSLkfZV",
//         component: "Director Desk",
//         title: "Bar",
//       },
//       {
//         _uid: "X1JAfdsZxy",
//         component: "Principle Desk",
//         headline: "Another headline",
//       },
//     ],
//   };

//   // const url =
//   //   "https://cms.schoolscoop.co.in/renaissance/items/tabs?fields=title,heading,body,images.directus_files_id.data.full_url";
//   // const { data, error } = useSWR(url, fetcher);
//   // if (error) {
//   //   return <div>Error...</div>;
//   // }
//   // if (!data) {
//   //   return <div>No Data...</div>;
//   // }

//   const ReadMore = () => {
//     settextqqchnge("textqqchnge")
//   }

//   // const ReadLess = () => {
//   //   settextqqchnge("textqqchnge1")
//   // }


//   return (
//     <div className="about" style={{ marginTop: "20px" }}>
//       <div className="container">
//         <Tabs >
//           <div className="aboutnav" >
//             <TabList style={{}}>
//               <Tab  >
//                 <button className="onfocuts_btn"> About school
//                   </button>
//               </Tab>
//               <Tab  >
//                 <button className="onfocuts_btn">  About memories
//                   .</button>
//               </Tab>
//               <Tab  >
//                 <button className="onfocuts_btn">  About Facilities
//                   .</button>
//               </Tab>
//             </TabList>
//           </div>
//           <TabPanel  >
//             <div className="aemptydiv">
//               <div className="info" style={{ display: "flex" }}>
//                 <div>
//                   <h3>headerName</h3>
//                   <p className={`${textqqchnge}`}>
//                     he Maitretech Divine Public School is located at Kolar Road, Bhopal,
//                     Behine Fine Avenue in the lake city of Bhopal in a spacious building.
//                     The institution is imparting education t the students on the lines of Public Schools.
//                     The emphasis is on providing the child with an enviornment conducive to his growth where
//                     he finds his own talents & develops them to reach the pinnacle of success. We propose to
//                     offer the curriculum as prescribed by CBSE ( Central Board of Secondary Education ) New Delhi
//                   </p>
//                   <span onClick={ReadMore} id="read_more11">read more...</span>
//                 </div>

//                 <div style={{ width: "25%" }}>
//                   <div className="founderdiv"  >
//                     <img
//                       src="/images/is3.jpg"
//                       alt="now"
//                       width="250px"
//                       height="auto"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </TabPanel>

//         </Tabs>
//       </div>
//     </div>
//   );
// };
// export default About;

// ///new///
// // import Image from "next/image";
// // import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// // import { useState,ref } from "react";
// // import "react-tabs/style/react-tabs.css";
// // import useSWR from "swr";

// // const fetcher = (...args) => fetch(...args).then((res) => res.json());
// // const About = () => {

// //   const dataa = {
// //     body: [
// //       {
// //         _uid: "BUY6Drn9e1",
// //         component: "About",
// //         headline: "Foo",
// //       },
// //       {
// //         _uid: "gJZoSLkfZV",
// //         component: "Director Desk",
// //         title: "Bar",
// //       },
// //       {
// //         _uid: "X1JAfdsZxy",
// //         component: "Principle Desk",
// //         headline: "Another headline",
// //       },
// //     ],
// //   };

// //   const url =
// //     "https://cms.schoolscoop.co.in/renaissance/items/tabs?fields=title,heading,body,images.directus_files_id.data.full_url";
// //   const { data, error } = useSWR(url, fetcher);
// //   if (error) {
// //     return <div>Error...</div>;
// //   }
// //   if (!data) {
// //     return <div>No Data...</div>;
// //   }

// //   const ReadMore = () => {

// //   }

// //   // const ReadLess = () => {
// //   //   settextqqchnge("textqqchnge1")
// //   // }


// //   return (
// //     <div className="about" style={{ marginTop: "20px" }}>
// //       <div className="container">
// //         <Tabs >
// //           <div className="aboutnav" >
// //             <TabList style={{}}>
// //               {data.data.map((item, i) => {

// //                 return (
// //                   <Tab key={i}>
// //                     <button className="onfocuts_btn">{item?.title}</button>
// //                   </Tab>
// //                 );
// //               })}
// //             </TabList>
// //           </div>
// //           {data.data.map((items, i) => {
// //             console.log(items)
// //             return (
// //               <TabPanel key={i}>
// //                 <div className="aemptydiv">
// //                   <div className="info" style={{ display: "flex" }}>
// //                     <div>
// //                       <h3>{items.heading}</h3>
// //                       {
// //                         items?.body?.length ===250 ?(<> <p>{items?.body.slice(0, 950)}</p>
// //                          <span onClick={ReadMore}>read more...</span>
// //                        </>):
// //                        ( <> <p>{items?.body.slice(0, 240)}</p>
// //                         <span onClick={ReadMore}>read more...</span></>)
// //                       }
// //                     </div>
// //                     <div style={{ width: "25%" }}>
// //                       {items.images.map((img, index) => {
// //                         return (
// //                           <div className="founderdiv" key={index}>
// //                             <img
// //                               src={img?.directus_files_id?.data?.full_url}
// //                               alt="now"
// //                               width="250px"
// //                               height="auto"
// //                             />
// //                           </div>
// //                         );
// //                       })}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </TabPanel>
// //             );
// //           })}
// //         </Tabs>
// //       </div>
// //     </div>
// //   );
// // };
// // export default About;
