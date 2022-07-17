package group25.group25;

import group25.group25.task.model.Task;
import group25.group25.task.repository.TaskRepository;
import group25.group25.task.serviceimplementation.TaskServiceImpl;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;


@SpringBootTest
class TaskServiceImplTest {

    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    TaskServiceImpl taskService;

    Task task1 = new Task("Clean room", "You gotta clean your room dude", null, 4, "2022-07-16 18:53:15");
    Task task2 = new Task("Dirty Room", "Make it dirty again", null, 2, "2022-07-16 18:54:24");
    Task task3 = new Task("And then do it again", "Yep", null, 2, "2022-07-16 18:54:38");
    Task task4 = new Task("doneTest", "test123123123123", null, 3, "2022-07-16 19:57:22");
    Task task5 = new Task("todo111", "todotest111", null, 1, "2022-07-16 21:08:24");

    List<Task> list1 = new ArrayList<>();
    List<Task> list2 = new ArrayList<>();



    @Test
    void getTaskByListId() {

        list1.add(task2);
        list1.add(task3);

//        list2.add(task4);



//
        Assertions.assertTrue(taskService.getTaskByListId(2).equals(list1));
//        Assertions.assertEquals(taskService.getTaskByListId(3),list2);

    }

    @Test
    void getTaskByTitle() {

//        list1.add(task1);
//        list2.add(task4);
//        Assertions.assertEquals(taskService.getTaskByTitle("Clean room"), list1);
//        Assertions.assertEquals(taskService.getTaskByTitle("todo111"),list2);

    }

    @Test
    void getTaskByUser() {

//        list1.add(task1);
//        list1.add(task2);
//        list1.add(task3);
//        list1.add(task4);
//        Assertions.assertEquals(taskService.getTaskByUser(null), list1);

    }

    @Test
    void getTaskByDueDate() {

//        list1.add(task1);
//        list2.add(task2);
//        Assertions.assertEquals(taskService.getTaskByDueDate("2022-07-16 18:53:15"), list1);
//        Assertions.assertEquals(taskService.getTaskByDueDate("2022-07-16 18:54:24"), list2);

    }

    @Test
    void saveTask() {

//        Task task5 = new Task("todo222", "todotest222", null, 1, "2022-07-26 21:08:24");
//        Assertions.assertEquals(taskService.saveTask(task5), task5);
//        list1.add(task4);
//        list1.add(task5);
//        Assertions.assertEquals(taskService.getTaskByListId(1), list1);

    }

//    @Test
//    void changeStatus() {
//
//        taskRepository.updateStatusByTitle(4,"You gotta clean your room dude");
//        System.out.println(taskService.getTaskByTitle("You gotta clean your room dude").get(0).getListId());
//
////        taskService.changeStatus(task1, 4);
////        Assertions.assertEquals(task1.getListId(), 4);
//
//
//    }

    @Test
    void assignUser() {

//        taskService.assignUser(task1,"aaa");
//        Assertions.assertEquals(task1.getUser(), "aaa");


    }

    @Test
    void updateDueDate() {

//        taskService.updateDueDate(task1,"2022-07-26 21:08:24");
//        Assertions.assertEquals(task1.getDate(), "2022-07-26 21:08:24");



    }
}