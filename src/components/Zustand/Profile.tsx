import { useStore } from '../../store/Zustand'

export const Profile = () => {
  const fullName = useStore(s => s.user.fullName);
  const email = useStore(s => s.user.email);
  const updateUser = useStore(s => s.updateUser);

  return (
    <div>
      <input 
        type="text" 
        value={fullName}
        onChange={(ev) => updateUser({ fullName: ev.target.value })}
        placeholder="FullName"
      />
      <input 
        type="email" 
        value={email}
        onChange={(ev) => updateUser({ email: ev.target.value })}
        placeholder="Email"
      />
    </div>
  )
}
