
import { useLoaderData, useParams } from 'react-router';

const IndividualFriends = () => {
  const { id } = useParams()
  const userdata = useLoaderData()
  const user = userdata.find((i) => i.id === Number(id))
  console.log(user);


  return (
    <div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Profile Card */}
        <div className="card bg-base-100 shadow-md p-6 items-center text-center">
          <div className="avatar mb-3">
            <div className="w-20 rounded-full">
              <img src={user.picture} />
            </div>
          </div>

          <h2 className="font-semibold text-lg">{user.name}</h2>

          <div className="badge badge-error badge-sm my-2">Overdue</div>

          <div className="badge badge-outline badge-sm mb-2">FAMILY</div>

          <p className="text-sm italic text-gray-400 mb-2">
            "{user.bio}"
          </p>

          <p className="text-xs text-gray-400">Preferred: email</p>
        </div>


        {/* Right Section */}
        <div className="lg:col-span-2 grid gap-4">

          {/* Top Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="card bg-base-100 shadow-sm p-4 text-center">
              <h2 className="text-2xl font-semibold">{user.days_since_contact}</h2>
              <p className="text-sm text-gray-400">Days Since Contact</p>
            </div>

            <div className="card bg-base-100 shadow-sm p-4 text-center">
              <h2 className="text-2xl font-semibold">{user.goal}</h2>
              <p className="text-sm text-gray-400">Goal (Days)</p>
            </div>

            <div className="card bg-base-100 shadow-sm p-4 text-center">
              <h2 className="text-lg font-semibold">{user.next_due_date}</h2>
              <p className="text-sm text-gray-400">Next Due</p>
            </div>

          </div>


          {/* Relationship Goal */}
          <div className="card bg-base-100 shadow-sm p-5 flex justify-between items-center">
            <div>
              <h3 className="font-medium">Relationship Goal</h3>
              <p className="text-sm text-gray-400">
                Connect every <span className="font-semibold text-base-content">{user.goal} days</span>
              </p>
            </div>

            <button className="btn btn-sm btn-outline">Edit</button>
          </div>


          {/* Quick Actions */}
          <div className="card bg-base-100 shadow-sm p-5">
            <h3 className="font-medium mb-4">Quick Check-In</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <button className="btn btn-outline flex flex-col gap-1 h-20">
                📞
                <span>Call</span>
              </button>

              <button className="btn btn-outline flex flex-col gap-1 h-20">
                💬
                <span>Text</span>
              </button>

              <button className="btn btn-outline flex flex-col gap-1 h-20">
                🎥
                <span>Video</span>
              </button>

            </div>
          </div>


          {/* Bottom Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

            <button className="btn btn-outline">Snooze 2 Weeks</button>

            <button className="btn btn-outline">Archive</button>

            <button className="btn btn-error btn-outline">Delete</button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default IndividualFriends;