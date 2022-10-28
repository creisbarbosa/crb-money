import styled from "styled-components";

export const Container = styled.header`
    background: var(--t-black-20);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 9rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        line-height: 1.25rem;
        font-weight: 700;

        color: var(--green);

        padding: 14px 32px;
        background: var(--black);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 8px;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(1.3);
        }
    }
`