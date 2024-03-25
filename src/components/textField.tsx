import React, { useState } from 'react';
import { IonButton, IonIcon, IonImg, IonInput, IonItem } from "@ionic/react";

import { eye } from 'ionicons/icons';
import './textField.css'

interface TextFieldProps {
    placeHolder: string
    icon: string
    iconActive: string
    clearInput: boolean
    type?: string | undefined
}

const TextField = ({icon, iconActive, placeHolder, clearInput}: TextFieldProps) => {
    const [isActive, setIsActive] = useState(false)

    const onTextInputChanged = (value: string): void => {
        setIsActive(value.length > 0)
    }

    return (
      <IonItem className={`roundedInput + ${isActive ? "inputActive" : "inputInactive"}`}>
        <IonInput clearInput={clearInput} labelPlacement="stacked" fill="outline" placeholder={placeHolder} onIonInput={(e) => onTextInputChanged(e.detail.value ?? "")} shape='round'>
            <IonImg style={{with: 10}} className='inputIcon' src={isActive ? iconActive : icon} slot='start'></IonImg>
          <IonButton fill="clear" slot="end">
            <IonIcon slot="icon-only" name={eye} aria-hidden="true"></IonIcon>
          </IonButton>
        </IonInput>
        <br />

      </IonItem>
    );
}



export default TextField;