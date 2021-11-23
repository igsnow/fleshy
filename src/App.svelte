<script lang="ts">
    import { list_store, Todo } from "./stores";
    export let name: string;
    let n = 0;
    function addn() {
        n++;
        console.log("n ", n);
    }

    function click1() {
        console.log("触发了click1");
    }

    function click2() {
        console.log("触发了click2");
    }

    const href = "http://www.baidu.com/";

    let list: Todo[];

    const unsubscribe = list_store.subscribe((value) => {
        list = value;
    });

    $: remaining = list.filter((t) => !t.done).length;
</script>

<main>
    <h1>Hello {name}!</h1>

    <button on:click={addn} on:click={click1} on:click={click2}
        >点击了{n}次</button
    >

    <a {href} target="_bank">百度</a>

    {#if n % 2}
        <p>n是奇数</p>
    {/if}

    {#if !(n % 2)}
        <p>n是偶数</p>
    {/if}

    {#if n % 2}
        <p>n居然是奇数</p>
    {:else}
        <p>n居然是偶数</p>
    {/if}

    {#each list as todo}
        <div class:done={todo.done}>
            <input
                type="checkbox"
                checked={todo.done}
                on:change={() => (todo.done = !todo.done)}
            />
            <input
                placeholder="what needs to be done?"
                value={todo.text}
                on:change={(event) => event.target.value}
            />
        </div>
    {/each}

    <button on:click={() => (list = list.concat({ done: false, text: "" }))}
        >Add</button
    >

    <button on:click={() => (list = list.filter((todo) => !todo.done))}
        >Clear</button
    >

    <p>{remaining}remaining</p>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
