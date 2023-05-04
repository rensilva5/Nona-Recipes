import { GiHamburger } from "react-icons/gi";
import { GiChopsticks } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { GiNoodles } from "react-icons/gi";

import styled from "styled-components";

import React from "react";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <NavLink to={"/cuisine/Italian"}>
        <GiFullPizza />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={"/cuisine/American"}>
        <GiHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </List>
  );
}
const List = styled.div;

export default Category;
