const request = require("supertest");
const app = require("../mockedAPI/index");
const { getUserDataByUsername } = require("./utils");
const fs = require('fs');

describe("GET /", () => {
  test("should return 200 and body 'Backend API'", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Backend API");
  });
});

describe("POST /user", () => {
  const userData = {
    username: "qa_user",
    name: "QA User",
    password: "QaPass!234",
    favouriteFruit: "pineapple",
    favouriteMovie: "Inception",
    favouriteNumber: 7,
  };

  test("should create user and persist data", async () => {
    const response = await request(app).post("/user").send(userData);
    expect(response.status).toBe(200);
    expect(response.text).toBe("Account Created");

    
    const accounts = fs.readFileSync("./storage/account.json", "utf-8");
    const data = JSON.parse(accounts);

    const { username, ...expectedUserData } = userData;
    expect(data["qa_user"]).toEqual(expect.objectContaining(expectedUserData));
  });

  test("should return existing message when username taken", async () => {
    const response = await request(app).post("/user").send(userData);
    expect(response.status).toBe(200);
    expect(response.text).toBe("Account Already Exists");
  });

  test("should return 400 when required fields missing", async () => {
    const invalidUserData = {
      username: "qa_user_2", 
      name: "QA User Two", 
      favouriteFruit: "apple",
    };

    const response = await request(app).post("/user").send(invalidUserData);
    expect(response.status).toBe(400);
  });
});


describe("PUT /user", () => {
  test("should update existing user and persist changes", async () => {
    const username = "qa_user";
    const updatedUserData = {
      name: "QA User Updated",
      password: "QaPass!999",
      favouriteFruit: "grape",
      favouriteMovie: "Interstellar",
      favouriteNumber: 99,
    };

    const response = await request(app)
      .put(`/user?username=${username}`)
      .send(updatedUserData);
    expect(response.status).toBe(200);
    expect(response.text).toBe("Account Updated");

    const userDataAfterUpdate = getUserDataByUsername(username);
    expect(userDataAfterUpdate).toEqual(expect.objectContaining(updatedUserData));
  });

  test("should indicate account does not exist for unknown user", async () => {
    const username = "qa_user_not_exists";
    const response = await request(app).put(`/user?username=${username}`).send({
      name: "Another Updated Name",
      password: "AnotherUpdated!123",
      favouriteFruit: "apple",
      favouriteMovie: "The Matrix",
      favouriteNumber: 99,
    });
    expect(response.status).toBe(200);
    expect(response.text).toBe("Account Does NOT Exist");

    const userDataNonExistingUser = getUserDataByUsername(username);
    expect(userDataNonExistingUser).toBeUndefined();
  });

  test("should return 400 when username query is missing", async () => {
    const response = await request(app).put("/user");
    expect(response.status).toBe(400);
  });
});

describe("DELETE /user", () => {
  test("should delete existing user and remove from storage", async () => {
    const username = "qa_user";
    const response = await request(app).delete(`/user?username=${username}`);
    expect(response.status).toBe(200);
    expect(response.text).toBe("Account Deleted");

    const userDataAfterDeletion = getUserDataByUsername("qa_user");
    expect(userDataAfterDeletion).toBeUndefined();
  });

  test("should indicate account does not exist on delete", async () => {
    const username = "qa_user_not_exists";
    const response = await request(app).delete(`/user?username=${username}`);
    expect(response.status).toBe(200);
    expect(response.text).toBe("Account Does Not Exist");

    const userDataAfterDeletion = getUserDataByUsername("qa_user");
    expect(userDataAfterDeletion).toBeUndefined();
  });

  test("should return 400 when username query is missing", async () => {
    const response = await request(app).delete("/user");
    expect(response.status).toBe(400);
  });
});
