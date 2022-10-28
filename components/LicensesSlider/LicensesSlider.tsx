import { useEffect, useState, FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { intervalToDuration, add, format } from 'date-fns';
import _ from 'lodash';

import { useSlider } from 'hooks/useSlider';
import { useWindowDimensions } from 'hooks/useWindowDimensions';
import { useAppDispatch } from 'state/store';
import { subscribesSelectors } from 'state/ducks/subscribes';

import { LicenseCard } from 'components/LicenseCard';
import Container from 'components/UI/Container/Container';
import { ArrowLeft, ArrowRight } from 'components/svg';

const LicensesSlider: FC<LicensesSliderProps> = ({ initialSlideIndex, changeSelectMode }) => {
  const subscribes = useSelector(subscribesSelectors.mySubscriptions);
  const [slideWidth, setSlideWidth] = useState<number>(620);

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (width < 768) {
      setSlideWidth(width * 0.82 + 20);
    } else {
      setSlideWidth((width * 0.82) / 2 + 14);
    }
  }, []);

  const { prevSlide, nextSlide, currentSlide, currentTranslate } = useSlider(
    subscribes,
    initialSlideIndex,
    slideWidth,
    changeSelectMode,
  );

  const formatPeriodEnd = (seconds: string) => {
    const durationFrom1970 = intervalToDuration({ start: 0, end: Number(seconds) * 1000 });
    const newDate = add(new Date(0), durationFrom1970);
    return format(newDate, 'dd.MM.yyyy');
  };

  return (
    <Root>
      {!!subscribes.length && (
        <>
          {' '}
          <Slider>
            <SliderWrapper $translate={currentTranslate}>
              {subscribes &&
                subscribes.map((subscribe, index) => (
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
          </Slider>
          <Container>
            {!!subscribes.length && (
              <SliderNavigation>
                <NavButtonLeft $inactive={currentSlide === 0} onClick={prevSlide}>
                  <ArrowLeft />
                </NavButtonLeft>
                <SlidesQuantity>
                  <CurrentSlide>{currentSlide + 1}/</CurrentSlide>
                  {subscribes && subscribes.length}
                </SlidesQuantity>
                <NavButtonRight
                  $inactive={currentSlide >= subscribes.length - 1}
                  onClick={nextSlide}>
                  <ArrowRight />
                </NavButtonRight>
              </SliderNavigation>
            )}
          </Container>
        </>
      )}
    </Root>
  );
};

export default LicensesSlider;

type LicensesSliderProps = {
  initialSlideIndex: number;
  changeSelectMode: (val: boolean) => void;
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

const Root = styled.div``;
const Slider = styled.div`
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
