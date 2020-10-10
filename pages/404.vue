<template>
  <div>
    <heading heading="Page Not Found" />
    <p>
      The specified file was not found on this website. Please check the URL for
      mistakes and try again.
    </p>
    <b-button to="/" variant="primary">Go to home page</b-button>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Page Not Found | Value Our Minds',
    meta: [
      {
        name: 'robots',
        content: 'noindex',
      },
    ],
  },
}
</script>
