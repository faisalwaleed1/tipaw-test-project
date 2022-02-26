import styled from '@emotion/styled';
import { theme } from 'styles/theme';

const Container = (props:{ grid: String; fullWidth: Boolean; children: React.ReactElement }) => {

  const PageContainer = styled.div({
    display: 'flex',
    justifyContent: props.grid ? 'center' : 'top',
    flexDirection: props.grid ? 'row' : 'column',
    flexWrap: 'wrap',
    alignSelf: 'center',
    flexGrow: 1,
    maxWidth: props.fullWidth ? '' : `${theme.widths.regularPageWidth}px`,
    width: '100%',
    padding: props.fullWidth ? 0 : theme.unit * 2,
    paddingBottom: theme.unit * 5,
  });

  return <PageContainer>{props.children}</PageContainer>;
}

export default Container;
