//* Libraries imports

//* Components imports
import * as S from "./styled";

type ListEmptyProps = {
  message: string;
}

export function ListEmpty(props: ListEmptyProps) {
  return (
    <S.Container>
      <S.Message>{props.message}</S.Message>
    </S.Container>
  );
}