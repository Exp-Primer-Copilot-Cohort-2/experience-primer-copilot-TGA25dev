function skillsMember() {
  return {
    name: 'skillsMember',
    type: 'skillsMember',
    fields: {
      name: {
        type: 'string',
        required: true,
      },
      skill: {
        type: 'string',
        required: true,
      },
    },
  };
}