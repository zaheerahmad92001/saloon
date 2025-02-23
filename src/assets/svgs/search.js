import * as React from 'react';
import Svg, {G, Path, Rect} from 'react-native-svg';



const Search = ({width, height}) => (
  <Svg width={width} height={height} viewBox="0 0 22.629 22.999">
    <G id="Group_1" data-name="Group 1" transform="translate(1 1)">
      <G
        id="Icon_feather-search"
        data-name="Icon feather-search"
        transform="translate(0)"
      >
        <Path
          id="Path_635"
          data-name="Path 635"
          d="M22.692,13.829a9.215,9.215,0,0,1-9.1,9.329,9.215,9.215,0,0,1-9.1-9.329A9.215,9.215,0,0,1,13.6,4.5a9.215,9.215,0,0,1,9.1,9.329Z"
          transform="translate(-4.5 -4.5)"
          fill="none"
          stroke="#7283a4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </G>
      <Rect
        id="Rectangle_7695"
        data-name="Rectangle 7695"
        width={3.5}
        height={7.25}
        rx={1}
        transform="matrix(0.695, -0.719, 0.719, 0.695, 13.983, 16.963)"
        fill="#7283a4"
      />
    </G>
  </Svg>
);
export default React.memo(Search);
