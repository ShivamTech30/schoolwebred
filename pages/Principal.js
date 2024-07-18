import React from 'react'
import useSWR from 'swr';
import Layout from '../components/layouts/Layout'



const Principal = () => {
   

    return (
        <Layout>
            <div className="container-fluid">
                <div className='about'>
                    <div className='container'>
                        <div className='info'>
                            <div className='director'>
                                <div className='directorinfo' sm='8'>
                                    <div className=''>
                                        <h3>
                                            PRINCIPAL'S MESSAGE :
                                        {/* {data?.data[0]?.description}  */}
                                        </h3>
                                        <p style={{ fontSize: '1.05rem', textAlign: 'justify', marginLeft:"20px" }}>

                                            In Maitretech Divine Public School, Bhopal we see the beauty in variety and are proud to embrace methods that
                                            respect and nurture individual talents and aspirations. Our innovative methodology of education facilitates natural
                                            learning process rather than factory style education. Maitretech Divine Public School implements child centred
                                            pedagogy besides aiming to raise its bar in all spheres. In fact, it dovetails the traditional and successful teaching
                                            practices with modern trends to inspire a generation that seeks variations.
                                            A good school education must help to spot the talent early on and guide the student to make full use of it.
                                            Maitretech Divine Public School has bench marked itself as an institution par excellence which is fully geared to
                                            nurture students and enable them to meet the specific needs of the future. The increasingly dynamic world has forced
                                            traditional pedagogy to adapt the latest technologies in teachings. We are quite sensitive to this, for we believe that only
                                            those who are ready to change will be able to survive and succeed. However, we must ensure that while we keep pace
                                            with the changes, our cultural roots are not forgotten.  
                                          
                                            {/* {data?.data[0]?.message} */}
                                        </p>
                                    </div>
                                </div>

                                <div className='directorimg' sm='4'>
                                    <div className='thennow'>
                                        <img
                                            //  src={data?.data[0]?.photo?.data?.full_url}
                                            src="/images/demo1.jpg"
                                            alt='principal' 
                                            style={{width:"100%" ,height:"330px"}}
                                            />
                                        <h2>
                                          Name
                                          {/* {data?.data[0]?.full_name}  */}
                                          </h2>
                                    </div>
                                </div>
                            </div>


                        </div>




                    </div>
                </div>

                {/* <div className="container-fluid">
      <div className="row">
        <div className="col-xl-1 col-lg-1 col-md-3  col-sm-3"></div>
        <div
          className="col-xl-3 col-lg-4 col-md-5  col-sm-6  aboutimg"
          style={{ textAlign: "center" }}
        >
          <img src={madum} id="inner-container" className="img-responsive"  alt="no-img"/>
          <h1
            style={{
              backgroundColor: "rgb(102, 146, 133)",
              color: "white",
              height: "50px",
              paddingTop:"10px"
            }}
          >
            
            डॉ.
            अपर्णा लाड चेयरमेन
          </h1>
        </div>
        <div className="col-xl-1 col-lg-1 col-md-3  col-sm-3"></div>
        <div
          className="col-xl-6 col-lg-5 col-md-12  col-sm-12 mt-5"
          
        >
          <h1 style={{ textAlign: "center" }}  className="mb-5">Director Message</h1>
          <h1 className="mt-5 sas">
            दो शब्द..... <br/><br/>
            मुझे यह अवगत कराते हुए हर्ष हो रहा है कि भोपाल नगरी
            जिसका सांस्कृतिक वैभव स्तुत्य रहा है हमने इसे और कलात्मक बनाने के
            उद्देश्य से यहाँ "माँ नर्मदा ललित कला महाविद्यालय" का प्रारंभ किया
            है। माँ नर्मदा ललित महाविद्यालय ग्वालियर के राजा मानसिंग तोमर संगीत
            एवं कला विश्वविद्यालय से संबंद्ध है। इस ललित कला महाविद्यालय में
            अध्ययनरत विद्यार्थियों के लिए सैद्धांतिक और व्यावहारिक शिक्षण प्रदान
            करने के लिए योग्य शिक्षक और शिक्षाविदों की व्यवस्था है। ललितकला
            महाविद्यालय संगीत और चित्रकला विषय के अध्यापन में प्रयुक्त किये जाने
            वाले साधन और उपकरणों से सुसज्जित है। हमारे ये शुभ संकल्प कला के
            शैक्षणिक मूल्यों को उस ऊंचाई तक ले जाने के लिए संकल्पित है जहाँ
            ज्ञान के स्त्रोत का कहीं ठहराव न हो और विकासान्मुख निरन्तरता ही सदैव
            बनी रहे। आप सबका सहयोग हमारे विकास को संबल प्रदान करेगा। आपकी ओर से
            मार्गदर्शन एवं आपसे शुभकामनाओं की प्राप्ति की अपेक्षा सहित।<br/><br/><span  style={{ float:"right" }}>डॉ.
            अपर्णा लाड चेयरमेन
              </span> 
          </h1>
        </div>
        <div className="col-xl-1 "></div>
      </div>
</div> */}
            </div>
        </Layout>

    )

}
export default Principal