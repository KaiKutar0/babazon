package pl.babazon.babazon.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pl.babazon.babazon.model.Item;


@RestController
@RequestMapping("/api/items")
public class ItemController {
     @GetMapping("/get")
    public String sayHello() {
        return "Hello from Spring Boot!";
    }
    
    @PostMapping("/post")
    public ResponseEntity<String> receiveData(@RequestBody Item payload) {
        // Handle the data
        return ResponseEntity.ok("Data received successfully");
    }
}
