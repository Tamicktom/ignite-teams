//* Libraries imports

//* Components imports
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";

//* Styles imports
import * as S from "./styles";

export default function Groups() {
  return (
    <S.Container>
      <Header showBackButton />
      <Highlight
        title="Grupos"
        subtitle="Aqui você pode criar e gerenciar seus grupos"
      />
    </S.Container>
  )
}
