package pl.babazon.babazon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pl.babazon.babazon.entity.Item;
import pl.babazon.babazon.service.ItemService;

@RestController
@RequestMapping("/api/items")
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("/get")
    public List<Item> allItems() {
        return itemService.allItems();
    }

    // @PostMapping("/post")
    // public ResponseEntity<String> receiveData(@RequestBody Object payload) {
    // // Handle the data
    // return ResponseEntity.ok("Data received successfully");
    // }
}
