import { media } from '~theme/breakpoints';

export const logo = {
  letterSpacing: '-0.02em',
  fontWeight: 600,
  fontSize: 4,
  alignItems: 'center',
  img: {
    height: 30,
    width: 30,
    marginRight: 10
  },
  h1: {
    fontSize: 5,
    [media.tablet]: {
      fontSize: 4
    },
    [media.mobile]: {
      fontSize: 3
    }
  }
};

export const link = {
  fontWeight: 600,
  color: 'header.text',
  textDecoration: 'none',
  ':hover': {
    color: 'primary'
  }
};

export const title = {
  marginBottom: 0
};
