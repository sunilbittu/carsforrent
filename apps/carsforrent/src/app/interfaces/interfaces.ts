/*
Interface for the Refresh Token (can look different, based on your backend api)
*/
export interface RefreshToken {
  id: number;
  userId: number;
  token: string;
  refreshCount: number;
  expiryDate: Date;
}

/*
  Interface for the Login Response (can look different, based on your backend api)
  */
export interface LoginResponse {
  user: {
    email: string;
    isAdmin: boolean;
    _id: string;
    __v: number;
  };
  token: string;
}

/*
  Interface for the Login Request (can look different, based on your backend api)
  */
export interface LoginRequest {
  email: string;
  password: string;
}

/*
  Interface for the Register Request (can look different, based on your backend api)
  */
export interface RegisterRequest {
  email: string;
  password: string;
  isAdmin: boolean;
}

/*
  Interface for the Register Response (can look different, based on your backend api)
  */
export interface RegisterResponse {
  user: {
    email: string;
    isAdmin: boolean;
    _id: string;
    __v: number;
  };
  token: string;
}
