type Fruit = 'apple' | 'banna' | 'orange';

type NewType = {
  [F in Fruit]: {
    name: F;
    color?: string;
  };
};

const fruitData: NewType = {
  apple: {
    name: 'apple',
    color: 'red',
  },
  banna: {
    name: 'banna',
  },
  orange: {
    name: 'orange',
  },
};


