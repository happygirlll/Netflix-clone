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
                <FooterDescContainer>
                    <FooterDescRights></FooterDescRights>
                </FooterDescContainer>
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

const FooterContent = styled.div``;

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

const FooterDescContainer = styled.div`
        margin-top: 30px;
        @media (max-width: 768px) {
            margin-top: 20px;
        }
    `;

const FooterDescRights = styled.div`
        color: white;
        font-size: 14px;
        margin-bottom: 15px;
    `;

