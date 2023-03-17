import React from 'react';
import styled from 'styled-components';

const ReservationPanelReserve = () => {
  return (
    <StyledWrapper>
      <div className="reserve-info">
        다음과 같이 환불제를 실시하고 있으니 참고하시기 바랍니다. <br />
        잘못 예약 하신 경우에도 아래의 환불규정에 포함되오니, 신중하게 예약을
        진행해 주시기 바랍니다. <br />
        <br />
        이용 10일 전까지만 100% 환불이 가능합니다. <br />
        환불은 입금자 확인 후 입금하신 분의 계좌 및 결제 카드로 환불됩니다.{' '}
        <br />
        예약 변경시, 기존 예약을 취소 후 예약 하셔야 합니다. <br />
        임의로 예약을 변경해 드리는 경우는 재난재해 등에 준하는 사유가 있는
        경우에 한합니다. <br />
        <br />
        천재지변으로 인한 당일 항공편/배편이 취소된 경우, <br />
        그에 상응한 증빙자료 제출 후, 당일 숙박료에 한하여 100% 환불이
        가능합니다.
      </div>
      <div className="refund-info-wrap">
        <div className="refund-info">
          <div className="title">비수기</div>
          <div className="refund-rule-box">
            <div className="content">이용 9일 전 - </div>
            <div className="content"> 총 결제금액의 10% 차감</div>

            <div className="content">이용 8일 전 - </div>
            <div className="content">총 결제금액의 20% 차감</div>

            <div className="content">이용 7일 전 - </div>
            <div className="content">총 결제금액의 30% 차감</div>

            <div className="content">이용 6일 전 - </div>
            <div className="content">총 결제금액의 40% 차감</div>

            <div className="content">이용 5일 전 - </div>
            <div className="content">총 결제금액의 50% 차감</div>

            <div className="content">이용 4일 전 - </div>
            <div className="content">총 결제금액의 60% 차감</div>

            <div className="content">이용 3일 전 - </div>
            <div className="content">총 결제금액의 70% 차감</div>

            <div className="content">이용 2일 전 - </div>
            <div className="content">총 결제금액의 80% 차감</div>

            <div className="content">이용 1일 전 - </div>
            <div className="content">총 결제금액의 90% 차감</div>

            <div className="content">이용 당일 </div>
            <div className="content">환불 불가능 (100%차감)</div>
          </div>
        </div>

        <div className="refund-info">
          <div className="title">준성수기 / 성수기</div>
          <div className="refund-rule-box">
            <div className="content">이용 9일 전 - </div>
            <div className="content"> 총 결제금액의 10% 차감</div>

            <div className="content">이용 8일 전 - </div>
            <div className="content">총 결제금액의 20% 차감</div>

            <div className="content">이용 7일 전 - </div>
            <div className="content">총 결제금액의 30% 차감</div>

            <div className="content">이용 6일 전 - </div>
            <div className="content">총 결제금액의 40% 차감</div>

            <div className="content">이용 5일 전 - </div>
            <div className="content">총 결제금액의 50% 차감</div>

            <div className="content">이용 4일 전 - </div>
            <div className="content">환불 불가능 (100%차감)</div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ReservationPanelReserve;

const StyledWrapper = styled.div`
  padding-left: 16px;
  line-height: 2;

  .reserve-info {
    margin-bottom: 40px;
  }

  .refund-info-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 80px;

    @media (max-width: 768px) {
      gap: 40px;
    }

    .refund-info {
      .title {
        margin-bottom: 8px;
        font-weight: 500;
      }

      .refund-rule-box {
        display: grid;
        grid-template-columns: max-content auto;
        column-gap: 12px;
      }
    }
  }
`;
