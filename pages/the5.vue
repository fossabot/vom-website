<template>
  <div>
    <heading heading="Mind the 5" subheading="Steps to support mental health" />
    <card-deck :cards="cards" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          image: {
            file: 'mindthe5-1.svg',
            alt: 'Person eating, sleeping, and exercising',
          },
          title: '1. Take care of <b class="text-accent">BODY</b>',
          description: [
            'Eat a balanced diet.',
            'Move your body in ways that feel good to you.',
            'Try to get uninterrupted sleep on a consistent schedule (8-10 hours for teens, 7-9 hours for adults).',
            'Go outside.',
            'Take breaks.',
          ],
        },
        {
          image: {
            file: 'mindthe5-2.svg',
            alt: 'Unbalanced scale',
          },
          title: '2. <b class="text-primary">YOU</b> first',
          description: [
            'Take care of yourself before helping others.',
            'Exercise kindness and compassion to yourself.',
            'Create structure and personal boundaries.',
            'Set aside time to do something you enjoy and to take breaks.',
          ],
        },
        {
          image: {
            file: 'mindthe5-3.svg',
            alt: 'Hands holding a heart',
          },
          title: '3. Recognize and accept <b class="text-accent">FEELINGS</b>',
          description: [
            'Take a moment to name what you feel and sit with it for a couple minutes.',
            'Accept how you feel and that you may not have control over how you feel.',
            'Turn off your screen while you do this exercise.',
          ],
        },
        {
          image: {
            file: 'mindthe5-4.svg',
            alt: 'Group of people',
          },
          title: '4. <b class="text-primary">CONNECT</b> with others',
          description: [
            'We need each other to survive and thrive.',
            'Talk with someone. Share how you’re honestly feeling.',
            'Check in on a friend. Listen. Look out for each other.',
          ],
        },
        {
          image: {
            file: 'mindthe5-5.svg',
            alt: 'Two hands reaching out to each other',
          },
          title: '5. Ask for <b class="text-accent">HELP</b>',
          description: [
            'Asking for help is brave and responsible. We all need help from each other.',
            'Click the button below to talk with someone. You will choose from a list of resources that are available 24/7.',
            'Your experiences are real and important. Each of us are uniquely affected by our experiences.',
            'It’s always better to ask for help sooner rather than later.',
          ],
          buttons: [
            {
              to: '/',
              style: 'primary',
              text: 'Get help',
            },
          ],
        },
      ],
    }
  },
  head: {
    title: 'Mind the 5 | Value Our Minds',
    meta: [
      {
        name: 'description',
        content:
          '5 simple steps to support mental health. Take the pledge to #mindthe5',
      },
    ],
  },
}
</script>
