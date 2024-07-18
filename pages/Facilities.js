import Layout from '../components/layouts/Layout'

const Facilities = () => {

    return (
        <Layout>
            <div className="container-fluid" style={{ marginTop: "40px" }}>
                <div className="row">
                    <div className="col-lg-12" style={{ textAlign: "center" }}>
                        <button className="pl-2 pr-2 FEATURES">
                            <h2> OUR DISTINCTIVE FEATURES</h2></button><br /><br />

                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                        <ul>
                            <li>Digital/Smart Classes for Students</li>
                            <li>An Institute where education is priority.</li>
                            <li>Excellent schooling from Kindergarten to higher Secondary.</li>
                            <li>Play-n-learn method followed at Nursery & Primary Level.</li>
                            <li>Unique teaching pattern followed with the help of Modern teaching aids used for Instructions.</li>
                            <li>Special classes for teaching Social, Cultural & Moral Valu</li>
                            <li>Qualified, experienced, mature and sincere faculty members.</li>
                            <li>Computer as a subject from Standard 1 st onwards.</li>
                            <li>Dedicated, well-trained teachers pledged to all-around development of the child.</li>

                        </ul>
                        {/* Our Distinctive Features :- */}




                        {/* Renaissance Divine Public School */}
                    </div>
                    <div className="col-lg-5">
                        <ul>
                            <li>One hour daily attributed to extra curricular activities and sports.</li>
                            <li>Hygiene, fitness and "Good Living Skill" taught to students.</li>
                            <li>Special attention to every students by teachers in "Problem subject", Motivational teaching methodology is followed</li>
                            <li>Ideal teacher: pupil ratio followed in every class (1:25).</li>
                            <li>Comfortable, safe bus service for students.</li>
                            <li>All scholastic activities conducted in a congenial atmosphere.</li>
                            <li>Parent teacher meets held at regular i</li>
                            <li>Students are kept involved in Project work, seminar, workshop etc. so that they may build that little extra in them.</li>
                            {/* <li>Modern laboratories for Life Science, Physics, Chemistry, IT and computers (Which can accommodate one whole batch at one time.)</li> */}
                        </ul>
                    </div>

                </div>

            </div>
        </Layout>
    )

}
export default Facilities