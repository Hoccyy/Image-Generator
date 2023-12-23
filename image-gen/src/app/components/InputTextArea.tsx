"use client"
import inputStyles from './InputTextArea.module.css'
import FetchImage from './FetchImage'

type Props = {
    placeHolder?: string
};

const buttonContent = '⬆';

const InputTextArea = ({
    placeHolder = ''
} : Props) => {
    return (
        <div className={inputStyles.inputBoxCenter}>
            <input id='userInputArea' className={inputStyles.inputBox} placeholder={placeHolder} shadow-none="true" title='Describe an image here' onKeyDown={()=> {
                let input = document.getElementById('userInputArea') as HTMLInputElement;
                input.addEventListener(
                    "keyup",
                    (event) => {
                    if (event.key == "Enter" || event.code == "Enter") {
                        input.innerHTML = input.innerHTML.trimEnd().replace(/\r?\n/g, '');
                        event.preventDefault;
                        FetchImage({ inputBar: input })
                            .then(result => {
                                let genImage = document.getElementById('genImage')! as HTMLImageElement;
                                genImage.src = result;
                            })
                            .catch(error => {
                                let submitButton = document.getElementById('submitButton')! as HTMLInputElement;
                                submitButton.setAttribute(
                                    'style',
                                    'background-color: black; color: white;'
                                );
                                submitButton!.disabled = false;
                                alert(error);
                            });
                    }
                    },
                    {once : true}
                );
            }}>
            </input>
            <button id='submitButton' className={inputStyles.inputButton} onClick={()=> {
                let input = document.getElementById('userInputArea') as HTMLInputElement;

                FetchImage({ inputBar: input })
                    .then(result => {
                        let genImage = document.getElementById('genImage')! as HTMLImageElement;
                        genImage.src = result;
                    })
                    .catch(error => {
                        let submitButton = document.getElementById('submitButton')! as HTMLInputElement;
                        submitButton.setAttribute(
                            'style',
                            'background-color: black; color: white;'
                        );
                        submitButton!.disabled = false;
                        alert(error);
                    });
            }}>
                { buttonContent }
            </button>
        </div>
    );
};

export default InputTextArea;