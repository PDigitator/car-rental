import styled from 'styled-components';

export const Thumb = styled.div`
  height: 268px;

  border-radius: 14px;
  overflow: hidden;

  &:hover,
  &:focus {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 426px;
  position: relative;
`;

export const Foto = styled.img`
  width: 274px;
  height: 280px;
  // flex-shrink: 0;
  object-fit: cover;
  // object-position: 50% 50%;

  border-radius: 12px;

  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
`;

export const Description = styled.div`
  // display: flex;
  // justify-content: space-between;
  color: #121417;
  flex-grow: 1;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  margin-top: 14px;
`;

export const MainDesctiption = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;
`;

export const AdditionalDesctiption = styled.span`
  display: flex;
  height: 36px;
  overflow: hidden;
  color: rgba(18, 20, 23, 0.5);

  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export const Model = styled.span`
  color: #3470ff;
`;

// export const MainButton = styled.p`
//   display: flex;
//   justify-content: center;
// `;

export const IconBox = styled.div`
  height: 16px;
  color: rgba(18, 20, 23, 0.1);
`;

export const FavoriteContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const StyledActiveIcon = styled.div`
  width: 18px;
  height: 18px;
  color: rgba(52, 112, 255, 1);
`;

export const StyledNormalIcon = styled.div`
  width: 18px;
  height: 18px;
  color: rgba(255, 255, 255, 0.8);
`;

// export { Thumb, Image };
