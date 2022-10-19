import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';

import { withAuth } from 'hocs/withAuth';

import { LicenseCard, CodeAccordion, PrimaryButton } from 'components';
import { ArrowLeft, ArrowRight } from 'components/svg';

const MySubscriptions: NextPage = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = () => setCurrentSlide((prev) => ++prev);
  const prevSlide = () => setCurrentSlide((prev) => --prev);

  const [currentTranslate, setCurrentTranslate] = useState<number>(0);

  useEffect(() => {
    setCurrentTranslate((prev) => prev + 620);
  }, [currentSlide]);

  return (
    <>
      <HeadingWrapper>
        <Heading>My Subscriptions</Heading>
        <PrimaryButton>Upgrade</PrimaryButton>
      </HeadingWrapper>
      <LicenseSlider>
        <SliderWrapper>
          <LicenseCard status="active" />
          <LicenseCard status="hold" />
          <LicenseCard status="inactive" />
        </SliderWrapper>
      </LicenseSlider>
      <SliderNavigation>
        <NavButton onClick={nextSlide}>
          <ArrowLeft />
        </NavButton>
        <SlidesQuantity>
          <CurrentSlide>1/</CurrentSlide>10
        </SlidesQuantity>
        <NavButton onClick={prevSlide}>
          <ArrowRight />
        </NavButton>
      </SliderNavigation>
      <CodesWrapper>
        <CodeAccordion />
        <CodeAccordion />
        <CodeAccordion />
      </CodesWrapper>
    </>
  );
};

export default withAuth(MySubscriptions);

const Container = styled.div`
  margin: 0 6%;
`;
const Heading = styled.h1`
  ${({ theme: { typography } }) => typography.title54};
`;
const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
`;
const LicenseSlider = styled.div`
  margin-top: 48px;
  gap: 28px;
  padding-left: 6%;
  width: 100%;
  overflow: hidden;
`;
type SliderWrapperProps = {
  translate: number;
};
const SliderWrapper = styled.div<SliderWrapperProps>`
  overflow: hidden;
  width: 10000%;
  display: flex;
  gap: 28px;
`;
const SliderNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
`;
const NavButton = styled.div`
  padding: 10px;
  border: 1px solid #393939;
  border-radius: 12px;
  cursor: pointer;
`;
const SlidesQuantity = styled.div`
  color: #393939;
  ${({ theme: { typography } }) => typography.title22};
`;
const CurrentSlide = styled.span`
  color: #fff;
`;
const CodesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
`;
