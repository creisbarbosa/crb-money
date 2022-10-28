import styled from 'styled-components'
import { transparentize } from 'polished' 

export const Container =  styled.form`

    .modal-header {
        width: 100%;
        display: flex;
        margin-bottom: 2rem;

        h2 {
            color: var(--white);
            font-size: 1.5rem;
            line-height: 2rem;
            margin-left: 1rem;
        }
    }
    

    input {
        width: 100%;
        padding: 1rem 1.5rem;
        border-radius: 0.25rem;
        border: 1px solid var(--t-white-10);
        background: var(--t-black-20);

        &::placeholder {
            font-weight: 500;
            font-size: 1 rem;
            color: var(--gray-100);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type='submit'] {
        width: 100%;
        padding: 1rem 1rem;
        margin-top: 1.25rem;

        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.25rem;
        color: var(--black);
        background: var(--green);

        border: 2px solid var(--t-black-20);
        border-radius: 5rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(1.1);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#60D06E',
    red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .75rem;

    border: 1px solid ${(props) => props.isActive 
        ? colors[props.activeColor] 
        : 'var(--t-white-10)' 
    };
    border-radius: 0.25rem;
    background: ${(props) => props.isActive 
        ? transparentize(0.9, colors[props.activeColor]) 
        : 'var(--t-black-20)' 
    };

    transition: all 0.2s;

    &:hover {
        border: 1px solid ${(props) => props.isActive 
        ? colors[props.activeColor] 
        : 'var(--t-white-30)' 
    }}
    img {
        width: 24px;
        height: 24px;
    }
    span {
        color: ${(props) => props.isActive
            ? colors[props.activeColor]
            : 'var(--gray-50)'
        };
        display: inline-block;
        margin-left: .5rem;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.75rem;
    }
`;