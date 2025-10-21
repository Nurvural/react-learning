## useState Nedir?

- useState, React’te state (durum) yönetmek için kullanılan en temel hook’tur.
- Bir bileşenin içindeki veriyi saklamak, güncellemek ve yeniden render edilmesini sağlamak için kullanılır.

```tsx
const [state, setState] = useState(initialValue);
```
- state: o anki değer
- setState: değeri güncelleyen fonksiyon
- initialValue: başlangıç değeri

```tsx
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Sayaç: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Artır</button>
      <button onClick={() => setCount(count - 1)}>Azalt</button>
    </div>
  );
};

export default Counter;
```
📘 Açıklama:

- useState(0) başlangıç değerini 0 yapar.

- setCount çağrıldığında bileşen yeniden render olur.

- React state değişikliğini fark edip sadece ilgili bileşeni yeniden çizer.

## Fonksiyonel Güncelleme

- Bazı durumlarda yeni state, eski state’e bağlı olur.
- Bu durumda setState’e bir callback fonksiyon vermek daha doğrudur:

```tsx
setCount((prevCount) => prevCount + 1);
```
Bu yöntem, özellikle asenkron güncellemelerde daha güvenlidir.

##  useState ile Nesne veya Dizi Yönetimi

- State sadece sayılar veya stringler değil, nesne veya dizi de olabilir.
```tsx
const [user, setUser] = useState({ name: "Nurvural", age: 26 });

const updateAge = () => {
  setUser((prev) => ({ ...prev, age: prev.age + 1 }));
};
```
📌 Burada ...prev kullanarak eski state’i koruyoruz. State immutable olduğu için doğrudan user.age++ gibi işlemler yapılmaz.

## Notlar

- useState, sadece component içinde kullanılabilir.

- React, setState fonksiyonunu çağırmadan component’i yeniden render etmez.

- State değişiklikleri toplu işlenir (batching).

- Aynı state’e art arda farklı değerler verilirse, React bunları optimize eder.