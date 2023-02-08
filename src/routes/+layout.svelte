<script>
    import "$lib/global.css";
    import LoginForm from "$lib/components/layout/loginForm.svelte";

    export let data;
    let { logedIn } = data;

    function toggleNavButtons({ srcElement }) {
        document.getElementById("layoutNav").childNodes.forEach((a) => {
            if (a.tagName == "A") {
                a.className = "headerlink";
                a.classList.add("neomorphic-normal-dark");
            }
        });
        srcElement.classList.remove("neomorphic-normal-dark");
        srcElement.classList.add("neomorphic-inset-dark");
    }
</script>

<header>
    <div class="header">
        <div>
            <img src="logo.png" id="logo" alt="" />
        </div>

        {#if logedIn}
            <form method="POST" action="/?/logout" id="logoutForm">
                <button id="logoutButton" class="neomorphic-normal-dark"
                    >Logout</button
                >
            </form>

            <nav id="layoutNav">
                <a
                    class="headerlink neomorphic-normal-dark"
                    href="/assets"
                    on:click={toggleNavButtons}>Assets</a
                >
                <a
                    class="headerlink neomorphic-normal-dark"
                    href="/todos"
                    on:click={toggleNavButtons}>Todos</a
                >
                <a
                    class="headerlink neomorphic-normal-dark"
                    href="/accounts"
                    on:click={toggleNavButtons}>Accounts</a
                >
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
        background-color: var(--color-dark);
        display: flex;
        height: 8vh;
        align-items: center;
        padding: 0 2vw;
    }

    nav {
        position: absolute;
        transform: translate(-50%, 0);
        left: 50%;
    }

    button {
        font-size: large;
        font-weight: 600;
        text-shadow: 2px 2px #000000;
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
        height: 2.4vh;
        border-radius: 1vh;
        background-color: var(--color-dark);
        border: none;
        color: white;
    }

    button:active {
        box-shadow: inset 2px 2px 4px
                rgb(
                    calc(var(--color-R-dark) - 40),
                    calc(var(--color-G-dark) - 40),
                    calc(var(--color-B-dark) - 40)
                ),
            inset -2px -2px 4px
                rgb(
                    calc(var(--color-R-dark) + 40),
                    calc(var(--color-G-dark) + 40),
                    calc(var(--color-B-dark) + 40)
                );
    }
</style>
