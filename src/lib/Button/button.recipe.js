import { defineRecipe } from '@pandacss/dev';

export const buttonRecipe = defineRecipe({
	className: 'button',
	description: 'The styles for the Button component',
	base: {
		display: 'flex'
	},
	variants: {
		visual: {
			funky: {
				bg: 'untld_brand.200',
				color: 'untld_white',
				border: '1px solid token(colors.untld_brand.400)'
			},
			edgy: { border: '1px solid token(colors.untld_brand.400)' }
		},
		size: {
			sm: { padding: '4px', fontSize: '12px' },
			lg: { padding: '8px', fontSize: '40px' }
		},
		shape: {
			square: {},
			circle: { borderRadius: 'full' }
		}
	},
	defaultVariants: {
		visual: 'funky',
		size: 'sm',
		shape: 'square'
	}
});
