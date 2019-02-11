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

export const studentSignup = async payload => {
  const requestBody = {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json"
    }
  };

  const response = await fetch(
    "http://localhost:3000/students/signup",
    requestBody
  );

  const data = await response.json();

  return data;
};

export const fetchStudentData = async id => {
  const response = await fetch(`http://localhost:3000/api/v1/students/${id}`);

  return await response.json();
};

export const addPracticeCard = async (payload, id) => {
  const requestBody = {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json"
    }
  };

  const response = await fetch(
    `http://localhost:3000/api/v1/students/${id}/practice`,
    requestBody
  );

  return await response.json();
};

export const getSessionDetails = async id => {
  const response = await fetch(
    `http://localhost:3000/api/v1/practiceSessions/${id}/sections`
  );

  return await response.json();
};

export const removeSession = async id => {
  const requestBody = {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    }
  };
  const response = await fetch(
    `http://localhost:3000/api/v1/practiceSessions/${id}`,
    requestBody
  );

  return await response.json();
};

export const resetStudentPassword = async email => {
  const requestBody = {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email })
  };
  const response = await fetch(
    `http://localhost:3000/api/v1/students/resetPassword`,
    requestBody
  );

  return await response.json();
};

export const changeStudentPassword = async payload => {
  const requestBody = {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  };
  const response = await fetch(
    `http://localhost:3000/api/v1/students/changePassword`,
    requestBody
  );

  return await response.json();
};

export const joinClass = async (key, id) => {
  console.log(key, id);
  const requestBody = {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ key })
  };

  const response = await fetch(
    `http://localhost:3000/api/v1/classes/students/${id}`,
    requestBody
  );

  return await response.json();
};
