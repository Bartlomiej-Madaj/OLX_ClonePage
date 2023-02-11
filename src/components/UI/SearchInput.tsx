import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledProps } from '../../types/globalType';



const StyledSearchInput = styled.div`
    width: 40%;
    height: 3rem;
    border: 1px solid ${(props: StyledProps) => props.theme.mainColor};
    background-color: white;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    
    & > input {
        height: 100%;
        width: 90%;
        padding: 0 0.5rem;
        border: none;
        margin-left: 0.5rem;
        font-size: 1rem; //w zależności od tego czy jest value zmaina grubości i wysokości czcionki
        font-weight: 600;
    }

    & > label {
        display: flex;
        align-items: center;
    }
`;

type Props = {
    id: string,
    type: string,
    placeholder: string,
    children?: React.ReactNode,
    onSearch: (value: string) => void 
    
}

const SearchInput:React.FC<Props> = (props) => {

    const [ searchValue1, setSearchValue1] = useState<string>('')
    const [ searchValue2, setSearchValue2] = useState<string>('')

    const searchInputHandler:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        // console.log(e.target.value)
        if(props.id === 'localLocation'){
            setSearchValue1( e.target.value)
            props.onSearch(searchValue1)
        }else {
            setSearchValue2( e.target.value)
            props.onSearch(searchValue2)
        }
      
    }

    useEffect(() => {
        if(props.id === 'localLocation'){
            
            props.onSearch(searchValue1)
        }else {
            
            props.onSearch(searchValue2)
        }
    }, [searchValue1, searchValue2])

  return (
    <StyledSearchInput>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange = {searchInputHandler }
      />
      <label htmlFor={props.id}>{props.children}</label>
    </StyledSearchInput>
  );
};

export default SearchInput;
