import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { getGlobalStyles, COLORS } from 'theme';

const useStyles = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const colors = COLORS[theme.base];
  const STYLES = getGlobalStyles(theme.base);
  const styles = StyleSheet.create({
    container: STYLES.CONTAINER,
    header: {
      paddingBottom: 8,
      marginHorizontal: 8,
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: colors.DIVIDER,
    },
    headerActionContainer: {
      width: 48,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
    },
    balanceContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    breakdownContainer: {
      marginTop: 16,
    },
    content: {
      flex: 1,
    },
    contentScroll: {
      paddingHorizontal: 16,
      paddingBottom: 8,
    },
    contentHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    contentHeaderAction: {
      backgroundColor: colors.BACKGROUND,
      height: 32,
      width: 32,
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.PRIMARY,
    },
    walletsScrollContainer: {
      height: 125,
    },
    walletCard: {
      marginRight: 8,
    },
    transactionsContainer: {
      flex: 1,
    },
    transactionCard: {
      marginTop: 8,
    },
  });
  return { styles, colors, theme };
};

export default useStyles;
