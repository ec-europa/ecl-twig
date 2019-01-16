import { storiesOf } from '@storybook/html';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import icon from './icon.html.twig';

storiesOf('Components/Icon', module)
  .addDecorator(withKnobs)
  .add('branded', () =>
   	icon({
   		icon: {
   			type: 'branded',
   			name: select('Icon',{
	   			Facebook: 'facebook',
	   			'Google Plus': 'google-plus',
	   			Instagram: 'instagram',
	   			'Linked In': 'linkedin',
	   			Pinterest: 'pinterest',
	   			Rss: 'rss',
	   			Skype: 'skype',
	   			Twitter: 'twitter',
	   			Youtube: 'youtube'
	   		},'facebook'),
	   		size: select('Size',{
	   			XS: 'xs',
          		S: 's',
          		M: 'm',
          		L: 'l',
          		XL: 'xl',
          		'2XL': '2xl',
          		Fluid: 'fluid'
	   		},'m'),
	   		transform: select('Transform',{
	   			None: 'rotate-0',
	   			'Rotate 90': 'rotate-90', 
	   			'Rotate 180': 'rotate-180',
	   			'Rotate 270': 'rotate-270',
	   			'Flip Horizontal': 'flip-horizontal',
	   			'Flip Vertical': 'flip-vertical'
	   		},'rotate-0'),
	   		color: select('Color',{
	   			Default: '',
	   			Inverted: 'inverted',
	   			Primary: 'primary'
	   		},'')
   		}
   	})
  ).add('general', () =>
   	icon({
   		icon: {
   			type: 'general',
   			name: select('Icon',{
	   			audio: 'audio',
				book: 'book',
				brochure: 'brochure',
				budget: 'budget',
				calendar: 'calendar',
				copy: 'copy',
				data: 'data',
				digital: 'digital',
				edit: 'edit',
				energy: 'energy',
				euro: 'euro',
				faq: 'faq',
				feedback: 'feedback',
				file: 'file',
				gear: 'gear',
				'generic-lang': 'generic-lang',
				global: 'global',
				growth: 'growth',
				image: 'image',
				infographic: 'infographic',
				language: 'language',
				livestreaming: 'livestreaming',
				location: 'location',
				'multiple-files': 'multiple-files',
				organigram: 'organigram',
				package: 'package',
				presentation: 'presentation',
				print: 'print',
				regulation: 'regulation',
				search: 'search',
				share: 'share',
				spinner: 'spinner',
				spreadsheet: 'spreadsheet',
				video: 'video'
	   		},'audio'),
	   		size: select('Size',{
	   			XS: 'xs',
          		S: 's',
          		M: 'm',
          		L: 'l',
          		XL: 'xl',
          		'2XL': '2xl',
          		Fluid: 'fluid'
	   		},'m'),
	   		transform: select('Transform',{
	   			None: 'rotate-0',
	   			'Rotate 90': 'rotate-90', 
	   			'Rotate 180': 'rotate-180',
	   			'Rotate 270': 'rotate-270',
	   			'Flip Horizontal': 'flip-horizontal',
	   			'Flip Vertical': 'flip-vertical'
	   		},'rotate-0'),
	   		color: select('Color',{
	   			Default: '',
	   			Inverted: 'inverted',
	   			Primary: 'primary'
	   		},'')
   		}
   	})
  ).add('notifications', () =>
   	icon({
   		icon: {
   			type: 'notifications',
   			name: select('Icon',{
	   			error: 'error',
	   			information: 'information',
	   			success: 'success',
	   			warning: 'warning'
	   		},'error'),
	   		size: select('Size',{
	   			XS: 'xs',
	      		S: 's',
	      		M: 'm',
	      		L: 'l',
	      		XL: 'xl',
	      		'2XL': '2xl',
	      		Fluid: 'fluid'
	   		},'m'),
	   		transform: select('Transform',{
	   			None: 'rotate-0',
	   			'Rotate 90': 'rotate-90', 
	   			'Rotate 180': 'rotate-180',
	   			'Rotate 270': 'rotate-270',
	   			'Flip Horizontal': 'flip-horizontal',
	   			'Flip Vertical': 'flip-vertical'
	   		},'rotate-0'),
	   		color: select('Color',{
	   			Default: '',
	   			Inverted: 'inverted',
	   			Primary: 'primary'
	   		},'')
	   	}
   	})
  ).add('ui', () =>
   	icon({
   		icon: {
   			type: 'ui',
   			name: select('Icon',{
	   			'check-filled':'check-filled',
				check:'check',
				'close-filled':'close-filled',
				close:'close',
				'corner-arrow':'corner-arrow',
				download:'download',
				external:'external',
				fullscreen:'fullscreen',
				'rounded-arrow':'rounded-arrow',
				'solid-arrow':'solid-arrow'
	   		},'check-filled'),
	   		size: select('Size',{
	   			XS: 'xs',
          		S: 's',
          		M: 'm',
          		L: 'l',
          		XL: 'xl',
          		'2XL': '2xl',
          		Fluid: 'fluid'
	   		},'m'),
	   		transform: select('Transform',{
	   			None: 'rotate-0',
	   			'Rotate 90': 'rotate-90', 
	   			'Rotate 180': 'rotate-180',
	   			'Rotate 270': 'rotate-270',
	   			'Flip Horizontal': 'flip-horizontal',
	   			'Flip Vertical': 'flip-vertical'
	   		},'rotate-0'),
	   		color: select('Color',{
	   			Default: '',
	   			Inverted: 'inverted',
	   			Primary: 'primary'
	   		},'')
	   	}
   	})
  );