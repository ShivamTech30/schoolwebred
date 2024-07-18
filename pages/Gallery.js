// import Layout from '../components/layouts/Layout'

// const Gallery = () => {

//     return (
//         <Layout>
//             <div className="container-fluid" style={{ marginTop: "40px" }}>
//                 <h1>
//                     This is Gallery Page
//                 </h1>
//             </div>
//         </Layout>
//     )

// }
// export default Gallery;

import { SRLWrapper } from "simple-react-lightbox";
import Layout from '../components/layouts/Layout'
import useSWR from "swr";
// import autoprefixer from "autoprefixer";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Gallery = () => {
  
  const slides = [
    { title: "/images/is3.jpg ", description: 'Lorem ipsum' },
    { title: " /images/is5.jpg", description: 'Lorem ipsum' },
    { title: " /images/demo1.jpg", description: 'Lorem ipsum' }, 
    { title: "/images/demo1.jpg ", description: 'Lorem ipsum' },
    { title: " /images/is3.jpg", description: 'Lorem ipsum' },
    { title: " /images/is5.jpg", description: 'Lorem ipsum' }, 
  ];

  return (
    <Layout>
      <SRLWrapper>
        {/* <div
          className="p-12"
          style={{
            minHeight: "95vh",
            backgroundColor: "#3bb78f",
            backgroundImage: "linear-gradient(315deg, #3bb78f 0%, #0bab64 74%)",
          }}
        >
          <div className="grid gap-4 mt-16 sm:grid-cols-12 lg:grid-cols-12 lg:mt-28">
            {data.data.map((item, i) => {
              return (
                <div key={item.id} className="lg:col-span-3 sm:col-span-12">
                  <img
                    src={item?.image?.data?.full_url}
                    className="h-64 rounded-lg"
                  />
                </div>
              );
            })}
          </div>
        </div> */}

        <div className="container-fluid">
          <div className="mb-3 row">
          {slides.map((item, i) => {
              return (
                <div key={i} className="col-lg-4">
                  <img
                    // src={item?.image?.data?.full_url}
                    src={item?.title}
                    className="mt-3 imght "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </SRLWrapper>
    </Layout>
  );
};

export default Gallery