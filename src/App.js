import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import jobData from "../src/dummyData";
import Alert from "./Alert";

// import {collection,query,where,getDocs, orderBy} from "firebase/firestore";
// import {db} from "./firebase.config";

const App = () => {
  // with firebase
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);
  const [customAlert, setCustomAlert] = useState(false);
  const [customError, setCustomError] = useState(false);
  const [alertStyle, setAlertStyle] = useState("");


  // const fetchingData = async()=>{
  //   const temporaryData = [];
  //    const queryRef = query(collection(db,"jobs"));
  //    const q = query(queryRef,orderBy("postedOn","desc"));

  //    const req = await getDocs(q);

  //    req.forEach((job) => {
  //       console.log(job.data());
  //       temporaryData.push({
  //         ...job.data(),
  //         id:job.id,
  //         postedOn:job.data().postedOn.toDate()
  //       })
  //    });
  //    setJobs(temporaryData);
  // }
  // const fetchingDataCustom = async(jobCriteria)=>{
  //   const temporaryData = [];
  //    const queryRef = query(collection(db,"jobs"));
  //    const q = query(queryRef,where("title","===",jobCriteria.title),where("type","===",jobCriteria.type),where("experience","===",jobCriteria.experience),where("location","===",jobCriteria.location), orderBy("postedOn","desc"));

  //    const req = await getDocs(q);

  //    req.forEach((job) => {
  //       console.log(job.data());
  //       temporaryData.push({
  //         ...job.data(),
  //         id:job.id,
  //         postedOn:job.data().postedOn.toDate()
  //       })
  //    });
  //    setJobs(temporaryData);
  // }

  //  useEffect(()=>{
  //   fetchingData();
  //  },[])

  // with dummy Data

  const fetchingDummyData = () => {
    setCustomSearch(false);
    const temporaryData = [];
    jobData.forEach((job) => {
      temporaryData.push({
        ...job,
        id: job.id,
      });
    });

    setJobs(temporaryData);
  };

  const fetchingDummyCustomData = (jobCriteria) => {
    setCustomSearch(true);

    const { title, location, experience, type } = { ...jobCriteria };
    const temporaryData = [];
    if (title === "" && location === "" && experience === "" && type === "") {
      setCustomSearch(false);
      setCustomAlert(true);
      setAlertStyle("animate-[alertAnime_1s_ease] top-0");
      setTimeout(() => {
        setAlertStyle("animate-[alertAnimeExit_1s_ease]  -top-[10%]");
      }, 2000);
      fetchingDummyData();
    } 
    else {
      jobData.forEach((job) => {
        if (
          job.title === title &&
          job.location === location &&
          job.experience === experience &&
          job.type === type
        ) {
          temporaryData.push({
            ...job,
            id: job.id,
          });
        } 
        else {
          setCustomError(true);
        }
      });
      setJobs(temporaryData);
    }
  };
  useEffect(() => {
    fetchingDummyData();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar fetchingDummyCustomData={fetchingDummyCustomData} />
      {customSearch && (
        <div className="mx-5 sm:mx-10 md:mx-20 lg:mx-[15rem]">
          <button
            className=" w-26  py-1 px-2 mt-7 mb-2 bg-red-700 text-[.7rem] text-white font-semibold shadow-md border border-red-700 rounded-md hover:border-red-800  hover:bg-red-800 lg:text-[1rem] lg:w-32  transition-all"
            onClick={() => {
              fetchingDummyData();
              setCustomError(false);
            }}
          >
            Clear Filter
          </button>
        </div>
      )}
      {jobs.map((job, id) => {
        return <JobCard key={id} {...job} />;
      })}
      {customError && (
        <h1 className="text-center font-bold text-lg my-10 text-white md:text-xl lg:text-2xl">
          No data matched
        </h1>
      )}
      {customAlert && <Alert classStyle={alertStyle} />}
    </div>
  );
};

export default App;
