import { AddTodoForm } from "@/components/add-todo-form";
import { getTodo } from "@/data/get-todo";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import DelPostForm from "@/components/delPostForm";
import { checkServerSession } from "@/actions/check-server-session";


const todoPage = async () => {
  
  const user = await currentUser();
  const contents = await getTodo(user?.id!);
  const postUser = await getUserById(user?.id!);
  const check = await checkServerSession()


  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div>

      </div>
      <div className=" flex flex-col items-center justify-center gap-5">
        {contents.filter(item=> item.userId === postUser?.id).map((item)=>(
                    <li key={item.id} className="flex gap-2 items-center justify-between w-[600px] border">
                    {item.content}
                    <DelPostForm itemId={item.id}/>
                  </li>
        ))}
      </div>
      {postUser?.id && <AddTodoForm userId={postUser.id} />}
    </div>
  );
};

export default todoPage;
