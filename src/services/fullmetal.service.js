import firebase from "../firebase";
const db = firebase.collection("/fullmetal");

class FullmetalDataService {
  getAll() {
    return db;
  }

  create(fullmetal) {
    return db.add(fullmetal);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

const fullmetalDataServiceInstance= new FullmetalDataService();
export default fullmetalDataServiceInstance