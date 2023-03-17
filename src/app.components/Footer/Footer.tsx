import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledWrapper>
      <div className="footer-info-wrap">
        <div className="footer-info-item">소곤닥 하우스</div>
        <div className="footer-info-item">제주시 조천읍 신북로 497</div>
        <div className="footer-info-item">064) 743 - 6003</div>
      </div>

      <div className="footer-info-wrap">
        <div className="footer-info-item">
          {`사업자등록번호 : 403 - 51 - 00410`}
        </div>
      </div>

      <div className="footer-info-wrap">
        <div className="footer-info-item">대표명 : 현재호</div>
        <div className="footer-info-item">개인정보관리책임자 : 김솔아</div>
      </div>
    </StyledWrapper>
  );
};

export default Footer;

const StyledWrapper = styled.div`
  height: 120px;
  font-size: 8px;
  color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  .footer-info-wrap {
    display: flex;
    justify-content: center;

    .footer-info-item {
      border-right: 1px solid gray;
      padding: 0 4px;

      &:last-child {
        border-right: none;
      }
    }
  }
`;
