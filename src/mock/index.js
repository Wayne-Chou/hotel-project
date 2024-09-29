import Mock from "mockjs";
import themes from "./data/themes.json";

Mock.mock("/mock/themes", {
  code: 200,
  data: themes,
});
