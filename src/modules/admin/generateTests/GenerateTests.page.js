import React, { useState } from "react";
import './GenerateTests.css'

import PageDefault from "../../../components/PageDefault";
import Header from "../../../components/header/Header";
import { Fieldset } from "../../../components/form/Fieldset";
import { Select } from "../../../components/form/Select";
import { FieldsetHeader } from "../../../components/form/FieldsetHeader";
import { Main } from "../../../components/form/Main";
import { InputRow } from "../../../components/form/InputRow";
import { Input } from "../../../components/form/Input";
import LongButton from "../../../components/LongButton";
import Colors from "../../../constants/Colors"
import { ReactComponent as LoadingIcon } from '../../../assets/Loading.svg'

export const GenerateTests = () => {

    const [loaderActive, setLoaderActive] = useState(false)
    const [generatedTestsActive, setGeneratedTestsActive] = useState(false)

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    const gerarProvas = () => {
        setGeneratedTestsActive(false);
        setLoaderActive(true);
        delay(2000).then(() => {
            setLoaderActive(false);
            setGeneratedTestsActive(true);
        })
    }

    return (
        <PageDefault>
            <Header />

            <Main>
                <form>
                    <FieldsetHeader>
                        <h1>Novas Provas</h1>
                    </FieldsetHeader>
                    <Fieldset>
                        <InputRow>
                            <div className='input-section'>
                                <label>Título</label>
                                <Input type="text" placeholder="Insira um título" />
                            </div>
                            <div className='input-section'>
                                <label>Quantidade de questões de cada peso</label>
                                <div className='select-group'>
                                    <Select>
                                        <option disabled selected>Fácil...</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>Difícil</option>
                                    </Select>
                                    <Select>
                                        <option disabled selected>Médio...</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Select>
                                    <Select>
                                        <option disabled selected>Difícil...</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Select>

                                </div>
                            </div>
                            <div className='input-section'>
                                <label>Quantidade de provas diferentes</label>
                                <Select>
                                    <option disabled selected>Selecionar...</option>
                                    <option>1</option>
                                    <option>2</option>
                                </Select>
                            </div>
                        </InputRow>
                        <div className='save-button-container'>
                            <span onClick={gerarProvas}>
                                <LongButton name="Gerar" backgroundColor={Colors.secondaryGreen} textColor={Colors.white} />
                            </span>
                        </div>
                    </Fieldset>
                </form>

                <form>
                    <FieldsetHeader>
                        <h1></h1>
                    </FieldsetHeader>
                    <Fieldset>
                        <h3 className='save-button-container'>Provas Geradas</h3>
                        <div className='load-icon-container' style={(loaderActive) ? { display: 'flex' } : { display: 'none' }}>
                            <LoadingIcon />
                        </div>
                        <div className='buttons-container' style={(generatedTestsActive) ? { display: 'flex' } : { display: 'none' }}>
                            <div className='test-buttons'>
                                <LongButton path="/" name="Prova 1" backgroundColor={Colors.primaryGreen} textColor={Colors.white} />
                                <LongButton path="/" name="Prova 2" backgroundColor={Colors.primaryGreen} textColor={Colors.white} />
                            </div>
                            <span onClick={gerarProvas}>
                                <LongButton path="/admin-generate-tests" name="Gerar Novamente" backgroundColor={Colors.accentOrange} textColor={Colors.white} />
                            </span>
                            <LongButton path="/" name="Salvar" backgroundColor={Colors.secondaryGreen} textColor={Colors.white} />
                        </div>
                    </Fieldset>

                </form>
            </Main>

        </PageDefault>
    );
}
