<script>
	import { base } from '$app/paths';
	import { fly } from 'svelte/transition';
	import GHCorner from '$lib/GithubCorner.svelte'
	import GoChevronLeft from 'svelte-icons/go/GoChevronLeft.svelte'
	import IoIosMenu from 'svelte-icons/io/IoIosMenu.svelte'

	let opened = false;

</script>
<style>
	.topbar {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 3em;
		border-bottom: 1px solid #DDD;
	}
	
	.title {		
		font-size: 1.5em;
		font-family: 'Do Hyeon', sans-serif;
		color: #000;
	}

	.title:hover {
		color: #666;
	}
	
	.menu {
		position: absolute;
		width: 32px;
		height: 32px;
		left: 0.5em;
		margin: 0.2em;
		border: #DDD solid 1px;
		border-radius: 0.7em;
		cursor: pointer;
	}

	.menu:active {
		background-color: #DDD;
	}

	.ghcorner {
		position: absolute;
		right: 0;
		transform: scale(0.8);
	}

	.sidebar {
		position: fixed;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		background-color: #444;
		border-right: #999 2px solid;
		width: 250px;
		height: 100%;
		z-index: 999;
	}

	.close {
		position: absolute;
		right: 0;
		width: 3em;
		height: 3em;
		color: #999;
		cursor: pointer;
	}

	.close:active {
		color: #BBB;
		background-color: #777;
	}

	.wrapper {
		margin: auto auto;
		transform: translateY(-2em);
	}

	.profile {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: 'Overpass', sans-serif;
	}
	
	.logo {
		border: 3px #FFF solid;
		border-radius: 99em;
	}

	.name {
		font-family: "Lucida Handwriting", cursive;
		color: #fff;
		font-size: 1.8em;
		margin: 0.5em;
		margin-bottom: 1em;
	}

	
	ul {
		margin-left: 0.5em;
	}
	
	li {
		color: #BBB;
		transition: color .2s;
		-webkit-transition: color .2s;
	}

	li:hover {
		color: #FFF;
		transition: color .2s;
		-webkit-transition: color .2s;
	}

	.link {
		width: fit-content;
		color: #BBB;
		position: relative;
		transition: color .2s;
		-webkit-transition: color .2s;
	}

	.link:hover {
		color: #FFF;
		transition: color .2s;
		-webkit-transition: color .2s;
	}

	.link:after{
		content: '';
		position: absolute;
		width: 0; 
		height: 2px;
		display: block;
		margin-top: 0px;
		right: 0;
		background: #FFF;
		transition: width .2s ease;
		-webkit-transition: width .2s ease;
	}
	
	.link:hover:after{
		width: 100%;
		left: 0;
		background: #FFF;
	}

</style>

<nav class="topbar">
	<div class="menu" on:click={() => {opened = true;}}>
		<IoIosMenu/>
	</div>
	<div><a class="title" href="{base}/">리턴강의실임</a></div>
</nav>
<div class="ghcorner">
	<GHCorner/>
</div>

{#if opened}
	<nav class="sidebar" transition:fly={{ x: -300, duration: 500, opacity: 1}}>
		<div class="close" on:click={() => {opened = false;}}>
			<GoChevronLeft/>
		</div>
		<div class="wrapper">
			<div class="profile">
				<img class="logo" src="/face.png" alt="logo">
				<span class="name">JHSeo</span>
			</div>
			<ul>
				<li><a href="{base}/"><h3 class="link">HOME</h3></a></li>
				<li><a href="{base}/posts"><h3 class="link">POSTS</h3></a></li>
				<li><a href="{base}/archive"><h3 class="link">ARCHIVE</h3></a></li>
				<li><a href="{base}/about"><h3 class="link">ABOUT</h3></a></li>
			</ul>
		</div>
	</nav>
{/if}