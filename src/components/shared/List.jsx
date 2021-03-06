import React from 'react';
import styled from 'styled-components';
import Dot from './Dot';

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.active && '#fff'};
  padding: 6px 5px;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.1s;
  span {
    overflow: hidden;
    white-space: none;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  & img {
    width: 15px;
    height: 15px;
    margin-right: 10px;
    opacity: 0.4;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.6);
  }
`;

const DotItem = styled(Dot)`
  position: relative;
  left: 3px;
  margin-right: 10px;
  flex: 0 0 10px;
`;

function List({ items, setActive }) {
  return (
    <Ul>
      {items.map(({ id, icon, alt, title, color, active }) => (
        <li key={id}>
          <Item active={active} onClick={() => setActive(id)}>
            {icon && <img src={icon} alt={alt || 'icon'} />}
            {color && <DotItem color={color} />}
            <span>{title}</span>
          </Item>
        </li>
      ))}
    </Ul>
  );
}

export default List;
