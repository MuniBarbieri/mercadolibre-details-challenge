import React, {useRef, useReducer, RefObject} from "react";
import {Text, Stack, Icon} from "@chakra-ui/react";
import {FiThumbsUp, FiThumbsDown} from "react-icons/fi";
import {FaThumbsUp, FaThumbsDown} from "react-icons/fa";

import {
  customersFeedbackReducer,
  initialState,
  customerFeedbackData,
} from "../../reducers/customersFeedbackReducer";

interface onClickData extends customerFeedbackData {
  thumbUpRef?: RefObject<HTMLDivElement>;
  thumbDownRef?: RefObject<HTMLDivElement>;
}

export const BuyersFeedback = () => {
  const [state, dispatch] = useReducer(customersFeedbackReducer, initialState);

  const thumbUpRef = useRef<HTMLDivElement>(null);
  const thumbDownRef = useRef<HTMLDivElement>(null);

  const handleClick = ({
    totalThumbsDown,
    totalThumbsUp,
    id,
    thumbUpRef: thumbUp,
    thumbDownRef: thumbDown,
  }: onClickData) => {
    if (thumbUp) {
      dispatch({
        type: "UPDATE_IS_UP",
        payload: {id, totalThumbs: totalThumbsUp},
      });
    } else if (thumbDown) {
      dispatch({
        type: "UPDATE_IS_DOWN",
        payload: {id, totalThumbs: totalThumbsDown},
      });
    }
  };

  return (
    <Stack direction="column" padding={10} spacing={10}>
      {state.buyersFeedback.map(
        ({summary, feedback, isUp, isDown, id, totalThumbsUp, totalThumbsDown}, index) => (
          <Stack key={`feedback-container-${index}`}>
            <Text fontSize={16} fontWeight={500}>
              {summary}
            </Text>
            <Text color="gray.600">{feedback}</Text>
            <Stack direction="row" spacing={10}>
              <Stack alignItems="center" direction="row">
                <Stack
                  ref={thumbUpRef}
                  onClick={() =>
                    handleClick({
                      id,
                      isUp,
                      isDown,
                      totalThumbsUp,
                      totalThumbsDown,
                      thumbUpRef,
                    })
                  }
                >
                  {!isUp || isDown ? <Icon as={FiThumbsUp} /> : <Icon as={FaThumbsUp} />}
                </Stack>
                <Text>{totalThumbsUp}</Text>
              </Stack>
              <Stack alignItems="center" direction="row">
                <Stack
                  ref={thumbDownRef}
                  onClick={() =>
                    handleClick({
                      id,
                      isUp,
                      isDown,
                      totalThumbsDown,
                      totalThumbsUp,
                      thumbDownRef,
                    })
                  }
                >
                  {!isDown || isUp ? <Icon as={FiThumbsDown} /> : <Icon as={FaThumbsDown} />}
                </Stack>
                <Text>{totalThumbsDown}</Text>
              </Stack>
            </Stack>
          </Stack>
        ),
      )}
    </Stack>
  );
};
