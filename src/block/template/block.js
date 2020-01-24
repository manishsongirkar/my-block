/**
 * BLOCK: Template Block
 *
 * @package My_Block
 */

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const { InnerBlocks } = wp.editor;

const allowedBlocks = [
	'core/paragraph',
	'core/heading',
	'core/columns',
	'core/column',
	'core/image',
];

const template = [
	[ 'core/columns', {}, [
		[ 'core/column', {}, [
			[ 'core/image' ],
		] ],
		[ 'core/column', {}, [
			[ 'core/heading', { placeholder: 'Enter title...' } ],
			[ 'core/paragraph', { placeholder: 'Enter content...' } ],
		] ],
	] ],
];

registerBlockType( 'my-block/template-block', {
	title: __( 'Template Block' ),
	icon: 'shield',
	category: 'common',
	keywords: [
		__( 'template block' ),
		__( 'innertemplate' ),
	],

	edit: ( props ) => {
		return (
			<div className={ props.attributes.className }>
				<InnerBlocks
					allowedBlocks={ allowedBlocks }
					template={ template }
				/>
			</div>
		);
	},

	save: ( props ) => {
		return (
			<div className={ props.attributes.className }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
