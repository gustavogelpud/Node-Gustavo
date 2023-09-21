import mongoose from 'mongoose';

export const startConecction = async () => {
  const url = encodeURI('mongodb+srv://gustavogelpud:rtc7a4ZQEn1NmlSV@cluster0.oseuuox.mongodb.net/?retryWrites=true&w=majority');
  await mongoose.connect(url);
};

export default startConecction;
