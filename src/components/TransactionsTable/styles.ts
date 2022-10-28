import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;

        th {
            color: var(--gray-100);
            font-weight: 400;
            line-height: 1.5rem;
            padding: 1rem 2rem;
            text-align: left;
        }
        
        td {
            padding: 1.25rem 2rem;
            font-weight: 700;
            
            &:first-child {
                font-weight: 400;
            }
            
            &.deposit::first-letter {
                color: var(--green);
            }
            
            &.withdraw::first-letter {
                color: var(--red);
            }
        }
        
        tbody > tr {
            border-radius: 0.25rem;
            outline: solid 1px var(--t-white-05);
            box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(4px);
    }

    }

`;