import React from 'react';
import styled from 'styled-components/macro';

interface IWrapper {
  readonly fontfamily: string;
  readonly fontweight: number | string;
}

const Wrapper = styled.div<IWrapper>`
  font-family: ${props => props.fontfamily};
  font-weight: ${props => props.fontweight};
`;

const PreviewName = styled.div`
  font-size: ${props => props.theme.fontSizes[1]};
`;

const PreviewSets = styled.div`
  font-size: ${props => props.theme.fontSizes[1]};
`;

interface IProps {
  fontFamilyName: string;
  fontWeight: number | string;
}

const FontPreview: React.FC<IProps> = props => {
  const { fontFamilyName, fontWeight } = props;
  return (
    <Wrapper fontfamily={fontFamilyName} fontweight={fontWeight}>
      <PreviewName>
        {fontFamilyName}
        <span className="badge as--end as--xs">{fontWeight}</span>
      </PreviewName>
      <PreviewSets>
        <div>a b c d e f g h i j k l m n o p q r s t u v w x y z</div>
        <div>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</div>
        <div>1 2 3 4 5 6 7 8 9 0</div>
      </PreviewSets>
    </Wrapper>
  );
};

export default React.memo(FontPreview);
