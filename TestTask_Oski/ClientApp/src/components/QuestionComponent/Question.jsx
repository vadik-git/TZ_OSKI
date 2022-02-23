import React, { useEffect, useState } from 'react';

import client from '../../client'
import '../../components/TestComponent/testStyle.css'
import { useHistory } from "react-router-dom"

const Question = () => {
    const [questions, setQuestions] = useState([]);
    const [index, setIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const [countTrue, setCountTrue] = useState(0);

    const history = useHistory();

    var baseUrl = (window.location).href;
    var Id = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
    useEffect(() => {

        console.log(Id)
        getAllQuestionForTest(Id);

    }, [])

    const getAllQuestionForTest = async (testId) => {
        var { data} = await client.getAllQuestionForTest(testId);
        console.log(data);
        setQuestions(data);
    }
    const hangleNext = (answer) => {
        if (answer == questions[index].correct_Answer) {
            setCountTrue(countTrue + 1);
        }

        if (index == questions.length - 1) {
            setIsEnd(true);
            
        } else {
            setIndex(index + 1);
        }
        
    }

    const hangleBack = () => {
        history.push("/");
    }

    return (
        <>
            {isEnd == false ? (<div>
                {questions.length != 0 ? (
                    <div className="wrapper">
                        <h4 className="textCenter">{questions[index].title}</h4>
                        <div style={{ marginTop: '50px' }}>
                            <div className="wrapperForItemsTest" id={questions[index].answer_1} onClick={(e) => hangleNext(e.target.id)}>
                                {questions[index].answer_1}
                            </div>
                            <div className="wrapperForItemsTest" id={questions[index].answer_2} onClick={(e) => hangleNext(e.target.id)}>
                                {questions[index].answer_2}
                            </div>
                            <div className="wrapperForItemsTest" id={questions[index].answer_3} onClick={(e) => hangleNext(e.target.id)}>
                                {questions[index].answer_3}
                            </div>
                        </div>

                    </div>
                ) : (<>Loading...</>)}
            </div>) : (<div className="wrapper">

                    <h3 className="textCenter">Congratulations</h3>
                    <h5 className="textCenter">Your Result {countTrue}/{questions.length}</h5>
                    <div className="btn" style={{ marginTop: '50px' }} onClick={() => hangleBack()}>Back To Tests</div>

            </div>)}
            
            
            
        </>
        
    )

}

export default Question;