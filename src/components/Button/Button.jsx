import * as s from './Button.styled';

const Button = ({ name, type, text, onClick, children }) => {
  let BtnComponent;

  switch (name) {
    case 'load':
      BtnComponent = (
        <s.BtnLoad type={type} onClick={onClick} aria-label={name}>
          {text && text}
        </s.BtnLoad>
      );
      break;

    case 'learn':
      BtnComponent = (
        <s.BtnLearn type={type} onClick={onClick} aria-label={name}>
          {text && text}
        </s.BtnLearn>
      );
      break;

    case 'search':
      BtnComponent = (
        <s.BtnSearch type={type} onClick={onClick} aria-label={name}>
          {text && text}
        </s.BtnSearch>
      );
      break;

    case 'close':
      BtnComponent = (
        <s.BtnClose type={type} onClick={onClick} aria-label={name}>
          {text && text}
          {children}
        </s.BtnClose>
      );
      break;

    case 'favorite':
      BtnComponent = (
        <s.BtnFavirite type={type} onClick={onClick} aria-label={name}>
          {text && text}
          {children}
        </s.BtnFavirite>
      );
      break;

    default:
      BtnComponent = (
        <s.Btn type={type} onClick={onClick} aria-label={name}>
          {text && text}
          {children}
        </s.Btn>
      );
      break;
  }

  return <>{BtnComponent}</>;
};

export default Button;
