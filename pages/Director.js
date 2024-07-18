import React from 'react'
import useSWR from 'swr';
import Layout from '../components/layouts/Layout'

const fetcher = (...args) => fetch(...args).then(res => res.json());
function Secretary() {
     
    return (
        <Layout>
            <div className='about'
            //  style={{marginTop:"145px"}}
             >
                <div className='container'>
                    <div className='info'>
                        <div className='director'>
                            <div className='directorinfo' sm='8'>
                                <div className=''>
                                    <h3>
                                    WORD FROM THE SECRETARY :
                                        {/* {data?.data[1]?.description}  */}
                                        </h3>
                                    <p style={{ fontSize: '1.05rem', textAlign: 'justify',marginLeft:"20px" }}>
                                        Word From the SECRETARY
                                        Education should bring out the perfection which is already present in each
                                        child. An institution should provide an environment which helps the child in
                                        achieving this perfection. It should help him develop his inherent qualities
                                        and all the aspects of his personality. This can be achieved when those
                                        involved in this process realize that education is much more than cramming
                                        a lot of information and passing examinations based on rote learning.
                                        Maitretech Divine Public School Proposes to provide such an
                                        environment to the children. envisages looking for and orientating
                                        suitable personnel who would undertake this important task. It is hoped that
                                        the faculty so committed will achieve this objective. I assure you on behalf
                                        of the school to give civilized, knowledgeable and outstanding souls back to
                                        the society, on receiving them as an innocent and tender minds.

                                    {/* {data?.data[1]?.message} */}
                                    </p>
                                </div>
                            </div>

                            <div className='directorimg' sm='4'>
                                <div className='thennow'>
                                    <img
                                    //  src={data?.data[1]?.photo?.data?.full_url}
                                    src="/images/demo3.jpg"
                                     alt='Secretary'
                                     style={{width:"100%" ,height:"330px"}}
                                     />
                                    <h2>
                                        Name
                                        {/* {data?.data[1]?.full_name}  */}
                                        </h2>
                                </div>
                                
                            </div>
                        </div>


                    </div>




                </div>
            </div>
        </Layout>
    )
}

export default Secretary
