type Item = {
  name: string;
  items: {
    name: string;
    slug: string;
    description?: string;
    isDisabled?: boolean;
    isApiRoute: boolean;
  }[];
};

export const items: Item[] = [
  {
    name: 'Pöntöt',
    items: [
      {
        name: 'Ilmoita pesintä',
        slug: 'new-record',
        description: 'Kirjaa pesintään viittaava havainto pöntöltäsi',
        isApiRoute: false,
      },
      {
        name: 'Hallitse pönttöjä',
        slug: 'birdhouses',
        description: 'Kirjaa uusi pönttö ripustetuksi',
        isApiRoute: false,
      },
    ],
  },
  {
    name: 'Havainnot',
    items: [
      {
        name: 'Pesinnät',
        slug: 'records',
        description: 'Pesinnät',
        isApiRoute: false,
      },
    ],
  },
  {
    name: 'Käyttäjätiedot',
    items: [
      {
        name: 'Kirjaudu siään',
        slug: 'api/auth/login',
        description: 'Kirjaudu sisään',
        isApiRoute: true,
      },
      {
        name: 'Kirjaudu ulos',
        slug: 'api/auth/logout',
        description: 'Kirjaudu ulos',
        isApiRoute: true,
      },
      {
        name: 'Tietoni',
        slug: 'me',
        description: 'Käyttäjätietoni',
        isApiRoute: false,
      },
    ],
  },
];
