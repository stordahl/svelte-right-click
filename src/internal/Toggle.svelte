<script lang="ts">
    export let onLabel:string;
    export let offLabel:string;
		export let fontSize = 16;
	  export let value = 'on';

    let checked = true;

		const uniqueID = Math.floor(Math.random() * 100)

    function handleClick(event){
        const target = event.target

        const state = target.getAttribute('aria-checked')

        checked = state === 'true' ? false : true

        value = checked === true ? 'on' : 'off'
    }
	
</script>


<div class="s s--slider" style="font-size:{fontSize}px">
    <span id={`switch-${uniqueID}`}>{offLabel}</span>
    <button
        role="switch"
        aria-checked={checked}
        aria-labelledby={`switch-${uniqueID}`}
        on:click={handleClick}>
    </button>
    <span id={`switch-${uniqueID}`}>{onLabel}</span>
</div>

<style>
	:global(body) {
		--accent-color: var(--yellow);
		--gray: #ccc;
	}

    .s--slider {
        display: flex;
        align-items: center;
    }

    .s--slider button {
        width: 3em;
        height: 1.6em;
        position: relative;
        margin: 0.5em;
        background: var(--gray);
        border: none;
    }

    .s--slider button::before {
        content: '';
        position: absolute;
        width: 1.3em;
        height: 1.3em;
        background: #fff;
        top: 0.13em;
        right: 1.5em;
        transition: transform 0.3s;
    }

    .s--slider button[aria-checked='true']{
        background-color: var(--accent-color)
    }

    .s--slider button[aria-checked='true']::before{
        transform: translateX(1.3em);
        transition: transform 0.3s;
    }

    .s--slider button:focus {
      outline: 2px dotted var(--blue);
    }

    .s--slider button {
        border-radius: 1.5em;
    } 
    
    .s--slider button::before {
        border-radius: 100%;
    }
</style>
