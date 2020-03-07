import routes from "../routes"; //추후 라우터 이동

export const home = (req, res) => {
  res.render("home", { pageTitle: "Main" });
};
