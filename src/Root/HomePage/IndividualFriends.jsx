
import { AiOutlineDelete } from 'react-icons/ai';
import { BsChatSquareText } from 'react-icons/bs';
import { CiPhone } from 'react-icons/ci';
import { FaRegBell } from 'react-icons/fa';
import { LuCalendarMinus2 } from 'react-icons/lu';
import { PiVideoCamera } from 'react-icons/pi';
import { useLoaderData, useParams, useOutletContext } from 'react-router';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const IndividualFriends = () => {
  const { id } = useParams()
  const userdata = useLoaderData()
  const user = userdata.find((i) => i.id === Number(id))
  const { handleAddAction, selectedActions } = useOutletContext();
  const onButtonClick = (methodType) => {
    const newLog = {
      id: Date.now(),
      method: methodType,
      contactName: user.name,
      date: new Date().toLocaleString('en-US', {
        month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
      })
    };
    handleAddAction(newLog);
  };
  const notify = (message) => toast.success(`${message} successful! 🎉`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });

  return (
    <>
      <div className='container mx-auto p-6'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className='col-span-1 flex flex-col gap-4'>

            <div className="card bg-white shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center rounded-lg">
              <div className="avatar mb-4">
                <div className="w-24 rounded-full ring ring-offset-2 ring-gray-100">
                  <img src={user.picture} alt={user.name} />
                </div>
              </div>

              <h2 className="font-bold text-xl text-gray-800">{user.name}</h2>
              <div className="badge badge-error text-white text-xs font-bold px-3 py-2 my-2 uppercase">Overdue</div>

              {/* Tags Row */}
              <div className="flex gap-2 mb-4">
                <div className="badge bg-green-100 text-green-700 border-none text-[10px] font-bold px-3 uppercase">Hobby</div>
                <div className="badge bg-green-100 text-green-700 border-none text-[10px] font-bold px-3 uppercase">Travel</div>
              </div>

              <p className="text-sm italic text-gray-500 mb-2 leading-relaxed">
                "{user.bio}"
              </p>
              <p className="text-xs text-blue-400 hover:underline cursor-pointer">{user.email}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button className="w-full bg-white py-3 border rounded-md border-gray-200 text-gray-700 font-medium flex items-center gap-3 justify-center transition-all hover:bg-gray-50">
                <FaRegBell className="text-lg" /> Snooze 2 weeks
              </button>
              <button className="w-full bg-white py-3 border rounded-md border-gray-200 text-gray-700 font-medium flex items-center gap-3 justify-center transition-all hover:bg-gray-50">
                <LuCalendarMinus2 className="text-lg" /> Archive
              </button>
              <button className="w-full bg-white py-3 border rounded-md border-gray-200 text-red-400 font-medium flex items-center gap-3 justify-center transition-all hover:bg-red-50">
                <AiOutlineDelete className="text-lg" /> Delete
              </button>
            </div>
          </div>

          {/* Right Column: Stats & Goals */}
          <div className="col-span-2 flex flex-col gap-6">

            {/* Top Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card bg-white shadow-sm border border-gray-100 p-6 text-center rounded-lg">
                <h2 className="text-3xl font-bold text-cyan-700">{user.days_since_contact}</h2>
                <p className="text-sm text-gray-500 font-medium mt-1">Days Since Contact</p>
              </div>
              <div className="card bg-white shadow-sm border border-gray-100 p-6 text-center rounded-lg">
                <h2 className="text-3xl font-bold text-cyan-700">{user.goal}</h2>
                <p className="text-sm text-gray-500 font-medium mt-1">Goal (Days)</p>
              </div>
              <div className="card bg-white shadow-sm border border-gray-100 p-6 text-center rounded-lg">
                <h2 className="text-2xl font-bold text-cyan-700">{user.next_due_date}</h2>
                <p className="text-sm text-gray-500 font-medium mt-1">Next Due</p>
              </div>
            </div>
            <div className="card bg-white shadow-sm border border-gray-100 p-6 flex flex-row justify-between items-center rounded-lg">
              <div>
                <h3 className="font-bold text-gray-800">Relationship Goal</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Connect every <span className="font-bold text-gray-700">{user.goal} days</span>
                </p>
              </div>
              <button className="px-4 py-1 border rounded text-sm font-medium hover:bg-gray-50">Edit</button>
            </div>

            <div className="card bg-white shadow-sm border border-gray-100 p-6 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-6">Quick Check-In</h3>
              <div className="grid grid-cols-3 gap-4">
                <button onClick={() => { onButtonClick('Call'); notify('Call'); }}
                  className="flex flex-col items-center justify-center gap-2 p-4 border rounded-md hover:bg-gray-50 h-28 transition-all duration-300 hover:border-[#244D3F] hover:-translate-y-1 hover:shadow-lg">
                  <CiPhone className="text-3xl" />
                  <span className="text-sm font-medium">Call</span>
                </button>

                <button onClick={() => { onButtonClick('Text'); notify('Text'); }}
                  className="flex flex-col items-center justify-center gap-2 p-4 border rounded-md hover:bg-gray-50 h-28 transition-all duration-300 hover:border-[#244D3F] hover:-translate-y-1 hover:shadow-lg">
                  <BsChatSquareText className="text-2xl" />
                  <span className="text-sm font-medium">Text</span>
                </button>

                <button onClick={() => { onButtonClick('Video'); notify('Video'); }}
                  className="flex flex-col items-center justify-center gap-2 p-4 border rounded-md hover:bg-gray-50 h-28 transition-all duration-300 hover:border-[#244D3F] hover:-translate-y-1 hover:shadow-lg">
                  <PiVideoCamera className="text-3xl" />
                  <span className="text-sm font-medium">Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default IndividualFriends;