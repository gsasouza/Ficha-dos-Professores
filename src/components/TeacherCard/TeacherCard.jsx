import * as React from 'react';
import Collapsible from 'react-collapsible';
import styled from 'styled-components';

const Wrapper = styled.div`
  .Collapsible {
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 8px;
    text-align: center;
    background-color: lightseagreen;
    margin: 3px 0;
    width: 100%;
    &:hover {
      background-color: #138496;
      cursor: pointer;
    }
  }  
  .Collapsable__trigger{
    font-weight: bold;
    color: #fff;
  }
`;

const TeacherCard = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <Wrapper onClick={() => setOpen(!isOpen)}>
      <Collapsible trigger={title} open={isOpen} >
        {children}
      </Collapsible>
    </Wrapper>
  );
};

export default TeacherCard;
