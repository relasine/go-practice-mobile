export const studentLogin = async payload => {
  const requestBody = {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json"
    }
  };

  const response = await fetch(
    "http://localhost:3000/students/login",
    requestBody
  );

  const data = await response.json();

  return data;
};

export const fetchStudentData = async id => {
  const response = await fetch(`http://localhost:3000/students/${id}`);

  return await response.json();
};
