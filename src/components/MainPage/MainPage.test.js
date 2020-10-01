import React from "react";
import { shallow, mount, render } from "enzyme";

import MainPage from "./MainPage";

// npm test -- --coverage --watchAll=false

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

test("filter robots correctly", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "john",
        email: "john@gmail.com",
      },
    ],
    searchField: "john",
    isPending: false,
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);

  expect(wrapper2).toMatchSnapshot();
  expect(wrapper2.instance().filterRobots()).toEqual([
    {
      id: 3,
      name: "john",
      email: "john@gmail.com",
    },
  ]);
});

test("filter robots correctly2", () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "john",
        email: "john@gmail.com",
      },
    ],
    searchField: "a",
    isPending: false,
  };
  const wrapper3 = shallow(<MainPage {...mockProps3} />);

  const filteredRobots = [];
  expect(wrapper3).toMatchSnapshot();
  expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
});

test("isPending test", () => {
  const mockProps4 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "john",
        email: "john@gmail.com",
      },
    ],
    searchField: "a",
    isPending: true,
  };
  const wrapper4 = shallow(<MainPage {...mockProps4} />);

  const filteredRobots = [];
  expect(wrapper4).toMatchSnapshot();
  expect(wrapper4.instance().filterRobots()).toEqual(filteredRobots);
});
