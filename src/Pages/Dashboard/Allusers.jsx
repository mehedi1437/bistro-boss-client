import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";

const Allusers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });
  //   Handle MAke admin
  const handleMakeAdimn = async (user) => {
    const { data } = await axiosSecure.patch(`/users/admin/${user._id}`);
    console.log(data);
    if (data.modifiedCount > 0) {
        refetch()
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: `Now ${user.name} is an Admin `,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  //   handle delete user
  const handleDeleteUser =(user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-3xl ">All Users</h2>
        <h2 className="text-3xl">Total users : {users.length}</h2>
      </div>
      <div className="overflow-x-auto w-2/3 mx-auto my-8">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id} user={user}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user.role === "admin" ? (
                    <span className="text-xl text-orange-500">Admin</span>
                  ) : (
                    <button onClick={() => handleMakeAdimn(user)}>
                      <FaUsers className="text-orange-500 text-2xl"></FaUsers>
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={() => handleDeleteUser(user)}>
                    <FaTrashAlt className="text-red-500 text-2xl"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allusers;
