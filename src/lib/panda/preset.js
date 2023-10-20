import { definePreset } from '@pandacss/dev';
import { colorTokens } from './colors';
import { buttonRecipe } from '../Button/button.recipe';

export default definePreset({
	theme: {
		extend: {
			tokens: {
				...colorTokens
			},
			recipes: { button: buttonRecipe }
		}
	}
});
