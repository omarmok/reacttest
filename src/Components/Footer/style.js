import styled from 'styled-components';

export const FooterStyle = styled.div`
   text-align: center;
    background: #828282;
    color: #fff;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    flex-direction:column;
    position:absolute;
    left:0;
    bottom:0;
    right:0;
`;


export const FooterUl = styled.ul`
color:#fff;
`;


export const FooterListItem = styled.li
    `
`;

export const ListItemAnchor = styled.a
    `
     color:#fff;
            &:hover{
                color:#fff;
                text-decoration: underline;
            }
    `;



export const FooterLogo = styled.img`
    position: absolute;
    left: 15px;
    top: 20px;
    height: 30px;
    opacity: .6;
`;

