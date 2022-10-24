import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { intervalToDuration, add, format } from 'date-fns';

import { RootState } from 'state/store';
import { Subscribes } from 'state/ducks/subscribes/types';
import { withAuth } from 'hocs/withAuth';
import { useWindowDimensions } from 'hooks/getWindowDimensions';
import { wrapper, useAppDispatch } from 'state/store';
import { getCodes } from 'state/ducks/codes/thunks';
import { getSubscribes } from 'state/ducks/subscribes/thunks';
import { subscribesSelectors } from 'state/ducks/subscribes';
import { codesSelectors } from 'state/ducks/codes';
import cookies, { CookiesKeys } from 'services/cookies';

import { LicenseCard, CodeAccordion, PrimaryButton, Container } from 'components';
import { ArrowLeft, ArrowRight } from 'components/svg';

const MySubscriptions: NextPage = () => {
  const subscribes = useSelector(subscribesSelectors.mySubscriptions);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const codes = useSelector((state: RootState) =>
    subscribes[currentSlide] ? codesSelectors.codesOfSub(state, subscribes[currentSlide].id) : [],
  );

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
    if (width < 768) {
      setSlideWidth(width * 0.82 + 20);
    } else {
      setSlideWidth((width * 0.82) / 2 + 14);
    }
  }, []);

  const formatPeriodEnd = (seconds: string) => {
    const durationFrom0 = intervalToDuration({ start: 0, end: Number(seconds) * 1000 });
    const newDate = add(new Date(0), durationFrom0);
    return format(newDate, 'dd.MM.yyyy');
  };

  return (
    <div>
      <Container>
        <HeadingWrapper>
          <Heading>My Subscriptions</Heading>
          <MobileButton>Upgrade</MobileButton>
          <ButtonWrapper>
            <PrimaryButton>Upgrade</PrimaryButton>
          </ButtonWrapper>
        </HeadingWrapper>
      </Container>
      <LicenseSlider>
        <SliderWrapper $translate={currentTranslate}>
          {subscribes &&
            subscribes.map((subscribe: any, index) => (
              <SliderItem $width={slideWidth} key={subscribe.id}>
                <LicenseCard
                  name={subscribe.product.name}
                  currentPeriodEnd={formatPeriodEnd(subscribe.currentPeriodEnd)}
                  status={subscribe.status}
                  disabled={currentSlide !== index}
                  price={subscribe.product.prices[0].price}
                />
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
            {subscribes && subscribes.length}
          </SlidesQuantity>
          <NavButtonRight $inactive={currentSlide >= subscribes.length - 1} onClick={nextSlide}>
            <ArrowRight />
          </NavButtonRight>
        </SliderNavigation>
        <CodesWrapper>
          {codes.map((code) => (
            <CodeAccordion
              status={code.status}
              code={code.code}
              origin={code.origin === null ? '' : code.origin}
              key={code.id}
            />
          ))}
        </CodesWrapper>
      </Container>
    </div>
  );
};

export default withAuth(MySubscriptions);

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res }) => {
  const token = await cookies.getItem(CookiesKeys.token, { req, res });
  try {
    await store.dispatch(getSubscribes({ headers: { Authorization: `Bearer ${token}` } }));
    await store.dispatch(getCodes({ headers: { Authorization: `Bearer ${token}` } }));
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
  @media (max-width: 992px) {
    ${({ theme: { typography } }) => typography.title44};
  }
  @media (max-width: 768px) {
    font-size: 38px;
  }
  @media (max-width: 576px) {
    ${({ theme: { typography } }) => typography.title28};
  }
`;
const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
  @media (max-width: 576px) {
    margin-bottom: 10px;
  }
`;
const MobileButton = styled.div`
  display: none;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryColor};
  @media (max-width: 768px) {
    display: block;
  }
`;
const ButtonWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
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
