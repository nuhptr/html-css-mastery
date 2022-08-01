// TODO: 1. Memisahkan fungsi-fungsi yang umum biasa digunakan
const yourGenericAction = (params) => {
  actionA: () => {
    // do action A
  };
  actionB: () => {
    // do action B
  };
};

// TODO: 2. Membuat class seperti biasa
const yourClassName = (paramA, paramB) => {};

// TODO: 3. Menyimpan attribut yang dipunya ke suatu object, biasanya self atau state namanya
const yourClassName2 = (paramA, paramB) => {
  const self = {
    paramA,
    paramB,
  };

  // TODO: Menambahkan method
  const yourSpecificActions = (self) => {
    specificAction: {
      // Do action A
    }
  };

  return Object.assign(
    self,
    yourGenericAction(self),
    yourSpecificActions(self)
  );
};

// Example 2 :
const canSendMessage = (state) => ({
  aMessage: () => console.log("Send message: ", state.message),
});

const isValidPhone = (state) => ({
  isValid: () => console.log("Valid phone ", state.from),
});

const personalEnterprise = (from, message, store) => {
  const state = {
    from,
    message,
    store,
  };

  const personalEnterpriseBehavior = (state) => ({
    createCatalog: () => console.log("Catalog has created : ", state.store),
  });

  return Object.assign(
    state,
    personalEnterpriseBehavior(state),
    canSendMessage(state),
    isValidPhone(state)
  );
};

const pe1 = personalEnterprise(
  "Pengirim@gmail.com",
  "Hei produk baru nih",
  "Dicoding store"
);

pe1.createCatalog(); // Catalog has created :  Dicoding store
pe1.aMessage(); // Send message : Hei produk baru nih
