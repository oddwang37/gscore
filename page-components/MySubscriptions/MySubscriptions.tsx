/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { intervalToDuration, add, format } from 'date-fns';
import { useRouter } from 'next/router';
import _ from 'lodash';

import { RootState, useAppDispatch } from 'state/store';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { manageCodes } from 'state/ducks/codes/thunks';
import { subscribesSelectors } from 'state/ducks/subscribes';
import { codesSelectors } from 'state/ducks/codes';
import { clearSelectedCodes } from 'state/ducks/codes';
import { LicenseCard, CodeAccordion, Container, NoSubsPlaceholder } from 'components';
import PrimaryButton from 'components/UI/buttons/PrimaryButton/PrimaryButton';
import { ArrowLeft, ArrowRight } from 'components/svg';

const MySubscriptions: FC<MySubscriptionsProps> = ({ initialSlideIndex }) => {
  const subscribes = useSelector(subscribesSelectors.mySubscriptions);
  const [currentSlide, setCurrentSlide] = useState<number>(initialSlideIndex);
  const codes = useSelector((state: RootState) =>
    subscribes[currentSlide] ? codesSelectors.codesOfSub(state, subscribes[currentSlide].id) : [],
  );
  const codesIds = useSelector(codesSelectors.selectedCodesIds);
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
  const [selectMode, setSelectMode] = useState(false);

  useEffect(() => {
    setCurrentTranslate(-1 * currentSlide * (slideWidth + 28));
    setSelectMode(false);
    if (_.some(codes, (code) => code.status === 'HOLD')) {
      setSelectMode(true);
    }
    dispatch(clearSelectedCodes);
  }, [currentSlide]);

  const router = useRouter();

  useEffect(() => {
    if (width < 768) {
      setSlideWidth(width * 0.82 + 20);
    } else {
      setSlideWidth((width * 0.82) / 2 + 14);
    }
    const subscribeId = Number(router.query.subscribeId);
    if (subscribeId) {
      setSelectMode(true);
    }
  }, []);

  const onUpgradeClick = () => {
    router.push({ pathname: '/', query: { subscribeId: subscribes[currentSlide].id } });
  };

  const formatPeriodEnd = (seconds: string) => {
    const durationFrom0 = intervalToDuration({ start: 0, end: Number(seconds) * 1000 });
    const newDate = add(new Date(0), durationFrom0);
    return format(newDate, 'dd.MM.yyyy');
  };

  const [errorMessage, setErrorMessage] = useState('');

  const onConfirmDomainKeep = async () => {
    setErrorMessage('');
    try {
      await dispatch(manageCodes({ codesIds, subscribeId: subscribes[currentSlide].id })).unwrap();
      setSelectMode(false);
    } catch (e: any) {
      setErrorMessage(e.message);
    }
  };

  return (
    <div>
      <Container>
        <HeadingWrapper>
          <Heading>My Subscriptions</Heading>
          {!!subscribes.length && <UpgradeButton onClick={onUpgradeClick}>Upgrade</UpgradeButton>}
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
      {subscribes.length === 0 && <NoSubsPlaceholder />}
      <Container>
        {subscribes.length !== 0 && (
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
        )}
        {selectMode && <MobileSelectText>Select the domains you want to keep</MobileSelectText>}
        <CodesWrapper>
          {codes.map((code) => (
            <CodeAccordion
              status={code.status}
              code={code.code}
              origin={code.origin === null ? '' : code.origin}
              id={code.id}
              key={code.id}
            />
          ))}
        </CodesWrapper>
        {selectMode && (
          <SelectDomainsWrapper>
            <div>Select the domains you want to keep</div>
            <PrimaryButton onClick={onConfirmDomainKeep}>Confirm</PrimaryButton>
          </SelectDomainsWrapper>
        )}
        {selectMode && (
          <MobileConfirmButton onClick={onConfirmDomainKeep}>Confirm</MobileConfirmButton>
        )}
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </Container>
    </div>
  );
};

export default MySubscriptions;

type MySubscriptionsProps = {
  initialSlideIndex: number;
};
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
const UpgradeButton = styled(PrimaryButton)`
  @media (max-width: 768px) {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primaryColor};
    background-color: rgba(0, 0, 0, 0);
    box-shadow: none;
    padding: 0;
    &:hover {
      background-color: rgba(0, 0, 0, 0);
    }
    &:focus {
      outline: none;
    }
  }
`;
const MobileUpgradeButton = styled.div`
  display: none;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryColor};
  @media (max-width: 768px) {
    display: block;
  }
`;
const ButtonWrapper = styled.div``;
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
const SelectDomainsWrapper = styled.div`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  margin-top: 72px;
  @media (max-width: 576px) {
    display: none;
  }
`;
const MobileConfirmButton = styled(PrimaryButton)`
  width: 100%;
  margin-top: 36px;
  display: none;
  height: 72px;
  @media (max-width: 576px) {
    display: block;
  }
`;
const MobileSelectText = styled.div`
  margin-top: 32px;
  margin-bottom: 28px;
  font-size: 20px;
  font-weight: 700;
  display: none;
  @media (max-width: 576px) {
    display: block;
  }
`;
const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.red400};
  font-size: 18px;
  @media (max-width: 576px) {
    margin-top: 20px;
  }
`;
