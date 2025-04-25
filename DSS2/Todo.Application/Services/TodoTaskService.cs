using Todo.Domain.Models;
using Todo.Domain.Repositories;
using Todo.Domain.Services;

namespace Todo.Application.Services
{
    public class TodoTaskService : ITodoTaskService
    {
        private readonly ITodoListRepository _todoListRepository;
        private readonly IUserRepository     _userRepository;
        private readonly ITodoTaskRepository _repository;

        public TodoTaskService(
            ITodoListRepository todoListRepository,
            IUserRepository     userRepository,
            ITodoTaskRepository repository)
        {
            _todoListRepository = todoListRepository;
            _userRepository     = userRepository;
            _repository         = repository;
        }

        public void Create(int? ownerId,
                           int? holderId,
                           string description,
                           DateTime dueDate)
        {
            var user = _userRepository.GetById(ownerId.GetValueOrDefault())
                 ?? throw new InvalidProgramException("User does not exist");

            var list = _todoListRepository.GetById(holderId.GetValueOrDefault())
                 ?? throw new InvalidProgramException("TodoList does not exist");

            _repository.Create(new TodoTask
            {
                Description = description,
                DueDate     = dueDate,
                Holder      = list,
                IsCompleted = false,
                TodoId      = holderId
            });

            list.NumberOfTasks++;
            _todoListRepository.Update(list);
        }

        public void Delete(int id)
        {
            var task = _repository.GetById(id)
                ?? throw new InvalidProgramException("TodoTask does not exist");

            _repository.Delete(task);

            if (task.TodoId is not null)
            {
                var list = _todoListRepository.GetById(task.TodoId.Value);
                if (list is not null && list.NumberOfTasks > 0)
                {
                    list.NumberOfTasks--;
                    _todoListRepository.Update(list);
                }
            }
        }

        public TodoTask? GetTodoList(int id)   => _repository.GetById(id);

        public IEnumerable<TodoTask> GetTodoLists() => _repository.GetAll();

        public void Update(int id,
                           string description,
                           bool isCompleted,
                           DateTime dueDate)
        {
            var task = _repository.GetById(id)
                ?? throw new InvalidProgramException("TodoTask does not exist");

            task.Description = description;
            task.IsCompleted = isCompleted;
            task.DueDate     = dueDate;

            _repository.Update(task);
        }
    }
}
