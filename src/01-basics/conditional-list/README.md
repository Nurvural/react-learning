# Conditional Rendering, List Rendering ve Component Composition

## Conditional Rendering Nedir?

- React componentleri farklı koşullara göre **farklı UI** render edebilir.  
- En yaygın yöntem: ternary operator `condition ? trueUI : falseUI`

### Örnek

```tsx
const isLoggedIn = true;
<p>{isLoggedIn ? "Hoşgeldiniz!" : "Lütfen giriş yapın."}</p>
```

- Eğer `isLoggedIn` true ise “Hoşgeldiniz!” gösterilir.  
- False ise “Lütfen giriş yapın.” gösterilir.  

---

## List Rendering Nedir?

- Bir array’in elemanlarını **map** ile componentlere dönüştürmek.  
- Her eleman için **key** props verilmesi gerekir.

### Örnek

```tsx
const users = ["Nurvural", "React Dev"];
<ul>
  {users.map((user, index) => (
    <li key={index}>{user}</li>
  ))}
</ul>
```

---

## Component Composition Nedir?

- Küçük componentleri birleştirip daha büyük bir component oluşturma.  
- Kod **modüler ve tekrar kullanılabilir** olur.

### Örnek

```tsx
interface UserProps { name: string; }
const User = ({ name }: UserProps) => <li>{name}</li>;

const UserList = () => {
  const users = ["Nurvural", "React Dev"];
  return (
    <ul>
      {users.map((user, i) => (
        <User key={i} name={user} />
      ))}
    </ul>
  );
};
```

---

## Notlar

- Conditional Rendering → Ekranda duruma göre farklı içerik gösterme  
- List Rendering → Array’leri ekranda liste halinde gösterme  
- Component Composition → Küçük componentleri birleştirip modüler yapı oluşturma
