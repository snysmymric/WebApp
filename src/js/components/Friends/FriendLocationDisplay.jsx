import { PlaceOutlined } from '@mui/icons-material';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { renderLog } from '../../common/utils/logging';


// React functional component example
export default function FriendLocationDisplay (props) {
  renderLog('FriendLocationDisplay functional component');
  const { stateCodeForDisplay } = props;
  if (!stateCodeForDisplay) return null;
  return (
    <FriendLocationDisplayOuterWrapper>
      <FriendLocationDisplayInnerWrapper>
        <PlaceOutlined style={{ color: '#999' }} />
        <StateCode>
          {stateCodeForDisplay.toUpperCase()}
        </StateCode>
      </FriendLocationDisplayInnerWrapper>
    </FriendLocationDisplayOuterWrapper>
  );
}
FriendLocationDisplay.propTypes = {
  stateCodeForDisplay: PropTypes.string,
};

const FriendLocationDisplayInnerWrapper = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const FriendLocationDisplayOuterWrapper = styled('div')`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 60px;
`;

const StateCode = styled('div')`
  color: #999;
  font-size: 14px;
`;
