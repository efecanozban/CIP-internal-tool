<form method="POST" action="/?/login">
    <label>
        <input
            name="username"
            type="text"
            placeholder="Username"
            class="neomorphic-normal-dark"
        />
    </label>
    <label>
        <input
            name="password"
            type="password"
            placeholder="Password"
            class="neomorphic-normal-dark"
        />
    </label>
    <button class="neomorphic-normal-dark">Log in</button>
</form>

<style>
    form {
        position: relative;
        margin-left: auto;
    }

    input {
        height: 2vh;
        width: 8vw;
        border: none;
        padding-left: 0.5vw;
        border-radius: 4vh;
        background-color: var(--color-light);
        margin: 0 1vw 0 0;
        font-size: medium;
    }

    button {
        width: 8vw;
        height: 2.4vh;
        border-radius: 1vh;
        background-color: var(--color-dark);
        border: none;
        color: white;
        font-size: medium;
        font-weight: 600;
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
