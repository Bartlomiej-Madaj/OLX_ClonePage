import React, { useState } from "react";
import styled from "styled-components";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { StyledSearch } from "./Search.style";
import SearchInput from "../UI/SearchInput";
import { SerachButton } from "../UI/SearchedButton";
import { GreenButton } from "../UI/Button";

const SmallMagnifyingGlassIcon = styled(MagnifyingGlassIcon)`
  height: 1.5rem;
  margin: auto 0.5rem;
`;
const SmallMapPinIcon = styled(MapPinIcon)`
  height: 1.5rem;
  margin: 0 0.5rem;
`;

function Search() {
  const [enteredValue1, setEnteredValue1] = useState<string>("");
  const [enteredValue2, setEnteredValue2] = useState<string>("");

  const searchedLocalValues = (value1: string) => {
    setEnteredValue1(value1);
  };

  const searchedGlobalValues = (value1: string) => {
    setEnteredValue2(value1);
  };

  // console.log(enteredValue1, enteredValue2)

  const submitFormHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <StyledSearch onSubmit={submitFormHandler}>
      <SearchInput
        id="localLocation"
        type="text"
        placeholder="21 645 347 ogłoszeń blisko Ciebie"
        onSearch={searchedLocalValues}
      >
        <SmallMagnifyingGlassIcon />
      </SearchInput>
      <SearchInput
        id="wholeLocation"
        type="text"
        placeholder="Cała Polska"
        onSearch={searchedGlobalValues}
      >
        <SmallMapPinIcon />
      </SearchInput>

      <GreenButton>
        Szukaj <SmallMagnifyingGlassIcon />
      </GreenButton>
    </StyledSearch>
  );
}

export default Search;
