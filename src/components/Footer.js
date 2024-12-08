import React from 'react'
import styled from 'styled-components';

export default function Footer() {

    return (
        <FooterContainer>
            <FooterContent>
                <FooterLinkContainer>
                    <FooterLinkContent>
                        <FooterLink href="https://help.netflix.com/ko/node/412">넷플릭스 소개</FooterLink>
                        <FooterLink href="https://help.netflix.com/ko">고객 센터</FooterLink>
                        <FooterLink href="https://www.netflix.com/kr/redeem">기프트카드</FooterLink>
                        <FooterLink href="https://help.netflix.com/ko/">미디어 센터</FooterLink>
                        <FooterLink href="https://ir.netflix.net/ir-overview/profile/default.aspx">투자 정보(IR)</FooterLink>
                        <FooterLink href="https://jobs.netflix.com/">입사 정보</FooterLink>
                        <FooterLink href="https://help.netflix.com/legal/termsofuse">이용 약관</FooterLink>
                        <FooterLink href="https://help.netflix.com/legal/privacy">개인 정보</FooterLink>
                        <FooterLink href="https://help.netflix.com/legal/notices">법적 고지</FooterLink>
                        <FooterLink href="https://www.netflix.com/browse">쿠키 설정</FooterLink>
                        <FooterLink href="https://help.netflix.com/legal/corpinfo">회사 정보</FooterLink>
                        <FooterLink href="https://help.netflix.com/legal/contactus">문의 하기</FooterLink>
                    </FooterLinkContent>
                </FooterLinkContainer>
                <FooterBottom>
                    <FooterBottomText>
                        넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 00-308-321-0161 (수신자 부담)
                    </FooterBottomText>
                    <FooterBottomText>
                        대표: 레지널드 숀 톰프슨
                    </FooterBottomText>
                    <FooterBottomText>
                        이메일 주소: korea@netflix.com
                    </FooterBottomText>
                    <FooterBottomText>
                        주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로플러스 A동 20층 우편번호 03161
                    </FooterBottomText>
                    <FooterBottomText>
                        사업자등록번호: 165-87-00119
                    </FooterBottomText>
                    <FooterBottomText>
                        클라우드 호스팅: Amazon Web Services Inc.
                    </FooterBottomText>
                    <FooterBottomText>
                        공정거래위원회 웹사이트
                    </FooterBottomText>
                </FooterBottom>
            </FooterContent>
        </FooterContainer>

    );
}

const FooterContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px 0px;
        border-top: 1px solid rgb(25, 25, 25);
        width: 100%;
        position: relative;
        z-index: 100;

        @media (max-width: 768px) {
            padding: 20px 20px;
            padding-bottom: 30px;
        }
    `;

const FooterContent = styled.div`
    margin-top: 30px;
`;

const FooterLinkContainer = styled.div`
        width: 500px;
        @media (max-width: 768px) {
            width: 100%;
        }
    `;

const FooterLinkContent = styled.div`
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 35px;

        @media (max-width: 768px) {
            justify-content: flex-start;
            flex-wrap: wrap; /* 항목을 줄바꿈하여 배치 */
            margin-top: 20px;
            text-align: left;

            & > a {
            flex-basis: calc(50% - 5px); /* 두 열로 배치 */
            margin-bottom: 15px;
        }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
        flex-direction: row; /* 태블릿 크기에서는 가로 정렬 */
        justify-content: space-around;
    }
    `;

const FooterLink = styled.a`
        color: gray;
        font-size: 11px;
        width: 110px;
        margin-bottom: 21px;
        text-decoration: none;
        
        @media (max-width: 768px) {
            font-size: 13px;
            margin-bottom: 15px;
        }
        
        &:hover {
        text-decoration: underline; 
    }
        `;

const FooterBottom = styled.div`
    margin-top: 30px;
    color: gray;
    font-size: 11px;
    line-height: 1.5;

    @media (max-width: 768px) {
        margin-top: 20px;
        font-size: 10px;
    }
`;

const FooterBottomText = styled.div`

    margin-bottom: 5px;
    text-align: left;

    @media (max-width: 768px) {
        margin-bottom: 3px;
    }
`;
