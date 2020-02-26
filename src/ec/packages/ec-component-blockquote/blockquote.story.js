import { storiesOf } from '@storybook/html';
import { withKnobs, text ,button } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import data from '@ecl/ec-specs-blockquote/demo/data';

import blockquote from './ecl-blockquote.html.twig';
import notes from './README.md';

// Labels for the group ids 
const requiredGroupId = 'Mandatory elements';
const optionalGroupId = 'Optional elements';
const useCasesGroup = 'Use cases';



// Prepare the knobs

let toggleAuthor = false;
const initialAutor= data.author;
storiesOf('Components/Blockquote', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'default',
    () =>{
   
      if (toggleAuthor == true){
        console.log('load this');
        const dataAuthorBtnToggler =() => {
          console.log('load this also');
          
          data.author = text('autor', '',optionalGroupId); 
        }
      }
      const dataAuthorBtnToggler = () => {
        data.author = text('autor', 'smldfmsldfkmsldfkmsldkf',optionalGroupId); 
        toggleAuthor = true;
      }
      
      button('use the author', dataAuthorBtnToggler, useCasesGroup);
  //    button('Reset the layout', resetBtnToggler, useCasesGroup);
      return blockquote(data);
    },
   
    {
      notes: { markdown: notes, json: data },
    }
  );
