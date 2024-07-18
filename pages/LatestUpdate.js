import Layout from "../components/layouts/Layout";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import useSWR from 'swr';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const TransferCertificate = () => {
    // const [allData, setAllData] = useState([]);
    // const [filteredData, setFilteredData] = useState(allData);
    // const [inputvalue, setinputvalue] = useState();
    // const [none, sethide] = useState();


    const filteredData = [
        { id: 2, created_on: "2020-12-15T05:19:39+00:00", eventdate: "2020-12-23", title: "Books will be available on the specific date." },
        { id: 3, created_on: "2020-12-15T08:52:50+00:00", eventdate: "2020-12-21", title: "Result has been declared" },
        { id: 4, created_on: "2020-12-15T09:29:56+00:00", eventdate: "2020-12-14", title: "Annual function data has been declared" },
        { id: 5, created_on: "2021-07-14T10:19:02+00:00", eventdate: "2021-07-15", title: "Tomorrow is holiday" },
         

    ]
     

    console.log(filteredData)

    const handleSearch = (event) => {
        let value = event?.target?.value?.toUpperCase();
        let result = [];
        let num1 = 100;
        result = allData?.filter((data) => {
            if (isNaN(+value)) {
                return data?.full_name?.toUpperCase().search(value) !== -1;
            }
            else if (!isNaN(+value)) {
                return data?.admission_number?.search(value) !== -1;
            }
        });
        setFilteredData(result);
    }
    return (
        <Layout>
            <div className="page-container ltst_pdt" style={{ marginBottom: "0px",  }}>
                <div className="">
                    {/* <input type="text" placeholder="  Admission No...." onChange={(e) => handleSearch(e)} style={{ border: "2px solid black", borderRadius: "5px", float: "right", height: "30px" }} />
                        <span style={{ fontSize: "18px", float: "right" }}  >Enter You Admission No :-  &ensp; </span> */}
                </div>
                <div className="pt-5 row" style={{ margin: "60px" }}>
                    <div className="col-sm-12" style={{}}>
                        <table style={{ width: "100%" }} className="table_tc">
                            <tr>
                                <th className="r1">DATE</th>
                                <th className="r2"> HEADING</th>
                                {/* <   th className="r3">Admission No</th> */}
                                <th className="r3">INFO</th>
                            </tr>
                            {filteredData.length !== 0 ? (<>
                                {filteredData?.map((ei, i) =>
                                (
                                    // console.log(ei)
                                    <tr key={i}><td>{ei?.eventdate}</td>
                                        <td>{ei?.title}</td>
                                        {/* <td>{ei.admission_number}</td> */}
                                        <td>{ei?.title}
                                        </td>
                                    </tr>
                                )
                                )}
                            </>) :
                                <td colSpan='4'>
                                    <div id="my_box" style={{ textAlign: "center" }}>
                                        <p>No Data Found!!</p>
                                    </div>
                                </td>
                            }
                        </table>

                    </div>
                </div>
            </div>
        </Layout>
    )

}
export default TransferCertificate
