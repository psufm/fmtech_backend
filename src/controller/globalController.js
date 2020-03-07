export const home = (req, res) => {
  res.render("home", { pageTitle: "Main" });
};

export const index = (req, res) => {
  res.render("index", { pageTitle: "index" });
};
