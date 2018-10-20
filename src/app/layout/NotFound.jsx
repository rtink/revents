import React from 'react';
import { Segment, Image } from 'semantic-ui-react';

const notFoundImageStyle = {
  // position: 'absolute',
  bottom: '5%',
  // left: '5%',
  width: '100%',
  height: 'auto',
};

export default () => {
  return (
    <Segment>
      <Image
          src={`/assets/404.png`}
          fluid
          style={notFoundImageStyle}
        />
    </Segment>
  )
}
