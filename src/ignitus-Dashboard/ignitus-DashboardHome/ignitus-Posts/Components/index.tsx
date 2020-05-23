import React from 'react';
import * as S from '../styles';
import DashboardFooter from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-DashboardFooter/Components';
import { SideProfileCard } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-SideProfileCard/Components';
import { DefaultMultiMediaInput } from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Atoms/ignitus-defaultMulti/Components/index';
import { DashboardNavigation } from '../../../../ignitus-Shared';
import {
  InternshipCard,
  PublicationCard,
} from '../../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Organisms/ignitus-InternshipCard/Components';
import { CardInfo } from '../constants';

function PostsPage() {
  return (
    <S.Container>
      <S.LeftSection>
        <SideProfileCard
          name="sfsf"
          designation="adada"
          trackingInformation="afagag"
        />
        <S.Wrapper>
          <DashboardNavigation />
        </S.Wrapper>
      </S.LeftSection>
      <S.MiddleSection>
        <S.MultiWrapper>
          <DefaultMultiMediaInput placeholder="adjkafnakjf" name="daaf" />
        </S.MultiWrapper>
        {CardInfo.map(
          (x: any) =>
            ({
              internship: (
                <S.Wrapper>
                  <InternshipCard
                    ImageLink={x.imageLink}
                    Title={x.title}
                    Position={x.position}
                    Place={x.place}
                    Company={x.company}
                    JobType={x.jobType}
                  />
                </S.Wrapper>
              ),
              publication: (
                <S.Wrapper>
                  <PublicationCard
                    ImageLink={x.imageLink}
                    Title={x.title}
                    Description={x.description}
                  />
                </S.Wrapper>
              ),
            }[x.type]),
        )}
        <S.Wrapper>
          <InternshipCard
            ImageLink=".."
            Title="Adaf"
            Position="afga"
            Place="aafaf"
            Company="saf"
          />
        </S.Wrapper>
      </S.MiddleSection>
      <S.RightSection>
        <DashboardFooter />
      </S.RightSection>
    </S.Container>
  );
}
export default PostsPage;
