//array of routes that are accessible to the public

export const publicRoutes =[
    "/",
    "/auth/new-verification"
]

//array of routes that are accessible to the public
//redirect logged in users to /setting
export const authRoutes=[
    "/auth/login",
    "/auth/register",
    "/auth/error"
]

//Routes that start with this prefix are used for API aith purpose
export const apiAuthPrefix = "/api/auth"


//The default refirect path after loggin in
export const DEFAULT_LOGIN_REDIRECT = "/setting"
