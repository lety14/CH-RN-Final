import * as SQLite from "expo-sqlite";
import { ILocation } from "../types/ICoords.type";
import IPlace from "../types/IPlace.type";

const db = SQLite.openDatabase("places.db");

export const init = () => {
  const promise = new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS places(id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL, address TEXT NOT NULL, coords TEXT NOT NULL);",
        [],
        () => resolve(),
        (_, err): boolean | any => reject(err)
      );
    });
  });
  return promise;
};

export const insertPlace = (title: string, image: string, address: string, coords: ILocation) => {
  const promise = new Promise<any>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO places(title, image, address, coords) VALUES(?,?,?,?);",
        [title, image, address, JSON.stringify(coords)],
        (_, result) => resolve(result),
        (_, err): boolean | any => reject(err)
      );
    });
  });
  return promise;
};

export const getPlaces = () => {
  const promise = new Promise<IPlace[]>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM places;",
        [],
        (_, result) => resolve(result.rows?._array),
        (_, err): boolean | any => reject(err)
      );
    });
  });
  return promise;
};
