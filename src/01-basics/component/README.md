# React Components (Bileşenler)

## Component Nedir?

- React'te her şey component (bileşen) temellidir.
- Bir component, ekranın bir bölümünü temsil eden bağımsız ve yeniden kullanılabilir bir yapı taşına benzer.

## Function Component

- En yaygın kullanılan component türü Function Component’tir.
- Bir fonksiyon, JSX döndürüyorsa bir React component’idir.

```tsx
function Welcome(): JSX.Element {
  return <h1>Merhaba React!</h1>;
}
```

## Arrow Function Component
```tsx
const Welcome: React.FC = () => <h1>Merhaba, React!</h1>;
```

- React.FC tipi, children prop’unu otomatik sağlar.

## Component Özellikleri

- Reusable (tekrar kullanılabilir)

- Composition (bileşenleri birleştirme)

- State ve Lifecycle yönetimi (Hooks ile)

## Props Nedir?

- React componentlerine veri aktarmak için kullanılır.

- Propslar readonly’dir, child component içinde değiştirilemez.

- TypeScript ile tiplerini tanımlamak güvenli kod sağlar.

// Props tipi tanımı
```tsx
interface UserProps {
  name: string;
  age: number;
}
```

// Tek bir kullanıcı componenti
```tsx
const UserCard = ({ name, age }: UserProps) => (
  <div>
    <h2>{name}</h2>
    <p>Yaş: {age}</p>
  </div>
);
```
// Parent component: veriyi props ile gönderiyor
```tsx
const App = () => {
  const users = [
    { name: "Nurvural", age: 26 },
    { name: "React Dev", age: 30 },
  ];

  return (
    <div>
      {users.map((user, i) => (
        <UserCard key={i} name={user.name} age={user.age} />
      ))}
    </div>
  );
};
```

## Notlar

- Props componentleri reusable yapar.

- TypeScript ile props tipini tanımlamak, olası hataları önler.

- Child component props üzerinde değişiklik yapamaz, sadece görüntüleme yapar.

- Parent component veri sahibi olur, child component sadece render eder.