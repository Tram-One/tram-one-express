import { screen } from "@testing-library/dom";
import { start } from "tram-one";
import app from "./app";

describe("app", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should render a link to the tram-one site", () => {
    start(app, "body");

    const link = screen.queryByText("Learn Tram-One");
    expect(link).toHaveAttribute("href", "https://tram-one.io");
  });
});
