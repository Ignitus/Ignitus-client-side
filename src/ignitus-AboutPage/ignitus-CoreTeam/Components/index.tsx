/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';

import { Data } from '../constants';
import { withErrorBoundary, AppIcon, Paragraph } from '../../../ignitus-Shared';
import { Team, TeamItemProps } from '../types';
import { LazyImage } from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Assets/Ignitus-LazyImage/Component';

import * as S from '../styles';
import * as T from '../../../ignitus-Shared/ignitus-DesignSystem/shared';

const PureCoreTeam = ({ team }: any) => (
  <S.PureCoreTeam>
    <T.Title> Our Team </T.Title>
    <S.TeamContainer>{team}</S.TeamContainer>
  </S.PureCoreTeam>
);

export const TeamItem = ({
  item: { title, img, description, linkedin, angellist },
}: TeamItemProps) => {
  const [value, setValue] = React.useState(false);
  return (
    <S.TeamCardContainer
      onMouseOver={() => setValue(true)}
      onMouseOut={() => setValue(false)}
    >
      <S.TeamCard>
        <LazyImage
          src={img}
          alt={`avatar ${title}`}
          width="6rem"
          borderRadius="100%"
        />
        <S.TeamItemTitle>{title}</S.TeamItemTitle>
        <Paragraph>{description}</Paragraph>
        <S.LinkWrapper toggle={value}>
          <S.Link href={linkedin} color="black">
            <S.LinkedIn name={AppIcon.LinkedInIcon} />
          </S.Link>
          <S.Link href={angellist} color="black">
            <S.AngelList name={AppIcon.AngelListIcon} />
          </S.Link>
        </S.LinkWrapper>
      </S.TeamCard>
    </S.TeamCardContainer>
  );
};

export const CoreTeam = withErrorBoundary(() => {
  const team = Data.map((item: Team) => (
    <TeamItem key={item.title} item={item} />
  ));
  return <PureCoreTeam team={team} />;
});
