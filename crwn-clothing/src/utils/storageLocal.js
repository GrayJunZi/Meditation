const auth = {};

const signInWithPopup = () => {
  return Promise.resolve(() => {
    return {
      uid: +new Date(),
      displayName: "Test",
      email: "test@test.com",
      password: "test",
      accessToken: "token",
      createdAt: new Date(),
    };
  });
};

const db = {
  create(user) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users = users.filter((x) => x.uid !== user.uid);
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  },
  createUser(user) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let existUser = users.find(
      (x) => x.email === user.email && x.password === user.password
    );

    if (existUser) {
      return existUser;
    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  },
  createWithEmailAndPassword(email, password) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.filter(
      (x) => x.email === email && x.password === password
    );

    if (!user) {
      user = {
        uid: +new Date(),
        displayName: email,
        email: email,
        accessToken: "token",
        password: password,
        createdAt: new Date(),
      };
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    }
    return user;
  },
  getUserWithEmailAndPassword(email, password) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find((x) => x.email === email && x.password === password);
    return user;
  },
};

export { auth, signInWithPopup, db };
