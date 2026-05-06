import { getUsers, addUser } from './actions';

export const dynamic = 'force-dynamic';
export default async function Home() {
  const users = await getUsers();

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">User Directory</h1>

      {/* Add User Form */}
      <form action={addUser} className="mb-8 p-4 border rounded-lg bg-gray-50">
        <div className="flex gap-4">
          <input 
            name="name" 
            placeholder="Name" 
            required 
            className="border p-2 rounded flex-1"
          />
          <input 
            name="email" 
            type="email" 
            placeholder="Email" 
            required 
            className="border p-2 rounded flex-1"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add User
          </button>
        </div>
      </form>

      {/* Users List */}
      <div className="space-y-2">
        {users.map((user) => (
          <div key={user.id} className="p-3 border-b flex justify-between">
            <span className="font-medium">{user.name}</span>
            <span className="text-gray-500">{user.email}</span>
          </div>
        ))}
        {users.length === 0 && <p className="text-gray-400">No users found.</p>}
      </div>
    </main>
  );
}
