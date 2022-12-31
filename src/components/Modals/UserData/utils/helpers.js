export const handleErrorMessage = (label, input, setErrorMsg) => {
  if (label === "name") {
    if (input.trim().length < 3) {
      return setErrorMsg("Min. 3  characters for name");
    }
    if (input.trim().length > 50) {
      return setErrorMsg("Max. 50 characters for name");
    }
  }
};

export const checkEmail = (email) => {
  const regex =
    // eslint-disable-next-line
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.match(regex);
};
