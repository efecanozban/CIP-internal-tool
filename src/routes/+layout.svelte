<script>
    import "$lib/global.css";
    import LoginForm from "$lib/components/layout/loginForm.svelte";

    export let data;
    let { logedIn } = data;
</script>

<header>
    <div class="header">
        <div>
            <img src="logo.png" id="logo" alt="" />
        </div>

        {#if logedIn}
            <form method="POST" action="/?/logout" id="logoutForm">
                <button id="logoutButton">Logout</button>
            </form>

            <nav>
                <a class="headerlink" href="/">Home</a>
                <a class="headerlink" href="/assets">Assets</a>
                <a class="headerlink" href="/todos">Todos</a>
                <a class="headerlink" href="/accounts">Accounts</a>
            </nav>
        {/if}

        {#if !logedIn}
            <LoginForm />
        {/if}
    </div>
</header>

<main>
    {#if logedIn}
        <slot />
    {/if}
</main>

<style>
    .header {
        background-color: black;
        display: flex;
        height: 8vh;
        align-items: center;
        padding: 0 2vw;
    }

    .headerlink {
        margin-right: 10px;
        text-decoration: none;
        color: white;
    }

    nav {
        position: absolute;
        transform: translate(-50%, 0);
        left: 50%;
    }

    #logo {
        width: auto;
        height: 7vh;
    }

    #logoutForm {
        position: relative;
        margin-left: auto;
    }

    #logoutButton {
        width: 8vw;
        border-radius: 1vh;
    }
</style>
