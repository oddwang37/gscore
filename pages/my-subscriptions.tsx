import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { withAuth } from 'hocs/withAuth';
import { useWindowDimensions } from 'hooks/getWindowDimensions';
import { wrapper, useAppDispatch } from 'state/store';
import { getSubscribes } from 'state/ducks/subscribes/thunks';
import { subscribesSelectors } from 'state/ducks/subscribes';

import { LicenseCard, CodeAccordion, PrimaryButton, Container } from 'components';
import { ArrowLeft, ArrowRight } from 'components/svg';

const MySubscriptions: NextPage = () => {
  const subscribes = useSelector(subscribesSelectors.mySubscriptions);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const dispatch = useAppDispatch();

  const { height, width } = useWindowDimensions();

  const nextSlide = () => {
    if (currentSlide !== subscribes.length - 1) {
      setCurrentSlide((prev) => ++prev);
    }
  };
  const prevSlide = () => {
    if (currentSlide !== 0) {
      setCurrentSlide((prev) => --prev);
    }
  };

  const [currentTranslate, setCurrentTranslate] = useState<number>(0);
  const [slideWidth, setSlideWidth] = useState<number>(620);
  useEffect(() => {
    setCurrentTranslate(-1 * currentSlide * (slideWidth + 28));
  }, [currentSlide]);

  useEffect(() => {
    dispatch(getSubscribes());
    setSlideWidth((width * 0.82) / 2 + 14);
  }, []);

  return (
    <div>
      <Container>
        <HeadingWrapper>
          <Heading>My Subscriptions</Heading>
          <PrimaryButton>Upgrade</PrimaryButton>
        </HeadingWrapper>
      </Container>
      <LicenseSlider>
        <SliderWrapper $translate={currentTranslate}>
          {subscribes.map((subscribe: any, index) => (
            <SliderItem $width={slideWidth} key={subscribe.id}>
              <LicenseCard status="active" disabled={currentSlide !== index}/>
            </SliderItem>
          ))}
        </SliderWrapper>
      </LicenseSlider>
      <Container>
        <SliderNavigation>
          <NavButtonLeft $inactive={currentSlide === 0} onClick={prevSlide}>
            <ArrowLeft />
          </NavButtonLeft>
          <SlidesQuantity>
            <CurrentSlide>{currentSlide + 1}/</CurrentSlide>
            {subscribes.length}
          </SlidesQuantity>
          <NavButtonRight $inactive={currentSlide >= subscribes.length - 1} onClick={nextSlide}>
            <ArrowRight />
          </NavButtonRight>
        </SliderNavigation>
        <CodesWrapper>
          <CodeAccordion />
          <CodeAccordion />
          <CodeAccordion />
        </CodesWrapper>
      </Container>
    </div>
  );
};

export default withAuth(MySubscriptions);

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  try {
    await store.dispatch(getSubscribes());
  } catch (e) {
    console.log(e);
  }
  return { props: {} };
});

type SliderWrapperProps = {
  $translate: number;
};
type SliderItemProps = {
  $width: number;
};
type NavButtonProps = {
  $inactive: boolean;
};
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
  width: 100%;
  overflow: hidden;
  padding-left: 6vw;
`;

const SliderWrapper = styled.div<SliderWrapperProps>`
  transition: 0.3s all;
  overflow: hidden;
  width: 10000%;
  display: flex;
  gap: 28px;
  transform: translateX(${({ $translate }) => ($translate ? `${$translate}` : 'none')}px);
`;
const SliderItem = styled.div<SliderItemProps>`
  width: ${({ $width }) => $width}px;
`;
const SliderNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
`;
const NavButton = styled.div<NavButtonProps>`
  padding: 10px;
  border: 1px solid #393939;
  border-radius: 12px;
  cursor: pointer;
`;

const NavButtonLeft = styled(NavButton)<NavButtonProps>`
  & path {
    stroke: ${({ $inactive }) => ($inactive ? 'rgba(255, 255, 255, 0.3)' : '#fff')};
  }
`;
const NavButtonRight = styled(NavButton)<NavButtonProps>`
  & path {
    stroke: ${({ $inactive }) => ($inactive ? 'rgba(255, 255, 255, 0.3)' : '#fff')};
  }
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
