<script>
	import IoMdPin from 'svelte-icons/io/IoMdPin.svelte'
	import IoMdSchool from 'svelte-icons/io/IoMdSchool.svelte'
	import IoIosMail from 'svelte-icons/io/IoIosMail.svelte'
	import IoLogoGithub from 'svelte-icons/io/IoLogoGithub.svelte'
</script>
<style>
	.wrapper { 
		margin-top: 3em;
	}

	.info {
		display: flex;
		color: #000;
		align-items: center;
		margin-bottom: 0.3em;
		font-size: 1em;
		font-family: 'Overpass', sans-serif;
	}

	.info a {
		color: #000;
	}

	.info a:hover {
		text-decoration: underline;
	}

	.icon {
		color: #FB5;
		width: 24px;
		height: 24px;
		margin-right: 0.5em;
	}
</style>

<svelte:head>
  	<title>About</title>
</svelte:head>


<div class="wrapper">
	<div class="info"> <div class="icon"><IoMdPin/></div> Suwon, South Korea </div>
	<div class="info"> <div class="icon"><IoMdSchool/></div> Kyung Hee Univ. </div>
	<div class="info"> <div class="icon"><IoIosMail/></div> junhyuk0801@gmail.com </div>
	<div class="info"> <div class="icon"><IoLogoGithub/></div> <a href="https://github.com/junhyuk0801" target="_blank">github.com/junhyuk0801</a> </div>
</div>