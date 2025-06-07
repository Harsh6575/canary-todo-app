import type { Todo } from "@/types"
import { Badge } from "./ui/badge"
import { EditTodo } from "./edit-todo"
import { DeleteTodo } from "./delete-todo"

type TodoCardProps = {
    todo: Todo
    getTodos: () => void;
}

export const TodoCard = ({ todo, getTodos }: TodoCardProps) => {
    return (
        <div className='flex items-center justify-between gap-4 border p-4 rounded-xl'>
            <div className='flex items-center gap-4'>
                <div>
                    {todo.id}
                </div>
                <div className="flex items-center gap-2">
                    {todo.title} <Badge variant={todo.completed ? 'default' : 'pending'}>
                        {todo.completed ? "Completed" : "Not Completed"}
                    </Badge>
                </div>
            </div>
            <div className="flex gap-2">
                <EditTodo todo={todo} onEdit={getTodos} />
                <DeleteTodo todo={todo} onDelete={getTodos} />
            </div>
        </div>
    )
}