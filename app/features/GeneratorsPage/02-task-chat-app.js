const formatMsg = (msgData) => {
  return `${msgData.from}: ${msgData.message}`;
};

function* createChat(login) {
//TODO
}

const chatApp = () => {
  const batmanLogin = "Batman";
  const bobLogin = "bob";

  // 1st user:  batman user
  let batmanUser = createChat(batmanLogin);
  batmanUser.next(); // run code until first yield
  setInterval(() => {
    batmanUser.next({
      to: bobLogin,
      message: `ihaha ${Math.random()}`
    });
    console.log("batman received:", batmanUser.next().value.map(formatMsg));
  }, 1500);

  // 2nd user: bob user
  let bobUser = createChat(bobLogin);
  bobUser.next(); // run code until first yield
  setInterval(() => {
    // sending message to Batman
    bobUser.next({
      to: batmanLogin,
      message: `hello! ${Math.random()}`
    });
    // fetching all messages sent to bob
    let messages = bobUser.next().value;
    console.log("Bob received:", messages.map(formatMsg));
  }, 3000);

};

export const task02 = () => {
  // chatApp();
};



