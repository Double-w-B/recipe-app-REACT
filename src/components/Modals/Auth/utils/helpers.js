export const handleErrorMessage = (userData, type, setErrorMsg) => {
  const { name, email, password } = userData;
  const emailRegExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (type === "register") {
    if (!name.trim() && !email && !password) {
      return setErrorMsg("Please, provide name, email and password");
    }
    if (!name.trim()) {
      return setErrorMsg("Please, provide name");
    }

    if (name.trim().length < 3) {
      return setErrorMsg("Min. 3  characters for name");
    }

    if (name.trim().length > 50) {
      return setErrorMsg("Max. 50 characters for name");
    }
  }

  if (!name.trim() && !email) {
    return setErrorMsg("Please, provide name and email");
  }

  if (!email.trim()) {
    return setErrorMsg("Please, provide email");
  }

  if (!email.trim().match(emailRegExp)) {
    return setErrorMsg("Please, provide valid email");
  }

  if (!password.trim()) {
    return setErrorMsg("Please, provide password");
  }

  if (password.length < 6) {
    return setErrorMsg("Min. 6 characters for password");
  }
};
