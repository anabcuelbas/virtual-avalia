import styled from 'styled-components';

import Colors from '../../constants/Colors';

const TestQuestionContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    box-sizing: border-box;
    padding: 2em;
    width: 100%;
    align-self: center;
    margin-top: 25px;
    border-radius: 20px;
    background: ${Colors.backgroundGrey};
    box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.25);
    position: relative;
    font-family: Special Elite;
`;

const Question = styled.h2`
    font-size: 1.4em;
`;

const ItemContainer = styled.label`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

const Item = styled.p`
    font-size: 1.2em;
`;

const TextBox = styled.textarea`
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.25);
    border: none;
    padding: 10px;
    height: 150px;

    @media (max-width: 750px) {
        height: 400px;
    }
`;

const TestQuestion = (props) => {
    return (
        <TestQuestionContainer>
            <Question>{props.question}</Question>
            {props.multiple && props.items.map((el) => (
                <ItemContainer>
                    <input type="radio" name={props.question} />
                    <Item>{el}</Item>
                </ItemContainer>
            ))}
            {!props.multiple &&
                <TextBox name="answer"></TextBox>
            }
        </TestQuestionContainer>
    );
};

export default TestQuestion;
