import http from "../http-common";

const login = (data) => {

    return http.post("api/account/login", data);
};

const getAllTests = () => {

    return http.get("/GetAllTests");

};

const getAllQuestionForTest = (testId) => {

    return http.get(`/GetAllQuestionForTestId?testId=${testId}`);

};






export default {
    login,
    getAllTests,
    getAllQuestionForTest
}




