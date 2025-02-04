import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Transaction, Transactions } from 'store/transactions';
import { Wallets } from 'store/wallets';
import { MainStackParamList } from 'types/Route';

export interface CreateTransactionPublicProps
  extends NativeStackScreenProps<MainStackParamList, 'CREATE_TRANSACTION'> {}

export interface CreateTransactionPrivateProps {
  wallets: Wallets;
  transactions: Transactions;
  createTransaction: (payload: Omit<Transaction, 'id' | 'createdAt'>) => void;
}

export interface CreateTransactionProps
  extends CreateTransactionPublicProps,
    CreateTransactionPrivateProps {}
