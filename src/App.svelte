<script lang="ts">

</script>

<div class="wrapper">
  <header>
    <img class="logo" src="logo.png" alt=""/>
  </header>

  <section>

  </section>
</div>

<footer>
  Made with ♥️ by martyN1
</footer>

<style>
  .wrapper {
    max-width: 600px;
    margin: 40px auto 16px;
    height: calc(100% - 92px);
    border-radius: 32px;
    background-color: var(--light-gray);
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  header {
    margin-top: 16px;
    margin-bottom: 24px;
  }

  .logo {
    position: absolute;
    left: 16px;
    top: 16px;
    width: 48px;
    height: 54px;
  }

  h1 {
    font-family: 'Lilita One', cursive;
    flex-grow: 1;
    text-align: center;
    color: var(--black);
  }

  section {
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
  }

  footer {
    height: 36px;
    font-family: 'Roboto Mono', monospace;
    font-size: 14px;
    text-align: center;
  }

  @media (pointer: coarse) {
    .wrapper {
      border-radius: 0;
      margin: 0 auto;
      height: 100%;
    }

    section {
      flex-direction: column;
    }

    footer {
      display: none;
    }
  }
</style>