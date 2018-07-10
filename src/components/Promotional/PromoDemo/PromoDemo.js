// @flow
import React from 'react';
import Button from '../../Form/Button';
import Banner from '../Banner';
import BenefitItem from '../BenefitItem';
import BenefitList from '../BenefitList';
import ImageDisplay from '../ImageDisplay';
import PromoFooter from '../Footer';
import PromoHighlight from '../Highlight';
import PromoSection from '../Section';
import SupportItem from '../SupportItem';
import SupportList from '../SupportList';
import VideoDisplay from '../VideoDisplay';

function PromoDemo() {
  const benefit = (
    <BenefitItem>
      <em>Really good for this</em> in some truly amazing ways
    </BenefitItem>
  );
  const support = (
    <SupportItem
      name="Medical Bandages"
      extra="Adhesive only"
      image={{
        src: 'http://res.publicdomainfiles.com/pdf_view/2/13491430814060.png',
        alt: 'A bandage.',
      }}
    />
  );

  return (
    <div style={{ backgroundColor: '#F5F7F8' }}>
      <Banner title="Product Name">
        <p>
          This is a paragraph of text made to emulate a quick description of the
          item being promoted.
        </p>
        <Button large>Activate now</Button>
        <Button large color="white" keyline>
          Find out more
        </Button>
      </Banner>
      <PromoSection>
        <PromoHighlight
          image={{
            src:
              'http://res.publicdomainfiles.com/pdf_view/2/13491430814060.png',
            alt: 'A bandage.',
          }}
        >
          <p>
            What a great description of <em>this product</em>. This is a
            paragraph of text made to emulate a more detailed description of the
            item being promoted.
          </p>
          <p>It is just so versatile!</p>
          <p>
            What a great description of this product. This is a paragraph of
            text made to emulate a more detailed description of the item being
            promoted. It is really good if you take the time to check it out.
          </p>
        </PromoHighlight>
        <h2>Sweet benefits</h2>
        <BenefitList>
          {benefit}
          {benefit}
          {benefit}
          {benefit}
          {benefit}
          {benefit}
          {benefit}
        </BenefitList>
      </PromoSection>
      <PromoSection white>
        <h2>Works well with</h2>
        <p>
          What a great description of this product. This is a paragraph of text
          made to emulate a more detailed description of the item being
          promoted. It is really good if you take the time to check it out.
        </p>
        <SupportList>
          {support}
          {support}
          {support}
          {support}
          {support}
          {support}
          {support}
          {support}
          {support}
          {support}
        </SupportList>
      </PromoSection>
      <PromoSection>
        <VideoDisplay youtubeId="iYuXzohJUFE">
          <h2>Heading about the video</h2>
          <p>
            This is a paragraph of text made to emulate a quick description of
            the item being promoted.
          </p>
          <p>
            This is a paragraph of text made to emulate a quick description of
            the item being promoted.
          </p>
        </VideoDisplay>
      </PromoSection>
      <PromoSection white>
        <ImageDisplay
          image={{
            src:
              'http://res.publicdomainfiles.com/pdf_view/2/13491430814060.png',
            alt: 'A bandage.',
          }}
        >
          <h2>Heading about the image</h2>
          <p>
            This is a paragraph of text made to emulate a quick description of
            the item being promoted.
          </p>
          <p>
            This is a paragraph of text made to emulate a quick description of
            the item being promoted.
          </p>
          <p>
            This is a paragraph of text made to emulate a quick description of
            the item being promoted.
          </p>
        </ImageDisplay>
      </PromoSection>
      <PromoFooter header="Ready for this product?">
        <p>This product will change everything.</p>
        <Button large>Activate now</Button>
        <Button large color="white" keyline>
          Find out more
        </Button>
      </PromoFooter>
    </div>
  );
}

export default PromoDemo;
