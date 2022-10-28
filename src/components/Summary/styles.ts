import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -7rem;

    div {
        background: var(--black);
        padding: 1.25rem 1.25rem 1.25rem 2rem;
        border: solid 1px var(--t-white-10);
        border-radius: 0.5rem;
        box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.6);

        header {
            display: flex;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2.25rem;
            line-height: 3.375rem;
            font-weight: 500;
        }

        p {
            font-weight: 700;
        }

        &.highlighted-summary {
            background-color: var(--green);
            border: solid 1px var(--t-black-30);
        
            strong, p {
                    color: var(--black);
                }
        
            strong {
                font-weight: 700;
            }
        }

    }
`;