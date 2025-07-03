<template>
  <div>
    <div class="h-14 border-b border-b-foreground/15">
      <Container class="h-full flex items-center">
        <h1 class="text-primary text-2xl">LOGO</h1>
      </Container>
    </div>

    <div class="min-h-[calc(100vh-112px)]">
      <Container>
        <slot />
      </Container>
    </div>

    <div class="h-14 bg-surface">
      <Container>Contacts</Container>
    </div>
  </div>
</template>
