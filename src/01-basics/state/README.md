# State Nedir?

- Component içinde **değişebilir veri** tutmak için kullanılır.  
- Props readonly iken, state component içinde değiştirilebilir.  
- State değiştiğinde component yeniden render edilir.
## useState Hook

```tsx
const [state, setState] = useState<Type>(initialValue); 
```
- state: mevcut değer
- setState: değeri değiştiren fonksiyon
- TypeScript ile tip güvenliği sağlanır

## Event Handling

- React eventleri camelCase yazılır: onClick, onChange, onSubmit

- Event handler fonksiyonları state’i değiştirmek için kullanılır

```tsx
const [count, setCount] = useState<number>(0);

// Event handler fonksiyonu
const handleIncrement = () => setCount(count + 1);

// JSX içinde button ile kullanımı
<button onClick={handleIncrement}>Arttır</button>
```
## Notlar

- State sadece component içinde değiştirilebilir.
- Parent component, child’a state’i props ile gönderebilir.
- Event handler fonksiyonları genellikle const ile tanımlanır ve arrow function kullanılır.
- State + Event Handling, React uygulamalarında dinamik ve interaktif UI oluşturmanın temelidir.