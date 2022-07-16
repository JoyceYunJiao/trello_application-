package group25.group25.list.controller;

import group25.group25.list.model.List;
import group25.group25.list.service.ListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ListController {
    @Autowired
    ListService listService;

    @GetMapping(path = "/getLists/{id}", produces = "application/json")
    public Set<List> getLists(@PathVariable("id") int id) {
        return listService.getListsByBoardId(id);
    }

    @PostMapping(path = "/addList", consumes = "application/json", produces = "application/json")
    public List addList(@RequestBody List list) {
        return listService.saveList(list);
    }



}
