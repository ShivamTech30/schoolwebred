import Layout from '../components/layouts/Layout'

const AdmissionProcess = () => {

    return (
        <Layout>
            <div className="mt-5 mb-5 container-fluid" >
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-12" style={{ textAlign: "center" }}>
                        <button className="pl-2 pr-2 ADMISSIONPROCEDURE">
                            <h3> ADMISSION PROCEDURE </h3></button><br /><br />

                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        <h5> Apply - <br />- Information Interview <br />- Registration<br /> - Get Admission</h5>
                    </div>
                    <div className="col-lg-12" style={{ textAlign: "center" }}>
                        <button className="pl-2 pr-2 DOCUMENT">
                            <h3> REQUIRED DOCUMENT </h3></button><br /><br />

                    </div>
                    <div className="col-lg-1"></div>

                    <div className="col-lg-10">
                        <ul>
                            <li>
                                Completed Application form
                           </li>
                            <li>
                                Birth Certificte (Photocopy)
                           </li>
                            <li>
                                Registration & Admission Fee
                           </li>
                            <li>
                                Result Card & T.C.
                           </li>
                        </ul>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
        </Layout>
    )

}
export default AdmissionProcess