import { FormEvent, useState } from 'react';
import Modal from 'react-modal'
import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg'
import inconmeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg'
import swapImg from '../../assets/swap_horiz.svg'

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useTransactions();
    
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('deposit');
    const [category, setCategory] = useState('');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type,
        })

        setTitle('');
        setAmount(0);
        setType('deposit');
        setCategory('');
        onRequestClose();

    }

    
    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className="react-modal-content"
        >
            <button 
                type='button' 
                onClick={onRequestClose} 
                className='react-modal-close'
            >
                <img src={closeImg} alt="fechar-modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <div className='modal-header'>
                    <img src={swapImg} alt="Nova entrada" />
                    <h2>Cadastrar nova transação</h2>
                </div>

                <input 
                    placeholder="Título da transação"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                
                <input
                    type="number"
                    placeholder="Valor (R$)"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />
                
                <TransactionTypeContainer>
                    <RadioBox 
                        type='button'
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                        >
                        <img src={inconmeImg} alt="Entrada" />
                        <span>ENTRADA</span>
                    </RadioBox>
                    <RadioBox 
                        type='button'
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>SAÍDA</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type='submit'>
                    CADASTRAR
                </button>

            </Container>
        </Modal>
    );
}