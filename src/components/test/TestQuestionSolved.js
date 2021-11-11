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
    margin-bottom: 25px;
    border-radius: 20px;
    background: ${Colors.backgroundGrey};
    box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.25);
    position: relative;
    font-family: Special Elite;
`;

const Question = styled.h2`
    font-size: 1.4em;
`;

const ItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
`;

const Item = styled.p`
    font-size: 1.2em;
`;

const TextBox = styled.div`
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.25);
    border: none;
    padding: 30px;
    height: 150px;
    font-size: 1.2em;

    @media (max-width: 750px) {
        height: 400px;
    }
`;

const ResultContainer = styled.div`
    margin-top: 1.2em;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;

    @media(max-width: 750px) {
        flex-direction: column;
        align-itens: center;
        justify-content: center;
    }
`;

const Answer = styled.p`
    color: ${Colors.secondaryGreen};
    font-size: 1.2em;
`;

const GradeField = styled.input`
    font-size: 1.2em;
    width: 3em;
`;

const GradeContainer = styled.div`
    margin-top: 1.2em;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-end;
`;

const TestQuestionSolved = (props) => {
    function selectColor(index, selected, right) {
        if(selected === index) {
            if(right === selected) return Colors.secondaryGreen;
            else return Colors.accentRed
        } else if(right === index) {
            return Colors.secondaryGreen
        } else {
            return Colors.black
        }
    }

    return (
        <TestQuestionContainer>
            <Question>{props.question}</Question>
            {props.multiple && props.items.map((el, index) => (
                <ItemContainer key={el}>
                    <Item style={{color: selectColor(index, props.selected, props.answer)}}>{el}</Item>
                </ItemContainer>
            ))}
            {!props.multiple &&
                <TextBox style={{background: 'white'}}>{props.givenAnswer}</TextBox>
            }
            {props.multiple &&
                <ResultContainer>
                    <Answer>{props.answerDescription}</Answer>
                    <p>Nota: 0.0 / 1.0</p>
                </ResultContainer>
            }
            {!props.multiple && props.evaluate &&
                <GradeContainer>
                    <p>Nota: </p>
                    <GradeField />
                    <p> / 1.0</p>
                </GradeContainer>
            }
            {!props.multiple && !props.evaluate &&
                <GradeContainer>
                    <p>Nota: 0.0 / 1.0</p>
                </GradeContainer>
            }
        </TestQuestionContainer>
    );
};

export default TestQuestionSolved;
