import {adaptTextAreas} from './modules/textAreas';
import {adaptLabels} from './modules/labels';
import {setRequiredInputs, setValueForInput, changeTypeInput} from './modules/input';
import {strDate} from './modules/utils';

//! write ->  type = "module" in tag script



document.addEventListener('DOMContentLoaded', adaptForm);



function adaptForm(){




    let useValuesForInputs = false;
    let editTypeOfInputs = false;
    let useRequiredInputs = false;
    let editLabels = false;
    let editTextAreas = false;
    



    //*--------------------------------------------------------------




    if (useValuesForInputs){
        /* 
        Edita o valor do input
        */
        let modifications = [
           //('id_field', value),
        ];//using id

        for (let i in modifications){
           setValueForInput(modifications[i][0], modifications[i][1]);
        }
    }



    if (editTypeOfInputs){
        /* 
        Edita o tipo do input
        */
        let modifications = [
            //('id_field', newType),
         ];//using id
 
         for (let i in modifications){
            changeTypeInput(modifications[i][0], modifications[i][1]);
         }        
    }



    let optionalFields  = {
        // 'id_name': 0 -> initialIndex
    }// using id

    if (useRequiredInputs){
        /* 
        Define os campos que são requeridos
        */
        setRequiredInputs(optionalFields);
    }

    if (editLabels){
        /* 
        Edita o texto do label
        */
       adaptLabels(optionalFields);
    }
    


    if (editTextAreas){
        /* 
        Controla tamanho da tag textarea no form, se
        columns = 0, ele utiliza o valor padrão do form
        */
        let rows = 2;
        let columns = 0;
        adaptTextAreas(columns, rows);
    }


    
}

