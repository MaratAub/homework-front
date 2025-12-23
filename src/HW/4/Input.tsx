import {ChangeEvent, Dispatch, SetStateAction} from "react";

type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: Dispatch<SetStateAction<string>> // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = ({currentText, setCurrentText}: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		// НУЖНО ДОПИСАТЬ
    setCurrentText(event.currentTarget.value)
	};
	 return (
	  <input id={'hw04-input'} type="text" value={currentText} onChange={onChangeHandler} />
	 );
};
