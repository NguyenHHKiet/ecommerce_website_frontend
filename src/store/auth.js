export const findUser = (state, action) => {
    const userArr =
        JSON.parse(localStorage.getItem("userArr")) ?? state.userArr;

    const password = (user) =>
        action.type === "ON_LOGIN"
            ? user.password === action.user.password
            : true;

    // find the user exists
    const existingUserIndex = userArr.findIndex(
        (user) => user.email === action.user.email && password(user)
    );
    // take user data from array
    const existingUser = userArr[existingUserIndex];

    return { userArr, existingUserIndex, existingUser };
};
