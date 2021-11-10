import React, { useState } from "react";

import PageDefault from "../../../components/PageDefault";
import Header from "../../../components/header/Header";
import HeaderTitle from "../../../components/header/HeaderTitle";
import { Fieldset } from "../../../components/form/Fieldset";
import { Select } from "../../../components/form/Select";
import { Separator } from "../../../components/form/Separator";
import { FieldsetHeader } from "../../../components/form/FieldsetHeader";
import { Main } from "../../../components/form/Main";
import { InputRow } from "../../../components/form/InputRow";
import { Input } from "../../../components/form/Input";

export const CreateQuestion = () => {
  const [type, setType] = useState('')

  return (
    <PageDefault>
      <Header>
        <HeaderTitle />
      </Header>

      <Main>
        <form>
          <FieldsetHeader>
            <h1>Nova Questão</h1>
            <button>Salvar</button>
          </FieldsetHeader>
          <Fieldset>
            <InputRow>
              <div>
                <label>Tema</label>
                <Input type="text" placeholder="Gestão" />
              </div>
              <div>
                <label>Dificuldade</label>
                <Select>
                  <option disabled selected>Selecionar...</option>
                  <option>Fácil</option>
                  <option>Moderada</option>
                  <option>Difícil</option>
                </Select>
              </div>
              <div>
                <label>Tipo</label>
                <Select defaultValue={type} onChange={(e) => setType(e.target.value)}>
                  <option disabled selected>Selecionar...</option>
                  <option value="dissertativa">Dissertativa</option>
                  <option value="alternativa">Alternativa</option>
                </Select>
              </div>
              <div>
                <label>Peso</label>
                <Select>
                  <option disabled selected>Selecionar...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Select>
              </div>
            </InputRow>
            {type === 'alternativa' && (<>
              <InputRow>
                <div>
                  <label>Enunciado</label>
                  <textarea />
                </div>
              </InputRow>

              <InputRow>
                <div>
                  <label>Alternativas</label>
                  <Input type="radio" />
                  <Input type="text" placeholder="Texto da alternativa" />
                  <Input type="radio" />
                  <Input type="text" placeholder="Texto da alternativa" />
                </div>
                <button>Nova alternativa</button>
              </InputRow>

              <InputRow>
                <div>
                  <label>Resolução Comentada</label>
                  <textarea />
                </div>
              </InputRow>

            </>)}
          </Fieldset>
        </form>

        <Separator>ou</Separator>

        <form>
          <FieldsetHeader>
            <h1>Fazer Upload</h1>
            <button>Salvar</button>
          </FieldsetHeader>
          <Fieldset>
            <Input type="file" />
          </Fieldset>
        </form>
      </Main>

    </PageDefault>
  );
}
