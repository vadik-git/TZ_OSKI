import React, { useEffect, useState } from "react";
import client from "../../client";
import "../TestComponent/testStyle.css";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom"
const Test = () => {
  const { isAuth } = useSelector((state) => state.login);
  const [tests, setTests] = useState([]);
  const [isStart, setIsStart] = useState(false);
    const [idTest, setIdTest] = useState(null);
    const [description, setDescription] = useState("");
    const history = useHistory();

    useEffect(() => {
        getAllTest();
      }, []);


    const getAllTest = async () => {
        const {data} = await client.getAllTests();
        console.log(data)
        setTests(data);

    }

    const toDescript = (id, descript) => {
        setDescription(descript);
        setIdTest(id);
        setIsStart(true)
    }

    const hangleStartTest = (id) => {
        
        const url = `/question?id=${id}`
        history.push(url);

    }

  return (
    <>
          {isAuth ? (
              <div>

                  {isStart == false ? (<><div className="wrapper">
                      <h3 className="textCenter">Select Test</h3>
                      <div>
                          {tests.map((item) => {
                              return (
                                  <div key={item.id} className="wrapperForItemsTest">
                                      <div>
                                          <span className="titleStyle">{item.title}</span>
                                          <div
                                              className="buttonStart"
                                              onClick={() => {
                                                  toDescript(item.id,item.description)
                                              }}
                                          >
                                              Start
                                          </div>
                                      </div>
                                  </div>
                              );
                          })}
                      </div>
                  </div></>) : (<>

                          <div className="wrapper">
                              <h3 className="textCenter">Description Test</h3>
                              <div className="textCenter">
                                  {description}
                              </div>
                              <div className="buttonStart"
                                  onClick={() => {
                                      hangleStartTest(idTest)
                                  }}>Start</div>
                          </div>

                  </>)}
              
          </div>
      ) : (
        <Redirect to={"/login"} />
      )}
    </>
  );
};

export default Test;
