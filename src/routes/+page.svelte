<script>
	import { css } from 'styled-system/css';
	import { button } from 'styled-system/recipes'
</script>
 
<div class={css({backgroundColor: "untld_gray.600"})}>
      <button class={button() + " rounded-lg"}>Click me</button>
      <button class={button({ shape: 'circle' })}>Click me</button>
      <div class="bg-white">Some div</div>
    </div>