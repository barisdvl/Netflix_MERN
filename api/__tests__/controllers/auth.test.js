const authController = require("../../controllers/authController");
const { encryptPassword } = require("../../middlewares/hashPassword");
const User = require("../../models/User");

jest.mock("../../models/User");
jest.mock("../../middlewares/hashPassword", () => ({
  encryptPassword: jest.fn(() => "hash password"),
  decryptPassword: jest.fn(() => "fake_password"),
}));
jest.mock("../../middlewares/createToken", () => ({
  createToken: jest.fn(() => "secret token"),
}));

it("should send a status code of 400 and json response when user exists", async () => {
  const request = {
    body: {
      email: "fake_email",
      password: "fake_password",
    },
  };
  const response = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  User.findOne.mockImplementationOnce(() => ({
    id: 1,
    email: "fake_email",
    password: "fake_password",
  }));

  await authController.userCreate(request, response);
  expect(response.status).toHaveBeenCalledWith(400);
  expect(response.json).toHaveBeenCalledWith(
    "User already exist. Please Login"
  );
});

it("should send a status code of 201 and user data when user is created", async () => {
  const request = {
    body: {
      email: "fake_email",
      password: "fake_password",
    },
  };
  const response = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  User.findOne.mockResolvedValueOnce(undefined);
  User.create.mockResolvedValueOnce(request.body);
  await authController.userCreate(request, response);
  expect(response.status).toHaveBeenCalledWith(201);
  expect(encryptPassword).toHaveBeenCalledWith("fake_password");
  expect(response.json).toHaveBeenCalledWith(request.body);
});

it(`should send a status code of 400 and "all input required" when try to login`, async () => {
  const request = {
    body: {
      email: "fake_email",
    },
  };
  const response = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  await authController.userLogin(request, response);
  expect(response.status).toHaveBeenCalledWith(400);
  expect(response.json).toHaveBeenCalledWith("All input is required.");
});

it(`should send a status code of 401 and "Worng username or password" when try to login with wrong password`, async () => {
  const request = {
    body: {
      email: "fake_email",
      password: "wrong_password",
    },
  };
  const response = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  User.findOne.mockImplementationOnce(() => ({
    _id: 1,
    email: "fake_email",
    password: "hash password",
  }));

  await authController.userLogin(request, response);
  expect(response.status).toHaveBeenCalledWith(401);
  expect(response.json).toHaveBeenCalledWith("Worng username or password");
});

it("should send a status code of 200 and user info when user log in", async () => {
  const request = {
    body: {
      email: "fake_email",
      password: "fake_password",
    },
  };
  const response = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  const resData = {
    accessToken: "secret token",
    userInfo: { _id: 1, isAdmin: true },
  };

  User.findOne.mockImplementationOnce(() => ({
    _id: 1,
    email: "fake_email",
    password: "hash password",
    isAdmin: true,
  }));

  await authController.userLogin(request, response);
  expect(response.status).toHaveBeenCalledWith(200);
  expect(response.json).toHaveBeenCalledWith(resData);
});
