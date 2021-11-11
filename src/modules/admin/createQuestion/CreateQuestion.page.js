import React, { useState } from "react";

import PageDefault from "../../../components/PageDefault";
import Header from "../../../components/header/Header";
import { Fieldset } from "../../../components/form/Fieldset";
import { Select } from "../../../components/form/Select";
import { Separator } from "../../../components/form/Separator";
import { FieldsetHeader } from "../../../components/form/FieldsetHeader";
import { Main } from "../../../components/form/Main";
import { InputRow } from "../../../components/form/InputRow";
import { Input } from "../../../components/form/Input";
import { RadioTextGroup } from "../../../components/form/RadioTextGroup";
import LongButton from "../../../components/LongButton";
import Colors from "../../../constants/Colors";

export const CreateQuestion = () => {
  const [type, setType] = useState('')
  const [heading, setHeading] = useState('')
  const [explain, setExplain] = useState('')
  const [alternatives, setAlternatives] = useState(['', ''])

  return (
    <PageDefault>
      <Header />

      <Main>
        <form>
          <FieldsetHeader>
            <h1>Nova Questão</h1>
            <LongButton
              path="#"
              name="Salvar"
              backgroundColor={Colors.secondaryGreen}
              textColor={Colors.white}
            />
          </FieldsetHeader>
          <Fieldset>
            <InputRow>
              <div>
                <label>Tema</label>
                <Input type="text" placeholder="Design" />
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
                  <option disabled value=''>Selecionar...</option>
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
            {type && <>
              <p>Enunciado</p>
              <textarea
                placeholder="Digite o enunciado da questão"
                value={heading}
                onChange={e => setHeading(e.target.value)}
              />
              {type === 'alternativa' && <>

                <p>Alternativas</p>
                {alternatives.map((alternative, i) => (
                  <RadioTextGroup key={i}>
                    <Input type="radio" name="correct" />
                    <Input
                      type="text"
                      placeholder="Texto da alternativa"
                      value={alternative}
                      onChange={e => setAlternatives(alternatives.map((a, j) => i === j ? e.target.value : a))}
                    />
                  </RadioTextGroup>
                ))}
                <LongButton
                  onClick={() => setAlternatives([...alternatives, ''])}
                  name="Nova alternativa"
                  backgroundColor={Colors.secondaryGreen}
                  textColor={Colors.white}
                  icon
                />
              </>}

              <br />
              <p>Resolução Comentada</p>
              <textarea
                placeholder="Digite a explicação da resposta"
                value={explain}
                onChange={e => setExplain(e.target.value)}
              />

            </>}
          </Fieldset>
        </form>

        <Separator>ou</Separator>

        <form>
          <FieldsetHeader>
            <h1>Fazer Upload</h1>
            <LongButton
              path="#"
              name="Salvar"
              backgroundColor={Colors.secondaryGreen}
              textColor={Colors.white}
            />
          </FieldsetHeader>
          <Fieldset>
            <Input type="file" />
          </Fieldset>
        </form>
      </Main>

    </PageDefault>
  );
}
