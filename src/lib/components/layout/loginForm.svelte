<form method="POST" action="/?/login">
    <label>
        Username
        <input name="username" type="text" />
    </label>
    <label>
        Password
        <input name="password" type="password" />
    </label>
    <button>Log in</button>
</form>

<style>
    label {
        color: white;
    }

    form {
        position: relative;
        margin-left: auto;
    }

    input {
        border-radius: 1vh;
        padding: 0 0.5vw;
        width: 6vw;
    }

    button {
        border-radius: 1vh;
        width: 4vw;
    }
</style>
