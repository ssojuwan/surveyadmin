// AdminPage.js

import React, { useState, useEffect } from 'react';
import './App.css'; // 추가: 스타일 파일을 불러옴

const App = () => {
  const [surveyResults, setSurveyResults] = useState([]);

  useEffect(() => {
    // 임의의 설문 결과 생성 (테스트용)
    const dummyResults = [
      {
        name: 'John Doe',
        department: '스마트소프트웨어학과',
        grade: '2학년',
        selectedOptions: ['짜장면', '볶음밥'],
        feedback: '맛있었습니다!',
      },
      {
        name: 'Jane Smith',
        department: '전기전자공학과',
        grade: '3학년',
        selectedOptions: ['짬뽕', '볶음밥'],
        feedback: '좋았어요!',
      },
    ];

    setSurveyResults(dummyResults);
  }, []);

  return (
    <div>
      <h1>설문 결과 관리 페이지</h1>
      <table className="survey-table">
        <thead>
          <tr>
            <th>이름</th>
            <th>학과</th>
            <th>학년</th>
            <th>선호 음식</th>
            <th>의견</th>
          </tr>
        </thead>
        <tbody>
          {surveyResults.map((result, index) => (
            <tr key={index}>
              <td>{result.name}</td>
              <td>{result.department}</td>
              <td>{result.grade}</td>
              <td>{result.selectedOptions.join(', ')}</td>
              <td>{result.feedback}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
